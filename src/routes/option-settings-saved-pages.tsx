import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, Input, List, Modal, Pagination, Space, Tag, Tooltip, Rate, message } from "antd";
import { DeleteOutlined, EditOutlined, ExportOutlined, EyeOutlined, ImportOutlined, SearchOutlined, TagOutlined, StarOutlined } from "@ant-design/icons";
import { getAllSavedPages, getAllTags, deleteSavedPage, updateSavedPage, exportSavedPages, importSavedPages } from "@/services/saved-pages";
import type { SavedPage } from "@/db/saved-pages";
import { useNavigate } from "react-router-dom";

const PAGE_SIZE = 10;

const OptionSettingsSavedPages: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    setEditNotes(page.notes);
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

  // 导出所有页面
  const handleExport = async () => {
    try {
      const data = await exportSavedPages();

      // 创建下载链接
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `page-assist-saved-pages-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      message.success("导出成功");
    } catch (error) {
      console.error("导出失败:", error);
      message.error("导出失败");
    }
  };

  // 导入页面
  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";

    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      try {
        const reader = new FileReader();

        reader.onload = async (event) => {
          try {
            const data = JSON.parse(event.target?.result as string) as SavedPage[];
            const count = await importSavedPages(data);

            message.success(`成功导入 ${count} 个页面`);
            loadPages();
            loadTags();
          } catch (error) {
            console.error("解析导入文件失败:", error);
            message.error("导入失败: 无效的文件格式");
          }
        };

        reader.readAsText(file);
      } catch (error) {
        console.error("导入失败:", error);
        message.error("导入失败");
      }
    };

    input.click();
  };

  // 查看页面
  const handleView = (page: SavedPage) => {
    // 在新标签页中打开页面
    window.open(page.url, "_blank");
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">已保存的页面</h1>

        <Space>
          <Button icon={<ExportOutlined />} onClick={handleExport}>
            导出
          </Button>
          <Button icon={<ImportOutlined />} onClick={handleImport}>
            导入
          </Button>
        </Space>
      </div>

      <div className="mb-4">
        <Input.Search
          placeholder="搜索标题或内容"
          allowClear
          enterButton={<SearchOutlined />}
          onSearch={handleSearch}
          className="mb-2"
        />

        <div className="mt-2">
          <span className="mr-2">标签筛选:</span>
          {allTags.map(tag => (
            <Tag
              key={tag}
              color={selectedTags.includes(tag) ? "blue" : undefined}
              className="cursor-pointer mb-1"
              onClick={() => handleTagSelect(tag)}
            >
              {tag}
            </Tag>
          ))}
        </div>
      </div>

      <List
        loading={loading}
        dataSource={pages}
        renderItem={page => (
          <List.Item
            key={page.id}
            actions={[
              <Tooltip title="查看原页面">
                <Button icon={<EyeOutlined />} onClick={() => handleView(page)} />
              </Tooltip>,
              <Tooltip title="编辑">
                <Button icon={<EditOutlined />} onClick={() => handleEdit(page)} />
              </Tooltip>,
              <Tooltip title="删除">
                <Button danger icon={<DeleteOutlined />} onClick={() => handleDelete(page.id)} />
              </Tooltip>
            ]}
          >
            <List.Item.Meta
              title={
                <div className="flex items-center">
                  <a href={page.url} target="_blank" rel="noopener noreferrer">{page.title}</a>
                  {page.rating > 0 && (
                    <Rate
                      disabled
                      value={page.rating}
                      className="ml-2"
                      style={{ fontSize: '14px' }}
                    />
                  )}
                </div>
              }
              description={
                <div>
                  <div className="text-gray-500 mb-1 truncate">{page.url}</div>
                  {page.summary && (
                    <div className="text-gray-700 mb-2 line-clamp-3">{page.summary}</div>
                  )}
                  <div className="mb-1">
                    {page.tags.map(tag => (
                      <Tag key={tag} color="blue" className="mr-1">{tag}</Tag>
                    ))}
                  </div>
                  {page.notes && <div className="text-gray-700">{page.notes}</div>}
                  <div className="text-gray-400 text-xs mt-1">
                    保存于 {new Date(page.createdAt).toLocaleString()}
                  </div>
                </div>
              }
              avatar={page.favicon ? <img src={page.favicon} alt="favicon" className="w-4 h-4" /> : null}
            />
          </List.Item>
        )}
        pagination={false}
      />

      <div className="mt-4 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={PAGE_SIZE}
          total={total}
          onChange={setCurrentPage}
          showSizeChanger={false}
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
        <div className="mb-4">
          <label className="block mb-1">标题</label>
          <Input value={editTitle} onChange={e => setEditTitle(e.target.value)} />
        </div>

        <div className="mb-4">
          <label className="block mb-1">评分</label>
          <Rate value={editRating} onChange={setEditRating} />
        </div>

        <div className="mb-4">
          <label className="block mb-1">标签</label>
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

        <div className="mb-4">
          <label className="block mb-1">备注</label>
          <Input.TextArea
            value={editNotes}
            onChange={e => setEditNotes(e.target.value)}
            rows={4}
          />
        </div>
      </Modal>
    </div>
  );
};

export default OptionSettingsSavedPages;
