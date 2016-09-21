var currentColor = " ";
var brushColor = "0";
var brushSize = 10;
var brushSelection;


//Initializing Color Samples
var circle = {
	red : {x: 100, col: "#e54341", leftSide: 60, rightSide: 140},
	green: {x: 200, col: "#60b896", leftSide: 160, rightSide: 240},
	lilac: {x: 300, col: "#9b84af", leftSide: 260, rightSide: 340},
	yellow: {x: 400, col: "#f7b320", leftSide: 360, rightSide: 440 },
	random: {x: 500, leftSide: 460, rightSide: 540},
	y: 500,
	diameter: 80,
  radius: 40
};

var circleBoundary = {
	top : circle.y - circle.radius,
	bottom: circle.y + circle.radius
};

//Initializing brushSelectes
var brushSelect = {
	small : {x: 500, diameter: 20, col: '#ffffff', leftSide: 490, rightSide: 510},
	large : {x: 550, diameter: 30, col: '#ffffff', leftSide: 535, rightSide: 565},
	y: 50,
	r1: 10,
	r2: 15
}

var smallBoundary = {
	top: brushSelect.y - brushSelect.r1,
	bottom: brushSelect.y + brushSelect.r1
}

//Canvas
function setup() {
	createCanvas(600, 600);
	background('#ebeef0');
}


function draw() {

//brushSelect Sizes
fill(brushSelect.small.col);
ellipse(brushSelect.small.x, brushSelect.y, brushSelect.small.diameter, brushSelect.small.diameter);

fill(brushSelect.large.col)
ellipse(brushSelect.large.x, brushSelect.y, brushSelect.large.diameter, brushSelect.large.diameter);


//Color Samples
fill(circle.red.col); //red
ellipse(circle.red.x, circle.y, circle.diameter, circle.diameter);

fill(circle.green.col);//blue
ellipse(circle.green.x, circle.y, circle.diameter, circle.diameter);

fill(circle.lilac.col);//purple
ellipse(circle.lilac.x, circle.y, circle.diameter, circle.diameter);

fill(circle.yellow.col);//yellow
ellipse(circle.yellow.x, circle.y, circle.diameter, circle.diameter);

fill(random(255), random(255), random(255));//random (grey scale)
ellipse(circle.random.x, circle.y, circle.diameter, circle.diameter);

// Selecting Colors
if(mouseY > circleBoundary.top && mouseY < circleBoundary.bottom){
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

//Create brushSelect'
	fill(brushColor);
	noStroke();
	ellipse(mouseX, mouseY, brushSize, brushSize);
  stroke(1);



//Selecting brushSelect Size
if(mouseY > smallBoundary.top && mouseY < smallBoundary.bottom){
	if(mouseX > brushSelect.small.leftSide && mouseX < brushSelect.small.rightSide){
		brushSelection = "smaller";
	} if(mouseX > brushSelect.large.leftSide && mouseX < brushSelect.large.rightSide){
		brushSelection = "larger";
		console.log('large');
	}
}

}

function mousePressed() {


//Change Brush Color
  console.log(currentColor);
  if(currentColor == "red"){
     brushColor = circle.red.col;
  } if(currentColor == "green"){
     brushColor = circle.green.col;
  } if(currentColor == "lilac"){
    brushColor = circle.lilac.col;
  } if(currentColor == "yellow") {
     brushColor = circle.yellow.col;
  } if(currentColor == "random") {
     brushColor = color(random(255), random(255), random(255));
  }

//Change Brush Size -- Button
	if(brushSelection == "smaller"){
		brushSize--;
	} if(brushSelection == "larger"){
		brushSize++;
	}

}

//Change Brush Size -- Keys

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    brushSize--;
  } else if (keyCode === RIGHT_ARROW) {
    brushSize++;
  }
}
