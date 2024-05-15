# Java

## Java基础

### 基础程序设计结构

- [注释](java/basis/basic-programming-structure/javadoc.md) 
- [基本数据类型](java/basis/basic-programming-structure/basis-data-type.md) 
- [控制流程](java/basis/basic-programming-structure/control-flow.md) 
- [运算符](java/basis/basic-programming-structure/operator.md) 
- [数组](java/basis/basic-programming-structure/array.md) 
- [字符串](java/basis/basic-programming-structure/string.md) 

### 面向对象

-  [类&对象](java/basis/oop/object-and-class.md) 
-  [包](java/basis/oop/package.md) 
-  [变量](java/basis/oop/var.md) 
- 方法
- 方法参数
- 构造函数
- 代码代码块
- 访问权限修饰符
- 重载&重写
- 三大特性-封装
- 三大特性-继承
- 三大特性-多态
- 抽象类
- 接口
- 注解
- 枚举
- 内部类
- 关键字

	- this
	- super
	- static
	- final
	- instanceof

### 集合框架

- Collection接口

	- Set接口

		- TreeSet
		- HashSet
		- LinkedHashSet

	- List接口

		- ArrayList
		- Vector
		- LinkedList

	- Queue接口

		- LinkedList
		- PriorityQueue

- Map接口

	- TreeMap
	- HashMap
	- HashTable
	- LinkedHashMap

### 泛型

- 为什么引入泛型
- 基本使用
- 伪泛型&类型擦除
- 泛型多态&桥接方法

### IO流

- 基础IO

	- 数据操作

		- 文件
		- 数组
		- 管道
		- 基本数据类型
		- 缓冲
		- 打印
		- 对象序列化&反序列化
		- 转换

	- 传输方式

		- 字节流
		- 字符流
		- 字节流和字符流区别
		- 字节流和字符流相互转换

- AIO

	- 基础
	- AIO原理与实例

- NIO

	- 基础

		- 程序级别

			- 阻塞IO
			- 非阻塞IO

		- 操作系统级别

			- 同步IO
			- 非同步IO

	- 多路复用IO

		- 概念

			- 通道Channe
			- 缓冲区Buffer
			- 选择器Selector

		- 实现

			- select
			- poll
			- epoll
			- kqueue

		- 模型

			- Reactor模型
			- Proactor模型

	- Java NIO实现和设计

		- SelectorProvider抽象类

	- NIO 框架

		- Netty

- Linux5中IO模型

	- 阻塞式IO
	- 非阻塞式IO
	- IO复用
	- 信号驱动IO
	- 异步IO

### 反射

- 基础

	- Class类
	- 类加载

- 使用
- 反射机制执行流程

### 异常处理

### 多线程

### Java8

- Stream API
- 接口

	- 函数式接口
	- 接口默认方法

- Lambda表达式
- 新日期时间API

## 企业开发基础

### Mysql数据库

### 开发框架

### 开发规范

### Git

### Linux

### 前端基础

## 企业开发进阶

### 设计模式

- 创建型模式：对象实例化的模式，创建型模式用于解耦对象的实例化过程

	- 单例模式
	- 工厂方法模式
	- 抽象工厂
	- 建造者模式
	- 原型模式

- 结构型模式：把类或对象结合在一起形成一个更大的结构

	- 适配器模式
	- 组合模式
	- 装饰器模式
	- 代理模式
	- 享元模式
	- 外观模式
	- 桥接模式

- 行为型模式：类和对象如何交互，及划分责任和算法

	- 迭代器模式
	- 模板方法模式
	- 策略模式
	- 命令模式
	- 状态模式
	- 责任链模式
	- 备忘录模式
	- 观察者模式
	- 访问者模式
	- 中介者模式
	- 解释器模式

### 缓存

- 什么是缓存？
- 本地缓存

	- Caffeine 库

- 多级缓存
- Redis 分布式缓存

	- 数据类型
	- 常用操作
	- Java 操作 Redis

		- Spring Boot Redis Template
		- Redisson

	- 主从模型搭建
	- 哨兵集群搭建
	- 日志持久化

