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
    link: "/collection/",
  },
  {
    text: "教程",
    icon: "",
    children: [
    ]
  },
  {
    text: "生活笔记",
    icon: "",
    link: "/life-notes/"
  }
]);
