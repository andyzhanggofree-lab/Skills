# Skills

个人 Skill 仓库。将这个仓库直接克隆到本地 Codex 的用户级技能目录 `~/.agents/skills/`，让 Git 同步目录与 Codex 加载目录使用同一个文件夹。

## 目录布局

仓库根目录对应 `~/.agents/skills/`。每个实际技能直接放在根目录下，不再额外嵌套一层 `skills/`。

仓库包含：

```text
Skills/
├── README.md
├── .gitignore
├── sources/                     # 已导入技能的版本、来源与许可记录
└── templates/
    └── skill-template/
        └── SKILL.md.template
```

添加技能后，例如：

```text
~/.agents/skills/                 # 本仓库的本地工作目录
├── .git/
├── README.md
├── templates/
│   └── skill-template/
│       └── SKILL.md.template
├── intelligent-reading/
│   └── SKILL.md
└── ontology-modeling/
    └── SKILL.md
```

已收录五个插件中的 9 个 Skill，见下方技能目录；完整脚本、参考资料、示例与图片随技能保存。模板使用 `SKILL.md.template` 文件名，避免被 Codex 当作可用的 Skill。

## 首次接入本地 Codex

以下命令适用于 macOS、Linux 或 WSL，且目标目录不存在或为空：

```sh
mkdir -p "$HOME/.agents"
git clone https://github.com/andyzhanggofree-lab/Skills.git "$HOME/.agents/skills"
```

如果 `~/.agents/skills/` 已有技能，应先检查并合并已有内容，再将这个目录接入本仓库；如果它已属于其他 Git 仓库或是软链接，还需先确认现有来源，不能直接覆盖或删除。

每台设备单独接入一次。克隆到这台设备的加载目录，不会自动配置其他设备或云端会话。

## 拉取 GitHub 上的更新

开始编辑前，在加载目录中执行：

```sh
cd "$HOME/.agents/skills"
git pull --ff-only origin main
```

拉取后的实际路径是 `~/.agents/skills/<技能名>/SKILL.md`。新增技能与已有技能都处于 Codex 的加载范围，不需要逐个建立链接或复制到另一个目录。

Codex 会自动检测技能变化；如果更新没有显示，可以重启 Codex。Git 拉取仍需执行，上述配置本身不会创建后台自动同步任务。

## 添加并上传一个 Skill

以下以 `my-skill` 为例，请换成实际技能名：

```sh
cd "$HOME/.agents/skills"
mkdir -p my-skill
cp templates/skill-template/SKILL.md.template my-skill/SKILL.md
```

编辑 `my-skill/SKILL.md`，替换名称、描述和正文中的占位内容。按需添加 `scripts/`、`references/` 和 `assets/`。

确认文件后，在同一目录提交并上传：

```sh
git status --short
git add -- my-skill/
git commit -m "Add or update my-skill"
git push origin main
```

其他设备再执行拉取命令，即可获取这次修改。推送需要这台设备已配置好你的 GitHub 写入认证。

## 编写约定

- 每个技能一个目录，必需文件为 `<技能名>/SKILL.md`；文件使用 UTF-8 编码。
- 目录名与 `SKILL.md` 的 `name` 一致，使用小写英文字母、数字和单个连字符；不使用空格、连续连字符或首尾连字符，名称不超过 64 个字符。
- `description` 说明用途和适用场景；正文写明输入、操作步骤、输出和所需工具。
- 资源路径相对当前技能目录书写，例如 `references/example.md`，避免设备专属的绝对路径。
- 平台专属工具与依赖需在对应技能中说明；共用文件结构不代表所有平台都能执行相同工具。
- 修改已有技能时，按相同流程提交它的目录；也可以将 `README.md` 等文档改动一并提交。

## 技能目录

| Skill | 用途 |
|---|---|
| [humanizer-zh](humanizer-zh/SKILL.md) | 中文润色，保留事实与作者声音 |
| [finesse-flow](finesse-flow/SKILL.md) | 协调 Finesse 的需求、界面、术语与视频制作 |
| [finesse-brief](finesse-brief/SKILL.md) | 明确工作台需求、页面结构与数据模型 |
| [finesse-ui](finesse-ui/SKILL.md) | 设计、制作和改进网页界面 |
| [finesse-term](finesse-term/SKILL.md) | 查询交互术语并对齐界面需求 |
| [frame-smith](frame-smith/SKILL.md) | 编排并制作 Remotion 视频 |
| [anatomy](anatomy/SKILL.md) | 制作交互式等距机械插图 |
| [intelligent-reading](intelligent-reading/SKILL.md) | 《如何阅读一本书》的阅读方法 |
| [book-to-skill](book-to-skill/SKILL.md) | 将书籍或文档转换为知识 Skill |

这些技能来自当前已安装插件的固定版本，来源与许可见 [导入记录](sources/README.md)。Anatomy 的大型静态预览使用无损 gzip 保存；需要时运行 `node anatomy/scripts/restore-previews.mjs`，可校验并还原到原路径。运行技能所需的 Python、Node.js、浏览器或 Remotion 工程需在实际使用的设备上准备；本仓库不包含这些运行环境。

## 适用范围

本布局面向支持本地技能目录发现的 Codex。项目级技能也可以放在对应项目的 `.agents/skills/`，但只对相应项目范围生效。

云端会话和已安装插件有各自的技能分发机制。本地目录配置不会自动修改它们；本次仓库初始化也尚未替任何设备完成首次接入。

加载规则参考 [OpenAI 官方说明](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills)。
