/* ----

小窝存活时间
---- */
function siteTime(){
window.setTimeout("siteTime()", 1000);
var seconds = 1000
var minutes = seconds * 60
var hours = minutes * 60
var days = hours * 24
var years = days * 365
var today = new Date()
var todayYear = today.getFullYear()
var todayMonth = today.getMonth()
var todayDate = today.getDate()
var todayHour = today.getHours()
var todayMinute = today.getMinutes()
var todaySecond = today.getSeconds()
/* Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳) 
year - 作为date对象的年份,为4位年份值
month - 0-11之间的整数,做为date对象的月份
day - 1-31之间的整数,做为date对象的天数
hours - 0(午夜24点)-23之间的整数,做为date对象的小时数
minutes - 0-59之间的整数,做为date对象的分钟数
seconds - 0-59之间的整数,做为date对象的秒数
microseconds - 0-999之间的整数,做为date对象的毫秒数 */
var t1 = Date.UTC(2023,3,26,00,00,00)
var t2 = Date.UTC(todayYear,todayMonth,todayDate,todayHour,todayMinute,todaySecond)
var diff = t2-t1
var diffYears = Math.floor(diff/years)
var diffDays = Math.floor((diff/days)-diffYears*365)
var diffHours = Math.floor((diff-(diffYears*365+diffDays)*days)/hours)
var diffMinutes = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes)
var diffSeconds = Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds)
document.getElementById("sitetime").innerHTML="<span>"+(diffYears*365+diffDays)+"</span> 天 <span>"+diffHours+"</span> 小时 <span>"+diffMinutes+"</span> 分钟 <span>"+diffSeconds+"</span> 秒"

}
siteTime()

/* 下雪特效 */
 (function($) {
	$.fn.snow = function(options) {
	var $flake = $('<div id="snowbox" />').css( {
	'position':'absolute','z-index':'9999','top':'-50px','cursor':'pointer'
}
).html('❄'),documentHeight  = $(document).height(),documentWidth   = $(document).width(),defaults = {
	minSize:10,maxSize:20,newOn:1000,flakeColor:"#AFDAEF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
}
,options = $.extend( {
	},defaults,options);
	var interval= setInterval( function() {
	var startPositionLeft = Math.random() * documentWidth - 100,startOpacity = 0.5 + Math.random(),sizeFlake = options.minSize + Math.random() * options.maxSize,endPositionTop = documentHeight - 200,endPositionLeft = startPositionLeft - 500 + Math.random() * 500,durationFall = documentHeight * 10 + Math.random() * 5000;
	$flake.clone().appendTo('body').css( {
	left:startPositionLeft,opacity:startOpacity,'font-size':sizeFlake,color:options.flakeColor
}
).animate( {
	top:endPositionTop,left:endPositionLeft,opacity:0.2
}
,durationFall,'linear',function() {
	$(this).remove()
}
);},options.newOn);};})(jQuery);
	$(function() {
	$.fn.snow( {
	minSize:5,/* 定义雪花最小尺寸 */  
       maxSize:50,/* 定义雪花最大尺寸 */  
         newOn:300  /* 定义密集程度，数字越小越密集 */
}
);});
