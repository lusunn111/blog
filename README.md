# 毛郅皓的博客

毛郅皓的个人博客，记录面向物理智能的高效系统，重点关注视觉语言动作模型（VLA）、视觉语言导航（VLN）、世界动作模型（WAM）的推理优化，也记录从本科科研走向博士阶段的实验、选择与日常。

项目基于 Astro Theme Pure v4.1.3，采用纯静态输出，目标地址为 <https://lusunn111-blog.pages.dev/>。

## 本地开发

```bash
corepack enable
pnpm install
pnpm dev
```

提交前执行：

```bash
pnpm check
pnpm build
```

## 内容结构

文章存放在 `src/content/blog/`。支持 Markdown、MDX、KaTeX 数学公式、Shiki 代码高亮、本地图片、Pagefind 全文搜索与 RSS。

```yaml
---
title: 一篇技术文章
description: 文章摘要
publishDate: 2026-08-23
category: 技术
series: 世界模型实验手记
seriesOrder: 1
tags:
  - 世界模型
  - 系统优化
comment: false
---
```

`category` 只能是“技术”或“读博日记”。`series` 与 `seriesOrder` 可选；同一系列会按照 `seriesOrder` 排序。

## Cloudflare Pages

在 Cloudflare Pages 中连接 `lusunn111/blog` 仓库，并配置：

| 配置项       | 值           |
| ------------ | ------------ |
| 构建命令     | `pnpm build` |
| 构建输出目录 | `dist`       |
| Node.js 版本 | `24`         |
| 根目录       | `/`          |

本项目没有 Vercel 适配器，也没有 `/blog` 基础路径。GitHub Actions 只做构建检查，不会发布 GitHub Pages。

## 评论

Giscus 组件已经准备，但在仓库 Discussions 与 Giscus ID 配置完成前默认关闭。操作方法见 `docs/comments.md`。

## 上游与版权

主题代码基于 [Astro Theme Pure](https://github.com/cworld1/astro-theme-pure)，遵循仓库内 Apache License 2.0。文章内容版权归毛郅皓所有。
