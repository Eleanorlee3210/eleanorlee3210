function $id(id){
	return document.getElementById(id);
}
function optDay(){
	var selectMonth = $('#month option:selected').val();
	var selectYear = $('#year option:selected').val();
	// window.alert(selectMonth);
	// window.alert(selectYear);
	// selectMonth=selectMonth?selectMonth:1;
	var day = $id("day");
	var year = $id('year');
	var totalDay = 31;
	if (selectMonth == 4||selectMonth == 6||selectMonth == 9||selectMonth == 11) {
		totalDay = 30;
	}
	if (selectYear%400==0 && selectMonth==2) {
		totalDay=29;
	}else if (selectYear%100==0 && selectMonth==2){
		totalDay=28;
	}else if(selectYear%4==0 && selectMonth==2){
		totalDay=29;
	}else if(selectMonth==2){
		totalDay=28;
	}
	$('#day').empty();
	for(var i=1;i<=totalDay;i++){
		var value = i;
		var text = i;
		var opt = new Option(text,value);
		day.add(opt);
	}
}
function check(){
	var selectYear = $('#year option:selected').val();
	var selectMonth = $('#month option:selected').val();
	var selectDay = $('#day option:selected').val();
	console.log(selectYear+"y"+selectMonth+"m"+selectDay+"d");

	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth()+1;
	var day = today.getDate();
	console.log(year+"y"+month+"m"+day+"d");

	var years=(year-selectYear);
	var months=(month-selectMonth);
	var days=(day-selectDay);
	console.log(years);
	console.log(months);
	console.log(days);
	if (years<18) {
		window.alert("未成年請勿飲酒!");
	}else if(years==18 && months<0){
		window.alert("未成年請勿飲酒!");
	}else if( years==18 && months>=0 && days<0){
		window.alert("未成年請勿飲酒!");
	}else{
		document.location.href="frontpage.html";
	}
}
function init(){
	// select_month
	optDay();
	var month = $id("month");
	for(var i=1;i<=12;i++){
		var value = i;
		var text = i;
		var opt = new Option(text,value);
		month.add(opt);
	}
	// select_year
	for(var i=2018;i>=1911;i--){
		var value = i;
		var text = i;
		var opt = new Option(text,value);
		year.add(opt);
	}
	// select_day
	$('#month').change(function(){
		optDay();
	});
	$('#year').change(function(){
		optDay();
	});

	$id('btn').addEventListener("click",check,false);

}
window.onload=init;
