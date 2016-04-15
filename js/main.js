var lunarInfo=new Array(//阴历数据
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0)

var solar_month=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var day_gan=new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
var day_zhi=new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
var solar_term = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至")
//计算某年的第n个节气公历日期所需要的基础数据（类似于每月的多少天）
var sterm_info = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758)
var n_str1= new Array('日','一','二','三','四','五','六','七','八','九','十')
var n_str2 = new Array('初','十','廿','卅','　')

//国历节日 *表示放假日
var solar_fes = new Array(
"0101*元旦",
"0214 情人节",
"0308 妇女节",
"0312 植树节",
"0315 消费者权益日",
"0401 愚人节",
"0501*劳动节",
"0504 青年节",
"0512 护士节",
"0601 儿童节",
"0701 建党节 香港回归纪念",
"0801 建军节",
"0909 毛泽东逝世纪念",
"0910 教师节",
"0928 孔子诞辰",
"1001*国庆节",
"1006 老人节",
"1024 联合国日",
"1112 孙中山诞辰纪念",
"1220 澳门回归纪念",
"1225 圣诞节",
"1226 毛泽东诞辰纪念")

//农历节日 *表示放假日
var lunar_fes = new Array(
"0101*春节",
"0115 元宵节",
"0505 端午节",
"0707 七夕情人节",
"0715 中元节",
"0815 中秋节",
"0909 重阳节",
"1208 腊八节",
"1223 小年",
"0100*除夕");

var w_fes = new Array(
"0520 母亲节", "0630 父亲节");




var today = new Date();
var tY = today.getFullYear();
var tM = today.getMonth();
var tD = today.getDate();

var width = "130";
var offsetx = 2;
var offsety = 16;

var x = 0;
var y = 0;
var snow = 0;
var sw = 0;
var cnt = 0;

var dStyle;





// 时钟clock
setInterval("oTime()",1000);
function oTime() {
   today = new Date();
   var hou = today.getHours();
   var min=today.getMinutes(); //分
   var sec =today.getSeconds(); //秒
   if(sec<10)
      var sec ="0"+sec;
   if(min<10)
      var min= "0"+min;
   if(hou<10)
      var hou = "0"+hou;
   clock.innerHTML = '<span id="oTime">'+hou+':'+min+':'+sec+'</span>';
}


//返回农历第y年的总天数
function lunar_day(y) {
   var i, sum = 348
   for(i=0x8000; i>0x8; i>>=1) sum += (lunarInfo[y-1900] & i)? 1: 0
   return(sum+lunar_leap(y))
}

//返回农历第y年闰月的天数
function lunar_leap(y) {
   if(lunar_leap_m(y))  return((lunarInfo[y-1900] & 0x10000)? 30: 29)
   else return(0)
}

//返回农历第y年闰几月（1-12月），没闰返回0
function lunar_leap_m(y) {
   return(lunarInfo[y-1900] & 0xf)
}

//返回农历第y年第m月的总天数
function lunar_leap_d(y,m) {
   return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 )
}

//算出农历，把值传入到日期控件，返回农历日期控件
//该农历日期对象的属性：.year,.month,.day,.isLeap,
//.yearCyl,.monthCyl,.dayCyl
function Lunar(objDate) {

   var i, leap=0, temp=0
   var baseDate = new Date(1900,0,31);
   var offset   = (objDate - baseDate)/86400000

   this.dayCyl = offset + 40
   this.monCyl = 14

   for(i=1900; i<2050 && offset>0; i++) {
      temp = lunar_day(i)
      offset -= temp
      this.monCyl += 12
   }

   if(offset<0) {
      offset += temp;
      i--;
      this.monCyl -= 12
   }

   this.year = i
   this.yearCyl = i-1864

   leap = lunar_leap_m(i)
   this.isLeap = false

   for(i=1; i<13 && offset>0; i++) {
      if(leap>0 && i==(leap+1) && this.isLeap==false)
         { --i; this.isLeap = true; temp = lunar_leap(this.year); }
      else
         { temp = lunar_leap_d(this.year, i); }

      if(this.isLeap==true && i==(leap+1)) this.isLeap = false

      offset -= temp
      if(this.isLeap == false) this.monCyl ++
   }

   if(offset==0 && leap>0 && i==leap+1)
      if(this.isLeap)
         { this.isLeap = false; }
      else
         { this.isLeap = true; --i; --this.monCyl;}

   if(offset<0){ offset += temp; --i; --this.monCyl; }

   this.month = i
   this.day = offset + 1
}

