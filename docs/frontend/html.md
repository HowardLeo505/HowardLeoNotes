# HTML 

### 1、HTML是什么？ 
HTML，即HyperText Markup Language。HyperText，即超文本，包括：图片、标题、链接、表格内容。 
Markup Language即标记语言。用标签来表示内容。 

### 2、HTML文件结构解析 

**'<!DOCTYPE>标签'：** '!DOCTYPE' 声明一般位于文档的第一行，它的作用主要是告诉浏览器以什么样的模式来解析文档。一般指定了之后会以标准模式来进行文档解析，否则就以兼容模式进行解析。 

**标准模式与兼容模式的区别：**
>标准模式下，浏览器的解析规则都是按照最新的标准进行解析。 

>兼容模式下，浏览器会以向后兼容的方式来模拟老式浏览器的行为，以保证一些网站的正确访问。  

**<head>标签：** head标签用于存放页面的元数据，即页面上需要的信息但又不需要直接呈现给用户的信息，比如：页面的编码、页面的标题等等。  

浏览器解析HTML文件生成DOM树。

### 3、HTML语法  

1. 标签和属性不区分大小写，推荐使用小写，后续写自定义组件可以用大写表示，原生HTML用小写表示，方便区分。  
2. 空标签可以不闭合，如 input、meta、img等等。  
eg. <img> src = "" <img/>可以写成：<img src = "" />
3. 属性值建议用双引号表示。  

### 4、常见HTML标签  
**列表：**  
<li>即list item，表示列表中的元素  
<ol>即ordered list，表示有序列表  
<ul>即unordered list，表示无序列表  
<dl>即definition list，表示，<dt>即definition title，<dt>即difinition description  

<a>表示超链接，属性href（hyper reference）即超链接，属性值为需要跳转的链接。target属性值填_blank即新窗打开。  

**多媒体：**  
<img>即图片，alt属性即alternative text，当图片加载失败或不被加载的适合会显示alt，width即宽度。  
<audio>和<video>分别为音频和视频，属性src存放音频和视频文件的链接，属性controls表示音频或视频需要默认显示浏览器自带的音频或视频播放组件。  

**输入：**  

**<input>标签：**  
**placeholder:**占位符，用户无输入时默认输入框内显示的内容。  
**<input type>：**  
type=range页面上会渲染出一个滑动块  
type=number限制用户输入框内输入数字，min max可以限制用户输入数字的最大最小值。  
type=date输入日期  
type=checkbox打勾框。  
type=radio小圆点。  
当type=radio时，相同name属性的对象选择互斥。  
<select>下拉选择，<option>表示下拉选择的选项  
<input list>表示带选项的输入框。
<datalist>
<blockquote>块引用，blockquote中的cite属性表示块引用来源
<cite>标签表示短引用，引用几个字，用于引用作品名字或章节，当中的字会以斜体显示。
<q>标签用于引用内容，当中的文字会被用双引号引用。






<textarea>：多行输入框



