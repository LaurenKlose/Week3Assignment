var weekly;
var monthly = weekly * 4; 
var rides = 2.75;
var multiplication;

function metroCalc(){
	weekly = document.getElementById("weekly").value;
	monthly = weekly * 4;
	rides = 2.75;
	multiplication = monthly * rides;
	alert ("You spend " + multiplication + " a month on subway trips!");
	rightMetro();
}

function rightMetro(){
	if (multiplication > 116.50){
		alert("You should be buying a monthly Metro Card!");
	} else {
		alert("You are fine with paying for individual subway rides!")
	}
}