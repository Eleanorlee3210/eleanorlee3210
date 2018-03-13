$(function(){
    
//==當按到右上角的按鈕時 就會做 OPENOPEN 開啟選單的動作 ============================

    $("#nav-toggle").on("click", OPENOPEN ); //當使用者按右上角的按鈕
    
    function OPENOPEN(){
        $(".menu").slideToggle(300); //JQ 的功能： 可以拉上拉下開啟DIV
    }
    

//==當使用者把瀏覽器畫面拉大的時候 就會做 CLEARSTYLE 清除 JQ CSS 的動作 =============  
    
    $(window).on("resize",CLEARSTYLE); //當使用者拉瀏覽器畫面的大小時
    
    function CLEARSTYLE(){
        if($(window).innerWidth()>736){ //條件：如果瀏覽器畫面的寬度大於736px的時候
            $(".menu").attr("style",""); //就把 JQ 產生的 style CSS 清除乾淨
        }
    }
    
});