// Taylor Eisman
// SDI Project 2
// 01/12

alert("JavaScript works!");

var worker = "Henry",
    maxInventory = 60,
    suckers = 15,
    gum = 5,
    gummyBears = 5
    restock = true
;

var jollyRanchers = [ "Cherry", 5, "Grape", 2, "Apple", 8 ];

var outputJob = function () {
    console.log( worker + " you need to restock the candy." );
	console.log("We need " + maxInventory + " total pieces of candy on the shelf.");
};

if ( restock == true ){
	outputJob() ;

};

console.log( worker + " counted " + suckers + " suckers left.");
console.log( worker + " counted " + gum + " pieces of gum left.");
console.log( worker + " counted " + gummyBears + " gummy bears left.");
console.log( worker + " counted " + jollyRanchers[1] + " cherry jolly ranchers left.");
console.log( worker + " counted " + jollyRanchers[3] + " grape jolly ranchers left.");
console.log( worker + " counted " + jollyRanchers[5] + " apple jolly ranchers left.");
