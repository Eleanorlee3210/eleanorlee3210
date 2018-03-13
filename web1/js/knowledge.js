function loadingClose(){
    $('#txtbox').css('display','none');
}
$(document).ready(function(){
    new WOW().init();
    setTimeout(loadingClose,"1400");
});