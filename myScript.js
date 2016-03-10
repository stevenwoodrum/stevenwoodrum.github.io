function loadItem(index) {
	var activeItem;

	// Point to correct item
	if (index == 0) {

		activeItem = combat_robotics;
	}
	else if (index == 1) {
	}
	else if (index == 2) {
		activeItem = board_game_AI;
	}
	else {}

	// Update fields of HTML page
	document.getElementById("myModalLabel").innerHTML = activeItem.title;
	document.getElementById("date").innerHTML = activeItem.date;
	document.getElementById("skills").innerHTML = "Skills: " + activeItem.skills;
	document.getElementById("description").innerHTML = activeItem.description;
}

var combat_robotics = {
	title: "Combat Robotics",
	date: "Spring 2016",
	skills: "Machining, rapid prototyping",
	description: "120 lbs of awesome."
};


var board_game_AI = {
	title: "Artificially Intelligent Board Game Player",
	date: "Summer 2015",
	skills: "Java, Eclipse",
	description: "The Artificial Intelligence course (CS 4710) pitted student-submitted software agents against each other in a computer version of the Ticket to Ride(R) board game. Initial attempts at a depth-limited classical-search approach produced mediocre results. Just days before the competition, the class learned about Markov chains and the use of Markov decision processes (MDP). I scrambled to implement and test a basic MDP to compete, and ultimately won the class tournament. The Markovian AI uses a small state space of 8 carefully chosen states. It runs blazingly fast, using hashmaps for probabilistic lookups, a variant of Dijkstra's shortest-path algorithm, and several linear processes with small input sizes. The program couples short-term and long-term planning, modifying its behavior over time to maximize the overall chance of success."
};