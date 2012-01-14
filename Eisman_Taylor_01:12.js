// Taylor Eisman
// SDI Project 2
// 01/12

alert("JavaScript works!");

var worker = "Henry";
var day = "Monday";
var minimumInventory = 2;
var maximumInventory = 5;

// Found a way to assign values in array
var currentInventory = new Array();
currentInventory["Jolly Ranchers"] = 2;
currentInventory["Chewing Gum"] = 5;
currentInventory["Suckers"] = 3;
currentInventory["Gummy Bears"] = 1;

var openStore = function(day){
	if(day = "Monday"){
		console.log( worker + " needs to check the candy stock." );
	} else {
		console.log( worker + " does not need to restock the candy." );
	}
};


var needToRestocked = function(currentInventory,minimumInventory){
	while(currentInventory < minimumInventory){
		console.log( worker + " needs to add more candy.");
		currentInventory++;
	}	
};

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