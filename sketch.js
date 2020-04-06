let teapot, teacup;
let rotx, roty, rotz;
let slider;
let brightness;
let sound;
let scene;
let scl;
let cangle;
let cFrame;
let tx, ty, tz;
let rx, ry, rz;
let circlex, circley;
let anglenum;
let ty1, ty2, ty3, ty4, ty5;
let tx1, tx2, tx3, tx4, tx5;

function preload() {

  teapot = loadModel('data/teapot.obj');
  teacup = loadModel('data/teacup.obj'); //https://sketchfab.com/3d-models/gilded-teacup-97e45768e0184ebdb84f8cf53eb4e97a
  soundFormats('mp3');
  sound = loadSound('data/song');
  font = loadFont('data/NotoSansKR-Black.otf');
}

function setup() {
  frameRate(60);
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100);
  slider = createSlider(0, 360, 120);
  slider.position(10, 10);
  slider.style('width', '80px');

  rotz = 0;
  rotx = 0;
  roty = 0;
  rx = 0;
  ry = 0;
  rz = 0;
  brightness = 0;
  scl = 10;
  sound.setVolume(0.1);
  scene = -1;
  cangle = TWO_PI / 5;
  cFrame = 0;
  circlex = 0;
  circley = 0;

  tx = 0;
  ty = 200;
  tz = -300;
  ty1 = 0;
  ty2 = 0;
  ty3 = 0;
  ty4 = 0;
  ty5 = 0;
  tx1 = 0;
  tx2 = 0;
  tx3 = 0;
  tx4 = 0;
  tx5 = 0;
  anglenum = 0;

  textFont(font);
  textSize(width / 230);
  textAlign(CENTER, BOTTOM);

}

