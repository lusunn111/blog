# 启用 Giscus 评论

博客已准备 Giscus（基于 GitHub Discussions 的静态站评论组件），但默认关闭。启用前需要完成以下设置：

1. 在 `lusunn111/blog` 仓库中启用 Discussions。
2. 安装并授权 Giscus GitHub App 访问该仓库。
3. 在 [Giscus 配置页](https://giscus.app/zh-CN)选择仓库和分类，取得 `repositoryId` 与 `categoryId`。
4. 将两个 ID 填入 `src/site.config.ts` 的 `comments` 配置，并把 `enabled` 改为 `true`。
5. 对需要评论的文章，将 Frontmatter（文章头部元数据）中的 `comment` 设为 `true`。

评论未启用时，站点不会加载 Giscus 脚本，也不依赖任何服务端接口。
