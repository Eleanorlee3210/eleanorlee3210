function $id(id){
	return document.getElementById(id);
}
function secondflip(){
	$id("secondnewb").style.animation="newFlip .5s running";
	// newtimestop=setInterval(secondStop,500);

	$id("secondoldt").style.animation="oldFlip .5s running";
	// setTimeout(secondflip,1000);
	oldtimestop=setInterval(secondStop,500);
}
function secondStop(){
	$id("minutenewb").style.animation="paused";
	$id("secondnewb").style.animation="paused";
	// clearInterval(newtimestop);

	$id("minuteoldt").style.animation="paused";
	$id("secondoldt").style.animation="paused";
	clearInterval(oldtimestop);
}
function minuteFlip(){
	$id("minutenewb").style.animation="newFlip .5s running";
	newminutestop=setInterval(minuteStop,500);

	$id("minuteoldt").style.animation="oldFlip .5s running";
	oldminutestop=setInterval(minuteStop,500);
}
function minuteStop(){
	$id("minutenewb").style.animation="paused";
	clearInterval(newminutestop);

	$id("minuteoldt").style.animation="paused";
	clearInterval(oldminutestop);
}

function hourFlip(){
	$id("hournewb").style.animation="newFlip .5s running";
	newhourstop=setInterval(hourStop,500);

	$id("houroldt").style.animation="oldFlip .5s running";
	oldhourstop=setInterval(hourStop,500);
}
function hourStop(){
	$id("hournewb").style.animation="paused";
	clearInterval(newhourstop);

	$id("houroldt").style.animation="paused";
	clearInterval(oldhourstop);
}

function time(){
	var time = new Date();
	var second = time.getSeconds();
	var minute = time.getMinutes();
	var hour = time.getHours();
	if (second>=0 && second<10) {
		second=second.toString();
		second="0"+second;
	}
	if(minute>=0 && minute<10) {
		minute=minute.toString();
		minute="0"+minute;
	}
	if(hour>=0 && hour<10) {
		hour=hour.toString();
		hour="0"+hour;
	}
	// console.log(second.toString());
	$id("secondnewt").innerHTML = second;
	$id("secondnewb").innerHTML = second;
	$id("minutenewt").innerHTML = minute;
	$id("minutenewb").innerHTML = minute;
	$id("hournewt").innerHTML = hour;
	$id("hournewb").innerHTML = hour;

	if (second==0) {
		minuteFlip();
	}
	if (minute==0){
		hourFlip();
	}
	setTimeout(oldTime,200);
	// changetimestop=setInterval(oldTime,1500);
}
function oldTime(){
	var oldTime = new Date();
	var second = oldTime.getSeconds();
	var minute = oldTime.getMinutes();
	var hour = oldTime.getHours();
	if (second>=0 && second<10) {
		second=second.toString();
		second="0"+second;
	}
	if(minute>=0 && minute<10) {
		minute=minute.toString();
		minute="0"+minute;
	}
	if(hour>=0 && hour<10) {
		hour=hour.toString();
		hour="0"+hour;
	}
	// var old = time.getSeconds();
	$id("secondoldt").innerHTML = second;
	$id("secondoldb").innerHTML = second;
	$id("minuteoldt").innerHTML = minute;
	$id("minuteoldb").innerHTML = minute;
	$id("houroldt").innerHTML = hour;
	$id("houroldb").innerHTML = hour;
	// clearInterval(changetimestop);
}
var initTime = new Date();
var second = initTime.getSeconds();
var minute = initTime.getMinutes();
var hour = initTime.getHours();
var day = initTime.getDay();
if (second>=0 && second<10) {
	second=second.toString();
	second="0"+second;
}else if(minute>=0 && minute<10) {
	minute=minute.toString();
	minute="0"+minute;
}else if(hour>=0 && hour<10) {
	hour=hour.toString();
	hour="0"+hour;
}
$id("houroldt").innerHTML = hour;
$id("houroldb").innerHTML = hour;
$id("minuteoldt").innerHTML = minute;
$id("minuteoldb").innerHTML = minute;
$id("secondoldt").innerHTML = second;
$id("secondoldb").innerHTML = second;
// setInterval(secondflip,1000);
setInterval(secondflip,1000);
setInterval(time,1000);


$('.open').click(function(){
	$('.contactInfo').slideToggle();
	var dp = $('.contactInfo').css('display');
	console.log(dp);
	$('.contactbox').css({boxShadow:"0px 0px 5px #ccc"});
});
console.log(hour);
console.log(minute);
// console.log(second);
console.log(day);
if (day<5&&hour>=21&&minute>=30||day<5&&hour>=22||day>5&&hour>=22||hour<11) {
	$('.businessTime p').html('休息中').css({color:'#f00'});
	$('.businessTime i').attr('class','fa fa-moon-o').css({color:'#f00'});
	$('.businessTime i').css('animation','paused');
}
day++;
$('.contactbox .day p:nth-child('+day+')').addClass('active');