function draw() {
  let angle = TWO_PI / 5;

  //scene change by sound
  if (sound.isPlaying() == false && scene == -1 && mouseIsPressed) {
    sound.play();
    scene = 0;
  }

  if (sound.currentTime() >= 1.675 && sound.currentTime() <= 1.775 && scene == 0) {
    scene += 1;
  }

  if (sound.currentTime() >= 2.035 && sound.currentTime() <= 2.135 && scene == 1) {
    scl = 15;
    scene += 1;
  }

  if (sound.currentTime() >= 2.4 && sound.currentTime() <= 2.5 && scene == 2) {
    scene += 1;
  }

  if (sound.currentTime() >= 2.79 && sound.currentTime() <= 2.89 && scene == 3) {
    scl = 30;
    scene += 1;
  }

  if (sound.currentTime() >= 3.14 && sound.currentTime() <= 3.24 && scene == 4) {
    scene += 1;
  }

  if (sound.currentTime() >= 3.82 && sound.currentTime() <= 3.92 && scene == 5) {
    scene += 1;
  }

  if (sound.currentTime() >= 4.25 && sound.currentTime() <= 4.35 && scene == 6) {
    scene += 1;
  }

  if (sound.currentTime() >= 4.6 && sound.currentTime() <= 4.7 && scene == 8) {
    scene += 1;
  }

  if (sound.currentTime() >= 5 && sound.currentTime() <= 5.1 && scene == 9) {
    scene += 1;
  }

  if (sound.currentTime() >= 5.4 && sound.currentTime() <= 5.5 && scene == 10) {
    scene += 1;
  }

  if (sound.currentTime() >= 5.8 && sound.currentTime() <= 5.9 && scene == 11) {
    scene += 1;
  }

  if (sound.currentTime() >= 6.2 && sound.currentTime() <= 6.3 && scene == 12) {
    scene += 1;
  }

  if (sound.currentTime() >= 6.86 && sound.currentTime() <= 6.96 && scene == 13) {
    scene += 1;
  }

  if (sound.currentTime() >= 7.6 && sound.currentTime() <= 7.7 && scene == 14) {
    scene += 1;
  }

  background(0);
  // setting lights
  pointLight(0, 0, brightness, 0, 0, 1000);
  // transform the teapot
  translate(tx, ty, tz);
  rotateX(HALF_PI);
  rotateZ(rotz);
  rotateY(roty);
  rotateX(rotx);

  scale(scl);
  noStroke();

  // set teapot material colors
  fill(0, 100, 100);

  //scene change
  switch (scene) {
    case 0:
      brightness += 5;
      push();
      scl += 0.1;
      //translate(0,200,-300);
      model(teapot);
      //model(teacup);
      pop();
      break;

    case 1:
      background(0);
      fill(50, 100, 100);
      push();
      rotateZ(HALF_PI / 2);
      //translate(0,200,-300);
      model(teapot);
      pop();
      break;

    case 2:
      background(0);
      fill(100, 100, 100);
      push();
      rotateZ(HALF_PI / 3 * 2);
      rotateX(PI);
      //  translate(0,200,-300);
      scl += 0.3;
      model(teapot);
      pop();
      break;

    case 3:
      background(0);
      fill(150, 100, 100);
      push();
      rotateZ(PI - 10);
      //translate(0,200,-300);
      scl = 15;
      model(teapot);
      pop();
      break;

    case 4:
      background(0);
      fill(200, 100, 100);
      scl -= 0.3;
      model(teapot);
      break;

    case 5:
      background(0);

      rotx = -HALF_PI;
      roty = 0;
      rotz = 0;

      push();
      rotateX(PI);
      rotateZ(HALF_PI);
      star(0, 0, 0, 4, 10, 5);
      stroke(50);
      strokeWeight(10);

      cFrame += 1;
      if (cFrame <= 5) {
        dline(0, 0, 0, 10, angle);
      } else {
        cFrame = 0;
        cangle += angle;
        anglenum += 1;
      }

      if (anglenum < 6) {
        tz -= 10;
      }
      pop();
      break;

    case 6:
      background(0);

      stroke(50);
      strokeWeight(10);
      push();
      rotateX(PI);
      rotateZ(HALF_PI);
      dline(0, 0, 0, 10, angle);
      pop();

      fill(255);
      let writetext0 = "five\nservings";
      text(writetext0, 0, 4);
      break;

    case 7:
      tz = 500;
      scene += 1;
      break;

    case 8:
      background(0);

      fill(255);
      let writetext1 = "더";
      textSize(width / 100);
      text(writetext1, 0, -1);

      if (tz >= -200) {
        tz -= 80;
      }
      break;

    case 9:
      background(0);

      fill(255);
      let writetext2 = "More";
      textSize(width / 100);
      text(writetext2, 0, -1);
      if (tz <= 0) {
        tz += 3;
      }
      break;

    case 10:
      background(0);

      fill(23, 48, 85);
      let writetext3 = "NO";
      textSize(width / 100);
      text(writetext3, -7, -1);
      if (sound.currentTime() >= 5.2) {
        text(writetext3, 7, -1);
      }
      break;

    case 11:
      background(0);

      fill(255);
      let writetext4 = "Better";
      textSize(width / 100);
      text(writetext4, 0, -1);

      if (sound.currentTime() >= 5.75) {
        background(0);
        tz = -450;
      }
      break;

    case 12:
      background(0);

      push();
      rotateX(HALF_PI);
      rotateZ(PI);
      //translate(0, 200, -300);
      model(teapot);
      pop();

      if (tz >= -500) {
        tz -= 10;
      }

      if (sound.currentTime() >= 5.85) {
        push();
        rotateX(HALF_PI);
        rotateZ(PI);
        translate(-30, 0, -15);
        model(teapot);
        pop();

        push();
        rotateX(HALF_PI);
        rotateZ(PI);
        translate(30, 0, -15);
        model(teapot);
        pop();

        push();
        rotateX(HALF_PI);
        rotateZ(PI);
        translate(-20, 0, 15);
        model(teapot);
        pop();

        push();
        rotateX(HALF_PI);
        rotateZ(PI);
        translate(20, 0, 15);
        model(teapot);
        pop();
      }
      roty = 0;
      break;

    case 13: //pouring water
      ty = 200;
      background(0);
      rotateY(roty);
      push();
      if (rz <= HALF_PI / 2) {
        rz += 0.045;
      } else {
        push();
        translate(0.2, -18.1, -35);
        fill(200, 48, 85, 200);
        if (circley <= 10) {
          circle(circlex += 0.04, circley += 2, 1);
        }
        pop();
      }
      translate(-20, -20, -20);
      rotateZ(rz);
      rotateX(HALF_PI);
      model(teapot); // 물 떨어지면서 색 하얗게
      pop();

      push();
      translate(23.5, -7, 10);
      rotateX(PI);
      model(teacup);
      pop();
      break;

    case 14:
      push();
      translate(cos(0) * tx1++, sin(0) * ty1--, -20);
      rotateZ(0);
      model(teapot);
      pop();

      push();
      translate(cos(TWO_PI / 5) * tx2++, sin(TWO_PI / 5) * ty2--, -20);
      rotateZ(-(TWO_PI / 5));
      model(teapot);
      pop();

      push();
      translate(cos(TWO_PI / 5 * 2) * tx3++, sin(TWO_PI / 5 * 2) * ty3--, -20);
      rotateZ(-(TWO_PI / 5 * 2));
      model(teapot);
      pop();

      push();
      translate(cos(TWO_PI / 5 * 3) * tx4++, sin(TWO_PI / 5 * 3) * ty4--, -20);
      rotateZ(-(TWO_PI / 5 * 3));
      model(teapot);
      pop();

      push();
      translate(cos(TWO_PI / 5 * 4) * tx5++, sin(TWO_PI / 5 * 4) * ty5--, -20);
      rotateZ(-(TWO_PI / 5 * 4));
      model(teapot);
      pop();
      break;

  }

}



//draw a star
function star(x, y, z, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  stroke(100);
  strokeWeight(10);
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    let sz = z;
    vertex(sx, sy, sz);
    stroke(255);
    strokeWeight(20);
    point(sx, sy, sz);
    strokeWeight(10);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    sz = z;
    vertex(sx, sy, sz);
  }
  endShape(CLOSE);
}

function dline(x, y, z, radius, angle) {
  for (let a = angle; a <= cangle; a += angle) {
    beginShape();
    //starting point
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    let sz = z;
    //drawing point
    let cx = x + cos(a + angle) * radius;
    let cy = y + sin(a + angle) * radius;
    let cz = z;
    vertex(sx, sy, sz);
    vertex(cx, cy, cz);
    endShape(CLOSE);
  }
}
