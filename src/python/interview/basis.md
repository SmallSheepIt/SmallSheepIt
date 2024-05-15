# Python基础

#### 1、Python的主要功能是什么？
- Python是一种解释型语言，在运行Python前不需要进行编译工作
- Python是一种面向对象的编程语言，允许类的定义以及组合和继承
- 在Python里面一切皆对象，函数和类都是对象
- 用于许多领域，包括web应用程序、自动化、大数据、人工智能等

#### 2、Python解释器种类及特点
- CPython：C语言开发的，运行`python xxx.py`就是使用CPython解释器运行代码，是Python**使用最广**的解释器
- IPython：IPython是基于CPython的一个交互式解释器，只是在**交互式方式上有所增强**
- PyPy：采用JIT技术，对Python代码进行动态编译，所以可以**显著提高代码执行速度**
- Jython：运行在Java平台上的Python解释器，可以直接把Python代码编译成Java字节码执行
- IronPython：与Jython类似，IronPython是运行在微软.Net平台的Python解释器，能把Python代码编译成.Net的字节码


#### 3、环境变量
PYTHONPATH：告诉Python解释器在哪里可以搜索导入的模块

#### 4、Python支持的数据类型有哪些？
Python支持5中数据类型：
1. Number（数值）：用于保存数值，`a = 1`
2. String（字符串）：字符串是一个字符序列，可用单引号或双引号来声明字符串，`s = "abc"`
3. List（列表）：列表是一些值的有序集合，用方括号声明列表， `li = [1, 2, 3]`
4. tuple（元组）：同列表一样，元组也是一些值的有序集合，区别是元组不可变，列表是可变的。所以不能修改元组的值，用小括号声明元组，`t = (1， 2， 3)`
5. dict（字典）：字典是无序的对象集合，元素由key-value组成，可用`{}`声明，`d = {"name": xxx, "age": 25}`

#### 5、列表和元组有什么区别？
可变性：
- 列表可变
- 元组不可变

#### 6、什么是Python模块？
模块就是Python的一个脚本，里面包含定义了一些类、函数和变量的可运行代码，文件代码的扩展名为`.py`

#### 7、什么是Python切片？
Python中符合**有序的序列**都支持切片（slice），如：字符串、列表、元组  
切片格式：[start : end : step]，左闭右开
- start：开始索引
- end：结束索引
- step：步长，从start开始，每一次取 `上一次索引+start`位置的元素

示例：
```python
li = [i for i in range(10)]
print(li[1:5])  # [1, 2, 3, 4]
# 第一次取下标为0的元素，第二次取下标为3的元素，以此类推
print(li[::3])  # [0, 3, 6, 9]
```

#### 8、Python中的函数是什么？有哪些基本类型？
函数，也叫方法，表示代码块并且是可重用的对象，实现了代码模块化，提高了代码的可重用性。  
Python提供了两种基本类型的函数：内置和用户自定义

#### 9、深拷贝和浅拷贝有什么区别？

深拷贝：
- 一律拷贝一份新的对象，原对象和拷贝对象的修改不会相互影响
- Python提供了deepcopy函数可以实现深拷贝

浅拷贝：
- 外层对象会新拷贝一份，外层对象的修改不会相互影响
- 如果原对象包含了**内层可变对象**，那么内层对象拷贝的是引用。因此，内层可变对象的修改会相互影响的
- Python提供了copy函数可以实现浅拷贝

#### 10、pass、continue、break

pass：通过，可以理解为一个占位符，代码还会往下执行  
continue：跳过循环中的某一次循环，continue下面的代码不执行，进行下一次循环  
break：跳出循环  

5^th^  
H~2~O  
- [x] 计划 A
- [x] 计划 B

一个水果选项卡列表:

::: tabs#fruit

@tab apple1#apple
```sh
npm install 
```

@tab banana#banana

Banana

:::

另一个水果选项卡列表:

::: tabs#fruit

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

一个没有绑定 id 的水果选项卡列表:

::: tabs

@tab apple

Apple

@tab banana

Banana

@tab orange

Orange

:::

> [!note]
> 注释文字

> [!important]
> 重要文字

> [!tip]
> 提示文字

> [!warning]
> 注意文字

> [!caution]
> 警告文字

VuePress Theme Hope !!非常强大!!!

@startuml
Alice -> Bob: 认证请求

alt 成功情况

    Bob -> Alice: 认证接受

else 某种失败情况

    Bob -> Alice: 认证失败
    group 我自己的标签
    Alice -> Log : 开始记录攻击日志
        loop 1000次
            Alice -> Bob: DNS 攻击
        end
    Alice -> Log : 结束记录攻击日志
    end

else 另一种失败

    Bob -> Alice: 请重复

end
@enduml


```flow
st=>start: 开始|past:>http://www.google.com[blank]
e=>end: 结束|future:>http://www.google.com
op1=>operation: 操作1|past
op2=>operation: 操作2|current
sub1=>subroutine: 子程序|invalid
cond=>condition: 是/否?|approved:>http://www.google.com
c2=>condition: 判断2|rejected
io=>inputoutput: 进行反思...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```

安装 VuePress Theme Hope:

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-theme-hope
```

@tab yarn

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::

安装 VuePress Plugin Markdown Enhance:

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress-plugin-md-enhance
```

@tab yarn

```bash
yarn add -D vuepress-plugin-md-enhance
```

@tab:active npm

```bash
npm i -D vuepress-plugin-md-enhance
```

:::


