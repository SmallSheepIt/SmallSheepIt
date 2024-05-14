import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博客",
    children: [
      {text: "Java", icon: "java", link: "/java/"},
      {text: "Python", icon: "python", link: "/python/"},
    ]
  },
]);
