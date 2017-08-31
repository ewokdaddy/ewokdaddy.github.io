var delay = 500;
var tempPitches = 0;
var inningTop = 1;
var x = 0;
var TOPBATTERS = [ "b1inn1T", "b1inn2T", "b1inn3T", "b1inn4T", "b1inn5T",
		"b1inn6T", "b1inn7T", "b1inn8T", "b1inn9T", "b1inn10T", "b1inn11T",
		"b1inn12T", "b2inn1T", "b2inn2T", "b2inn3T", "b2inn4T", "b2inn5T",
		"b2inn6T", "b2inn7T", "b2inn8T", "b2inn9T", "b2inn10T", "b2inn11T",
		"b2inn12T", "b3inn1T", "b3inn2T", "b3inn3T", "b3inn4T", "b3inn5T",
		"b3inn6T", "b3inn7T", "b3inn8T", "b3inn9T", "b3inn10T", "b3inn11T",
		"b3inn12T", "b4inn1T", "b4inn2T", "b4inn3T", "b4inn4T", "b4inn5T",
		"b4inn6T", "b4inn7T", "b4inn8T", "b4inn9T", "b4inn10T", "b4inn11T",
		"b4inn12T", "b5inn1T", "b5inn2T", "b5inn3T", "b5inn4T", "b5inn5T",
		"b5inn6T", "b5inn7T", "b5inn8T", "b5inn9T", "b5inn10T", "b5inn11T",
		"b5inn12T", "b6inn1T", "b6inn2T", "b6inn3T", "b6inn4T", "b6inn5T",
		"b6inn6T", "b6inn7T", "b6inn8T", "b6inn9T", "b6inn10T", "b6inn11T",
		"b6inn12T", "b7inn1T", "b7inn2T", "b7inn3T", "b7inn4T", "b7inn5T",
		"b7inn6T", "b7inn7T", "b7inn8T", "b7inn9T", "b7inn10T", "b7inn11T",
		"b7inn12T", "b8inn1T", "b8inn2T", "b8inn3T", "b8inn4T", "b8inn5T",
		"b8inn6T", "b8inn7T", "b8inn8T", "b8inn9T", "b8inn10T", "b8inn11T",
		"b8inn12T", "b9inn1T", "b9inn2T", "b9inn3T", "b9inn4T", "b9inn5T",
		"b9inn6T", "b9inn7T", "b9inn8T", "b9inn9T", "b9inn10T", "b9inn11T",
		"b9inn12T" ];
var NEXTT = "NEXT";

var TOP2GOBATTERS = [ "b1inn1T", "b4inn2T", "b8inn3T", "b3inn4T", "b7inn5T",
		"b2inn6T", "b5inn7T", "b8inn8T", "b3inn9T", "b6inn10T", "b1inn11T",
		"b4inn12T" ];

/* var LEADOFF = [ "0", "37", "86", "27", "76", "17", "54", "91", "32" ]; */
var LEADOFF = [ "0", "1", "2", "3", "4", "5", "6", "7", "8" ];
var strikesT = 0;
var foulsT = 0;
var totalPitchesTop = 0;
var hits = 0;
var runsT = 0;
var PitchesTop1st;
var PitchesTop2nd;
var PitchesTop3rd;
var PitchesTop4th;
var PitchesTop5th;
var PitchesTop6th;
var PitchesTop7th;
var PitchesTop8th;
var PitchesTop9th;

function totalHitsT() {
	// look at hits1T + hits2T + hits3T + hits4T----hits9T and put inside 'hiT'
	var a = parseInt(document.getElementById('hits1T').value);
	var b = parseInt(document.getElementById('hits2T').value);
	var c = parseInt(document.getElementById('hits3T').value);
	var d = parseInt(document.getElementById('hits4T').value);
	var e = parseInt(document.getElementById('hits5T').value);
	var f = parseInt(document.getElementById('hits6T').value);
	var g = parseInt(document.getElementById('hits7T').value);
	var h = parseInt(document.getElementById('hits8T').value);
	var i = parseInt(document.getElementById('hits9T').value);
	var total = a + b + c + d + e + f + g + h + i;
	document.getElementById('hiT').value = total;
}

function totalHitsB() {
	// look at hits1B and add to hits2B and put inside 'hiB'
	var a = parseInt(document.getElementById('hits1B').value);
	var b = parseInt(document.getElementById('hits2B').value);
	var c = parseInt(document.getElementById('hits3B').value);
	var d = parseInt(document.getElementById('hits4B').value);
	var e = parseInt(document.getElementById('hits5B').value);
	var f = parseInt(document.getElementById('hits6B').value);
	var g = parseInt(document.getElementById('hits7B').value);
	var h = parseInt(document.getElementById('hits8B').value);
	var i = parseInt(document.getElementById('hits9B').value);
	var total = a + b + c + d + e + f + g + h + i;
	document.getElementById('hiB').value = total;

}

function ballsTopFunction() {
	
	var ballstemp = parseInt(document.getElementById('baT').value);	
	ballstemp++;
	document.getElementById('baT').value = ballstemp;
		
	// print something to say that I pressed the button
	document.getElementById("ballst").innerHTML = "B";
	setTimeout(function() {
		document.getElementById("ballst").innerHTML = " ";
	}, delay);
}

function strikesTopFunction() {
	var strikestemp = parseInt(document.getElementById('stT').value);
	strikestemp++;
	document.getElementById('stT').value = strikestemp;
	document.getElementById("strikest").innerHTML = "S";
	setTimeout(function() {
		document.getElementById("strikest").innerHTML = " ";
	}, delay);
}

function foulballsTopFunction() {
	var strikestemp = parseInt(document.getElementById('stT').value);
	strikestemp++;
	document.getElementById('stT').value = strikestemp;
	var foulstemp = parseInt(document.getElementById('fbT').value);
	foulstemp++;
	document.getElementById('fbT').value = foulstemp;
	document.getElementById("foulst").innerHTML = "F";
	setTimeout(function() {
		document.getElementById("foulst").innerHTML = " ";
	}, delay);
}

function hitsTopFunction() {
	var hitstemp = parseInt(document.getElementById('hiT').value);
	hitstemp++;
	document.getElementById('hiT').value = hitstemp;
	document.getElementById("hitst").innerHTML = "H";
	setTimeout(function() {
		document.getElementById("hitst").innerHTML = " ";
	}, delay);
}

function runsTopFunction() {
	runstemp = parseInt(document.getElementById('ruT').value);
	runstemp++;
	document.getElementById('ruT').value = runstemp;
	document.getElementById("runst").innerHTML = "R";
	setTimeout(function() {
		document.getElementById("runst").innerHTML = " ";
	}, delay);
}

function thirdoutT() {
	document.getElementById(TOPBATTERS[LEADOFF[x]]).focus();
	document.getElementById("pitchertop").focus();
	// document.getElementById(TOPBATTERS[LEADOFF[x]]).placeholder = NEXTT;
	x++;
}

function focusBot() {
	document.getElementById("bot").focus();
	tempPitches = 0;
	document.getElementById('tempPitchesTop').value = tempPitches;
}

