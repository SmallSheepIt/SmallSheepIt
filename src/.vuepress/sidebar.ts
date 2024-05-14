import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/java/": [
      {
        text: "Java基础",
        collapsible: true,
        prefix: "basis/",
        children: [
          {
            text: "Java基本程序设计结构",
            collapsible: true,
            prefix: "basic-programming-structure/",
            children: [
              "javadoc.md",
              "basis-data-type.md",
            ]
          },
          {
            text: "Java面向对象编程",
            collapsible: true,
            prefix: "oop/",
            children: [
              "object-and-class",
              "var",
            ]
          }
        ]
      },
      {
        text: "Java高级",
        collapsible: true,
        prefix: "advanced/",
        children: [

        ]
      }
  ],
  "/python/": [
    {
      text: "Python基础",
      collapsible: true,
      prefix: "basis/",
      children: [

      ]
    },
    {
      text: "Python进阶",
      collapsible: true,
      prefix: "advanced/",
      children: [
        
      ]
    }
  ]
});
// 