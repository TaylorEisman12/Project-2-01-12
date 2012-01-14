// Taylor Eisman
// SDI Project 2
// 01/12

alert("JavaScript works!");

var worker = "Henry";

var inventory = new Array("Jolly Ranchers", "Chewing Gum", "Suckers", "Gummy Bears");

var restockCandy = function (inventory) {
	inventoryRemaining = inventory.length;
	if(inventoryRemaining > 0){
		console.log( worker + " you need to restock the candy." );
		console.log("We need each type of candy on the shelf.");
		for (var inventoryItem = 0; inventoryItem < inventory.length; inventoryItem++){
			console.log("Stocking " + inventory[inventoryItem]);
		}
	} else {
		console.log("The candy is fully stocked");
	}
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
