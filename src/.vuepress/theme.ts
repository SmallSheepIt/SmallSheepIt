import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { MR_HOPE_AVATAR } from "./logo.js";

export default hopeTheme(
  {
    darkmode: "toggle",
    hostname: "http://smallsheep.icu/",
    author: {
      name: "SmallSheep",
      url: "http://smallsheep.icu/",
      email: "1757821361@qq.com"
    },

    // 内置的"fontawesome" "fontawesome-with-brands"
    iconAssets: "//at.alicdn.com/t/c/font_4542339_tb2gloeojm.css",

    // 纯净模式，会禁用一些花哨的动画以及一些色彩，只提供功能
    // pure: true,
    fullscreen: false,

    // logo: "https://theme-hope-assets.vuejs.press/logo.svg",
    logo: "/logo.png",
    favicon: "/logo.png",

    navbarLayout: {
      start: ['Brand'],
      center: [],
      end: ['Search', 'Links', 'Language', 'Outlook'],
    },

    repo: "https://github.com/SmallSheepIt/SmallSheepIt.github.io",
    // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "GitHub",
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: false,

    // 文档仓库地址，默认同主题选项的 repo
    docsRepo: "https://github.com/SmallSheepIt/SmallSheepIt.github.io",
    docsDir: "src",
    // 文档存放的分支，默认 main
    docsBranch: "master",

    // 导航栏
    navbar,

    // 侧边栏
    sidebar,

    // 页脚
    footer: '<a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2024253972号-1</a>',
    displayFooter: true,

    headerDepth: 2,

    // 文章信息，可以填入数组，数组的顺序是各条目显示的顺序
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word", "ReadingTime"],
    lastUpdated: true,
    contributors: true,
    editLink: true,

    // 博客相关
    blog: {
      name: "SmallSheep",
      avatar: "/logo.png",
      description: "梦想黑客",
      intro: "/intro.html",
      sidebarDisplay: "mobile",
      // 文章摘要(不生效)
      // excerptLength: 0,
      timeline: "昨日沉淀",
      medias: {
        // Baidu: "https://example.com",
        // BiliBili: "https://example.com",
        // Bitbucket: "https://example.com",
        // Dingding: "https://example.com",
        // Discord: "https://example.com",
        // Dribbble: "https://example.com",
        // Email: "mailto:1757821361@qq.com",
        // Evernote: "https://example.com",
        // Facebook: "https://example.com",
        // Flipboard: "https://example.com",
        // Gitee: "https://example.com",
        // GitHub: "https://github.com/SmallSheepIt",
        // Gitlab: "https://example.com",
        // Gmail: "mailto:info@example.com",
        // Instagram: "https://example.com",
        // Lark: "https://example.com",
        // Lines: "https://example.com",
        // Linkedin: "https://example.com",
        // Pinterest: "https://example.com",
        // Pocket: "https://example.com",
        // QQ: "https://example.com",
        // Qzone: "https://example.com",
        // Reddit: "https://example.com",
        // Rss: "https://example.com",
        // Steam: "https://example.com",
        // Twitter: "https://example.com",
        // Wechat: "https://example.com",
        // Weibo: "https://example.com",
        // Whatsapp: "https://example.com",
        // Youtube: "https://example.com",
        // Zhihu: "https://example.com",
        // MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
      },
    },

    // 加密配置
    encrypt: {
      config: {
        "/demo/encrypt.html": ["1234"],
      },
    },

    // 多语言配置
    metaLocales: {
      editLink: "在 GitHub 上编辑此页",
    },

    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    // hotReload: true,

    // 在这里配置主题提供的插件
    plugins: {

      // 默认的代码高亮器，不能高亮所有代码语法
      // prismjs: false,
      prismjs: {
        light: "one-light",
        dark: "one-dark"
      },

      // 评论插件
      comment: {
        // Giscus 评论插件
        // comment: false,
        // provider: "Giscus",
        // repo :"yangwenjinIter/yangwenjin-docs-comment-giscus",
        // repoId:"R_kgDOL6Klig",
        // category:"General",
        // categoryId:"DIC_kwDOL6Klis4CfSf7",
        // mapping: "pathname",
        // lazyLoading: true,

        // Waline 评论插件
        provider: "Waline",
        serverURL: "yangwenjin-blog-comment-waline.vercel.app",
        // 快速反应
        // reaction: true,
        // 浏览量统计
        pageview: true,
        // emoji: [
        //   // '//unpkg.com/@waline/emojis@1.2.0/weibo',
        //   // '//unpkg.com/@waline/emojis@1.2.0/bmoji',
        //   // '//unpkg.com/@waline/emojis@1.2.0/alus',
        //   // '//unpkg.com/@waline/emojis@1.2.0/bilibili',
        //   // '//unpkg.com/@waline/emojis@1.2.0/qq',
        //   // '//unpkg.com/@waline/emojis@1.2.0/tieba',
        //   // '//unpkg.com/@waline/emojis@1.2.0/tw-emoji',
        //   // '//unpkg.com/@waline/emojis@1.2.0/soul-emoji',
        // ]
      },
      
      searchPro: {
        // 索引全部内容
        indexContent: true,
        autoSuggestions: true,
        // 为分类和标签添加索引
        customFields: [
          {
            getter(page: any) {
              return page.frontmatter.category;
            },
            formatter: {
              '/': '分类：$content',
              // '/en/': 'Category: $content',
            },
          },
          {
            getter(page: any) {
              return page.frontmatter.tag;
            },
            formatter: {
              '/': '标签：$content',
              // '/en/': 'Tag: $content',
            },
          },
        ],
      },
      
      copyright: {
        author: " SmallSheep",
        license: "MIT",
        triggerLength: 100,
        maxLength: 700,
        // canonical: "https://javaguide.cn/",
        global: true,
      },
      activeHeaderLinks: true,
      
      blog: true,

      components: {
        components: ["Badge", "VPCard"],
      },

      // 此处开启了很多功能用于演示，你应仅保留用到的功能。
      mdEnhance: {
        align: true,
        attrs: true,
        codetabs: true,
        component: true,
        demo: true,
        figure: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        stylize: [
          {
            matcher: "Recommended",
            replacer: ({ tag }) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommended",
                };
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        tasklist: true,
        vPre: true,
        markmap: true,
        plantuml: true,

        // 剧透
        // spoiler: true,

        // 在启用之前安装 chart.js
        // chart: true,

        // insert component easily

        // 在启用之前安装 echarts
        // echarts: true,

        // 在启用之前安装 flowchart.ts
        flowchart: true,

        // gfm requires mathjax-full to provide tex support
        gfm: true,

        // 在启用之前安装 katex
        // katex: true,

        // 在启用之前安装 mathjax-full
        // mathjax: true,

        // 在启用之前安装 mermaid
        // mermaid: true,

        // kotlinPlayground: true,

        // playground: {
        //   presets: ["ts", "vue"],
        // },

        // 在启用之前安装 reveal.js
        // revealJs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },

        // 在启用之前安装 @vue/repl
        // vuePlayground: true,

        // install sandpack-vue3 before enabling it
        // sandpack: true,
      },

      // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cacheImage: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },
    },
  },
  { custom: true },
);
