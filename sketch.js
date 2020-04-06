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
let anglenum;

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
  brightness = 0;
  scl = 10;
  sound.setVolume(0.1);
  scene = 0;
  cangle = TWO_PI / 5;
  cFrame = 0;

  tx = 0;
  ty = 200;
  tz = -300;
  anglenum = 0;

  textFont(font);
  textSize(width/230);
  textAlign(CENTER, CENTER);

}

function draw() {
  let angle = TWO_PI / 5;

  //scene change by sound
  if (sound.isPlaying() == false && scene == 0) {
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

  if (sound.currentTime() >= 4.6 && sound.currentTime() <=4.7 && scene == 8) {
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



  background(0);
  // setting lights
  pointLight(0, 0, brightness, 0, 0, 500);
  // transform the teapot
  translate(tx, ty, tz);
  rotateX(HALF_PI);
  rotateZ(rotz);
  scale(scl);
  noStroke();
  // set teapot material colors
  fill(0, 100, 100);
  // display teapots
  // rotate teapots

  //rot += 0.02;

  //scene change
  switch (scene) {
    case 0:
      brightness += 5;
      scl += 0.1;
      model(teapot);
      break;

    case 1:
      background(0);
      fill(50, 100, 100);
      rotz = 10;
      model(teapot);
      break;

    case 2:
      background(0);
      fill(100, 100, 100);
      scl += 0.3;
      model(teapot);
      break;

    case 3:
      background(0);
      fill(150, 100, 100);
      rotz = PI - 10;
      scl = 15;
      model(teapot);
      break;

    case 4:
      background(0);
      fill(200, 100, 100);
      scl -= 0.3;
      model(teapot);
      break;

    case 5:
      background(0);
      rotateX(HALF_PI);
      rotateY(HALF_PI/5*2);
      rotateZ(angle/11*3);
      star(0, 0, 0, 4, 10, 5);


      stroke(50);
      strokeWeight(10);

      cFrame += 1;
      if ( cFrame <= 5 ){
          dline(0,0,0,10,angle);
      }
      else{
          cFrame = 0;
          cangle+=angle;
          anglenum +=1 ;
      }

      if(anglenum < 6){
        tz -= 10;
      }
      break;

      case 6:
        background(0);
        rotateX(HALF_PI);
        rotateY(HALF_PI/5*2);
        rotateZ(angle/11*3);
        stroke(50);
        strokeWeight(10);
        dline(0,0,0,10,angle);

        rotateX(0);
        rotateY(PI);
        rotateZ(PI*10/9);
        fill(255);
        let writetext0 = "five\nservings";
        text(writetext0, 0,-1);
        break;

      case 7:
        tz = 500;
        scene += 1;
        break;

      case 8 :
        background(0);
        rotateX(HALF_PI);
        rotateY(PI+0.8);
        rotateZ(PI);
        fill(255);
        let writetext1 = "더";
        textSize(width/100);
        text(writetext1, 0,-1);


        if( tz >= -200){
          tz -= 80;
        }
        break;

      case 9 :
        background(0);
        rotateX(HALF_PI);
        rotateY(PI+0.6);
        rotateZ(PI);
        fill(255);
        let writetext2 = "More";
        textSize(width/100);
        text(writetext2, 0,-1);
        if( tz <= 0){
          tz += 3;
        }
        break;

      case 10 :
        background(0);
        //tz = -300;
        rotateX(HALF_PI);
        rotateY(PI+0.6);
        rotateZ(PI);
        fill(255);
        let writetext3 = "NO";
        textSize(width/100);
        text(writetext3, -7,-1);
        if (sound.currentTime() >= 5.2){
          text(writetext3, 7, -1);
        }
        break;

        case 11 :
          background(0);
          rotateX(HALF_PI);
          rotateY(PI+0.6);
          rotateZ(PI);
          fill(255);
          let writetext4 = "Better";
          textSize(width/100);
          text(writetext4, 0,-1);

          if (sound.currentTime() >= 5.8){
            background(0);
          }
          break;

        case 12 :

          background(0);
          rotateZ(HALF_PI/5*2);
          push();
          translate(0, 0, -15);
          model(teapot);
          pop();

          if( tz >= -310){
            tz -= 10;
          }
          if (sound.currentTime() >= 5.9){
            push();
            translate(-30, 0, -15);
            model(teapot);
            pop();

            push();
            translate(30, 0, -15);
            model(teapot);
            pop();

            push();
            translate(-20, 0, 15);
            model(teapot);
            pop();

            push();
            translate(20, 0, 15);
            model(teapot);
            pop();
          }
          roty = 0;
          break;

        case 13: //pouring water, need debug
          background(0);
          rotateY(roty);
          if(roty <= HALF_PI/2){
            roty -= 1;
          }

          translate(-20, -20, 15);
          model(teapot);


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
  for(let a = angle; a<=cangle; a+=angle){
    beginShape();
  //starting point
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      let sz = z;
  //drawing point
      let cx = x + cos(a+angle) * radius;
      let cy = y + sin(a+angle) * radius;
      let cz = z;
      vertex(sx, sy, sz);
      vertex(cx, cy, cz);
      endShape(CLOSE);
    }
}
