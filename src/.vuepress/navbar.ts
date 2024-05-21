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
    text: "资源网站&工具",
    icon: "lianjiewangzhiwangzhan",
    children: [
      {text: "机场", icon: "jichang", link: "/collection/airport-list"},
      {text: "破解网站", icon: "baolipojie", link: "/collection/"},
      {text: "编程网站", icon: "biancheng", link: "/collection/programming-website"},
      {text: "前端字体", icon: "ziti", link: "/collection/frontend-font"},
    ]
  },
]);
