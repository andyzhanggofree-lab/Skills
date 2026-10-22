# Anatomy

将技术原理转换成可交互的等距机械插图。原项目作者 Ryan，MIT 许可。

## 使用

选择 Anatomy 插件，然后描述要解释的机制、真实参数、交互方式和输出格式。例如：

> 用 Anatomy 解释令牌桶限流。容量 20，每秒补充 5 个令牌，每次请求消耗 1 个，空桶时拒绝。输出独立 HTML，浅色主题，中文界面。

插件提供 `anatomy` Skill，支持 SVG、HTML、React/Next.js 与可选 WebGL。3D 模式仍为 Beta。

## 环境

需要具有文件读写、命令执行能力的环境与 Node.js 20.10+。截图和浏览器检查需要 Chrome 或 Chromium。React 输出需要 React 18+。插件没有自带远程服务。

## 文件使用

技能的完整目录是 `skills/anatomy/`。先读取该目录中的 SKILL.md，按需查看 references/ 和 examples/。生成时将需要修改的示例和绘图库复制到当前工作目录，再运行构建，避免向已安装插件的缓存写入生成文件。

## 来源和更新

来源：https://github.com/wheresryan22/anatomy

精确源码版本见 UPSTREAM.json。上游文件原样保留。此插件版本号 0.1.0 是封装版本，不等同于上游版本。更新时保留插件身份，下载新源码，重新验证并发布新版本。
