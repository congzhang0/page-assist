import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Input, List, Modal, Pagination, Space, Tag, Tooltip, Rate, message } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined, SearchOutlined, TagOutlined, ReloadOutlined } from "@ant-design/icons";
import { getAllSavedPages, getAllTags, deleteSavedPage, updateSavedPage } from "@/services/saved-pages";
import type { SavedPage } from "@/db/saved-pages";

const PAGE_SIZE = 5; // 侧边栏显示更少的项目

export const SidepanelSavedPages: React.FC = () => {
  const { t } = useTranslation();

  const [pages, setPages] = useState<SavedPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [currentEditPage, setCurrentEditPage] = useState<SavedPage | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editTags, setEditTags] = useState<string[]>([]);
  const [editNotes, setEditNotes] = useState("");
  const [editRating, setEditRating] = useState(0);
  const [newTag, setNewTag] = useState("");

  // 加载保存的页面
  const loadPages = async () => {
    try {
      setLoading(true);
      const allPages = await getAllSavedPages({
        searchText: searchText || undefined,
        tags: selectedTags.length > 0 ? selectedTags : undefined
      });

      setTotal(allPages.length);

      // 分页处理
      const startIndex = (currentPage - 1) * PAGE_SIZE;
      const endIndex = startIndex + PAGE_SIZE;
      setPages(allPages.slice(startIndex, endIndex));

      setLoading(false);
    } catch (error) {
      console.error("加载页面失败:", error);
      message.error("加载页面失败");
      setLoading(false);
    }
  };

  // 加载所有标签
  const loadTags = async () => {
    try {
      const tags = await getAllTags();
      setAllTags(tags);
    } catch (error) {
      console.error("加载标签失败:", error);
    }
  };

  // 初始加载
  useEffect(() => {
    loadPages();
    loadTags();
  }, []);

  // 搜索或标签变化时重新加载
  useEffect(() => {
    loadPages();
  }, [searchText, selectedTags, currentPage]);

  // 处理搜索
  const handleSearch = (value: string) => {
    setSearchText(value);
    setCurrentPage(1); // 重置到第一页
  };

  // 处理标签选择
  const handleTagSelect = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    setCurrentPage(1); // 重置到第一页
  };

  // 处理页面删除
  const handleDelete = async (id: string) => {
    Modal.confirm({
      title: "确认删除",
      content: "确定要删除这个保存的页面吗？此操作不可恢复。",
      okText: "删除",
      okType: "danger",
      cancelText: "取消",
      onOk: async () => {
        try {
          await deleteSavedPage(id);
          message.success("页面已删除");
          loadPages();
        } catch (error) {
          console.error("删除页面失败:", error);
          message.error("删除页面失败");
        }
      }
    });
  };

  // 打开编辑模态框
  const handleEdit = (page: SavedPage) => {
    setCurrentEditPage(page);
    setEditTitle(page.title);
    setEditTags(page.tags);
    setEditNotes(page.notes || '');
    setEditRating(page.rating || 0);
    setEditModalVisible(true);
  };

  // 保存编辑
  const handleSaveEdit = async () => {
    if (!currentEditPage) return;

    try {
      await updateSavedPage(currentEditPage.id, {
        title: editTitle,
        tags: editTags,
        notes: editNotes,
        rating: editRating
      });

      message.success("页面已更新");
      setEditModalVisible(false);
      loadPages();
      loadTags(); // 重新加载标签，以防有新标签
    } catch (error) {
      console.error("更新页面失败:", error);
      message.error("更新页面失败");
    }
  };

  // 添加新标签
  const handleAddTag = () => {
    if (!newTag.trim()) return;

    if (!editTags.includes(newTag)) {
      setEditTags([...editTags, newTag]);
    }

    setNewTag("");
  };

  // 移除标签
  const handleRemoveTag = (tag: string) => {
    setEditTags(editTags.filter(t => t !== tag));
  };

  // 查看页面
  const handleView = (page: SavedPage) => {
    // 在新标签页中打开页面
    window.open(page.url, "_blank");
  };

  return (
    <div className="p-2">
      <div className="mb-3">
        <div className="flex items-center mb-2">
          <Input.Search
            placeholder="搜索标题或内容"
            allowClear
            enterButton={<SearchOutlined />}
            onSearch={handleSearch}
            className="flex-1"
            size="small"
          />
          <Tooltip title="刷新">
            <Button
              icon={<ReloadOutlined />}
              size="small"
              className="ml-1"
              onClick={() => loadPages()}
            />
          </Tooltip>
        </div>

        <div className="mt-2 max-h-20 overflow-y-auto">
          <span className="mr-2 text-xs">标签筛选:</span>
          {allTags.map(tag => (
            <Tag
              key={tag}
              color={selectedTags.includes(tag) ? "blue" : undefined}
              className="cursor-pointer mb-1 text-xs"
              onClick={() => handleTagSelect(tag)}
            >
              {tag}
            </Tag>
          ))}
        </div>
      </div>

      <List
        size="small"
        loading={loading}
        dataSource={pages}
        renderItem={page => (
          <List.Item
            key={page.id}
            className="border-b border-gray-200 dark:border-gray-700 py-2"
            actions={[
              <Tooltip title="查看原页面">
                <Button size="small" icon={<EyeOutlined />} onClick={() => handleView(page)} />
              </Tooltip>,
              <Tooltip title="编辑">
                <Button size="small" icon={<EditOutlined />} onClick={() => handleEdit(page)} />
              </Tooltip>,
              <Tooltip title="删除">
                <Button size="small" danger icon={<DeleteOutlined />} onClick={() => handleDelete(page.id)} />
              </Tooltip>
            ]}
          >
            <List.Item.Meta
              title={
                <div className="flex items-center">
                  <a
                    href={page.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium truncate max-w-[180px] inline-block"
                  >
                    {page.title}
                  </a>
                  {page.rating > 0 && (
                    <Rate
                      disabled
                      value={page.rating}
                      className="ml-1"
                      style={{ fontSize: '10px' }}
                    />
                  )}
                </div>
              }
              description={
                <div className="text-xs">
                  <div className="text-gray-500 mb-1 truncate max-w-[200px]">{page.url}</div>
                  {page.summary && (
                    <div className="text-gray-700 mb-1 line-clamp-2 text-xs">{page.summary}</div>
                  )}
                  <div className="mb-1 flex flex-wrap">
                    {page.tags.slice(0, 3).map(tag => (
                      <Tag key={tag} color="blue" className="mr-1 mb-1 text-xs">{tag}</Tag>
                    ))}
                    {page.tags.length > 3 && <Tag className="text-xs">+{page.tags.length - 3}</Tag>}
                  </div>
                  <div className="text-gray-400 text-xs">
                    保存于 {new Date(page.createdAt).toLocaleDateString()}
                  </div>
                </div>
              }
              avatar={page.favicon ? <img src={page.favicon} alt="favicon" className="w-4 h-4" /> : null}
            />
          </List.Item>
        )}
        pagination={false}
      />

      <div className="mt-3 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={PAGE_SIZE}
          total={total}
          onChange={setCurrentPage}
          size="small"
        />
      </div>

      {/* 编辑模态框 */}
      <Modal
        title="编辑页面信息"
        open={editModalVisible}
        onOk={handleSaveEdit}
        onCancel={() => setEditModalVisible(false)}
        okText="保存"
        cancelText="取消"
      >
        <div className="mb-3">
          <label className="block mb-1 text-sm">标题</label>
          <Input value={editTitle} onChange={e => setEditTitle(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="block mb-1 text-sm">评分</label>
          <Rate value={editRating} onChange={setEditRating} />
        </div>

        <div className="mb-3">
          <label className="block mb-1 text-sm">标签</label>
          <div className="mb-2">
            {editTags.map(tag => (
              <Tag
                key={tag}
                closable
                onClose={() => handleRemoveTag(tag)}
                className="mb-1"
              >
                {tag}
              </Tag>
            ))}
          </div>
          <Input.Group compact>
            <Input
              style={{ width: 'calc(100% - 60px)' }}
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onPressEnter={handleAddTag}
              placeholder="添加标签"
            />
            <Button icon={<TagOutlined />} onClick={handleAddTag} />
          </Input.Group>
        </div>

        <div className="mb-3">
          <label className="block mb-1 text-sm">备注</label>
          <Input.TextArea
            value={editNotes}
            onChange={e => setEditNotes(e.target.value)}
            rows={3}
          />
        </div>
      </Modal>
    </div>
  );
};
