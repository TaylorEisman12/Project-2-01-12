// Taylor Eisman
// SDI Project 2
// 01/12

alert("JavaScript works!");

var worker = "Henry",
    maxInventory = 60,
    suckers = 15,
    gum = 5,
    restock = true
;

var jollyRanchers = [ "Cherry", 10, "Grape", 2, "Apple", 8 ];

var outputJob = function () {
	console.log( worker + " you need to restock the candy." );
	console.log("We need " + maxInventory + " total pieces of candy on the shelf.");
};

if ( restock == true ){
	outputJob() ;

};

