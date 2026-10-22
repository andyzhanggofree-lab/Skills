# 运行依赖

Python 3.9 或以上。先运行附带 scripts/extract.py --check，按实际输入选择依赖。

Markdown/TXT：Python 标准库即可。
普通 PDF：pdftotext、pypdf、pdfminer.six 任一可用即可。
EPUB：标准库解析可用；ebooklib 和 beautifulsoup4 可改善结构提取。
技术 PDF 的 Docling、pdf-inspector、OCR、Calibre 均为可选，未安装时不得宣称已支持。

若运行环境允许安装，建议创建位于可写工作区的虚拟环境，然后按格式安装：

```bash
python3 -m venv <WORKSPACE>/.book-to-skill-venv
<WORKSPACE>/.book-to-skill-venv/bin/python -m pip install pypdf ebooklib beautifulsoup4
<WORKSPACE>/.book-to-skill-venv/bin/python <CONVERTER_DIR>/scripts/extract.py --check
```

上面路径是占位符，由实际宿主定位后替换；使用此解释器进行后续提取。
不要在插件安装目录中创建环境；不要关闭 TLS 验证或绕过环境网络规则。
不要加载时自动安装依赖。新的云端环境需要再次检查，可把上述安装加入环境配置。
Python 脚本只提取文本，知识 Skill 的生成仍由 Codex 读取内容完成。
