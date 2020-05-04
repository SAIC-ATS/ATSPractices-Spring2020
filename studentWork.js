function aniSketch() {
  background(miel / 2, love / 2, idiot / 2, stupid);

  fill(miel, love, idiot, stupid);
  stroke(255);
  rect(miel * 2, love * 2, idiot * 2, stupid * 2);

  fill(love, idiot, stupid, miel);
  stroke(255);
  rect(love * 2, idiot * 2, stupid * 2, miel * 2);

  fill(idiot, stupid, miel, love);
  stroke(255);
  rect(idiot * 2, stupid * 2, miel * 2, love * 2);

  fill(stupid, miel, love, idiot);
  stroke(255);
  rect(stupid * 2, miel * 2, love * 2, idiot * 2);
}

function yanaSketch() {
  rotateY(millis() / 2000);
  noStroke();
  colorMode(HSB, 100);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      stroke(i * 20, j * 20, 100);
      ellipse(i * 60, j * 50, 10);
    }
  }
  torus(100, 150, detailX.value(), 12);
}

function sherrieSketch() {
  background(255);
  var x = width/2;
  var y = height/2;
  image(al, x-width/4, y-width/4, x, y);
  image(alc, mouseX-x,mouseY-y, width, height);
}

function sherrieMain() {
  stroke(lerpColor(startColor, newColor, amt));
  amt += 0.01;
  if (amt >= 1) {
    amt = 0.0;
    startColor = newColor;
    //   and here!
    newColor = color(random(220, 255), random(220, 255), random(220, 255));
  }
  translate(mouseX, mouseY);
  beginShape();
  for (var i = 0; i < 1000; i++) {
    var ang = map(i, 0, 250, 0, random(1, 10));
    var rad = 200 * noise(i * 1, t * 0.0005);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);
  t += 1;
}

function cathySketch() {
  background(205, 102, 94);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(20, 10);
  stroke(255, 204, 0); // Change the color
  strokeWeight(70); // Make the points 10 pixels in size
  point(40, 40);
  point(40, 360);
  point(360, 40);
  point(360, 360);
}

function cherSketch() {
  background(220);
  image(img, 0, 0, width, height);
  image(img2, 0, 0, mouseX, mouseY);
  blend(50, 50, 150, 100, 00, 0, width, height, DIFFERENCE);
}

function chloeSketch() {
  background(225);
  noStroke();
  fill(0);
  text('Press the X key', width / 2, height / 2);
  fill(300);
  rect(0, height - 300, width, 100);

  if (keyWentDown('x')) {
    let bullet = createSprite(MrMeowster.position.x + 150, MrMeowster.position.y + 5);
    bullet.addAnimation('assets/YarnProjectile-1.png', 'assets/YarnProjectile-1.png', 'assets/YarnProjectile-1.png', 'assets/YarnProjectile-2.png', 'assets/YarnProjectile-2.png', 'assets/YarnProjectile-2.png', 'assets/YarnProjectile-3.png', 'assets/YarnProjectile-3.png', 'assets/YarnProjectile-3.png');
    bullet.setSpeed(8 + MrMeowster.getSpeed(), MrMeowster.rotation);
  }
  drawSprites();
}

function harriSketch() {
  background(0);
  let s = 'TURN VOLUME ON';
  textSize(15);
  text(s, 135, 20, 400, 400);
  var vol = amp.getLevel();
  // to get the mp3 vol to show - scale of 0-1 on the y axis
  volhistory.push(vol);
  beginShape();
  stroke(255);
  noFill();
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i] * 10, 0, 1, height, 0);
    vertex(i, y);
  }
  endShape();
  // continuious volume line
  if (volhistory.length > width) {
    volhistory.splice(0, 1)
  }
  //circle
  fill(255);
  ellipse(width / 2, height / 2, 50, vol * 600);

}
//harri toggle song function
function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play()
  }
}

function jeffSketch() {
  place = place + move
  background(0);
  noStroke();
  fill(255, 0, place);
  circle((width / 2) - 200, (height / 2) - 200, mouseX);

  fill(0, 255, place)
  circle((width / 2) - 200, (height / 2) - 200, mouseY)

  if (place > 255 || place < 0) {
    move = move * -1
  }
}

