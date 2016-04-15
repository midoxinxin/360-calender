    

老黄历-项目总结
---

 地址 ：http://5.rose111.applinzi.com

Github :  https://github.com/midoxinxin/360-calender

![这里写图片描述](http://img.blog.csdn.net/20160415225135981)


android app:calender.apk

  


功能介绍
1.  底部菜单栏切换年，月；
2.  home键切换回到当前月；
3. 点击相应的日期显示农历及节气

 
亮点
1.android客户端:calender.apk
2.  客户端logo设计，图片素材设计（photoshop)

3兼容Chrome、 Firefox，以及国内主流浏览器。
4.适配大、中、小屏手机、pad等典型场景。

开发记录
1.节气计算 

```
//某年的第n个节气的公历日期
var sterm_info= new Array(0,21208,42467,63836,85337,107014,128867,150921,
173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758)

//某年的第n个节气的公历日期（从0小寒算起）
function sterm(y,n) {
   var offDate = new Date( ( 31556925974.7*(y-1900) + sterm_info[n]*60000  ) + Date.UTC(1900,0,6,2,5) )
   return(offDate.getUTCDate())
}


//获取2016年第一个节气小寒的公历日期
var sterm = sTermDate(2016,0);
var stdateStr = sterm.getFullYear()+"-"+(sterm.getMonth()+1)+"-"+sterm.getUTCDate();



```
2.计算每年闰月/每月天数


```
//表示1900-2049年阴历数据
var lunar_info=new Array(//
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0)


```
上述阴历数据的正确的解释是：
二进制形式
xxxx  	 xxxx	   xxxx	  xxxx  	xxxx
20-17	16-12	12-9	  8-5   	4-1
1-4: 表示当年有无闰年，有的话，为闰月的月份，没有的话，为0。
5-16：为除了闰月外的正常月份是大月还是小月，1为30天，0为29天。
注意：从1月到12月对应的是第16位到第5位。
17-20： 表示闰月是大月还是小月，仅当存在闰月的情况下有意义。
Example：
1980年的数据是： 0x095b0
二进制：00001001 0101 1011 0000
表示1980年没有闰月，从1月到12月的天数依次为：30、29、29、30、29、30、29、30、30、29、30、30。
1982年的数据是：0x0a974
0000 1010 1010 0111 0100
表示1982年的4月为闰月，即有第二个4月，且是闰小月。
从1月到13月的天数依次为：30、29、30、29、29(闰月)、30、29、30、29、29、30、30、30。

问题：
一.手机端自适应
1.在HTML头部增加viewport标签
2. 布局宽度使用相对宽度。 

二：select默认样式更改

1.   默认选择框样式清除，隐藏下拉箭头
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none; 


4. android移动端开发
 基于phonegap开发android端应用

     PhoneGap是一套能让你使用HTML5轻松调用本地API接口和发布应用到商店的应用开发平台。官方说有低成本，低开发周期，轻量化等优点，这些咱暂时也没法证明，略过不表。但是有一条跨平台，却是很明显的优势。

1.Android开发环境的部署。
第一步：安装JDK。
第二步：配置Windows上JDK的变量环境 。
第三步： 下载安装Eclipse 。
第四步：下载安装Android SDK 。
第五步：为Eclipse安装ADT插件。

2.项目应用打包


参考文档：http://blog.csdn.net/u014345282/article/details/50997590
5.项目线上托管（git  新浪云）
地   址 ：http://5.rose111.applinzi.com
Github :  https://github.com/midoxinxin/360-calender
