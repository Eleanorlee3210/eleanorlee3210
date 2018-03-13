var redBtn = $id("redwine");
var sparklingBtn = $id("sparkling");
var whiteBtn = $id("whitewine");

function $id(id){
    return document.getElementById(id);
}
function redwineOpen(){
    redBtn.style.backgroundColor="rgba(124,25,36,1)";
    redBtn.style.color="#fff";
    sparklingBtn.style.backgroundColor="#fff";
    sparklingBtn.style.color="#000";
    whiteBtn.style.backgroundColor="#fff";
    whiteBtn.style.color="#000";

    $id("redwine-list").style.display="block";
    $id("sparkling-list").style.display="none";
    $id("whitewine-list").style.display="none";
        // document.querySelectorAll(".product .sort .product-list:before").style.left="238px";
    }
    function sparklingOpen(){
        redBtn.style.backgroundColor="#fff";
        redBtn.style.color="#000";
        sparklingBtn.style.backgroundColor="rgba(124,25,36,1)";
        sparklingBtn.style.color="#fff";
        whiteBtn.style.backgroundColor="#fff";
        whiteBtn.style.color="#000";

        $id("redwine-list").style.display="none";
        $id("sparkling-list").style.display="block";
        $id("whitewine-list").style.display="none";
    }
    function whitewineOpen(){
        redBtn.style.backgroundColor="#fff";
        redBtn.style.color="#000";
        sparklingBtn.style.backgroundColor="#fff";
        sparklingBtn.style.color="#000";
        whiteBtn.style.backgroundColor="rgba(124,25,36,1)";
        whiteBtn.style.color="#fff";

        $id("redwine-list").style.display="none";
        $id("sparkling-list").style.display="none";
        $id("whitewine-list").style.display="block";
    }
    function loadingClose(){
        $('#txtbox').css('display','none');
    }
    function init(){
        sparklingOpen();
        redBtn.onclick=redwineOpen;
        sparklingBtn.onclick=sparklingOpen;
        whiteBtn.onclick=whitewineOpen; 
        setTimeout(loadingClose,"1400");
    }
    window.onload=init;