function jingzhouSketch() {
  let x = width / 4;
  let y = width / 4;
  background(220, 140, 1550);
  stroke(50, 70, 180);
  strokeWeight(5)
  quad(50 + x, 60 + y, 90 + x, 35 + y, 160 + x, 45 + y, 70 + x, 120 + y)
  point(110 + x, 60 + y);
  quad(300 + x, 68 + y, 330 + x, 75 + y, 370 + x, 99 + y, 220 + x, 120 + y)
  point(290 + x, 90 + y)
  line(150 + x, 100 + y, 70 + x, 240 + y);
  line(70 + x, 240 + y, 160 + x, 260 + y);
  triangle(85 + x, 242 + y, 105 + x, 247 + y, 97 + x, 230 + y)
  triangle(130 + x, 252 + y, 150 + x, 257 + y, 140 + x, 240 + y)
  // Draw a rectangle with rounded corners, each having a radius of 20.
  rect(200 + x, 265 + y, 160, 75, 20);
  line(200 + x, 300 + y, 360 + x, 300 + y);
  line(230 + x, 320 + y, 230 + x, 280 + y);
  line(260 + x, 320 + y, 260 + x, 280 + y);
  line(290 + x, 320 + y, 290 + x, 280 + y);
  line(320 + x, 320 + y, 320 + x, 280 + y);
}

function laurenSketch() {
  background(random(255), 5);
  scale = scale + speed;
  for (var i = 0; i <= 20; i++) {
    for (var y = 0; y <= 20; y++) {
      ellipse(400 * i, 400 * y, scale);
    }
  }
  for (var i = 0; i <= 20; i++) {
    for (var y = 0; y <= 20; y++) {
      ellipse((400 * i) + 200, (400 * y) + 200, scale);
    }
  }
  if (scale > 360 || scale < 4) { //is scale is greater than 160 OR less than 4
    speed = speed * -1; //invert the direction of the speed
  }
}

function lucasSketch() {
  let h, m, s;
  let x = width / 5;
  let y = height / 2;
  h = hour();
  m = minute();
  s = second();
  stroke(255);
  fill(255, 5);
  rect(x + 10, y + 10, s * 15, 85);
  rect(x + 10, y + 105, m * 15, 85);
  rect(x + 10, y + 200, h * 15, 85);

  if (s === 0) {
    fill(127);
    noStroke();
    rect(x, y + 5, x + 910, 95)
  }
  if (m === 0) {
    fill(127);
    noStroke();
    rect(x, y + 100, x + 910, 95)
  }
  if (h === 0) {
    fill(127);
    noStroke();
    rect(x, y + 195, x + 910, 95)
  }
  noStroke();
  fill(127);
  rect(width - 100, y + 240, 40, 50);
  fill(255);
  text(s, width - 100, y + 255);
  text(m, width - 100, y + 270);
  text(h, width - 100, y + 285);

  if (resize == true) {
    background(127);
    resize = false;
  }
}

function minkySketch() {
  let x = (width / 2) - 200;
  let y = (height / 3) - 100;
  background(femstu);
  fill(255, 100);
  rect(0, 0, width, height);
  //image(femstu, x, y);
  noCursor();
  assault = random(assaults);
  fill(0);
  stroke(0);
  textSize(20);
  text('FREE TO LOOK, FREEDOM TO THINK', width - 450, height - 150);

  if (mouseY < y + 150) {
    cursor(ARROW);
  } else if (0 < mouseX, 0 < mouseY) {
    noCursor();
    image(eye, mouseX - 20, mouseY, 40, 38);
    fill(255);
    strokeWeight(1.5);
    stroke(255, 0, 0);
    textSize(14);
    text(assault, mouseX - 15, mouseY - 5);
    text('click and hold to read free deep fleeting thoughts.', width - 450, height - 125);
  }

  if (mouseIsPressed) {
    minkyNoLoop();
  }
}

function osSketch() {
  background(220);
  if (x <= width) {
    x = x + 0.5;
  } else {
    x = 1;
  }
  for (let i = 0; i <= 40; i++) {
    fill(x);
    sphere(x);
    rotateY(frameCount * 0.01);
  }
}

