import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "博客",
    icon: "boke",
    children: [
      {text: "Java", icon: "java", link: "/java/"},
      {text: "Python", icon: "python", link: "/python/"},
    ]
  },
  {
    text: "收藏资源",
    icon: "resource",
    children: [
      {text: "资源网站", icon: "lianjiewangzhiwangzhan", link: "/collection/resource-websites"},
      {text: "工具网站", icon: "lianjiewangzhiwangzhan", link: "/collection/tools-websites"},
    ]
  },
  {
    text: "教程",
    icon: "jiaocheng",
    link: "/course/"
  },
  {
    text: "生活笔记",
    icon: "a-bijibenbiji",
    link: "/life-notes/"
  }
]);
