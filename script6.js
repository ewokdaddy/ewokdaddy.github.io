/**
 * 
 */
var x;

function touchbackhome() {	
	x = parseInt(document.getElementById('touchbackhome').value);	
	x++;
	document.getElementById('touchbackhome').value = x;
}

function kickreturnhome() {	
	x = parseInt(document.getElementById('kickreturnhome').value);	
	x++;
	document.getElementById('kickreturnhome').value = x;
}


//print something to say that I pressed the button
//document.getElementById("ballst").innerHTML = "B";
//setTimeout(function() {
//	document.getElementById("ballst").innerHTML = " ";
//}, delay);