function raviSketch() {
  stroke(0, 0, 255);
  strokeWeight(0);
  fill(255, 123, 232);
  let x = random(0, width);
  let y = random(0, height);
  let r = random(0, 255);
  let b = random(0, 255);
  let g = random(0, 255);
  fill(r, b, g)
  ellipse(x, y, (mouseX / 2 - 160), (mouseY / 2 + 50));
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 30, 30);
    brushSize = brushSize + 1;
  }
  else {
    brushSize = 1
  }
  fill(255, 3);
  rect(0, 0, width, height);
  fill(255, 200);
  noStroke();
  textSize(48);
  text("Click and Drag Mouse", width / 2 - 200, height / 2);
}
function rongSketch() {
  var y = height / 2
  var x = width / 2;
  background(255);
  strokeWeight(10);
  line(x - 20 + speed1, y, x - 20 + speed1, y + 200);
  for (var i = 0; i <= 8; i++) {
    var xcord = 20 * i;
    line(x + xcord, y, x + xcord, y + 200);
  }
  line(x + 180 + speed2, y, x + 180 + speed2, y + 200);
  noStroke();
  fill(0);
  textSize(14);
  text("Press keys: a, s, b and n", x - 25, y + 240)
}
function russellSketch() {
  var x = width / 2 - 200;
  var y = height / 2 - 200;
  fill(200, 45, 45);
  rect(x + 160, y + 260, 195, 65, 20);
  fill(45, 200, 45);
  circle(x + 130, y + 230, 45);
  fill(45, 200, 45);
  circle(x + 375, y + 230, 45);

}
function sandingSketch() {
  var x = width / 2;
  var y = height / 2;
  background(50, 60, 140);
  fill(255);
  rect(0, y * -1, x, height);
  fill(50, 60, 140);
  textSize(48);
  text("no way", width / 4, 0);
  fill(505, 195, 185);
  noStroke();
  translate(-width / 4, 0)
  sphere(100);
  erase();
  rotateY(frameCount * 0.05);
  translate(0, 0, 150);
  torus(200, 10);
  noErase();
}

function sarahSketch() {
  image(capture, 0, 0, width, height);
  let capWidth = width / 8;
  let spacer = capWidth * 2;
  for (var x = 0; x <= 3; x++) {
    image(capture, spacer * x, 0, capWidth, capWidth);
    image(capture, spacer * x + capWidth, capWidth, capWidth, capWidth);
    image(capture, spacer * x, capWidth * 2, capWidth, capWidth);
  }
  //final row
  image(capture, capWidth, capWidth * 3 + (capWidth / 4), capWidth * 6);
}

function timSketch() {
  let x = (width / 2) - 200;
  let y = (height / 2) - 200;

  background(100, 250, 25);
  let c = color(255, 204, 0);
  fill(c);
  rect(x + 75, y + 20, 35, 60);
  rect(x + 375, y + 20, 35, 60);
  rect(x + 75, y + 20, 335, 360);
  let redValue = red(c);
  print(redValue);
  fill(redValue, 0, 0);
  rect(x + 250, y + 220, 235, 260);
  fill(c);
  rect(x + 15, y + 20, 35, 60);
  print(redValue);
  fill(redValue, 0, 0);
  rect(x + 150, y + 120, 135, 160);
  triangle(x + 75, y + 220, x + 200, y + 20, x + 240, y + 220);
  triangle(x + 200, y + 20, x + 240, y + 220, x + 340, y + 240);
  triangle(x + 300, y + 320, x + 75, y + 220, x + 200, y + 20);
  textSize(45);
  text('dElightful rifle ', x + 10, y + 330);
  fill(0, 102, 153);
  text('dElightful rifle', x + 10, y + 360);
  fill(0, 102, 253, 51);
  text('dElightful rifle', x + 10, y + 290);
  text('dElightful rifle', x + 210, y + 90);
  text('dElightful rifle', x + 220, y + 80);
  text('dElightful rifle', x + 230, y + 70);
}

function winnieSketch() {
  let x = width / 2 - 325;
  let y = height / 2 - 360;
  if (toasty === true) {
    image(toast, x, y, 640, 720);
    textSize(18);
    noStroke()
    fill(0);
    text("Press the MOUSE or the SHIFT key", width / 2 - 150, height / 2);
    toasty = false;
  }
  if (mouseIsPressed) {
    image(pb, x, y, 640, 720);
  }
  if (keyIsPressed && keyCode == SHIFT) {
    c = random(x + 50, x + 400);
    d = random(y + 50, y + 300);
    image(banana, c, d);
  }
}

function keyPressed() {
  if (key == 'a') {
    speed1 = speed1 - 5;
  } else if (key == 'b') {
    speed2 = speed2 - 5;
  } else if (key == 's') {
    speed1 = speed1 + 5;
  } else if (key == 'n') {
    speed2 = speed2 + 5;
  }
}

function minkyNoLoop() {
  noLoop();
}
function mouseReleased() {
  loop();
}