- 缓存（Redis）应用场景

	- 数据共享
	- 单点登录
	- 计数器
	- 限流
	- 点赞
	- 实时排行榜
	- 分布式锁

- 缓存常见问题

	- 缓存雪崩
	- 缓存击穿
	- 缓存穿透
	- 缓存更新一致性

- 相关技术：Memcached、Ehcache

### 消息队列

- RabbitMQ 消息队列

	- 生产消费模型
	- 交换机模型
	- 死信队列
	- 延迟队列
	- 消息持久化
	- Java 操作
	- 集群搭建

- 相关技术：Kafka、ActiveMQ、TubeMQ、RocketMQ

### Nginx

### Netty网络编程

### 微服务

### 容器

### CI/CD

## 项目实战

### 视频教程

- 尚硅谷 - 谷粒学院 - 微服务 + 全栈 - 在线教育实战项目：https://www.bilibili.com/video/BV1dQ4y1A75e（全栈项目，前后端讲得都很全面）
- 尚硅谷 - 尚筹网 - Java项目实战开发教程 - SSM 框架 + 微服务架构：https://www.bilibili.com/video/BV1bE411T7oZ（500 多集，包含完整的用户权限管理，功能丰富、讲得很细致全面）
- 黑马 - 24 小时搞定 Java 毕设电商项目：https://www.bilibili.com/video/BV13f4y1r7fS
- 黑马程序员 Java 项目《传智健康》，超完整的企业级医疗行业项目：https://www.bilibili.com/video/BV1Bo4y117zV
- 黑马程序员 Java 项目《万信金融》企业级开发实战，互联网金融行业解决方案：https://www.bilibili.com/video/BV1Ub4y1f7rk
- 黑马程序员 Java 项目 SaaS 移动办公完整版《iHRM 人力资源管理系统》，跨行业 SaaS 办公整合性解决方案：https://www.bilibili.com/video/BV18A411L7UX
- 黑马程序员 Java 大型分布式微服务闪聚支付项目，Java 移动支付全生态系统：https://www.bilibili.com/video/BV17v411V79c
- 黑马程序员 Java 项目《好客租房》：https://www.bilibili.com/video/BV1sZ4y1F7PD

### 项目源码（50 套）

- 电商秒杀

	- 天猫整站 J2EE：https://how2j.cn/module/115.htm
	- 天猫整站 SSM：https://how2j.cn/module/134.html
	- 天猫整站 Springboot：https://how2j.cn/module/156.html
	- mall-learning：https://github.com/macrozheng/mall-learningmall（学习教程，架构、业务、技术要点全方位解析）
	- SpringBoot 电商商城系统 Mall4j：https://github.com/gz-yami/mall4j
	- SpringBoot 完整电商系统 Mall：https://github.com/macrozheng/mall（包括前台商城系统及后台管理系统，基于 SpringBoot+MyBatis 实现）
	- newbee-mall：https://github.com/newbee-ltd/newbee-mall （一套电商系统，包括 newbee-mall 商城系统及 newbee-mall-admin 商城后台管理系统，基于 Spring Boot 2.X 及相关技术栈开发）
	- paascloud-master：https://github.com/paascloud/paascloud-master（基于 spring cloud + vue + oAuth2.0，前后端分离商城系统）
	- mall-swarm：https://github.com/macrozheng/mall-swarm（一套微服务商城系统，采用了 Spring Cloud Greenwich、Spring Boot 2、MyBatis、Docker、Elasticsearch 等核心技术，同时提供了基于 Vue 的管理后台方便快速搭建系统）
	- onemall：https://github.com/YunaiV/onemall（mall 商城，基于微服务的思想，构建在 B2C 电商场景下的项目实战。核心技术栈，是 Spring Boot + Dubbo 。未来，会重构成 Spring Cloud Alibaba）
	- litemall：https://github.com/linlinjava/litemall（又一个小商城，litemall = Spring Boot 后端 + Vue 管理员前端 + 微信小程序用户前端 + Vue 用户移动端）
	- xmall：https://github.com/Exrick/xmall （基于SOA架构的分布式电商购物商城 前后端分离 前台商城:Vue全家桶 后台管理系统）
	- miaosha：https://github.com/qiurunze123/miaosha （秒杀系统设计与实现）
	- SecKill：https://github.com/hfbin/Seckill（基于 SpringBoot+Mybatis+Redis+RabbitMQ 秒杀系统）

