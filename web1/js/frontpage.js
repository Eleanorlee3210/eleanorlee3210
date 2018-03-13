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

		$id("redwine-product-list").style.display="block";
		$id("sparkling-product-list").style.display="none";
		$id("whitewine-product-list").style.display="none";
        // document.querySelectorAll(".product .sort .product-list:before").style.left="238px";
	}
	function sparklingOpen(){
		redBtn.style.backgroundColor="#fff";
		redBtn.style.color="#000";
		sparklingBtn.style.backgroundColor="rgba(124,25,36,1)";
		sparklingBtn.style.color="#fff";
		whiteBtn.style.backgroundColor="#fff";
		whiteBtn.style.color="#000";

		$id("redwine-product-list").style.display="none";
		$id("sparkling-product-list").style.display="block";
		$id("whitewine-product-list").style.display="none";
	}
	function whitewineOpen(){
		redBtn.style.backgroundColor="#fff";
		redBtn.style.color="#000";
		sparklingBtn.style.backgroundColor="#fff";
		sparklingBtn.style.color="#000";
		whiteBtn.style.backgroundColor="rgba(124,25,36,1)";
		whiteBtn.style.color="#fff";

		$id("redwine-product-list").style.display="none";
		$id("sparkling-product-list").style.display="none";
		$id("whitewine-product-list").style.display="block";
	}
	function init(){
		sparklingOpen();
		redBtn.onclick=redwineOpen;
		sparklingBtn.onclick=sparklingOpen;
		whiteBtn.onclick=whitewineOpen;	
	}
	window.onload=init;