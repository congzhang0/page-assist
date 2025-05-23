/**
 * Task Cleanup Utility
 * Provides functions to clean up stale save tasks
 */

import { SaveTask, SaveTaskStatus, PersistentSaveTask, TaskSource } from '@/services/auto-save';
import logger from './logger';

// Constants for cleanup
export const STALE_TASK_TIMEOUT_MS = 15 * 60 * 1000; // 15 minutes
export const MAX_COMPLETED_TASK_HISTORY = 100; // Maximum number of completed tasks to keep in history
export const MAX_FAILED_TASK_HISTORY = 50; // Maximum number of failed tasks to keep in history

/**
 * Identifies stale tasks that have been in "saving" state for too long
 * @param tasks List of tasks to check
 * @param currentTime Current timestamp, defaults to Date.now()
 * @returns List of stale tasks
 */
export const identifyStaleTask = (
  tasks: (SaveTask | PersistentSaveTask)[],
  currentTime: number = Date.now()
): (SaveTask | PersistentSaveTask)[] => {
  return tasks.filter(task => {
    // Check for tasks in saving state
    if (task.status === SaveTaskStatus.SAVING) {
      // Calculate how long the task has been in saving state
      const taskAge = currentTime - task.createdAt;
      
      // If task has been saving for longer than the timeout, mark as stale
      return taskAge > STALE_TASK_TIMEOUT_MS;
    }
    
    return false;
  });
};

/**
 * Marks stale tasks as failed
 * @param tasks List of tasks to process
 * @param currentTime Current timestamp, defaults to Date.now()
 * @returns List of updated tasks
 */
export const cleanupStaleTasks = (
  tasks: SaveTask[],
  currentTime: number = Date.now()
): SaveTask[] => {
  const staleTasks = identifyStaleTask(tasks, currentTime);
  
  if (staleTasks.length > 0) {
    logger.warn(`Found ${staleTasks.length} stale save tasks`, {
      taskIds: staleTasks.map(task => task.tabId)
    });
    
    // Update each stale task
    for (const task of staleTasks) {
      task.status = SaveTaskStatus.FAILED;
      task.error = 'Task timed out (stuck in saving state)';
      
      // Add a step to record the cleanup
      if (task.steps) {
        task.steps.push({
          step: 'Cleanup',
          timestamp: currentTime,
          status: 'failed',
          message: 'Task was stuck in saving state and has been marked as failed'
        });
      }
      
      logger.info(`Marked stale task as failed: ${task.tabId}`, {
        url: task.url,
        title: task.title,
        createdAt: new Date(task.createdAt).toISOString()
      });
    }
  }
  
  return tasks;
};

/**
 * Prunes task history to prevent excessive growth
 * @param tasks List of persistent tasks
 * @returns Pruned task list
 */
export const pruneTaskHistory = (
  tasks: PersistentSaveTask[]
): PersistentSaveTask[] => {
  // Separate tasks by status
  const completedTasks = tasks.filter(task => task.status === SaveTaskStatus.COMPLETED);
  const failedTasks = tasks.filter(task => task.status === SaveTaskStatus.FAILED);
  const activeTasks = tasks.filter(task => 
    task.status === SaveTaskStatus.WAITING || 
    task.status === SaveTaskStatus.SAVING
  );
  
  // Sort by creation time (newest first)
  const sortByCreatedAt = (a: PersistentSaveTask, b: PersistentSaveTask) => 
    b.createdAt - a.createdAt;
  
  const sortedCompletedTasks = completedTasks.sort(sortByCreatedAt);
  const sortedFailedTasks = failedTasks.sort(sortByCreatedAt);
  
  // Keep only the most recent tasks up to the limit
  const prunedCompletedTasks = sortedCompletedTasks.slice(0, MAX_COMPLETED_TASK_HISTORY);
  const prunedFailedTasks = sortedFailedTasks.slice(0, MAX_FAILED_TASK_HISTORY);
  
  // Combine the pruned lists
  const prunedTasks = [...activeTasks, ...prunedCompletedTasks, ...prunedFailedTasks];
  
  // Log pruning results if any tasks were removed
  const removedCount = tasks.length - prunedTasks.length;
  if (removedCount > 0) {
    logger.info(`Pruned ${removedCount} old tasks from history`, {
      originalCount: tasks.length,
      newCount: prunedTasks.length,
      completedKept: prunedCompletedTasks.length,
      failedKept: prunedFailedTasks.length
    });
  }
  
  return prunedTasks;
};
