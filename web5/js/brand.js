function showImg(){
	var circle1 = document.getElementById("circle1")
	var circle2 = document.getElementById("circle2")
	var circle3 = document.getElementById("circle3")
	var ameri = document.getElementsByClassName("Ameri")[0];
	var euro = document.getElementsByClassName("Euro")[0];
	var asia = document.getElementsByClassName("Asia")[0];
	

	
	
	document.onclick = function(evt) {
		console.log(evt.target.id);
		if(evt.target.id == "circle1") {
			ameri.style.display = "block";
			euro.style.display = "none";
			asia.style.display = "none";
		} else if (evt.target.id == "circle2") {
			ameri.style.display = "none";
			euro.style.display = "block";
			asia.style.display = "none";
		} else if (evt.target.id == "circle3") {
			console.log(ameri);
			ameri.style.display = "none";
			euro.style.display = "none";
			asia.style.display = "block";
		} else {
			ameri.style.display = "none";
			euro.style.display = "none";
			asia.style.display = "none";
		}
	}
}
window.addEventListener('load',showImg);
