// starting health
var robot_1 = {
	name:"Robot 1",
	health:10,
}

var robot_2 = {
	name:"Robot 2",
	health:10,
}

var robots = [robot_1, robot_2];

// get a random current robot
var current_robot = robots[Math.floor(Math.random() * robots.length)];

function botSwitch(x){
	if (x == robot_1){
  current_robot = robot_2;
  console.log('Switching from 1 to 2');
  }
  else{
  current_robot = robot_1;
  console.log('Switching from 2 to 1')
  }
}

// define starter cards
function attack(){
 if (current_robot == robot_1){
 	robot_2.health--;
  console.log('Robot 1 attacks!')
	}
 else {
 	robot_1.health--;
  console.log('Robot 2 attacks!')
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
console.log("Starting bot is" + " " + current_robot.name);
console.log("Robot 1 health =" + " " + robot_1.health);
console.log("Robot 2 health =" + " " + robot_2.health);

var round = 0

for (var round = 0; round < 100; round++){
	console.log("***************Round" + " " + round + "******************");
  //skip botswitch first round
  if (round > 0) {
  botSwitch(current_robot);
  }
  console.log("Current bot is" + " " + current_robot.name);
	attack();
	console.log("Robot 1 health =" + " " + robot_1.health);
	console.log("Robot 2 health =" + " " + robot_2.health);
  if (robot_1.health == 0 |	robot_2.health == 0){
 	 if (robot_1.health > 0) {
   var winner = robot_1;
   }
  else {
   var winner = robot_2;
  	}
  round = 100;
	console.log("The winner is...." + " " + winner.name);
  }
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
