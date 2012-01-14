// Taylor Eisman
// SDI Project 2
// 01/12

alert("JavaScript works!");

var worker = "Henry";
var minimumInventory = 2;
var maximumInventory = 5;
var currentInventory = new Array("Jolly Ranchers" => 2, "Chewing Gum" => 4, "Suckers" => 1, "Gummy Bears" => 2);

function openStore(day){
	if(day = "Monday"){
		console.log( worker + " needs to restock the candy." );
	} else {
		console.log( worker + " does not need to restock the candy." );
	}
}

openStore("Monday");

var restockCandy = function (inventory) {
	inventoryRemaining = inventory.length;
	if(inventoryRemaining > 0){
		
		console.log("We need each type of candy on the shelf.");
		for (var inventoryItem = 0; inventoryItem < inventory.length; inventoryItem++){
			console.log("Stocking " + inventory[inventoryItem]);
		}
	} else {
		console.log("The candy is fully stocked");
	}
};