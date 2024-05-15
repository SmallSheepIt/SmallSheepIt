import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  {
    text: "导读", icon: "ditu-tuding", link: "/home"
  },
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
    icon: "daohang",
    children: [
      "/collection/resource-websites"
    ]
  },
]);
