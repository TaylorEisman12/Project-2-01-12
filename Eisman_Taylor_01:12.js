// Taylor Eisman
// SDI Project 2
// 01/12

alert("JavaScript works!");

var worker = "Henry";
var manager = "Walter";
var day = "Monday";
var minimumInventory = 2;
var maximumInventory = 5;

// Found a way to assign values in array
var currentInventory = new Array();
currentInventory["Jolly Ranchers"] = 2;
currentInventory["Chewing Gum"] = 5;
currentInventory["Suckers"] = 3;
currentInventory["Gummy Bears"] = 1;

// Procedure
var openStore = function(day){
	if(day = "Monday"){
		console.log( worker + " needs to check the candy stock." );
	} else {
		console.log( worker + " does not need to restock the candy." );
	}
};

// Boolean Function
var needToRestock = function(currentInventory,minimumInventory){
	if(currentInventory < minimumInventory){
		console.log( worker + " needs to add more candy.");
	}	
};

// Number Function
var restockCandy = function (currtentInventory) {
	inventoryRemaining = currentInventory.length;
	while(inventoryRemaining > 0){z
		
		console.log("We need each type of candy on the shelf.");
		for (var inventoryItem = 0; inventoryItem < currentInventory.length; inventoryItem++){
			console.log("Stocking " + inventory[inventoryItem]);
		}
	} 
		console.log("The candy is fully stocked");
	
};

// String Function ???
var workStatus = function (manager,maximumInventory){
	console.log(manager + " will be very upset with " + worker + " if he stocks more than " + maximumInventory + " pieces of each candy.");	
};

// Array Function
var inventoryChart = function (currrentInventory){
	console.log(currentInventory);
};

openStore(day);
needToRestock(currentInventory,minimumInventory);
inventoryChart(currentInventory);
restockCandy(currentInventory);
workStatus(manager,maximumInventory);