function displayotherB() {
	document.getElementById('otherB').value = document.getElementById('sumB').value;
}
function displayotherT() {
	document.getElementById('otherT').value = document.getElementById('sumT').value;
}

function addPitchesTopFunction() {
	var ballsT = parseInt(document.getElementById('baT').value);
	var strikesT = parseInt(document.getElementById('stT').value);
	totalPitchesTop = ballsT + strikesT;
	tempPitches = parseInt(document.getElementById('tempPitchesTop').value);
	tempPitches++;
	document.getElementById('sumT').value = totalPitchesTop;
	document.getElementById('tempPitchesTop').value = tempPitches;

	// calculate the strikes to pitches ratio--(s/p)*100
	var strikes = parseInt(document.getElementById('stT').value);
	var pitches = parseInt(document.getElementById('sumT').value);
	var ratio = parseFloat((strikes / pitches) * 100);
	var ratiotemp = parseInt(ratio);
	document.getElementById('ratioT').value = (ratiotemp);
}

function pitchesTop1Function() {
	totalPitchesTop = parseInt(document.getElementById('sumT').value);
	document.getElementById('1stTop').value = totalPitchesTop;
	document.getElementById('1stTop').style.backgroundColor = "aqua";
}

function pitchesTop2Function() {
	totalPitchesTop = parseInt(document.getElementById('sumT').value);
	PitchesTop2nd = parseInt(document.getElementById('2ndTop').value);
	PitchesTop1st = parseInt(document.getElementById('1stTop').value);
	document.getElementById('2ndTop').value = totalPitchesTop - PitchesTop1st;
	document.getElementById('2ndTop').style.backgroundColor = "aqua";
}

function pitchesTop3Function() {
	totalPitchesTop = parseInt(document.getElementById('sumT').value);
	PitchesTop3rd = parseInt(document.getElementById('3rdTop').value);
	PitchesTop2nd = parseInt(document.getElementById('2ndTop').value);
	PitchesTop1st = parseInt(document.getElementById('1stTop').value)
	document.getElementById('3rdTop').value = totalPitchesTop - PitchesTop2nd
			- PitchesTop1st;
	document.getElementById('3rdTop').style.backgroundColor = "aqua";
}

function pitchesTop4Function() {
	totalPitchesTop = parseInt(document.getElementById('sumT').value);
	PitchesTop4th = parseInt(document.getElementById('4thTop').value);
	PitchesTop3rd = parseInt(document.getElementById('3rdTop').value);
	PitchesTop2nd = parseInt(document.getElementById('2ndTop').value);
	PitchesTop1st = parseInt(document.getElementById('1stTop').value);
	document.getElementById('4thTop').value = totalPitchesTop - PitchesTop3rd
			- PitchesTop2nd - PitchesTop1st;
	document.getElementById('4thTop').style.backgroundColor = "aqua";

}

function pitchesTop5Function() {
	totalPitchesTop = parseInt(document.getElementById('sumT').value);
	PitchesTop5th = parseInt(document.getElementById('5thTop').value);
	PitchesTop4th = parseInt(document.getElementById('4thTop').value);
	PitchesTop3rd = parseInt(document.getElementById('3rdTop').value);
	PitchesTop2nd = parseInt(document.getElementById('2ndTop').value);
	PitchesTop1st = parseInt(document.getElementById('1stTop').value);
	document.getElementById('5thTop').value = totalPitchesTop - PitchesTop4th
			- PitchesTop3rd - PitchesTop2nd - PitchesTop1st;
	document.getElementById('5thTop').style.backgroundColor = "aqua";

}

function pitchesTop6Function() {
	totalPitchesTop = parseInt(document.getElementById('sumT').value);
	PitchesTop6th = parseInt(document.getElementById('6thTop').value);
	PitchesTop5th = parseInt(document.getElementById('5thTop').value);
	PitchesTop4th = parseInt(document.getElementById('4thTop').value);
	PitchesTop3rd = parseInt(document.getElementById('3rdTop').value);
	PitchesTop2nd = parseInt(document.getElementById('2ndTop').value);
	PitchesTop1st = parseInt(document.getElementById('1stTop').value);
	document.getElementById('6thTop').value = totalPitchesTop - PitchesTop5th
			- PitchesTop4th - PitchesTop3rd - PitchesTop2nd - PitchesTop1st;
	document.getElementById('6thTop').style.backgroundColor = "aqua";

}

function pitchesTop7Function() {
	totalPitchesTop = parseInt(document.getElementById('sumT').value);
	PitchesTop7th = parseInt(document.getElementById('7thTop').value);
	PitchesTop6th = parseInt(document.getElementById('6thTop').value);
	PitchesTop5th = parseInt(document.getElementById('5thTop').value);
	PitchesTop4th = parseInt(document.getElementById('4thTop').value);
	PitchesTop3rd = parseInt(document.getElementById('3rdTop').value);
	PitchesTop2nd = parseInt(document.getElementById('2ndTop').value);
	PitchesTop1st = parseInt(document.getElementById('1stTop').value);
	document.getElementById('7thTop').value = totalPitchesTop - PitchesTop6th
			- PitchesTop5th - PitchesTop4th - PitchesTop3rd - PitchesTop2nd
			- PitchesTop1st;
	document.getElementById('7thTop').style.backgroundColor = "aqua";

}

function pitchesTop8Function() {
	totalPitchesTop = parseInt(document.getElementById('sumT').value);
	PitchesTop8th = parseInt(document.getElementById('8thTop').value);
	PitchesTop7th = parseInt(document.getElementById('7thTop').value);
	PitchesTop6th = parseInt(document.getElementById('6thTop').value);
	PitchesTop5th = parseInt(document.getElementById('5thTop').value);
	PitchesTop4th = parseInt(document.getElementById('4thTop').value);
	PitchesTop3rd = parseInt(document.getElementById('3rdTop').value);
	PitchesTop2nd = parseInt(document.getElementById('2ndTop').value);
	PitchesTop1st = parseInt(document.getElementById('1stTop').value);
	document.getElementById('8thTop').value = totalPitchesTop - PitchesTop7th
			- PitchesTop6th - PitchesTop5th - PitchesTop4th - PitchesTop3rd
			- PitchesTop2nd - PitchesTop1st;
	document.getElementById('8thTop').style.backgroundColor = "aqua";

}

function pitchesTop9Function() {
	totalPitchesTop = parseInt(document.getElementById('sumT').value);
	PitchesTop9th = parseInt(document.getElementById('9thTop').value);
	PitchesTop8th = parseInt(document.getElementById('8thTop').value);
	PitchesTop7th = parseInt(document.getElementById('7thTop').value);
	PitchesTop6th = parseInt(document.getElementById('6thTop').value);
	PitchesTop5th = parseInt(document.getElementById('5thTop').value);
	PitchesTop4th = parseInt(document.getElementById('4thTop').value);
	PitchesTop3rd = parseInt(document.getElementById('3rdTop').value);
	PitchesTop2nd = parseInt(document.getElementById('2ndTop').value);
	PitchesTop1st = parseInt(document.getElementById('1stTop').value);
	document.getElementById('9thTop').value = totalPitchesTop - PitchesTop8th
			- PitchesTop7th - PitchesTop6th - PitchesTop5th - PitchesTop4th
			- PitchesTop3rd - PitchesTop2nd - PitchesTop1st;
	document.getElementById('9thTop').style.backgroundColor = "aqua";

}

