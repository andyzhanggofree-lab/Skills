# How to read a book · 插件包

版本：1.0.0。包含一个中文知识 Skill：`intelligent-reading`。

## 上传与使用

将 `how-to-read-a-book-1.0.0.zip` 作为插件 ZIP 上传。压缩包只有一个顶层目录 `intelligent-reading/`，根清单为 `plugin.json`；Skill 位于 `skills/intelligent-reading/SKILL.md`。支持插件上传的宿主会根据这些文件加载插件。

使用示例：

- “用这个插件帮我检视这本书，判断后续阅读重点。”
- “分析这段文字的概念、主张、前提与结论。”
- “围绕这个问题比较两份材料，先检查词义是否一致。”

请同时提供要分析的材料。插件不包含原书全文，不自带文件解析、网络搜索或外部服务；文件访问取决于宿主工具。

## 内容

- [主 Skill](skills/intelligent-reading/SKILL.md)：工作流程、核心框架、章节与主题索引。
- `chapters/`：21章精简方法参考与两份附录的用途说明。
- [术语表](skills/intelligent-reading/glossary.md)、[方法表](skills/intelligent-reading/patterns.md)、[速查表](skills/intelligent-reading/cheatsheet.md)。
- [来源说明](skills/intelligent-reading/provenance.md)：版本依据、指纹、处理范围与限制。
- `assets/book.png`：原创默认书本图标。

## 来源与身份

书籍作者为莫提默·J·艾德勒与查尔斯·范多伦。书籍作者不是本插件的发布者；用户未提供发布者身份，清单省略作者及开发者姓名。

内容为综合转述，原始 EPUB 与正文提取结果未打包。源书作者观点保留归属，输出模板与自拟例子单独标注。

## 包状态

这是个人上传使用的插件包，不代表已上传、安装或公开发布。结构与引用校验结果见 [校验报告](VALIDATION.md)。若未来提交公开目录，还需提供实际发布者身份、网站、支持页、隐私政策与服务条款等公开上架信息；这些未知值未填入占位符。
