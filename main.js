//code will determine if x and y strings have the same amount of characters 
var x="Colin";
var y="Beth";
var xlength=x.length;
var ylength=y.length;
if (xlength===ylength) {
	console.log(x + " en " + y + " se name is ewe lank.");
} else {
	console.log(x + " en " + y + " se name is nie ewe lank.");
}
//code will determine who is the oldest, how old they are and how old both are together 
var xage=28;
var yage=29;
if (xage<yage) {
	console.log(x + " is jonger as " + y + ". " + y + " is " + yage + ".");
} else {
	console.log(x + " is ouer as " + y + ". " + x + " is " + xage + ".");
}
console.log("Saam is hulle " + (xage+yage) + " jaar oud.")

if ((xage===yage)&&(xlength===ylength)) {
	console.log(x + " en " + y + " is ewe oud en hul name is ewe lank.");
} else if (xlength===ylength) {
	console.log(x + " en " + y + " is nie ewe oud, maar hul name is ewe lank.");
} else if (xage===yage) {
	console.log(x + " en " + y + " is ewe oud, maar hul name is nie ewe lank nie.");
} else {
	console.log(x + " en " + y + " is nie ewe oud nie en hul name is nie ewe lank nie.");
}
//write javascript code to determine who is the oldest and by how many years older they are, for example: 
//Jan is 5 years older than Mary
var years=" years ";
var year=" year ";
var ageDiff=Math.abs(xage-yage);
var yearToPrint="";
var xage=28;
var yage=29;
if (ageDiff===1) {
	yearToPrint=year;
} else {
	yearToPrint=years;
}
if (xage>yage) {
	console.log(x + " is " + ageDiff + yearToPrint + "older than " + y + ".");
} else {
	console.log(y + " is " + ageDiff + yearToPrint + "younger than " + x + ".");
}



//new array

function printNames (names) {
	console.log("The names are:"); 
	for (var i=0; i<names.length; i=i+1) {
		console.log(i + " - " + names[i]);
	}
}
function printAges (ages) {
	console.log("The ages are: ");
	for (var i=0; i<ages.length; i=i+1) {
		console.log(ages[i]);
	}
}

function printNameAndAge (names, ages) {
	console.log("The names and ages are: ");
	for (var i=0; i<ages.length; i=i+1) {
		console.log(names[i] + " : " + ages[i]);
	}
}
function addName (newName) {
	names.push(newName);
}
function addAge (newAge) {
	ages.push(newAge)
}
function addNameAndAge (name, age) {
	names.push(name);
	ages.push(age);
}
//starting arrays and for loops
var names=["John","Mary","Beth"];
var ages=[67,23,46];
addNameAndAge("Anita",27);
printNameAndAge(names, ages);