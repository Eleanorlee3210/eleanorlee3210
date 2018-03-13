$('#submenu li a').click(function(e){
    var jump = $(this).attr('href');
    e.preventDefault();
    setTimeout(function(){
        document.location.href=jump;
    },1000);
});

$('#submenu li a').click(function(){
    $('.triangleBox').css('display','block');
});

