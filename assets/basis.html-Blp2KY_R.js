import{_ as n,o as t,c as a,e as o}from"./app-BSR1Mru2.js";const e={},i=o(`<h1 id="python基础" tabindex="-1"><a class="header-anchor" href="#python基础"><span>Python基础</span></a></h1><h4 id="_1、python的主要功能是什么" tabindex="-1"><a class="header-anchor" href="#_1、python的主要功能是什么"><span>1、Python的主要功能是什么？</span></a></h4><ul><li>Python是一种解释型语言，在运行Python前不需要进行编译工作</li><li>Python是一种面向对象的编程语言，允许类的定义以及组合和继承</li><li>在Python里面一切皆对象，函数和类都是对象</li><li>用于许多领域，包括web应用程序、自动化、大数据、人工智能等</li></ul><h4 id="_2、python解释器种类及特点" tabindex="-1"><a class="header-anchor" href="#_2、python解释器种类及特点"><span>2、Python解释器种类及特点</span></a></h4><ul><li>CPython：C语言开发的，运行<code>python xxx.py</code>就是使用CPython解释器运行代码，是Python<strong>使用最广</strong>的解释器</li><li>IPython：IPython是基于CPython的一个交互式解释器，只是在<strong>交互式方式上有所增强</strong></li><li>PyPy：采用JIT技术，对Python代码进行动态编译，所以可以<strong>显著提高代码执行速度</strong></li><li>Jython：运行在Java平台上的Python解释器，可以直接把Python代码编译成Java字节码执行</li><li>IronPython：与Jython类似，IronPython是运行在微软.Net平台的Python解释器，能把Python代码编译成.Net的字节码</li></ul><h4 id="_3、环境变量" tabindex="-1"><a class="header-anchor" href="#_3、环境变量"><span>3、环境变量</span></a></h4><p>PYTHONPATH：告诉Python解释器在哪里可以搜索导入的模块</p><h4 id="_4、python支持的数据类型有哪些" tabindex="-1"><a class="header-anchor" href="#_4、python支持的数据类型有哪些"><span>4、Python支持的数据类型有哪些？</span></a></h4><p>Python支持5中数据类型：</p><ol><li>Number（数值）：用于保存数值，<code>a = 1</code></li><li>String（字符串）：字符串是一个字符序列，可用单引号或双引号来声明字符串，<code>s = &quot;abc&quot;</code></li><li>List（列表）：列表是一些值的有序集合，用方括号声明列表， <code>li = [1, 2, 3]</code></li><li>tuple（元组）：同列表一样，元组也是一些值的有序集合，区别是元组不可变，列表是可变的。所以不能修改元组的值，用小括号声明元组，<code>t = (1， 2， 3)</code></li><li>dict（字典）：字典是无序的对象集合，元素由key-value组成，可用<code>{}</code>声明，<code>d = {&quot;name&quot;: xxx, &quot;age&quot;: 25}</code></li></ol><h4 id="_5、列表和元组有什么区别" tabindex="-1"><a class="header-anchor" href="#_5、列表和元组有什么区别"><span>5、列表和元组有什么区别？</span></a></h4><p>可变性：</p><ul><li>列表可变</li><li>元组不可变</li></ul><h4 id="_6、什么是python模块" tabindex="-1"><a class="header-anchor" href="#_6、什么是python模块"><span>6、什么是Python模块？</span></a></h4><p>模块就是Python的一个脚本，里面包含定义了一些类、函数和变量的可运行代码，文件代码的扩展名为<code>.py</code></p><h4 id="_7、什么是python切片" tabindex="-1"><a class="header-anchor" href="#_7、什么是python切片"><span>7、什么是Python切片？</span></a></h4><p>Python中符合<strong>有序的序列</strong>都支持切片（slice），如：字符串、列表、元组<br> 切片格式：[start : end : step]，左闭右开</p><ul><li>start：开始索引</li><li>end：结束索引</li><li>step：步长，从start开始，每一次取 <code>上一次索引+start</code>位置的元素</li></ul><p>示例：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="shiki shiki-themes github-light one-dark-pro" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">li </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> [i </span><span style="color:#D73A49;--shiki-dark:#C678DD;">for</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> i </span><span style="color:#D73A49;--shiki-dark:#C678DD;">in</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> range</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#005CC5;--shiki-dark:#D19A66;">10</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">)]</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(li[</span><span style="color:#005CC5;--shiki-dark:#D19A66;">1</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="color:#005CC5;--shiki-dark:#D19A66;">5</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">])  </span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># [1, 2, 3, 4]</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># 第一次取下标为0的元素，第二次取下标为3的元素，以此类推</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">print</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(li[::</span><span style="color:#005CC5;--shiki-dark:#D19A66;">3</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">])  </span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># [0, 3, 6, 9]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8、python中的函数是什么-有哪些基本类型" tabindex="-1"><a class="header-anchor" href="#_8、python中的函数是什么-有哪些基本类型"><span>8、Python中的函数是什么？有哪些基本类型？</span></a></h4><p>函数，也叫方法，表示代码块并且是可重用的对象，实现了代码模块化，提高了代码的可重用性。<br> Python提供了两种基本类型的函数：内置和用户自定义</p><h4 id="_9、深拷贝和浅拷贝有什么区别" tabindex="-1"><a class="header-anchor" href="#_9、深拷贝和浅拷贝有什么区别"><span>9、深拷贝和浅拷贝有什么区别？</span></a></h4><p>深拷贝：</p><ul><li>一律拷贝一份新的对象，原对象和拷贝对象的修改不会相互影响</li><li>Python提供了deepcopy函数可以实现深拷贝</li></ul><p>浅拷贝：</p><ul><li>外层对象会新拷贝一份，外层对象的修改不会相互影响</li><li>如果原对象包含了<strong>内层可变对象</strong>，那么内层对象拷贝的是引用。因此，内层可变对象的修改会相互影响的</li><li>Python提供了copy函数可以实现浅拷贝</li></ul><h4 id="_10、pass、continue、break" tabindex="-1"><a class="header-anchor" href="#_10、pass、continue、break"><span>10、pass、continue、break</span></a></h4><p>pass：通过，可以理解为一个占位符，代码还会往下执行<br> continue：跳过循环中的某一次循环，continue下面的代码不执行，进行下一次循环<br> break：跳出循环</p>`,29),s=[i];function l(h,r){return t(),a("div",null,s)}const y=n(e,[["render",l],["__file","basis.html.vue"]]),c=JSON.parse('{"path":"/python/interview/basis.html","title":"Python基础","lang":"zh-CN","frontmatter":{"description":"Python基础 1、Python的主要功能是什么？ Python是一种解释型语言，在运行Python前不需要进行编译工作 Python是一种面向对象的编程语言，允许类的定义以及组合和继承 在Python里面一切皆对象，函数和类都是对象 用于许多领域，包括web应用程序、自动化、大数据、人工智能等 2、Python解释器种类及特点 CPython：C语...","head":[["meta",{"property":"og:url","content":"http://113.45.177.232/python/interview/basis.html"}],["meta",{"property":"og:site_name","content":"SmallSheep"}],["meta",{"property":"og:title","content":"Python基础"}],["meta",{"property":"og:description","content":"Python基础 1、Python的主要功能是什么？ Python是一种解释型语言，在运行Python前不需要进行编译工作 Python是一种面向对象的编程语言，允许类的定义以及组合和继承 在Python里面一切皆对象，函数和类都是对象 用于许多领域，包括web应用程序、自动化、大数据、人工智能等 2、Python解释器种类及特点 CPython：C语..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T09:39:02.000Z"}],["meta",{"property":"article:author","content":"SmallSheep"}],["meta",{"property":"article:modified_time","content":"2024-05-15T09:39:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-15T09:39:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"SmallSheep\\",\\"url\\":\\"http://113.45.177.232/\\",\\"email\\":\\"1757821361@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1715765942000,"updatedTime":1715765942000,"contributors":[{"name":"yangwenjinIter","email":"1757821361@qq.com","commits":1}]},"readingTime":{"minutes":3.13,"words":938},"filePathRelative":"python/interview/basis.md","localizedDate":"2024年5月15日","excerpt":"\\n<h4>1、Python的主要功能是什么？</h4>\\n<ul>\\n<li>Python是一种解释型语言，在运行Python前不需要进行编译工作</li>\\n<li>Python是一种面向对象的编程语言，允许类的定义以及组合和继承</li>\\n<li>在Python里面一切皆对象，函数和类都是对象</li>\\n<li>用于许多领域，包括web应用程序、自动化、大数据、人工智能等</li>\\n</ul>\\n<h4>2、Python解释器种类及特点</h4>\\n<ul>\\n<li>CPython：C语言开发的，运行<code>python xxx.py</code>就是使用CPython解释器运行代码，是Python<strong>使用最广</strong>的解释器</li>\\n<li>IPython：IPython是基于CPython的一个交互式解释器，只是在<strong>交互式方式上有所增强</strong></li>\\n<li>PyPy：采用JIT技术，对Python代码进行动态编译，所以可以<strong>显著提高代码执行速度</strong></li>\\n<li>Jython：运行在Java平台上的Python解释器，可以直接把Python代码编译成Java字节码执行</li>\\n<li>IronPython：与Jython类似，IronPython是运行在微软.Net平台的Python解释器，能把Python代码编译成.Net的字节码</li>\\n</ul>","autoDesc":true}');export{y as comp,c as data};
