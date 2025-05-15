/**
 * LLM服务
 * 提供使用LLM模型进行内容分析的功能
 */

import { ChatOllama } from "@/models/ChatOllama";
import { CustomChatOpenAI } from "@/models/CustomChatOpenAI";
import { getOllamaURL, getSelectedModel } from "@/services/ollama";
import { cleanUrl } from "@/libs/clean-url";
import logger from "@/utils/logger";
import { getOpenAIConfigById } from "@/db/openai";
import { getModelInfo, isCustomModel, isOllamaModel } from "@/db/models";

/**
 * 摘要生成结果
 */
export interface SummaryResult {
  summary: string;
  keywords: string[];
  rating: number;
}

/**
 * 获取LLM模型实例
 * @returns LLM模型实例
 */
export const getLLMModel = async () => {
  try {
    // 获取当前选择的模型
    const selectedModel = await getSelectedModel();
    
    if (!selectedModel) {
      throw new Error("未选择模型");
    }
    
    // 检查是否是自定义模型
    const isCustom = isCustomModel(selectedModel);
    
    if (isCustom) {
      // 处理自定义模型
      const modelInfo = await getModelInfo(selectedModel);
      const providerInfo = await getOpenAIConfigById(modelInfo.provider_id);
      
      if (isOllamaModel(selectedModel)) {
        // Ollama模型
        const ollamaUrl = await getOllamaURL();
        return new ChatOllama({
          model: modelInfo.model_id,
          baseUrl: cleanUrl(ollamaUrl),
          temperature: 0.3, // 使用较低的温度以获得更确定性的结果
        });
      } else {
        // OpenAI模型
        return new CustomChatOpenAI({
          modelName: modelInfo.model_id,
          temperature: 0.3,
          openAIApiKey: providerInfo.apiKey,
          configuration: {
            baseURL: providerInfo.baseUrl,
            apiKey: providerInfo.apiKey,
            baseOptions: {
              headers: providerInfo.headers?.reduce((acc, header) => {
                acc[header.key] = header.value;
                return acc;
              }, {} as Record<string, string>),
            },
          },
        });
      }
    } else {
      // 默认使用Ollama模型
      const ollamaUrl = await getOllamaURL();
      return new ChatOllama({
        model: selectedModel,
        baseUrl: cleanUrl(ollamaUrl),
        temperature: 0.3,
      });
    }
  } catch (error) {
    logger.error("获取LLM模型实例失败", error);
    throw new Error(`获取LLM模型实例失败: ${error instanceof Error ? error.message : String(error)}`);
  }
};

/**
 * 生成页面内容摘要
 * @param content 页面内容
 * @param title 页面标题
 * @param url 页面URL
 * @returns 摘要结果
 */
export const generateSummary = async (
  content: string,
  title: string,
  url: string
): Promise<SummaryResult> => {
  logger.info('开始生成页面摘要', { title, url, contentLength: content?.length });
  
  try {
    // 获取LLM模型实例
    const model = await getLLMModel();
    
    // 准备提示词
    const prompt = `
你是一个专业的内容分析助手。请分析以下网页内容，并提供以下信息：

1. 简洁摘要（不超过150字）
2. 5-8个关键词（以逗号分隔）
3. 内容质量评分（1-5星，其中5星表示质量最高）

网页标题：${title}
网页URL：${url}

网页内容：
${content.length > 8000 ? content.substring(0, 8000) + "..." : content}

请以JSON格式返回结果，格式如下：
{
  "summary": "内容摘要...",
  "keywords": ["关键词1", "关键词2", "关键词3", ...],
  "rating": 评分数字(1-5)
}

只返回JSON格式的结果，不要有其他内容。
`;

    // 调用模型
    logger.debug('调用LLM模型生成摘要', { modelName: model._llmType() });
    
    // 创建消息 - 确保消息格式正确
    // 使用BaseMessage格式创建消息，避免't is not iterable'错误
    const { HumanMessage } = await import("@langchain/core/messages");
    const messages = [
      new HumanMessage({
        content: prompt,
      }),
    ];
    
    // 获取响应 - 使用正确的消息格式调用模型
    // 修复't is not iterable'错误，确保消息格式符合模型要求
    const response = await model.invoke(messages);
    logger.debug('LLM模型返回响应', { responseLength: response.content?.length });
    
    // 解析JSON响应
    try {
      // 提取JSON部分
      const content = response.content as string;
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      const jsonStr = jsonMatch ? jsonMatch[0] : content;
      
      const result = JSON.parse(jsonStr) as SummaryResult;
      
      // 验证结果格式
      if (!result.summary || !Array.isArray(result.keywords) || typeof result.rating !== 'number') {
        throw new Error("LLM返回的结果格式不正确");
      }
      
      // 确保评分在1-5之间
      result.rating = Math.max(1, Math.min(5, Math.round(result.rating)));
      
      logger.info('成功生成页面摘要', { 
        summaryLength: result.summary.length,
        keywordsCount: result.keywords.length,
        rating: result.rating
      });
      
      return result;
    } catch (parseError) {
      logger.error('解析LLM响应失败', parseError);
      // 返回默认结果
      return {
        summary: "无法生成摘要。",
        keywords: [],
        rating: 3
      };
    }
  } catch (error) {
    logger.error('生成页面摘要失败', error);
    // 返回默认结果
    return {
      summary: "无法生成摘要。",
      keywords: [],
      rating: 3
    };
  }
};
