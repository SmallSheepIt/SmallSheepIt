import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";
import { shikiPlugin } from "@vuepress/plugin-shiki";
// import { commentPlugin } from '@vuepress/plugin-comment';
// import { searchPlugin } from '@vuepress/plugin-search';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "SmallSheep",
  description: "构建编程知识体系",

  head: [
    
  ],

  theme,
  
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },

  plugins: [
    // 代码主题插件
    shikiPlugin({
      // 你的选项
      // 不设置会默认加载所有语言，建议设置需要高亮的语言，支持的语言-> https://shiki.style/languages
      langs: ['ts', 'json', 'vue', 'md', 'bash', 'diff', 'python', 'java'],
      // 支持主题->https://shiki.style/themes
      themes: {
        light: "github-light",
        dark: "one-dark-pro",
      },
      // lineNumbers: false
    }),

    // commentPlugin({
    //   // Giscus 评论插件
    //   // comment: false,
    //   // provider: "Giscus",
    //   // repo :"yangwenjinIter/yangwenjin-docs-comment-giscus",
    //   // repoId:"R_kgDOL6Klig",
    //   // category:"General",
    //   // categoryId:"DIC_kwDOL6Klis4CfSf7",
    //   // mapping: "pathname",
    //   // lazyLoading: true,

    //   provider: "Waline",
    //   serverURL: "yangwenjin-blog-comment-waline.vercel.app",
    //   // 快速反应
    //   reaction: true,
    //   // 浏览量统计
    //   pageview: true,
    //   emoji: [
    //     '//unpkg.com/@waline/emojis@1.2.0/weibo',
    //     '//unpkg.com/@waline/emojis@1.2.0/bmoji',
    //     '//unpkg.com/@waline/emojis@1.2.0/alus',
    //     '//unpkg.com/@waline/emojis@1.2.0/bilibili',
    //     '//unpkg.com/@waline/emojis@1.2.0/qq',
    //     '//unpkg.com/@waline/emojis@1.2.0/tieba',
    //     '//unpkg.com/@waline/emojis@1.2.0/tw-emoji',
    //     '//unpkg.com/@waline/emojis@1.2.0/soul-emoji',
    //   ]
    // }),

    // 搜索插件 @vuepress/plugin-search
    // searchPlugin({
    //   // 配置项
    //   isSearchable: (page) => page.path !== "/",
    //   maxSuggestions: 10,
    // }),

  ],

  // 和 PWA 一起启用
  shouldPrefetch: false,
});