function ballsBotFunction() {
	var ballsB = parseInt(document.getElementById('baB').value);
	ballsB++;
	document.getElementById('baB').value = ballsB;
	document.getElementById("ballsb").innerHTML = "B";
	setTimeout(function() {
		document.getElementById("ballsb").innerHTML = " ";
	}, delay);
}
function addPitchesBotFunction() {
	var strikesB = parseInt(document.getElementById('stB').value);
	var ballsB = parseInt(document.getElementById('baB').value);
	totalPitchesBot = ballsB + strikesB;
	tempPitches = parseInt(document.getElementById('tempPitchesBot').value);
	tempPitches++;
	document.getElementById('sumB').value = totalPitchesBot
	document.getElementById('tempPitchesBot').value = tempPitches;

	// calculate the strikes to pitches ratio--(s/p)*100
	var strikes = parseInt(document.getElementById('stB').value);
	var pitches = parseInt(document.getElementById('sumB').value);
	var ratio = parseFloat((strikes / pitches) * 100);
	var ratiotemp = parseInt(ratio);
	document.getElementById('ratioB').value = (ratiotemp);
}

function strikesBotFunction() {
	var strikesB = parseInt(document.getElementById('stB').value);
	strikesB++;
	document.getElementById('stB').value = strikesB;
	document.getElementById("strikesb").innerHTML = "S";
	setTimeout(function() {
		document.getElementById("strikesb").innerHTML = " ";
	}, delay);
}

function foulballsBotFunction() {
	var strikesB = parseInt(document.getElementById('stB').value);
	strikesB++;
	document.getElementById('stB').value = strikesB;
	var foulsB = parseInt(document.getElementById('fbB').value);
	foulsB++;
	document.getElementById('fbB').value = foulsB;
	document.getElementById("foulsb").innerHTML = "F";
	setTimeout(function() {
		document.getElementById("foulsb").innerHTML = " ";
	}, delay);
}

function hitsBotFunction() {
	var hitsb = parseInt(document.getElementById('hiB').value);
	hitsB++;
	document.getElementById('hiB').value = hitsB;
	document.getElementById("hitsb").innerHTML = "H";
	setTimeout(function() {
		document.getElementById("hitsb").innerHTML = " ";
	}, delay);
}

function runsBotFunction() {
	runsB = parseInt(document.getElementById('ruB').value);
	runsB++;
	document.getElementById('ruB').value = runsB;
	document.getElementById("runsb").innerHTML = "R";
	setTimeout(function() {
		document.getElementById("runsb").innerHTML = " ";
	}, delay);
}

function shiftFocusT() {
	document.getElementById(TOPBATTERS[LEADOFF[x]]).focus();
	tempPitches = 0;
	document.getElementById('tempPitchesTop').value = tempPitches;
}

function shiftFocusB() {
	document.getElementById(BOTBATTERS[LEADOFF[y]]).focus();
	tempPitches = 0;
	document.getElementById('tempPitchesBot').value = tempPitches;
}

function thirdoutB() {
	document.getElementById(BOTBATTERS[LEADOFF[y]]).focus();
	document.getElementById("pitcherbot").focus();
	// document.getElementById(BOTBATTERS[LEADOFF[y]]).placeholder = NEXTB;
	y++;
}

// batter1 is b1inn1T, batter13 is next in line
var y = 0;
var countBotBatter;
var BOTBATTERS = [ "b1inn1B", "b1inn2B", "b1inn3B", "b1inn4B", "b1inn5B",
		"b1inn6B", "b1inn7B", "b1inn8B", "b1inn9B", "b1inn10B", "b1inn11B",
		"b1inn12B", "b2inn1B", "b2inn2B", "b2inn3B", "b2inn4B", "b2inn5B",
		"b2inn6B", "b2inn7B", "b2inn8B", "b2inn9B", "b2inn10B", "b2inn11B",
		"b2inn12B", "b3inn1B", "b3inn2B", "b3inn3B", "b3inn4B", "b3inn5B",
		"b3inn6B", "b3inn7B", "b3inn8B", "b3inn9B", "b3inn10B", "b3inn11B",
		"b3inn12B", "b4inn1B", "b4inn2B", "b4inn3B", "b4inn4B", "b4inn5B",
		"b4inn6B", "b4inn7B", "b4inn8B", "b4inn9B", "b4inn10B", "b4inn11B",
		"b4inn12B", "b5inn1B", "b5inn2B", "b5inn3B", "b5inn4B", "b5inn5B",
		"b5inn6B", "b5inn7B", "b5inn8B", "b5inn9B", "b5inn10B", "b5inn11B",
		"b5inn12B", "b6inn1B", "b6inn2B", "b6inn3B", "b6inn4B", "b6inn5B",
		"b6inn6B", "b6inn7B", "b6inn8B", "b6inn9B", "b6inn10B", "b6inn11B",
		"b6inn12B", "b7inn1B", "b7inn2B", "b7inn3B", "b7inn4B", "b7inn5B",
		"b7inn6B", "b7inn7B", "b7inn8B", "b7inn9B", "b7inn10B", "b7inn11B",
		"b7inn12B", "b8inn1B", "b8inn2B", "b8inn3B", "b8inn4B", "b8inn5B",
		"b8inn6B", "b8inn7B", "b8inn8B", "b8inn9B", "b8inn10B", "b8inn11B",
		"b8inn12B", "b9inn1B", "b9inn2B", "b9inn3B", "b9inn4B", "b9inn5B",
		"b9inn6B", "b9inn7B", "b9inn8B", "b9inn9B", "b9inn10B", "b9inn11B",
		"b9inn12B" ];
var NEXTB = "NEXT";

var BOTGO2BATTERS = [ "b1inn1B", "b4inn2B", "b8inn3B", "b3inn4B", "b7inn5T",
		"b2inn6T", "b5inn7T", "b8inn8T", "b3inn9T", "b6inn10T", "b1inn11B",
		"b4inn12B" ];
var ballsB = 0;
var strikesB = 0;
var foulsB = 0;
var hitsB = 0;
var runsB = 0;

var totalPitchesBot = 0;
var PitchesBot1st;
var PitchesBot2nd;
var PitchesBot3rd;
var PitchesBot4th;
var PitchesBot5th;
var PitchesBot6th;
var PitchesBot7th;
var PitchesBot8th;
var PitchesBot9th;

