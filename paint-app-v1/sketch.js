var circle = {
	red : {x: 100, col: "#e54341", leftSide: 60, rightSide: 140},
	green: {x: 200, col: "#60b896", leftSide: 160, rightSide: 240},
	lilac: {x: 300, col: "#9b84af", leftSide: 260, rightSide: 340},
	yellow: {x: 400, col: "#f7b320", leftSide: 360, rightSide: 440 },
	random: {x: 500, col: "#ffffff", leftSide: 460, rightSide: 540},
	y: 500,
	diameter: 80,
  radius: 40
};

var boundary = {
	top : circle.y - circle.radius,
	bottom: circle.y + circle.radius
};

var currentColor = " ";
// var topBoundary = circle.y - circle.radius;
// var leftBoundary = circle.red.x - circle.radius;
// var rightBoundary = circle.red.x + circle.radius
// var bottomBoundary = circle.y + circle.radius;

function setup() {
	createCanvas(600, 600);
}


function draw() {
background(2);

//Color Samples to choose from
fill(circle.red.col); //red
ellipse(circle.red.x, circle.y, circle.diameter, circle.diameter);

fill(circle.green.col);//blue
ellipse(circle.green.x, circle.y, circle.diameter, circle.diameter);

fill(circle.lilac.col);//purple
ellipse(circle.lilac.x, circle.y, circle.diameter, circle.diameter);

fill(circle.yellow.col);//yellodiameter
ellipse(circle.yellow.x, circle.y, circle.diameter, circle.diameter);

fill(circle.random.col);//random (grey scale)
ellipse(circle.random.x, circle.y, circle.diameter, circle.diameter);

//

if(mouseY > boundary.top && mouseY < boundary.bottom){
	if(mouseX > circle.red.leftSide && mouseX < circle.red.rightSide ){
			currentColor = "red";
			console.log(currentColor);
	} if(mouseX > circle.green.leftSide && mouseX < circle.green.rightSide ){
				currentColor = "green";
				console.log(currentColor);
	} if(mouseX > circle.lilac.leftSide && mouseX < circle.lilac.rightSide ){
				currentColor = "lilac";
				console.log(currentColor);
	} if(mouseX > circle.yellow.leftSide && mouseX < circle.yellow.rightSide ){
				currentColor = "yellow";
				console.log(currentColor);
	} if(mouseX > circle.random.leftSide && mouseX < circle.random.rightSide ){
				currentColor = "random";
				console.log(currentColor);
	}
}


}
