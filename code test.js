// starting health
var robot_1 = {
	name:"Robot 1",
	health:10,
}

var robot_2 = {
	name:"Robot 2",
	health:10,
}

var robots = [robot_1.name, robot_2.name];	

// get a random current robot
var current_robot = robots[Math.floor(Math.random() * robots.length)];



// define starter cards
function attack(){
 if (current_robot == robot_1){
 	robot_2.health--;
	}
 else {
 	robot_1.health--;
 }
}



//TO DO function move (){

//}

function repair(){

} 

// array of functions
var deck = ["attack",]

// testing
console.log("START");
console.log("The current robot is" + " " + current_robot);
console.log("Robot 1 health =" + " " + robot_1.health);
console.log("Robot 2 health =" + " " + robot_2.health);

var round = 0

for (var round = 0, round < 10, round++){
	console.log("Round" + " " + round);
	attack();
	console.log("Robot 1 health =" + " " + robot_1.health);
	console.log("Robot 2 health =" + " " + robot_2.health);
}

// var a = confirm("Attack?");
// if (a == true) {
// 	attack();
// }
// else {
// console.log("No attack");
// }

// console.log("Robot 1 health =" + " " + robot_1.health);
// console.log("Robot 2 health =" + " " + robot_2.health);