function ShowLeadoffHitterTop1(event) {
	var x = event.which || event.keyCode;
	if (x == 13) { // the enter key is 13
		document.getElementById("top").focus();
	}
	var name = document.getElementById('top1').value;
	document.getElementById('currentbatterT').value = name;
	var b1inn1T = document.getElementById('b1inn1T').value;
	var b1inn2T = document.getElementById('b1inn2T').value;
	var b1inn3T = document.getElementById('b1inn3T').value;
	var b1inn4T = document.getElementById('b1inn4T').value;
	var b1inn5T = document.getElementById('b1inn5T').value;
	var b1inn6T = document.getElementById('b1inn6T').value;
	var b1inn7T = document.getElementById('b1inn7T').value;
	var b1inn8T = document.getElementById('b1inn8T').value;
	var b1inn9T = document.getElementById('b1inn9T').value;
	var b1inn10T = document.getElementById('b1inn10T').value;
	var b1inn11T = document.getElementById('b1inn11T').value;
	var b1inn12T = document.getElementById('b1inn12T').value;
	document.getElementById('paTop').value = b1inn1T + "," + b1inn2T + ","
			+ b1inn3T + "," + b1inn4T + "," + b1inn5T + "," + b1inn6T + ","
			+ b1inn7T + "," + b1inn8T + "," + b1inn9T + "," + b1inn10T + ","
			+ b1inn11T + "," + b1inn12T;
	countTopBatter = 2;
	// document.getElementById('showvariable').innerHTML = countTopBatter;

}

function ShowLeadoffHitterBot1(event) { // puts the leadoff hitter innings to
										// show who is at bat first
	var x = event.which || event.keyCode;
	if (x == 13) { // the enter key is 13
		document.getElementById("bot").focus();
	}
	var name = document.getElementById('bot1').value;
	document.getElementById('currentbatterB').value = name;
	var b1inn1B = document.getElementById('b1inn1B').value;
	var b1inn2B = document.getElementById('b1inn2B').value;
	var b1inn3B = document.getElementById('b1inn3B').value;
	var b1inn4B = document.getElementById('b1inn4B').value;
	var b1inn5B = document.getElementById('b1inn5B').value;
	var b1inn6B = document.getElementById('b1inn6B').value;
	var b1inn7B = document.getElementById('b1inn7B').value;
	var b1inn8B = document.getElementById('b1inn8B').value;
	var b1inn9B = document.getElementById('b1inn9B').value;
	var b1inn10B = document.getElementById('b1inn10B').value;
	var b1inn11B = document.getElementById('b1inn11B').value;
	var b1inn12B = document.getElementById('b1inn12B').value;
	document.getElementById('paBot').value = b1inn1B + "," + b1inn2B + ","
			+ b1inn3B + "," + b1inn4B + "," + b1inn5B + "," + b1inn6B + ","
			+ b1inn7B + "," + b1inn8B + "," + b1inn9B + "," + b1inn10B + ","
			+ b1inn11B + "," + b1inn12B;
	countBotBatter = 2;
	// document.getElementById('showvariable').innerHTML = countTopBatter;

}

function EnterDetectFunctionTop(event) {

	var x = event.which || event.keyCode;
	if (x == 13) {
		calculateHitsT();
		totalHitsT();
		totalHitsB();
		StorefunctionT();
		StorefunctionB();
		document.getElementById("top").focus();
	}
}

function EnterDetectFunctionBot(event) {

	var x = event.which || event.keyCode;
	if (x == 13) {
		calculateHitsB();
		totalHitsB();
		totalHitsT();
		StorefunctionT();
		StorefunctionB();
		document.getElementById("bot").focus();
	}
}

function focusTop() {
	document.getElementById("top").focus();
	tempPitches = 0;
	document.getElementById('tempPitchesBot').value = tempPitches;
}

function pitchesBot1Function() {
	totalPitchesBot = parseInt(document.getElementById('sumB').value);
	document.getElementById('1stBot').value = totalPitchesBot;
	document.getElementById('1stBot').style.backgroundColor = "aqua";

}

function pitchesBot2Function() {
	totalPitchesBot = parseInt(document.getElementById('sumB').value);
	PitchesBot2nd = parseInt(document.getElementById('2ndBot').value);
	PitchesBot1st = parseInt(document.getElementById('1stBot').value);
	document.getElementById('2ndBot').value = totalPitchesBot - PitchesBot1st;
	document.getElementById('2ndBot').style.backgroundColor = "aqua";

}

function pitchesBot3Function() {
	totalPitchesBot = parseInt(document.getElementById('sumB').value);
	PitchesBot3rd = parseInt(document.getElementById('3rdBot').value);
	PitchesBot2nd = parseInt(document.getElementById('2ndBot').value);
	PitchesBot1st = parseInt(document.getElementById('1stBot').value)
	document.getElementById('3rdBot').value = totalPitchesBot - PitchesBot2nd
			- PitchesBot1st;
	document.getElementById('3rdBot').style.backgroundColor = "aqua";

}

function pitchesBot4Function() {
	totalPitchesBot = parseInt(document.getElementById('sumB').value);
	PitchesBot4th = parseInt(document.getElementById('4thBot').value);
	PitchesBot3rd = parseInt(document.getElementById('3rdBot').value);
	PitchesBot2nd = parseInt(document.getElementById('2ndBot').value);
	PitchesBot1st = parseInt(document.getElementById('1stBot').value);
	document.getElementById('4thBot').value = totalPitchesBot - PitchesBot3rd
			- PitchesBot2nd - PitchesBot1st;
	document.getElementById('4thBot').style.backgroundColor = "aqua";

}

function pitchesBot5Function() {
	totalPitchesBot = parseInt(document.getElementById('sumB').value);
	PitchesBot5th = parseInt(document.getElementById('5thBot').value);
	PitchesBot4th = parseInt(document.getElementById('4thBot').value);
	PitchesBot3rd = parseInt(document.getElementById('3rdBot').value);
	PitchesBot2nd = parseInt(document.getElementById('2ndBot').value);
	PitchesBot1st = parseInt(document.getElementById('1stBot').value);
	document.getElementById('5thBot').value = totalPitchesBot - PitchesBot4th
			- PitchesBot3rd - PitchesBot2nd - PitchesBot1st;
	document.getElementById('5thBot').style.backgroundColor = "aqua";

}

function pitchesBot6Function() {
	totalPitchesBot = parseInt(document.getElementById('sumB').value);
	PitchesBot6th = parseInt(document.getElementById('6thBot').value);
	PitchesBot5th = parseInt(document.getElementById('5thBot').value);
	PitchesBot4th = parseInt(document.getElementById('4thBot').value);
	PitchesBot3rd = parseInt(document.getElementById('3rdBot').value);
	PitchesBot2nd = parseInt(document.getElementById('2ndBot').value);
	PitchesBot1st = parseInt(document.getElementById('1stBot').value);
	document.getElementById('6thBot').value = totalPitchesBot - PitchesBot5th
			- PitchesBot4th - PitchesBot3rd - PitchesBot2nd - PitchesBot1st;
	document.getElementById('6thBot').style.backgroundColor = "aqua";

}

