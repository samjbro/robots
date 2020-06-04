// CODE FOR TESTING PROTOTYPES OF AS-YET-UNTITLED BOARD/CARD GAMES
// Documentation for game: https://www.notion.so/cookywook/Robot-Game-name-TBD-0afeed4bff7347278587f2702316dfc4



// defining the bots
var robot_1 = {
	name:"Robot 1",
	health:10,
	wins:0,
}

var robot_2 = {
	name:"Robot 2",
	health:10,
	wins:0,
}

var robots = [robot_1, robot_2];

// get a random current robot
var current_robot = robots[Math.floor(Math.random() * robots.length)];

//function to switch bots during a game
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

// ACTIONS

// attack does 1 damage to the other bot
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

// repair heals 1 damage to the current bot
function repair(){
	if (current_robot == robot_1){
  robot_1.health++;
   console.log('Robot 1 repairs!')
 	}
  else {
   robot_2.health++;
   console.log('Robot 2 repairs!')
  }
}

function shuffle(x){
	robot_1.deck = [attack,attack,attack,attack,repair];
	robot_2.deck = [attack,attack,attack,attack,repair];
	console.log('Shuffling cards!');
	//randomising code...
	robot_1.deck.sort(function(a, b){return 0.5 - Math.random()});
	robot_2.deck.sort(function(a, b){return 0.5 - Math.random()});
}



// CHOOSE: pick an ACTION from deck
function choose(x){
	console.log(x.name + " " + "draws a card...");
	x.deck[0]();
	x.deck.shift();
	console.log("(remaining cards" + " " + x.deck.length + ")");
}


// being loud for testing
console.log("START");
console.log("Starting bot is" + " " + current_robot.name);
console.log("Robot 1 starting health:" + " " + robot_1.health);
console.log("Robot 2 starting health:" + " " + robot_2.health);

// RESETs health at the start of each game
function reset(){
	// shuffle(robot_1);
	// shuffle(robot_2);
	shuffle();
	if (round = 1){
		robot_2.health = 10;
		robot_1.health = 10;
	}
	else {
	botSwitch();
	}
}

// SHUFFLE CHECK - checks to see if the deck needs a SHUFFLE
function shuffleCheck(a){
	// console.log("robot 1 deck=" + " " + robot_1.deck.length);
	// console.log("robot 2 deck=" + " " + robot_2.deck.length);
	if(a.length == 0){
	 	console.log("SHUFFLING DECK!!!" + " " + "for" + " " + current_robot.name);
	shuffle(a);
	}
}

// selects a winner when a bot's health = 10
// currently badly written assuming just 2p
function pickWinner(){
	if (robot_1.health > 0) {
	winner = robot_1;
	robot_1.wins++;
	}
 else {
	winner = robot_2;
	robot_2.wins++;
	 }
}

//PLAY
function play(){
	// var round = 1;
	for (var round = 1; round < 100; round++){
	console.log("***************Round" + " " + round + "******************");
	// choose active bot
	botSwitch(current_robot);
  console.log("Current bot is" + " " + current_robot.name);
	// pick first available action from deck
	choose(current_robot);
	// show updated stats
	console.log("Robot 1 health =" + " " + robot_1.health);
	console.log("Robot 2 health =" + " " + robot_2.health);
	//check for shuffle
	shuffleCheck(current_robot.deck);
	//check for winnner
  if (robot_1.health == 0 |	robot_2.health == 0){
	pickWinner();
	round = 100;
	console.log("The winner is...." + " " + winner.name);
  }
}
}

//PLAY MULTIPLE GAMES
for (var games = 1; games < 100; games++){
		console.log("New game!!!!!!!!!!!!!!!!!!!!!!!");
		reset();
 		play();
		console.log("Games =" + " " + games);
		console.log('Robot 1 has won' + " " + robot_1.wins + " " + "games");
		console.log('Robot 2 has won' + " " + robot_2.wins + " " + "games");
}
