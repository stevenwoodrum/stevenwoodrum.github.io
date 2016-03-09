function loadItem(index) {
	var activeItem;

	// Point to correct item
	if (index == 0) {

		activeItem = combat_robotics;
	}
	else {
		activeItem = item1;
	}

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


var item1 = {
	title: "Test title",
	date: "Test date",
	skills: "Test skills",
	description: "Test description"
};