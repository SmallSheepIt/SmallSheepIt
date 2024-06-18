import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "博客",
    icon: "boke",
    children: [
      {text: "Java", icon: "java", link: "/java/"},
      {text: "Python", icon: "python", link: "/python/"},
      {text: "数据库", icon: "database", link: "/database/"},
      {text: "计算机系统", icon: "jisuanjixitong", link: "/computer-system/"},
      {text: "设计模式", icon: "sheji", link: "/design-pattern/"},
      {text: "Git", icon: "git", link: "/git/"},
      {text: "算法", icon: "jiamisuanfaguanli", link: "/algorithm/"},
      {text: "Docker", icon: "docker", link: "/docker/"},
      {text: "高并发", icon: "gaobingfa", link: "/high-concurrency/"},
      {text: "分布式&微服务", icon: "fenbushi", link: "/distributed-microservices/"},
      {text: "CI/CD", icon: "ziyuan", link: "/cicd/"},
      {text: "数据结构", icon: "shujujiegou", link: "/data-structure/"},
    ]
  },
  {
    text: "收藏资源",
    icon: "resource",
    children: [
      {text: "资源网站", icon: "lianjiewangzhiwangzhan", link: "/collection/resource-websites"},
      {text: "工具网站", icon: "tool", link: "/collection/tools-websites"},
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
