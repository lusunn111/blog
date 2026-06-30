# Zhihao Mao's Blog

This is the Hexo source repository for the blog deployed at:

```text
https://lusunn111.github.io/blog/
```

The blog uses Hexo with the Solitude theme. The root path is configured as `/blog/` because it is intended to be deployed as a GitHub Pages project site under the main academic homepage.

## Local Commands

```bash
pnpm install
pnpm exec hexo generate
pnpm exec hexo server
```

## Deployment

Create a GitHub repository named `blog`, push this folder to `lusunn111/blog`, and enable GitHub Pages with GitHub Actions as the source.
