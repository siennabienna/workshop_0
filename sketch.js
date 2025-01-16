function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(224,255,255);

   let d = dist(mouseX, mouseY, 200, 200);
  
  stroke(173,255,47,240);
  fill(255,105,180);
  circle(200, 200, d*2 );

}
