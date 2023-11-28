var x = 0;
var speed = 2;
function setup() {
  createCanvas(1200,400);
}

function draw(){
  background(0)
  stroke(255, 204, 0);
  strokeWeight(4);
  fill('#fae')
  ellipse(x, 200, 100, 100);
  
   if (x > width) {
     speed = -1
  }
      x = x + speed;
}

