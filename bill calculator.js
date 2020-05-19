//Creating a list for the resturant things
var drinks = {"milo" :20.99,"coke":19.99, "Fanta":15.99, "Jive":18.99, "coffee":25.99, "Tea":22.99};
var foods = {"chicken":34, "burgers":35.99, "pasta":34.99, "pizza":50.99, "lasgne":75.99, "sushi": 100.99};// list for the foods
var bill = 0;

drinks_menu = "";//creating an open string
for(var drink in drinks){
	drinks_menu += drink + ": " + drinks[drink] + "\n";//Creating a for loop to get the items and there prices
}

//Creating a function for the drinks menu
function Drinks(){
	var thing = prompt(drinks_menu);//creating the pop uo box
	bill += drinks[thing];//adding the things for the bill
}


foods_menu = "";
for(var food in foods){
	foods_menu += food + ":" + foods[food] + "\n";
}
function Food(){
	var things= prompt(foods_menu);
	bill += foods[things];
}

function Bill(){
	alert("Your bill is R" +bill);// creating an alert for the bill
}
