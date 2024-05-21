import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/java/": [
      {
        text: "Java基础",
        collapsible: true,
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
        // prefix: "advanced/",
        children: [

        ]
      }
  ],
  "/python/": [
    {
      text: "Python基础",
      collapsible: true,
      // prefix: "basis/",
      children: [
        
      ]
    },
    {
      text: "Python进阶",
      collapsible: true,
      // prefix: "advanced/",
      children: [
        
      ]
    },
    {
      text: "面试题集",
      collapsible: true,
      children: [
        "/python/interview/basis"
      ]
    }
  ],
  "/collection/": [
    {
      text: "机场服务商",
      icon: "jichang",
      link: "/collection/airport-list"
    },
    {
      text: "破解网站",
      icon: "baolipojie",
      link: "/collection/crack-website"
    },
    {
      text: "编程网站",
      icon: "biancheng",
      link: "/collection/programming-website"
    },
    {
      text: "前端字体",
      icon: "ziti",
      link: "/collection/frontend-font"
    },
  ]
});
// 