function pitchesBot7Function() {
	totalPitchesBot = parseInt(document.getElementById('sumB').value);
	PitchesBot7th = parseInt(document.getElementById('7thBot').value);
	PitchesBot6th = parseInt(document.getElementById('6thBot').value);
	PitchesBot5th = parseInt(document.getElementById('5thBot').value);
	PitchesBot4th = parseInt(document.getElementById('4thBot').value);
	PitchesBot3rd = parseInt(document.getElementById('3rdBot').value);
	PitchesBot2nd = parseInt(document.getElementById('2ndBot').value);
	PitchesBot1st = parseInt(document.getElementById('1stBot').value);
	document.getElementById('7thBot').value = totalPitchesBot - PitchesBot6th
			- PitchesBot5th - PitchesBot4th - PitchesBot3rd - PitchesBot2nd
			- PitchesBot1st;
	document.getElementById('7thBot').style.backgroundColor = "aqua";

}

function pitchesBot8Function() {
	totalPitchesBot = parseInt(document.getElementById('sumB').value);
	PitchesBot8th = parseInt(document.getElementById('8thBot').value);
	PitchesBot7th = parseInt(document.getElementById('7thBot').value);
	PitchesBot6th = parseInt(document.getElementById('6thBot').value);
	PitchesBot5th = parseInt(document.getElementById('5thBot').value);
	PitchesBot4th = parseInt(document.getElementById('4thBot').value);
	PitchesBot3rd = parseInt(document.getElementById('3rdBot').value);
	PitchesBot2nd = parseInt(document.getElementById('2ndBot').value);
	PitchesBot1st = parseInt(document.getElementById('1stBot').value);
	document.getElementById('8thBot').value = totalPitchesBot - PitchesBot7th
			- PitchesBot6th - PitchesBot5th - PitchesBot4th - PitchesBot3rd
			- PitchesBot2nd - PitchesBot1st;
	document.getElementById('8thBot').style.backgroundColor = "aqua";

}

function pitchesBot9Function() {
	totalPitchesBot = parseInt(document.getElementById('sumB').value);
	PitchesBot9th = parseInt(document.getElementById('9thBot').value);
	PitchesBot8th = parseInt(document.getElementById('8thBot').value);
	PitchesBot7th = parseInt(document.getElementById('7thBot').value);
	PitchesBot6th = parseInt(document.getElementById('6thBot').value);
	PitchesBot5th = parseInt(document.getElementById('5thBot').value);
	PitchesBot4th = parseInt(document.getElementById('4thBot').value);
	PitchesBot3rd = parseInt(document.getElementById('3rdBot').value);
	PitchesBot2nd = parseInt(document.getElementById('2ndBot').value);
	PitchesBot1st = parseInt(document.getElementById('1stBot').value);
	document.getElementById('9thBot').value = totalPitchesBot - PitchesBot8th
			- PitchesBot7th - PitchesBot6th - PitchesBot5th - PitchesBot4th
			- PitchesBot3rd - PitchesBot2nd - PitchesBot1st;
	document.getElementById('9thBot').style.backgroundColor = "aqua";

}

function grabInningPitchesTop() { // hitting the PPI button
	var tPitcher = document.getElementById('pitchertop').value;
	var T1 = document.getElementById('1stTop').value;
	var T2 = document.getElementById('2ndTop').value;
	var T3 = document.getElementById('3rdTop').value;
	var T4 = document.getElementById('4thTop').value;
	var T5 = document.getElementById('5thTop').value;
	var T6 = document.getElementById('6thTop').value;
	var T7 = document.getElementById('7thTop').value;
	var T8 = document.getElementById('8thTop').value;
	var T9 = document.getElementById('9thTop').value;
	var rp1 = document.getElementById('rp1T').value;
	var rp2 = document.getElementById('rp2T').value;
	var rp3 = document.getElementById('rp3T').value;
	var rp4 = document.getElementById('rp4T').value;
	var rp5 = document.getElementById('rp5T').value;
	var rp6 = document.getElementById('rp6T').value;
	document.getElementById('pitchesCollectionT').value = tPitcher + "\t" + T1
			+ "\t" + T2 + "\t" + T3 + "\t" + T4 + "\t" + T5 + "\t" + T6 + "\t"
			+ T7 + "\t" + T8 + "\t" + T9 + "\t" + rp1 + "\t" + rp2 + "\t" + rp3
			+ "\t" + rp4 + "\t" + rp5 + "\t" + rp6;
}