- 博客论坛

	- [Mblog](https://github.com/langhsu/mblog)：开源 Java 博客系统
	- [halo](https://github.com/halo-dev/halo)：一个优秀的开源博客发布应用
	- [forum-java](https://github.com/Qbian61/forum-java)：一款用 Java（spring boot） 实现的现代化社区（论坛/问答/BBS/社交网络/博客）系统平台
	- [vhr](https://github.com/lenve/vhr)：微人事是一个前后端分离的人力资源管理系统，项目采用 SpringBoot+Vue 开发。
	- [favorites-web](https://github.com/cloudfavorites/favorites-web):云收藏 Spring Boot 2.X 开源项目。云收藏是一个使用 Spring Boot 构建的开源网站，可以让用户在线随时随地收藏的一个网站，在网站上分类整理收藏的网站或者文章。
	- [community](https://github.com/codedrinker/community)：码问，开源论坛、问答系统，现有功能提问、回复、通知、最新、最热、消除零回复功能。技术栈 Spring、Spring Boot、MyBatis、MySQL/H2、Bootstrap
	- [NiterForum](https://github.com/yourkevin/NiterForum)：尼特社区-NiterForum-一个论坛/社区程序。后端Springboot/MyBatis/Maven/MySQL，前端Thymeleaf/Layui。可供初学者，学习、交流使用。
	- [VBlog](https://github.com/lenve/VBlog)：V部落，Vue+SpringBoot实现的多用户博客管理平台!
	- [NiceFish](https://github.com/damoqiongqiu/NiceFish)：SpringBoot/SpringCloud 前后端分离项目
	- [My-Blog](https://github.com/ZHENFENG13/My-Blog)： My Blog 是由 SpringBoot + Mybatis + Thymeleaf 等技术实现的 Java 博客系统，页面美观、功能齐全、部署简单及完善的代码，一定会给使用者无与伦比的体验。
	- [My-Blog-layui](https://github.com/ZHENFENG13/My-Blog-layui)：layui 版本的 My-Blog : A simple & beautiful blogging system implemented with spring-boot & layui & thymeleaf & mybatis My Blog 是由  SpringBoot + Layui + Mybatis + Thymeleaf 等技术实现的 Java  博客系统，页面美观、功能齐全、部署简单及完善的代码，一定会给使用者无与伦比的体验
	- [symphony](https://github.com/88250/symphony)：Java 实现的现代化社区

- 管理系统

	- [Spring-Cloud-Admin](https://github.com/wxiaoqi/Spring-Cloud-Admin)：Cloud-Admin 是国内首个基于 Spring Cloud 微服务化开发平台，具有统一授权、认证后台管理系统，其中包含具备用户管理、资源权限管理、网关 API 管理等多个模块，支持多业务系统并行开发，可以作为后端服务的开发脚手架。代码简洁，架构清晰，适合学习和直接项目中使用。核心技术采用 Spring Boot2 以及 Spring Cloud Gateway 相关核心组件，前端采用 vue-element-admin 组件。
	- [bootshiro](https://github.com/tomsun28/bootshiro)：基于 springboot+shiro+jwt 的资源无状态认证权限管理系统后端
	- [悟空CRM](https://github.com/72crm/72crm-java)：基于jfinal+vue+ElementUI的前后端分离CRM系统
	- [EL-ADMIN](https://github.com/elunez/eladmin)：基于 SpringBoot 的后台管理系统
	- [pig](https://gitee.com/log4j/pig)：基于 Spring Boot 2.2、 Spring Cloud Hoxton & Alibaba、 OAuth2 的 RBAC 权限管理系统。
	- [FEBS-Shiro](https://github.com/wuyouzhuguli/FEBS-Shiro)：Spring Boot 2.1.3，Shiro1.4.0 & Layui 2.5.4 权限管理系统。
	- [Spring Boot-Shiro-Vue](https://github.com/Heeexy/SpringBoot-Shiro-Vue)：基于Spring Boot-Shiro-Vue 的权限管理
	- [studentmanager](https://github.com/ZeroWdd/studentmanager)：基于springboot+mybatis学生管理系统
	- [jshERP](https://github.com/jishenghua/jshERP)：华夏ERP基于SpringBoot框架和SaaS模式，立志为中小企业提供开源好用的ERP软件，目前专注进销存+财务功能。主要模块有零售管理、采购管理、销售管理、仓库管理、财务管理、报表查询、系统管理等。支持预付款、收入支出、仓库调拨、组装拆卸、订单等特色功能。拥有库存状况、出入库统计等报表。同时对角色和权限进行了细致全面控制，精确到每个按钮和菜单。
	- [HotelSystem](https://github.com/misterchaos/HotelSystem)：酒店管理系统 Java,tomcat,mysql,servlet,jsp实现，没有使用任何框架

- 开发平台

	- [open-capacity-platform](https://github.com/2014shijina2014/open-capacity-platform)：微服务能力开发平台
	- [jeecg-boot](https://github.com/zhangdaiscott/jeecg-boot)：JeecgBoot是一款基于BPM的低代码平台！前后端分离架构 SpringBoot 2.x，SpringCloud，Ant  Design&Vue，Mybatis-plus，Shiro，JWT，支持微服务。强大的代码生成器让前后端代码一键生成，实现低代码开发！

- 其他

	- [学之思在线考试系统](https://github.com/mindskip/xzs)：一款 java + vue 的前后端分离的考试系统
	- [PassJava-Platform](https://github.com/Jackson0714/PassJava-Platform)：一款面试刷题的 Spring Cloud 开源系统
	- [kkFileView](https://github.com/kekingcn/kkFileView)：使用spring boot打造文件文档在线预览项目
	- [dynamic-datasource](https://github.com/baomidou/dynamic-datasource-spring-boot-starter)：一个基于springboot的快速集成多数据源的启动器
	- [moti-cloud](https://github.com/373675032/moti-cloud)：莫提网盘，基于 SpringBoot+MyBatis+ThymeLeaf+BootStrap，适合初学者
	- [threadandjuc](https://github.com/qiurunze123/threadandjuc)：three-high-import 高可用\高可靠\高性能，三高多线程导入系统（该项目意义为理论贯通)
	- [proxyee-down](https://github.com/proxyee-down-org/proxyee-down)：http下载工具，基于http代理，支持多连接分块下载
	- [hosp_order](https://github.com/sfturing/hosp_order)：医院预约挂号系统，基于 SSM 框架
	- [趋势投资 SpringCloud](https://how2j.cn/module/170.html)
	- [DiyTomcat](https://how2j.cn/module/176.html)

## Java高级

### 并发编程

### JVM

### 架构设计

### 相关技术

- 热数据探测技术：京东 HotKey
- 数据库流水订阅：阿里 Canal
- 监控告警
- 应用安全
- 故障演练
- 流量回放

## Java新特性

## 框架源码

## 前沿技术

## 自学 Java 专题资源

### ⭐ GitHub Java 专区：https://github.com/topics/java

### ⭐ GitHub Java 合集：https://github.com/akullpp/awesome-java

### StackOverflow：https://stackoverflow.com/questions/tagged/java（解决问题必备）

### ⭐ 掘金 Java 专区：https://juejin.cn/tag/Java

### 美团技术团队：https://tech.meituan.com/

### 阿里技术团队：https://102.alibaba.com/tech/list/

### 有赞技术团队：https://tech.youzan.com/tag/back-end/
