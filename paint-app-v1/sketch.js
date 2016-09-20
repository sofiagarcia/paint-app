var circle = {
	red : {x: 100, col: "#e54341"},
	green: {x: 200, col: "#60b896"},
	lilac: {x: 300, col: "#9b84af"},
	yellow: {x: 400, col: "#f7b320" },
	random: {x: 500, col: "#ffffff"},
	y: 500,
	diameter: 80,
  radius: 40
};

// var areaColor = [ ];
// var topBoundary = circle.y - circle.radius;
// var leftBoundary = circle.x - circle.radius;
// var rightBoundary = circle.x + circle.radius
// var bottomBoundary = circle.y + circle.radius;

function setup() {
	createCanvas(600, 600);
	// areaColor= ["#e54341", "#60b896","#9b84af","#f7b320","#537bbe"];
}

// for(var i = 0; i < 6; i++){
// 	circleX.push(circle.x + 1);
// }
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
// if(mouseY > topBoundary && mouseY < bottomBoundary){
//  if(mouseX > leftBoundary && mouseX < rightBoundary ){
//   console.log('Red Area');
//  }
// }

}
