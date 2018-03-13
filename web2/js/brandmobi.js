function showMImg(){
		var mcircle1 = document.getElementById("mcircle1")
		var mcircle2 = document.getElementById("mcircle2")
		var mcircle3 = document.getElementById("mcircle3")
		var masia = document.getElementsByClassName("asia_pic")[0];
		var meuro = document.getElementsByClassName("euro_pic")[0];
		var mameri = document.getElementsByClassName("ameri_pic")[0];
	

	document.onclick = function(mevt) {	
		if(mevt.target.id == "mcircle1") {
			masia.style.display = "block";
			meuro.style.display = "none";
			mameri.style.display == "none";
		} else if(mevt.target.id == "mcircle2") {
			meuro.style.display = "block";
			masia.style.display = "none";
			mameri.style.display == "none";
		} else if(mevt.target.id == "mcircle3") {
			mameri.style.display = "block";
			masia.style.display = "none";
			meuro.style.display = "none";
		} else {
			masia.style.display = "none";
			meuro.style.display = "none";
			mameri.style.display = "none";
		}
	}	
}
window.addEventListener('load',showMImg);