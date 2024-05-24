import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
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
      {text: "资源网站&工具", icon: "lianjiewangzhiwangzhan", link: "/collection/websites-and-tools/"},

    ]
  },
]);
