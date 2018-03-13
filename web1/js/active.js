$('#pic1').click(function(){
    $('#infobox1').slideToggle(500,'linear');
    $('h4:before').width('100%');
});
$('#pic2').click(function(){
    $('#infobox2').slideToggle(500,'linear');
});
$('#pic3').click(function(){
    $('#infobox3').slideToggle(500,'linear');
});
$('#pic4').click(function(){
    $('#infobox4').slideToggle(500,'linear');
});
$('#pic5').click(function(){
    $('#infobox5').slideToggle(500,'linear');
});
$('#pic6').click(function(){
    $('#infobox6').slideToggle(500,'linear');
});



$('.container').imagesLoaded(function (){
 
    // initialize
    $('.container').masonry({
        itemSelector: '.picItem',
        columnWidth: 0,
        animate: true,
        fitWidth:true
        // percentPosition: true

    })

});



function loadingClose(){
    $('#txtbox').css('display','none');
}
setTimeout(loadingClose,"1400");



var stop;


function down(){
    var num = $('.bigPic img').attr('num');
    var num = Number(num);
    num++;
    if (num>20) {
        num=1;
    }
    var newPic = toString(num);

    var changePic = "images/ferrari_img/picWall"+ num +".jpg";
    $('.bigPic img').attr('num',num);
    $('.bigPic img').attr('src',changePic);

}
function up(){
    var num = $('.bigPic img').attr('num');
    var num = Number(num);
    num--;
    if (num==0) {
        num=20;
    }
    var newPic = toString(num);

    var changePic = "images/ferrari_img/picWall"+ num +".jpg";
    $('.bigPic img').attr('num',num);
    $('.bigPic img').attr('src',changePic);
}
function Carousel(playStop){
    if (playStop==1) {
        clearTimeout(stop);
        var iconName = $('.playStop i').attr('class');
        if (iconName=="fa fa-pause") {
            $('.playStop i').attr('class','fa fa-play');
        }else{
            $('.playStop i').attr('class','fa fa-pause');
            Carousel();
        }
    }else{
        var num = $('.bigPic img').attr('num');
        var num = Number(num);
        num++;
        if (num>20) {
            num=1;
        }
        var newPic = toString(num);

        var changePic = "images/ferrari_img/picWall"+ num +".jpg";
        $('.bigPic img').attr('num',num);
        $('.bigPic img').attr('src',changePic);

        stop = setTimeout(Carousel,2000);
    }
    
}



// Carousel();
$('.picItem img').click(function(){
    var showPic = $(this).attr('src');
    $('.bigPic img').attr('src',showPic);
    $('.bigPic img').attr('num',$(this).attr('num'));
    $('.zoomPic').fadeIn(800);
});
$('.close').click(function(){
    $('.zoomPic').fadeOut(800);
    $('.playStop i').attr('class','fa fa-play');
    clearTimeout(stop);
});
$('.down').click(function(){
    down();
});
$('.up').click(function(){
    up();
});
$('.playStop').click(function(){
    Carousel(1);
});