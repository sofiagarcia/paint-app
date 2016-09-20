var currentColor = " ";
var brushColor = "0";

//Initializing Color Samples
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

var circleBoundary = {
	top : circle.y - circle.radius,
	bottom: circle.y + circle.radius
};

//Initializing Brushes
var brushSize = {
	small : {x: 500, diameter: 20, col: '#ffffff', leftSide: 490, rightSide: 510},
	large : {x: 550, diameter: 30, col: '#ffffff', leftSide: 535, rightSide: 565},
	y: 50,
	r1: 10,
	r2: 15
}

var smallBoundary = {
	top: brushSize.y - brushSize.r1,
	bottom: brushSize.y + brushSize.r1
}

//Canvas
function setup() {
	createCanvas(600, 600);
	background('#ebeef0');
}


function draw() {

//Brush Sizes
fill(brushSize.small.col)
ellipse(brushSize.small.x, brushSize.y, brushSize.small.diameter, brushSize.small.diameter);

fill(brushSize.large.col)
ellipse(brushSize.large.x, brushSize.y, brushSize.large.diameter, brushSize.large.diameter);


//Color Samples
fill(circle.red.col); //red
ellipse(circle.red.x, circle.y, circle.diameter, circle.diameter);

fill(circle.green.col);//blue
ellipse(circle.green.x, circle.y, circle.diameter, circle.diameter);

fill(circle.lilac.col);//purple
ellipse(circle.lilac.x, circle.y, circle.diameter, circle.diameter);

fill(circle.yellow.col);//yellow
ellipse(circle.yellow.x, circle.y, circle.diameter, circle.diameter);

fill(circle.random.col);//random (grey scale)
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

//Create Brush
fill(brushColor);
ellipse(mouseX, mouseY, 10, 10);

//Selecting Brush Size
if(mouseY > smallBoundary.top && mouseY < smallBoundary.bottom){
	if(mouseX > brushSize.small.leftSide && mouseX < brushSize.small.rightSide){
		console.log('small');
	} if(mouseX > brushSize.large.leftSide && mouseX < brushSize.large.rightSide){
		console.log('large');
	}
}

}

function mousePressed() {

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
     brushColor = circle.random.col;
  }
}
