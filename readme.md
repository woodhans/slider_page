# jQuery.slider
### author [Hans.Wu](http://www.hanswu.com/project/jquery_silder.html "jQuery.silder")
------------------------
===============================

jQuery.slider 滑入页面插件
分别向上、向下、向左、向右及中间由小变大滑入

=============================

## 目录
* [准备工作](#准备工作)
* [参数设置](#参数设置)
* [DEMO](#Demo)

## 准备工作
```
`引入js和css`
<link rel="stylesheet" href="%jspath%/jquery.slider.css" />
<script src="%jspath%/jquery.min.js"></script>
<script src="%jspath%/jquery.slider.min.js"></script>
```

## 参数设置
```javascript
$.slider({
	url:'',                 //需要加载的页面，必填
	direction:'up',         //页面滑入的方向，up, down, left, right, center
	width:'100%',           //页面宽度
	height:'100%',          //页面高度
	bgcolor:0xffffff,       //页面背景颜色，可以是颜色字符串或16进制颜色值
	radius:0,               //圆角值
	id:'',                  //页面ID
	zIndex:9000,            //z轴
	Completed:null,         //加载完毕回调函数
	Closed:null             //页面关闭回调函数
})
```

## Demo
[demo](./demo/demo.html "jQuery.slider Demo")