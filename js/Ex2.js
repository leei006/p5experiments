function setup() {
    createCanvas(400, 400, WEBGL);
  }
  function draw() {
    background(255, 204, 0);
    rotateX(millis() / 1100);
    rotateY(millis() / 1000);
    stroke('#fae');
    strokeWeight(1);
    fill('#A51C8A')
    torus();
    rotateX(millis() / 800);
    rotateY(millis() / 1000);
    stroke('#fae');
    strokeWeight(1);
    fill('#A51C8A')
    torus();
  }
  