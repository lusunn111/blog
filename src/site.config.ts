import type { Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  title: "Zhihao Mao's Blog",
  author: 'Zhihao Mao',
  description:
    '记录系统优化、具身智能、世界模型、物理 AI 与 WAM 的技术思考，也记录读博过程中的实验、选择与日常。',
  favicon: '/images/avatar.jpg',
  socialCard: '/images/avatar.jpg',
  locale: {
    lang: 'zh-CN',
    attrs: 'zh_CN',
    dateLocale: 'zh-CN',
    dateOptions: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }
  },
  logo: {
    src: '/src/assets/avatar.jpg',
    alt: 'Zhihao Mao 的头像'
  },
  titleDelimiter: '·',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',
  head: [],
  customCss: [],
  header: {
    menu: [
      { title: '首页', link: '/' },
      { title: '文章', link: '/blog' },
      { title: '分类', link: '/categories' },
      { title: '系列', link: '/series' },
      { title: '归档', link: '/archives' },
      { title: '关于', link: '/about' }
    ]
  },
  footer: {
    year: `© ${new Date().getFullYear()}`,
    links: [
      {
        title: '个人学术主页',
        link: 'https://lusunn111.github.io/',
        style: 'text-sm'
      }
    ],
    credits: true,
    social: {
      github: 'https://github.com/lusunn111'
    }
  },
  content: {
    externalLinks: {
      content: ' ↗',
      properties: { style: 'user-select:none' }
    },
    blogPageSize: 8,
    share: ['weibo']
  }
}

export const integ: IntegrationUserConfig = {
  links: {
    logbook: [],
    applyTip: [],
    cacheAvatar: false
  },
  pagefind: true,
  quote: {
    // Pure v4 的配置结构要求保留该字段；站点未挂载 Quote 组件，不会发起请求。
    server: '/quote.json',
    target: `(data) => data.quote || ''`
  },
  typography: {
    class: 'prose text-base',
    blockquoteStyle: 'normal',
    inlineCodeBlockStyle: 'modern'
  },
  mediumZoom: {
    enable: true,
    selector: '.prose .zoomable',
    options: { className: 'zoomable' }
  },
  waline: {
    enable: false,
    showMeta: false,
    additionalConfigs: {}
  }
}

/**
 * Giscus 需要先在 GitHub 仓库中启用 Discussions，并填写仓库与分类 ID。
 * 配置完成后再将 enabled 改为 true；静态站本身不依赖评论后端。
 */
export const comments = {
  enabled: false,
  repository: 'lusunn111/blog',
  repositoryId: '',
  category: 'Announcements',
  categoryId: ''
} as const

const config = { ...theme, integ } as Config
export default config
