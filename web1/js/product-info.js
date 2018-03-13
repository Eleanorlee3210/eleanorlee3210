function $id(id){
    return document.getElementById(id);
}
function picOpen(){
    $id('pic').style.display='block';
    $id('small').style.display='block';
    $id('info').style.display='none';
}
function infoOpen(){
    $id('pic').style.display='none';
    $id('small').style.display='none';
    $id('info').style.display='block';
}
function loadingClose(){
    $('#txtbox').css('display','none');
}
function init(){
    $id('picbtn').addEventListener("click",picOpen,false);
    $id('infobtn').addEventListener("click",infoOpen,false);
    
    $(window).resize(function() {
        var wdth=$(window).width();
        if (wdth>767) {
            $id('info').style.display='block';
            $id('pic').style.display='block';
        }else{
            $id('info').style.display='none';
            $id('pic').style.display='block';
        }
    });



    $('#small img').click(function(){
        $('#pic img').attr('src',$(this).attr('src'));
        $('#zoompic img').attr('src',$(this).attr('src'));
    });
    setTimeout(loadingClose,"1400");
}
window.onload=init;