function grabInningPitchesBot() {
	var bPitcher = document.getElementById('pitcherbot').value;
	var B1 = document.getElementById('1stBot').value;
	var B2 = document.getElementById('2ndBot').value;
	var B3 = document.getElementById('3rdBot').value;
	var B4 = document.getElementById('4thBot').value;
	var B5 = document.getElementById('5thBot').value;
	var B6 = document.getElementById('6thBot').value;
	var B7 = document.getElementById('7thBot').value;
	var B8 = document.getElementById('8thBot').value;
	var B9 = document.getElementById('9thBot').value;
	var rp1 = document.getElementById('rp1B').value;
	var rp2 = document.getElementById('rp2B').value;
	var rp3 = document.getElementById('rp3B').value;
	var rp4 = document.getElementById('rp4B').value;
	var rp5 = document.getElementById('rp5B').value;
	var rp6 = document.getElementById('rp6B').value;
	document.getElementById('pitchesCollectionB').value = bPitcher + "\t" + B1
			+ "\t" + B2 + "\t" + B3 + "\t" + B4 + "\t" + B5 + "\t" + B6 + "\t"
			+ B7 + "\t" + B8 + "\t" + B9 + "\t" + rp1 + "\t" + rp2 + "\t" + rp3
			+ "\t" + rp4 + "\t" + rp5 + "\t" + rp6;
}
function grabDataT() {
	// assign text box to variable
	var top1 = document.getElementById('top1').value;
	var b1inn1T = document.getElementById('b1inn1T').value;
	var b1inn2T = document.getElementById('b1inn2T').value;
	var b1inn3T = document.getElementById('b1inn3T').value;
	var b1inn4T = document.getElementById('b1inn4T').value;
	var b1inn5T = document.getElementById('b1inn5T').value;
	var b1inn6T = document.getElementById('b1inn6T').value;
	var b1inn7T = document.getElementById('b1inn7T').value;
	var b1inn8T = document.getElementById('b1inn8T').value;
	var b1inn9T = document.getElementById('b1inn9T').value;
	var b1inn10T = document.getElementById('b1inn10T').value;
	var b1inn11T = document.getElementById('b1inn11T').value;
	var b1inn12T = document.getElementById('b1inn12T').value;

	var top2 = document.getElementById('top2').value;
	var b2inn1T = document.getElementById('b2inn1T').value;
	var b2inn2T = document.getElementById('b2inn2T').value;
	var b2inn3T = document.getElementById('b2inn3T').value;
	var b2inn4T = document.getElementById('b2inn4T').value;
	var b2inn5T = document.getElementById('b2inn5T').value;
	var b2inn6T = document.getElementById('b2inn6T').value;
	var b2inn7T = document.getElementById('b2inn7T').value;
	var b2inn8T = document.getElementById('b2inn8T').value;
	var b2inn9T = document.getElementById('b2inn9T').value;
	var b2inn10T = document.getElementById('b2inn10T').value;
	var b2inn11T = document.getElementById('b2inn11T').value;
	var b2inn12T = document.getElementById('b2inn12T').value;

	var top3 = document.getElementById('top3').value;
	var b3inn1T = document.getElementById('b3inn1T').value;
	var b3inn2T = document.getElementById('b3inn2T').value;
	var b3inn3T = document.getElementById('b3inn3T').value;
	var b3inn4T = document.getElementById('b3inn4T').value;
	var b3inn5T = document.getElementById('b3inn5T').value;
	var b3inn6T = document.getElementById('b3inn6T').value;
	var b3inn7T = document.getElementById('b3inn7T').value;
	var b3inn8T = document.getElementById('b3inn8T').value;
	var b3inn9T = document.getElementById('b3inn9T').value;
	var b3inn10T = document.getElementById('b3inn10T').value;
	var b3inn11T = document.getElementById('b3inn11T').value;
	var b3inn12T = document.getElementById('b3inn12T').value;

	var top4 = document.getElementById('top4').value;
	var b4inn1T = document.getElementById('b4inn1T').value;
	var b4inn2T = document.getElementById('b4inn2T').value;
	var b4inn3T = document.getElementById('b4inn3T').value;
	var b4inn4T = document.getElementById('b4inn4T').value;
	var b4inn5T = document.getElementById('b4inn5T').value;
	var b4inn6T = document.getElementById('b4inn6T').value;
	var b4inn7T = document.getElementById('b4inn7T').value;
	var b4inn8T = document.getElementById('b4inn8T').value;
	var b4inn9T = document.getElementById('b4inn9T').value;
	var b4inn10T = document.getElementById('b4inn10T').value;
	var b4inn11T = document.getElementById('b4inn11T').value;
	var b4inn12T = document.getElementById('b4inn12T').value;

	var top5 = document.getElementById('top5').value;
	var b5inn1T = document.getElementById('b5inn1T').value;
	var b5inn2T = document.getElementById('b5inn2T').value;
	var b5inn3T = document.getElementById('b5inn3T').value;
	var b5inn4T = document.getElementById('b5inn4T').value;
	var b5inn5T = document.getElementById('b5inn5T').value;
	var b5inn6T = document.getElementById('b5inn6T').value;
	var b5inn7T = document.getElementById('b5inn7T').value;
	var b5inn8T = document.getElementById('b5inn8T').value;
	var b5inn9T = document.getElementById('b5inn9T').value;
	var b5inn10T = document.getElementById('b5inn10T').value;
	var b5inn11T = document.getElementById('b5inn11T').value;
	var b5inn12T = document.getElementById('b5inn12T').value;

	var top6 = document.getElementById('top6').value;
	var b6inn1T = document.getElementById('b6inn1T').value;
	var b6inn2T = document.getElementById('b6inn2T').value;
	var b6inn3T = document.getElementById('b6inn3T').value;
	var b6inn4T = document.getElementById('b6inn4T').value;
	var b6inn5T = document.getElementById('b6inn5T').value;
	var b6inn6T = document.getElementById('b6inn6T').value;
	var b6inn7T = document.getElementById('b6inn7T').value;
	var b6inn8T = document.getElementById('b6inn8T').value;
	var b6inn9T = document.getElementById('b6inn9T').value;
	var b6inn10T = document.getElementById('b6inn10T').value;
	var b6inn11T = document.getElementById('b6inn11T').value;
	var b6inn12T = document.getElementById('b6inn12T').value;

	var top7 = document.getElementById('top7').value;
	var b7inn1T = document.getElementById('b7inn1T').value;
	var b7inn2T = document.getElementById('b7inn2T').value;
	var b7inn3T = document.getElementById('b7inn3T').value;
	var b7inn4T = document.getElementById('b7inn4T').value;
	var b7inn5T = document.getElementById('b7inn5T').value;
	var b7inn6T = document.getElementById('b7inn6T').value;
	var b7inn7T = document.getElementById('b7inn7T').value;
	var b7inn8T = document.getElementById('b7inn8T').value;
	var b7inn9T = document.getElementById('b7inn9T').value;
	var b7inn10T = document.getElementById('b7inn10T').value;
	var b7inn11T = document.getElementById('b7inn11T').value;
	var b7inn12T = document.getElementById('b7inn12T').value;

	var top8 = document.getElementById('top8').value;
	var b8inn1T = document.getElementById('b8inn1T').value;
	var b8inn2T = document.getElementById('b8inn2T').value;
	var b8inn3T = document.getElementById('b8inn3T').value;
	var b8inn4T = document.getElementById('b8inn4T').value;
	var b8inn5T = document.getElementById('b8inn5T').value;
	var b8inn6T = document.getElementById('b8inn6T').value;
	var b8inn7T = document.getElementById('b8inn7T').value;
	var b8inn8T = document.getElementById('b8inn8T').value;
	var b8inn9T = document.getElementById('b8inn9T').value;
	var b8inn10T = document.getElementById('b8inn10T').value;
	var b8inn11T = document.getElementById('b8inn11T').value;
	var b8inn12T = document.getElementById('b8inn12T').value;

	var top9 = document.getElementById('top9').value;
	var b9inn1T = document.getElementById('b9inn1T').value;
	var b9inn2T = document.getElementById('b9inn2T').value;
	var b9inn3T = document.getElementById('b9inn3T').value;
	var b9inn4T = document.getElementById('b9inn4T').value;
	var b9inn5T = document.getElementById('b9inn5T').value;
	var b9inn6T = document.getElementById('b9inn6T').value;
	var b9inn7T = document.getElementById('b9inn7T').value;
	var b9inn8T = document.getElementById('b9inn8T').value;
	var b9inn9T = document.getElementById('b9inn9T').value;
	var b9inn10T = document.getElementById('b9inn10T').value;
	var b9inn11T = document.getElementById('b9inn11T').value;
	var b9inn12T = document.getElementById('b9inn12T').value;

	// ADD! all variables to big text box

	document.getElementById('textCollectionT').value = top1 + "\t" + b1inn1T
			+ "\t" + b1inn2T + "\t" + b1inn3T + "\t" + b1inn4T + "\t" + b1inn5T
			+ "\t" + b1inn6T + "\t" + b1inn7T + "\t" + b1inn8T + "\t" + b1inn9T
			+ "\t" + b1inn10T + "\t" + b1inn11T + "\t" + b1inn12T + "\n"

			+ top2 + "\t" + b2inn1T + "\t" + b2inn2T + "\t" + b2inn3T + "\t"
			+ b2inn4T + "\t" + b2inn5T + "\t" + b2inn6T + "\t" + b2inn7T + "\t"
			+ b2inn8T + "\t" + b2inn9T + "\t" + b2inn10T + "\t" + b2inn11T
			+ "\t" + b2inn12T + "\n"

			+ top3 + "\t" + b3inn1T + "\t" + b3inn2T + "\t" + b3inn3T + "\t"
			+ b3inn4T + "\t" + b3inn5T + "\t" + b3inn6T + "\t" + b3inn7T + "\t"
			+ b3inn8T + "\t" + b3inn9T + "\t" + b3inn10T + "\t" + b3inn11T
			+ "\t" + b3inn12T + "\n"

			+ top4 + "\t" + b4inn1T + "\t" + b4inn2T + "\t" + b4inn3T + "\t"
			+ b4inn4T + "\t" + b4inn5T + "\t" + b4inn6T + "\t" + b4inn7T + "\t"
			+ b4inn8T + "\t" + b4inn9T + "\t" + b4inn10T + "\t" + b4inn11T
			+ "\t" + b4inn12T + "\n"

			+ top5 + "\t" + b5inn1T + "\t" + b5inn2T + "\t" + b5inn3T + "\t"
			+ b5inn4T + "\t" + b5inn5T + "\t" + b5inn6T + "\t" + b5inn7T + "\t"
			+ b5inn8T + "\t" + b5inn9T + "\t" + b5inn10T + "\t" + b5inn11T
			+ "\t" + b5inn12T + "\n"

			+ top6 + "\t" + b6inn1T + "\t" + b6inn2T + "\t" + b6inn3T + "\t"
			+ b6inn4T + "\t" + b6inn5T + "\t" + b6inn6T + "\t" + b6inn7T + "\t"
			+ b6inn8T + "\t" + b6inn9T + "\t" + b6inn10T + "\t" + b6inn11T
			+ "\t" + b6inn12T + "\n"

			+ top7 + "\t" + b7inn1T + "\t" + b7inn2T + "\t" + b7inn3T + "\t"
			+ b7inn4T + "\t" + b7inn5T + "\t" + b7inn6T + "\t" + b7inn7T + "\t"
			+ b7inn8T + "\t" + b7inn9T + "\t" + b7inn10T + "\t" + b7inn11T
			+ "\t" + b7inn12T + "\n"

			+ top8 + "\t" + b8inn1T + "\t" + b8inn2T + "\t" + b8inn3T + "\t"
			+ b8inn4T + "\t" + b8inn5T + "\t" + b8inn6T + "\t" + b8inn7T + "\t"
			+ b8inn8T + "\t" + b8inn9T + "\t" + b8inn10T + "\t" + b8inn11T
			+ "\t" + b8inn12T + "\n"

			+ top9 + "\t" + b9inn1T + "\t" + b9inn2T + "\t" + b9inn3T + "\t"
			+ b9inn4T + "\t" + b9inn5T + "\t" + b9inn6T + "\t" + b9inn7T + "\t"
			+ b9inn8T + "\t" + b9inn9T + "\t" + b9inn10T + "\t" + b9inn11T
			+ "\t" + b9inn12T + "\n";

}

