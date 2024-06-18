import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/java/": [
      {
        text: "Java基础",
        collapsible: true,
        icon: "basis",
        // prefix: "basis/",
        children: [
          {
            text: "Java基本程序设计结构",
            collapsible: true,
            // prefix: "basic-programming-structure/",
            children: [
              "/java/basis/basic-programming-structure/javadoc",
              "/java/basis/basic-programming-structure/basis-data-type",
              "/java/basis/basic-programming-structure/control-flow",
              "/java/basis/basic-programming-structure/operator",
              "/java/basis/basic-programming-structure/array",
              "/java/basis/basic-programming-structure/string",
            ]
          },
          {
            text: "Java面向对象编程",
            collapsible: true,
            // prefix: "oop/",
            children: [
              "/java/basis/oop/object-and-class",
              "/java/basis/oop/var",
            ]
          }
        ]
      },
      {
        text: "Java高级",
        collapsible: true,
        icon: "advanced",
        // prefix: "advanced/",
        children: [

        ]
      },
      {
        text: "Java学习路线",
        icon: "wodexuexiluxian",
        link: "/java/learning-route"
      },
  ],
  "/python/": [
    {
      text: "Python基础",
      collapsible: true,
      icon: "basis",
      // prefix: "basis/",
      children: [
        
      ]
    },
    {
      text: "Python进阶",
      collapsible: true,
      icon: "advanced",
      // prefix: "advanced/",
      children: [
        
      ]
    },
    {
      text: "面试题集",
      collapsible: true,
      icon: "mianshianpai",
      children: [
        "/python/interview/basis"
      ]
    }
  ],
  "/database/": [

  ],
  "/computer-system/": [

  ],
  "/design-pattern/": [

  ],
  "/git/": [

  ],
  "/algorithm/": [

  ],
  "/docker/": [

  ],
  "/high-concurrency/": [

  ],
  "/distributed-microservices/": [

  ],
  "/cicd/": [

  ],
  "/data-structure/": [

  ],
  "/collection/": [
      {
        text: "资源网站",
        collapsible: true,
        // icon: "lianjiewangzhiwangzhan",
        link: "/collection/resource-websites",
      },
      {
        text: "工具网站",
        collapsible: true,
        // icon: "lianjiewangzhiwangzhan",
        link: "/collection/tools-websites",
      },
  ],
  "/life-notes/": [
    {
      text: "新生儿宝宝出生后的那些事",
      icon: "yingyouer-",
      link: "/life-notes/newborns-important-things",
    }
  ],
  "/course/": [
    {
      text: "命令速查表",
      icon: "jibenmingling-jibenmingling",
      collapsible: true,
      link: "/course/",
      children: [
        {text: "windows命令", icon: "windows", link: "/course/cmd/windows"}
      ]
    }
  ]
});