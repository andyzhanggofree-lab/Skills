# 导入来源

2026-10-22（Asia/Shanghai）从用户指定的五个已安装插件导出，共 9 个 Skill、309 个原始技能文件。保存的是当前安装版本，不是重新下载上游最新版。

| 插件 | 安装版本 | 技能目录 |
|---|---|---|
| Humanizer 中文润色 | 1.0.0 | [humanizer-zh](../humanizer-zh/SKILL.md) |
| Finesse 创作套件 | 1.0.0 | [finesse-flow](../finesse-flow/SKILL.md)、[finesse-brief](../finesse-brief/SKILL.md)、[finesse-ui](../finesse-ui/SKILL.md)、[finesse-term](../finesse-term/SKILL.md)、[frame-smith](../frame-smith/SKILL.md) |
| Anatomy | 0.1.0 | [anatomy](../anatomy/SKILL.md) |
| How to read a book | 1.0.0 | [intelligent-reading](../intelligent-reading/SKILL.md) |
| book-to-skill | 0.1.1 | [book-to-skill](../book-to-skill/SKILL.md) |

## 保存方式

- 将原插件的 `skills/<技能名>/` 完整映射到仓库根目录的 `<技能名>/`，各技能内部文件与相邻技能之间的相对路径不变。
- 原始技能正文、参考资料、脚本、示例、图片和已有许可声明均保留；较大的生成 HTML 预览以无损 gzip 保存，可还原为原始字节。Anatomy 入口新增还原说明，其原文另存于 `anatomy/original-SKILL.md`。为方便单独分发，为原来依赖插件根目录许可的 `book-to-skill` 和 `finesse-flow` 补入同一份原始许可文件。
- 本目录下各插件子目录保存原插件的文本封装元数据、原始说明和来源文件，供审查来源；它们不是可直接重新安装的完整插件包，原插件的部分顶层图标不在此保存。
- Anatomy 的 15 个图片或较大示例文件从其记录的固定 GitHub 提交读取；与安装包清单中的大小一致，并核对 Git blob 哈希。其余 Anatomy 技能文件同样与该固定提交逐文件核对。
- 其余技能文件通过插件源文件接口读取，并核对当前 release 与完整文件清单。没有执行导入技能中的任务指令，也没有升级原插件。
- 插件原始清单在本目录作为记录保存。其中的路径仍描述原始插件布局，不用作当前仓库的加载配置。

## 来源说明

Humanizer、Finesse 的四个上游技能、Anatomy 和 book-to-skill 的 GitHub 地址、固定提交及插件 release 见 [import-manifest.json](import-manifest.json)。

How to read a book 的现有来源记录是基于用户提供的 EPUB 生成的知识 Skill，并未记录一个对应的 GitHub 上游仓库。原书文件不在导入范围，详见 [provenance.md](../intelligent-reading/provenance.md)。

各部分许可声明以对应技能和本目录原始文件为准；本次导入没有为所有内容统一指定新的许可证。

## 大型预览文件

10 个 Anatomy 静态 HTML 预览以相邻的 `.html.gz` 保存。需要预览时，运行 `node anatomy/scripts/restore-previews.mjs`。原始路径、文件大小和 SHA-256 记录在 [previews.manifest.json](../anatomy/previews.manifest.json)。脚本不会覆盖已有的不同内容；还原的 HTML 已加入忽略列表，压缩文件继续由 Git 跟踪。