function solar_day(y,m) {
   if(m==1)
      return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28)
   else
      return(solar_month[m])
}

//传入offset 传回干支，0=甲子
function cyclical(num) {
   return(day_gan[num%10]+day_zhi[num%12])
}

function cal_ele(sy,s_m,s_d,week,lYear,l_m,l_d,isLeap,c_y,c_m,cal_d) {

      this.color      = '';
      this.lunar_festival = '';
      this.solar_festival = '';
      this.solarTerms    = '';
      this.istoday    = false;
      this.sy         = sy;
      this.s_m        = s_m;
      this.s_d        = s_d;
      this.week       = week;
      this.lYear      = lYear;
      this.l_m        = l_m;
      this.l_d        = l_d;
      this.isLeap     = isLeap;
      this.c_y        = c_y;
      this.c_m        = c_m;
      this.cal_d      = cal_d;


}

//某年的第n个节气的公历日期（从0小寒算起）；节气的公历日期的计算参考网上算法
function sTerm(y,n) {
   var off_date = new Date( ( 31556925974.7*(y-1900) +sterm_info[n]*60000 ) + Date.UTC(1900,0,6,2,5) )
   return(off_date.getUTCDate())
}

function calendar(y,m) {
   var lunar_dpos = new Array(3)
   var solor_dobj, lunar_dobj, lY, lM, lD=1, lL, lX=0, t_1, t_2
  
   var n = 0,first_lunarm = 0

   solor_dobj = new Date(y,m,1)

   this.length    = solar_day(y,m)
   this.firstWeek = solor_dobj.getDay()


   for(var i=0;i<this.length;i++) {

      if(lD>lX) {
         solor_dobj = new Date(y,m,i+1)
         lunar_dobj = new Lunar(solor_dobj)
         lY    = lunar_dobj.year
         lM    = lunar_dobj.month
         lD    = lunar_dobj.day
         lL    = lunar_dobj.isLeap
         lX    = lL? lunar_leap(lY): lunar_leap_d(lY,lM)

         if(n==0) first_lunarm = lM
         lunar_dpos[n++] = i-lD+1
      }

      this[i] = new cal_ele(y, m+1, i+1, n_str1[(i+this.firstWeek)%7],
                               lY, lM, lD++, lL,
                               cyclical(lunar_dobj.yearCyl) ,cyclical(lunar_dobj.monCyl), cyclical(lunar_dobj.dayCyl++) )


      if((i+this.firstWeek)%7==0)   this[i].color = '#FF5F07'
      if((i+this.firstWeek)%14==13) this[i].color = '#FF5F07'
   }

   t_1=sTerm(y,m*2  )-1
   t_2=sTerm(y,m*2+1)-1
   this[t_1].solarTerms = solar_term[m*2]
   this[t_2].solarTerms = solar_term[m*2+1]
   if(m==3) this[t_1].color = '#FF5F07'



   for(i in w_fes)
      if(w_fes[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
         if(Number(RegExp.$1)==(m+1)) {
            t_1=Number(RegExp.$2)
            t_2=Number(RegExp.$3)
            this[((this.firstWeek>t_2)?7:0) + 7*(t_1-1) + t_2 - this.firstWeek].solar_festival += RegExp.$5 + ' '
         }

   for(i in lunar_fes)
      if(lunar_fes[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
         t_1=Number(RegExp.$1)-first_lunarm
         if(t_1==-11) t_1=1
         if(t_1 >=0 && t_1<n) {
            t_2 = lunar_dpos[t_1] + Number(RegExp.$2) -1
            if( t_2 >= 0 && t_2<this.length) {
               this[t_2].lunar_festival += RegExp.$4 + ' '
               if(RegExp.$3=='*') this[t_2].color = '#FF5F07'
            }
         }
      }
         for(i in solar_fes)
      if(solar_fes[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
         if(Number(RegExp.$1)==(m+1)) {
         var fes = isLeg(RegExp.$4, y);
         if(fes == "") continue;
            this[Number(RegExp.$2)-1].solar_festival += fes + ' '
            if(RegExp.$3=='*') this[Number(RegExp.$2)-1].color = '#FF5F07'
         }


   if(y==tY && m==tM) {
         this[tD-1].istoday = true;
      
   }

}

function cal_d(d){
        var s0;
        if(d==10)     {s0 = '初十';}
        else if(d==20){s0 = '二十';}
        else if(d==30){s0 = '三十';}
        else{ s0 = n_str2[Math.floor(d/10)]; s0 += n_str1[d%10];}
        return(s0);
}
function isLeg(fes, y){
   y = y - 0;
   switch(fes){
      case "元旦":
         if(y>1911 && y<1950){

         }else if(y>1949){
            fes = "新年";
         }else{
            fes = "";
         }
         break;
      case "情人节":
         break;
      case "妇女节":
         if(y<1911) fes = "";
         break;
      case "植树节":
         if(y<1979) fes = "";
         break;
      case "消费者权益日":
         if(y<1988) fes = "";
         break;
      case "愚人节":
         if(y<1564) fes = "";
         break;
      case "劳动节":
         if(y<1890) fes = "";
         break;
      case "青年节":
         if(y<1950) fes = "";
         break;
      case "护士节":
         if(y<1912) fes = "";
         break;
      case "儿童节":
         break;
      case "建党节 香港回归纪念":
         if(y<1911) fes = "";
         else if(y>1920 && y<1997) fes = "建党节";
         else fes = "中共建党纪念日/香港回归纪念日";
         break;
      case "建军节":
         break;
      case "父亲节":
         break;
      case "毛泽东逝世纪念":
         if(y<1976) fes = "";
         break;
      case "教师节":
         if(y<1985) fes = "";
         break;
      case "孔子诞辰":
         break;
      case "国庆节":
         if(y<1949) fes = "";
         break;
      case "老人节":
         break;
      case "联合国日":
         if(y<1945) fes = "";
         break;
      case "孙中山诞辰纪念":
         if(y<1966) fes = "";
         break;
      case "澳门回归纪念":
         if(y<1999) fes = "";
         break;
      case "圣诞节":
         break;
      case "毛泽东诞辰纪念":
         if(y<1893) fes = "";
         break;
   }
   return fes;
}

var cld;

function setCld(SY,SM) {
   var i,sD,s,size;
   cld = new calendar(SY,SM);

    animal_year.innerHTML = '<span class="smlb">'+Animals[(SY-4)%12]+'</span>';


   for(i=0;i<42;i++) {

      solar_obj=eval('SD'+ i);
      lunar_obj=eval('LD'+ i);

      solar_obj.style.background = '';
      lunar_obj.style.background = '';

      sD = i - cld.firstWeek;

      if(sD>-1 && sD<cld.length) {
         solar_obj.innerHTML = sD+1;


         if(cld[sD].istoday){
               solar_obj.style.background = '#DEFDFD';
               lunar_obj.style.background = '#91DAE3';
               // alert(i);
               addDay(i); 

         }

         solar_obj.style.color = cld[sD].color;

         if(cld[sD].l_d==1)
            lunar_obj.innerHTML = '<b>'+(cld[sD].isLeap?'闰':'') + cld[sD].l_m + '月' + (lunar_leap_d(cld[sD].lYear,cld[sD].l_m)==29?'小':'大')+'</b>';
         else
            lunar_obj.innerHTML = cal_d(cld[sD].l_d);

         s=cld[sD].lunar_festival;
         if(s.length>0) {
            if(s.length>5) s = s.substr(0, 3)+'…';
        
         }
         else {
            s=cld[sD].solar_festival;
            if(s.length>0) {
               size = (s.charCodeAt(0)>0 && s.charCodeAt(0)<128)?8:4;
               if(s.length>size+1) s = s.substr(0, size-1)+'…';
               s = s.fontcolor('#79B0F6');  //节日
            }
            else {
               s=cld[sD].solarTerms;//24节气
               if(s.length>0) s = s.fontcolor('#2EBEB7');
            }
         }
         if(s.length>0) lunar_obj.innerHTML = s;

      }
      else {
         solar_obj.innerHTML = ' ';
         lunar_obj.innerHTML = ' ';
      }
   }
  
}


function chaCld() {
   var y,m;
   y=calender_content.SY.selectedIndex+1900;
   m=calender_content.SM.selectedIndex;
   setCld(y,m);

}

// 年份，月份选择菜单栏
function BtN(V) {
            if(V=='year_d'&&calender_content.SY.selectedIndex>0) calender_content.SY.selectedIndex--;
            else if(V=='year_a'&&calender_content.SY.selectedIndex<149) calender_content.SY.selectedIndex++;
            else if(V=='month_d'){
                             if(calender_content.SM.selectedIndex>0) {calender_content.SM.selectedIndex--;
                             }else {calender_content.SM.selectedIndex=11;
                              if(calender_content.SY.selectedIndex>0) calender_content.SY.selectedIndex--;
                            }
                       }
             else if(V=='month_a'){
                             if(calender_content.SM.selectedIndex<11) { calender_content.SM.selectedIndex++;
                              }else {calender_content.SM.selectedIndex=0;
                             if(calender_content.SY.selectedIndex<149) calender_content.SY.selectedIndex++;
                            }
                       }
             else {
               calender_content.SY.selectedIndex=tY-1900;
               calender_content.SM.selectedIndex=tM;
            }
            chaCld();
         }



//生成日历数据
function addDay(v) {

   var s,fes;
   var solar_obj=eval('SD'+ v);
   var d=solar_obj.innerHTML-1;

   if(solar_obj.innerHTML!='') {
     
      solar_obj.style.cursor = 'pointer';
      fes = '<table><tr><td>'+'<span><b>'+cld[d].solarTerms + ' ' + cld[d].solar_festival + ' ' + cld[d].lunar_festival+'</b></span></td>'+
                 '</tr></table>';
         
         day_detal= 
                  '<table class="detallu"><tr><td>' +'<table><tr><td><span>'+ cld[d].sy+'-'+cld[d].s_m+'-'+cld[d].s_d+' 星期'+cld[d].week+'<br>'+
                  '<p style="font-family:courier;font-size: 54px;margin-right: -215%;margin-bottom: 52%;">'+cld[d].s_d+'</p>'+
                  '<span style=" float: right;margin-top: -86%;font-size: 13px;">'+ fes +'农历'+(cld[d].isLeap?'闰 ':' ')+cld[d].l_m+' 月 '+cld[d].l_d+' 日</span><br>'+
                  '<span style="float: right;margin-top: -71%;font-size: 13px;">'+cld[d].c_y+'年 '+cld[d].c_m+'月 '+cld[d].cal_d + '日</span>'
                  '</td></tr></table>';
             

      date_content.innerHTML = day_detal;


   }
}



function setCookie(name, value) {
   var today = new Date()
   var expires = new Date()
   expires.setTime(today.getTime() + 1000*60*60*24*365)
   document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString()
}

function getCookie(Name) {
   var search = Name + "="
   if(document.cookie.length > 0) {
      offset = document.cookie.indexOf(search)
      if(offset != -1) {
         offset += search.length
         end = document.cookie.indexOf(";", offset)
         if(end == -1) end = document.cookie.length
         return unescape(document.cookie.substring(offset, end))
      }
      else return ""
   }
}



function initial() {
   dStyle = detail.style;
   calender_content.SY.selectedIndex=tY-1900;
   calender_content.SM.selectedIndex=tM;
   setCld(tY,tM);
}

