var currentDate = new Date;
currentHour = currentDate.getHours();
var btn = document.createElement("BUTTON");
var text = document.createTextNode("Check if it's High Noon");

main();

function initiate(){
	btn.appendChild(text);
	document.getElementById("body").appendChild(btn);
	
}
function main(){
	initiate();
	btn.addEventListener("click",check);
}

function check(){
	if (currentHour == 12)
		highnoon.play();
	else
		highnoonsomewhere.play();
}