//Katie Wilson HW - 3

function setup() {
  createCanvas(1350, 300);
  background(154, 0, 255);

stroke(98, 255, 84, 190);
  strokeWeight(3);
     line(0, 105, 1350, 105);

  for (var y = 0; y <= height; y += 10) {
    for (var z = 0; z <= width; z += 10) {
     stroke(213, 255, 194, 50);
       rect(z, y, 1, 1);
   }
  }

  for (var x = 0; x <= 2750; x += 60) {
   stroke(255, 173, 211);
    strokeWeight(5);
      line(x, 20, x + 10, 40);
      line(x + 10, 40, x + 20, 20);
      line(x + 20, 20, x + 30, 40);
      line(x + 30, 40, x + 40, 20);
      line(x + 40, 20, x + 50, 40);
      line(x + 50, 40, x + 60, 20);
      line(x, 260, x + 10, 280);
      line(x + 10, 280, x + 20, 260);
      line(x + 20, 260, x + 30, 280);
      line(x + 30, 280, x + 40, 260);
      line(x + 40, 260, x + 50, 280);
      line(x + 50, 280, x + 60, 260);
   noStroke();
    fill(255, 173, 211, 200);
      ellipse(x + 10, 60, 10);
      rect(x/2 + 7, 207, 10, 10);
    fill(84, 184, 255, 200);
      ellipse(x + 5, 210, 100);
    fill(98, 255, 84, 200);
      ellipse(x + 10, 80, 30);
   stroke(255, 173, 211, 200);
    strokeWeight(5);
      line(x, 120, x + 20, 180);
      line(x, 180, x + 20, 120);
      line(x, 146, x + 20, 146);
  }
}

function draw() {

}
