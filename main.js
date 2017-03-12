var x="Colin";
var y="Beth";
var xlength=x.length;
var ylength=y.length;
if (xlength===ylength) {
	console.log(x + " en " + y + " se name is ewe lank.");
} else {
	console.log(x + " en " + y + " se name is nie ewe lank.");
}
var xage=28;
var yage=25;
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
//starting arrays and for loops
var names=["John","Mary","Beth"];
printNames(names);
addName("Anita");
addName("Sarah");
printNames(names);

function printNames (names) {
	console.log("The names are:"); 
	for (var i=0; i<names.length; i=i+1) {
		console.log(i + " - " + names[i]);
	}
}
function addName (newName) {
	names.push(newName);
}