function grabDataB() {
	// assign text box to variable
	var bot1 = document.getElementById('bot1').value;
	var b1inn1B = document.getElementById('b1inn1B').value;
	var b1inn2B = document.getElementById('b1inn2B').value;
	var b1inn3B = document.getElementById('b1inn3B').value;
	var b1inn4B = document.getElementById('b1inn4B').value;
	var b1inn5B = document.getElementById('b1inn5B').value;
	var b1inn6B = document.getElementById('b1inn6B').value;
	var b1inn7B = document.getElementById('b1inn7B').value;
	var b1inn8B = document.getElementById('b1inn8B').value;
	var b1inn9B = document.getElementById('b1inn9B').value;
	var b1inn10B = document.getElementById('b1inn10B').value;
	var b1inn11B = document.getElementById('b1inn11B').value;
	var b1inn12B = document.getElementById('b1inn12B').value;

	var bot2 = document.getElementById('bot2').value;
	var b2inn1B = document.getElementById('b2inn1B').value;
	var b2inn2B = document.getElementById('b2inn2B').value;
	var b2inn3B = document.getElementById('b2inn3B').value;
	var b2inn4B = document.getElementById('b2inn4B').value;
	var b2inn5B = document.getElementById('b2inn5B').value;
	var b2inn6B = document.getElementById('b2inn6B').value;
	var b2inn7B = document.getElementById('b2inn7B').value;
	var b2inn8B = document.getElementById('b2inn8B').value;
	var b2inn9B = document.getElementById('b2inn9B').value;
	var b2inn10B = document.getElementById('b2inn10B').value;
	var b2inn11B = document.getElementById('b2inn11B').value;
	var b2inn12B = document.getElementById('b2inn12B').value;

	var bot3 = document.getElementById('bot3').value;
	var b3inn1B = document.getElementById('b3inn1B').value;
	var b3inn2B = document.getElementById('b3inn2B').value;
	var b3inn3B = document.getElementById('b3inn3B').value;
	var b3inn4B = document.getElementById('b3inn4B').value;
	var b3inn5B = document.getElementById('b3inn5B').value;
	var b3inn6B = document.getElementById('b3inn6B').value;
	var b3inn7B = document.getElementById('b3inn7B').value;
	var b3inn8B = document.getElementById('b3inn8B').value;
	var b3inn9B = document.getElementById('b3inn9B').value;
	var b3inn10B = document.getElementById('b3inn10B').value;
	var b3inn11B = document.getElementById('b3inn11B').value;
	var b3inn12B = document.getElementById('b3inn12B').value;

	var bot4 = document.getElementById('bot4').value;
	var b4inn1B = document.getElementById('b4inn1B').value;
	var b4inn2B = document.getElementById('b4inn2B').value;
	var b4inn3B = document.getElementById('b4inn3B').value;
	var b4inn4B = document.getElementById('b4inn4B').value;
	var b4inn5B = document.getElementById('b4inn5B').value;
	var b4inn6B = document.getElementById('b4inn6B').value;
	var b4inn7B = document.getElementById('b4inn7B').value;
	var b4inn8B = document.getElementById('b4inn8B').value;
	var b4inn9B = document.getElementById('b4inn9B').value;
	var b4inn10B = document.getElementById('b4inn10B').value;
	var b4inn11B = document.getElementById('b4inn11B').value;
	var b4inn12B = document.getElementById('b4inn12B').value;

	var bot5 = document.getElementById('bot5').value;
	var b5inn1B = document.getElementById('b5inn1B').value;
	var b5inn2B = document.getElementById('b5inn2B').value;
	var b5inn3B = document.getElementById('b5inn3B').value;
	var b5inn4B = document.getElementById('b5inn4B').value;
	var b5inn5B = document.getElementById('b5inn5B').value;
	var b5inn6B = document.getElementById('b5inn6B').value;
	var b5inn7B = document.getElementById('b5inn7B').value;
	var b5inn8B = document.getElementById('b5inn8B').value;
	var b5inn9B = document.getElementById('b5inn9B').value;
	var b5inn10B = document.getElementById('b5inn10B').value;
	var b5inn11B = document.getElementById('b5inn11B').value;
	var b5inn12B = document.getElementById('b5inn12B').value;

	var bot6 = document.getElementById('bot6').value;
	var b6inn1B = document.getElementById('b6inn1B').value;
	var b6inn2B = document.getElementById('b6inn2B').value;
	var b6inn3B = document.getElementById('b6inn3B').value;
	var b6inn4B = document.getElementById('b6inn4B').value;
	var b6inn5B = document.getElementById('b6inn5B').value;
	var b6inn6B = document.getElementById('b6inn6B').value;
	var b6inn7B = document.getElementById('b6inn7B').value;
	var b6inn8B = document.getElementById('b6inn8B').value;
	var b6inn9B = document.getElementById('b6inn9B').value;
	var b6inn10B = document.getElementById('b6inn10B').value;
	var b6inn11B = document.getElementById('b6inn11B').value;
	var b6inn12B = document.getElementById('b6inn12B').value;

	var bot7 = document.getElementById('bot7').value;
	var b7inn1B = document.getElementById('b7inn1B').value;
	var b7inn2B = document.getElementById('b7inn2B').value;
	var b7inn3B = document.getElementById('b7inn3B').value;
	var b7inn4B = document.getElementById('b7inn4B').value;
	var b7inn5B = document.getElementById('b7inn5B').value;
	var b7inn6B = document.getElementById('b7inn6B').value;
	var b7inn7B = document.getElementById('b7inn7B').value;
	var b7inn8B = document.getElementById('b7inn8B').value;
	var b7inn9B = document.getElementById('b7inn9B').value;
	var b7inn10B = document.getElementById('b7inn10B').value;
	var b7inn11B = document.getElementById('b7inn11B').value;
	var b7inn12B = document.getElementById('b7inn12B').value;

	var bot8 = document.getElementById('bot8').value;
	var b8inn1B = document.getElementById('b8inn1B').value;
	var b8inn2B = document.getElementById('b8inn2B').value;
	var b8inn3B = document.getElementById('b8inn3B').value;
	var b8inn4B = document.getElementById('b8inn4B').value;
	var b8inn5B = document.getElementById('b8inn5B').value;
	var b8inn6B = document.getElementById('b8inn6B').value;
	var b8inn7B = document.getElementById('b8inn7B').value;
	var b8inn8B = document.getElementById('b8inn8B').value;
	var b8inn9B = document.getElementById('b8inn9B').value;
	var b8inn10B = document.getElementById('b8inn10B').value;
	var b8inn11B = document.getElementById('b8inn11B').value;
	var b8inn12B = document.getElementById('b8inn12B').value;

	var bot9 = document.getElementById('bot9').value;
	var b9inn1B = document.getElementById('b9inn1B').value;
	var b9inn2B = document.getElementById('b9inn2B').value;
	var b9inn3B = document.getElementById('b9inn3B').value;
	var b9inn4B = document.getElementById('b9inn4B').value;
	var b9inn5B = document.getElementById('b9inn5B').value;
	var b9inn6B = document.getElementById('b9inn6B').value;
	var b9inn7B = document.getElementById('b9inn7B').value;
	var b9inn8B = document.getElementById('b9inn8B').value;
	var b9inn9B = document.getElementById('b9inn9B').value;
	var b9inn10B = document.getElementById('b9inn10B').value;
	var b9inn11B = document.getElementById('b9inn11B').value;
	var b9inn12B = document.getElementById('b9inn12B').value;

	// ADD! all variables to big text box
	document.getElementById('textCollectionB').value = bot1 + "\t" + b1inn1B
			+ "\t" + b1inn2B + "\t" + b1inn3B + "\t" + b1inn4B + "\t" + b1inn5B
			+ "\t" + b1inn6B + "\t" + b1inn7B + "\t" + b1inn8B + "\t" + b1inn9B
			+ "\t" + b1inn10B + "\t" + b1inn11B + "\t" + b1inn12B + "\n"

			+ bot2 + "\t" + b2inn1B + "\t" + b2inn2B + "\t" + b2inn3B + "\t"
			+ b2inn4B + "\t" + b2inn5B + "\t" + b2inn6B + "\t" + b2inn7B + "\t"
			+ b2inn8B + "\t" + b2inn9B + "\t" + b2inn10B + "\t" + b2inn11B
			+ "\t" + b2inn12B + "\n"

			+ bot3 + "\t" + b3inn1B + "\t" + b3inn2B + "\t" + b3inn3B + "\t"
			+ b3inn4B + "\t" + b3inn5B + "\t" + b3inn6B + "\t" + b3inn7B + "\t"
			+ b3inn8B + "\t" + b3inn9B + "\t" + b3inn10B + "\t" + b3inn11B
			+ "\t" + b3inn12B + "\n"

			+ bot4 + "\t" + b4inn1B + "\t" + b4inn2B + "\t" + b4inn3B + "\t"
			+ b4inn4B + "\t" + b4inn5B + "\t" + b4inn6B + "\t" + b4inn7B + "\t"
			+ b4inn8B + "\t" + b4inn9B + "\t" + b4inn10B + "\t" + b4inn11B
			+ "\t" + b4inn12B + "\n"

			+ bot5 + "\t" + b5inn1B + "\t" + b5inn2B + "\t" + b5inn3B + "\t"
			+ b5inn4B + "\t" + b5inn5B + "\t" + b5inn6B + "\t" + b5inn7B + "\t"
			+ b5inn8B + "\t" + b5inn9B + "\t" + b5inn10B + "\t" + b5inn11B
			+ "\t" + b5inn12B + "\n"

			+ bot6 + "\t" + b6inn1B + "\t" + b6inn2B + "\t" + b6inn3B + "\t"
			+ b6inn4B + "\t" + b6inn5B + "\t" + b6inn6B + "\t" + b6inn7B + "\t"
			+ b6inn8B + "\t" + b6inn9B + "\t" + b6inn10B + "\t" + b6inn11B
			+ "\t" + b6inn12B + "\n"

			+ bot7 + "\t" + b7inn1B + "\t" + b7inn2B + "\t" + b7inn3B + "\t"
			+ b7inn4B + "\t" + b7inn5B + "\t" + b7inn6B + "\t" + b7inn7B + "\t"
			+ b7inn8B + "\t" + b7inn9B + "\t" + b7inn10B + "\t" + b7inn11B
			+ "\t" + b7inn12B + "\n"

			+ bot8 + "\t" + b8inn1B + "\t" + b8inn2B + "\t" + b8inn3B + "\t"
			+ b8inn4B + "\t" + b8inn5B + "\t" + b8inn6B + "\t" + b8inn7B + "\t"
			+ b8inn8B + "\t" + b8inn9B + "\t" + b8inn10B + "\t" + b8inn11B
			+ "\t" + b8inn12B + "\n"

			+ bot9 + "\t" + b9inn1B + "\t" + b9inn2B + "\t" + b9inn3B + "\t"
			+ b9inn4B + "\t" + b9inn5B + "\t" + b9inn6B + "\t" + b9inn7B + "\t"
			+ b9inn8B + "\t" + b9inn9B + "\t" + b9inn10B + "\t" + b9inn11B
			+ "\t" + b9inn12B + "\n";

}