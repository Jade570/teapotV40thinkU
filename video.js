let teapot, teacup, thinku;
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
let tz1, tz2, tz3, tz4, tz5;
let rz1;
let color, color1, color2;
let starty, endy, inc;

function preload() {

  teapot = loadModel('data/teapot.obj');
  teacup = loadModel('data/teacup.obj'); //https://sketchfab.com/3d-models/gilded-teacup-97e45768e0184ebdb84f8cf53eb4e97a
  thinku = loadImage('data/thinku.jpg');
  soundFormats('mp3');
  sound = loadSound('data/song');
  font = loadFont('data/NotoSansKR-Black.otf');
}

function setup() {
  frameRate(60);
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100);
  slider = createSlider(0, 0.7, 0.35, 0.1);
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

  scene = -1;
  cangle = TWO_PI / 5;
  cFrame = 0;
  circlex = 0;
  circley = 0;
  rz1 = 0;

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
  tz1 = 0;
  tz2 = 0;
  tz3 = 0;
  tz4 = 0;
  tz5 = 0;
  anglenum = 0;
  color = 50;
  color1 = 100;
  color2 = 100;
  starty = 0;
  endy = 0;
  inc = 1;
  textFont(font);
  textSize(width / 230);
  textAlign(CENTER, BOTTOM);

}

function draw() {
  let angle = TWO_PI / 5;
  sound.setVolume(slider.value());
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
  if (sound.currentTime() >= 8.68 && sound.currentTime() <= 8.78 && scene == 15) {
    scene += 1;
  }
  if (sound.currentTime() >= 9.45 && sound.currentTime() <= 9.55 && scene == 17) {
    rz = 0;
    scene += 1;
  }
  if (sound.currentTime() >= 10.55 && sound.currentTime() <= 10.65 && scene == 18) {
    scene += 1;
  }
  if (sound.currentTime() >= 11.65 && sound.currentTime() <= 11.75 && scene == 19) {
    scene += 1;
  }
  if (sound.currentTime() >= 13.1 && sound.currentTime() <= 13.2 && scene == 21) {
    scene += 1;
  }
  if (sound.currentTime() >= 15 && sound.currentTime() <= 15.1 && scene == 23) {
    scene += 1;
  }
  if (sound.currentTime() >= 15.7 && sound.currentTime() <= 15.8 && scene == 25) {
    scene += 1;
  }
  if (sound.currentTime() >= 17.6 && sound.currentTime() <= 17.7 && scene == 26) {
    scene += 1;
  }
  if (sound.currentTime() >= 18 && sound.currentTime() <= 18.1 && scene == 27) {
    scene += 1;
  }
  if (sound.currentTime() >= 18.7 && sound.currentTime() <= 18.8 && scene == 28) {
    scene += 1;
  }
  if (sound.currentTime() >= 20.2 && sound.currentTime() <= 20.3 && scene == 29) {
    scene += 1;
  }
  if (sound.currentTime() >= 20.5 && sound.currentTime() <= 20.6 && scene == 30) {
    scene += 1;
  }
  if (sound.currentTime() >= 20.9 && sound.currentTime() <= 21.9 && scene == 32) {
    scene += 1;
  }
  if (sound.currentTime() >= 22.4 && sound.currentTime() <= 22.5 && scene == 33) {
    scene += 1;
  }
  if (sound.currentTime() >= 27.6 && scene == 34) {
    scene += 1;
  }
  if (sound.currentTime() >= 30 && scene == 35) {
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
  imageMode(CENTER);
  scale(scl);
  noStroke();

  // set teapot material colors
  fill(0, 100, 100);

  //scene change
  switch (scene) {
    case 0: //teapot from darkness
      brightness += 1;
      fill(0, 100, 100);
      push();
      scl += 0.1;
      model(teapot);
      pop();
      break;

    case 1: //5
      fill(72, 100, 100);
      push();
      rotateZ(HALF_PI / 2);
      model(teapot);
      pop();
      tz1 = 0;
      break;

    case 2: //chinese 5
      fill(144, 100, 100);
      push();
      rotateZ(HALF_PI);
      rotateX(PI);
      translate(tz1, 0, -20);
      tz1 += 0.3;
      model(teapot);
      pop();
      break;

    case 3: //다섯
      fill(216, 100, 100);
      push();
      rotateZ(PI - 10);
      scl = 15;
      model(teapot);
      pop();
      break;

    case 4: //five
      fill(288, 100, 100);
      scl -= 0.3;
      model(teapot);
      break;

    case 5: //pentagon + star
      //basic canvas rotation: for proper image&text
      rotx = -HALF_PI;
      roty = 0;
      rotz = 0;
      push();
      rotateX(PI);  //rotation for proper star transform
      rotateZ(HALF_PI);
      star(0, 0, 0, 4, 10, 5); //star
      stroke(50);
      strokeWeight(10);

      cFrame += 1; //pentagon line
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

    case 6: //pentagon + "penta" text
      stroke(50); //pentagon
      strokeWeight(10);
      push();
      rotateX(PI);
      rotateZ(HALF_PI);
      dline(0, 0, 0, 10, angle);
      pop();

      fill(255);  //text
      let writetext0 = "five\nservings";
      text(writetext0, 0, 4);
      break;

    case 7: //scene changer to 8
      tz = 500;
      scene += 1;
      break;

    case 8: //더
      fill(255); //text
      let writetext1 = "더";
      textSize(width / 100);
      text(writetext1, 0, -1);

      if (tz >= -200) {
        tz -= 80;
      }
      break;

    case 9: //more (better)
      fill(255);
      let writetext2 = "More";
      textSize(width / 100);
      text(writetext2, 0, -1);
      if (tz <= 0) {
        tz += 3;
      }
      break;

    case 10: //no (finger)
      fill(23, 48, 85);
      let writetext3 = "NO";
      textSize(width / 100);
      text(writetext3, 0, -1);
      break;

    case 11: //better (더)
      fill(255);
      let writetext4 = "Better";
      textSize(width / 100);
      text(writetext4, 0, -1);

      if (sound.currentTime() >= 5.75) { //sudden black
        background(0);
        tz = -450;
      }
      break;

    case 12: //5hands (5teapots)
      push();
      rotateX(HALF_PI);
      rotateZ(PI);
      fill(0, 100, 100);
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
        fill(72, 100, 100);
        model(teapot);
        pop();

        push();
        rotateX(HALF_PI);
        rotateZ(PI);
        translate(30, 0, -15);
        fill(144, 100, 100);
        model(teapot);
        pop();

        push();
        rotateX(HALF_PI);
        rotateZ(PI);
        translate(-20, 0, 15);
        fill(216, 100, 100);
        model(teapot);
        pop();

        push();
        rotateX(HALF_PI);
        rotateZ(PI);
        translate(20, 0, 15);
        fill(288, 100, 100);
        model(teapot);
        pop();
      }
      roty = 0;
      break;

    case 13: //pouring water (coin)
      ty = 200;
      background(0);
      rotateY(roty);
      push();
      if (rz <= HALF_PI / 2) { //tilting teapot
        rz += 0.045;
      }
      else { //water drop falling
        if(color >= 0){ //teapot saturation down
          color-= 3;
        }
        push();
        translate(0.2, -18.1, -35);
        fill(200, 48, 85, 200);
        if (circley <= 10) {
          circle(circlex += 0.04, circley += 1.5, 1.5);
        }
        pop();
      }
      translate(-20, -20, -20);
      rotateZ(rz);
      rotateX(HALF_PI);

      fill(0,color,100);
      model(teapot);
      pop();

      push();
      translate(23.5, -7, 10);
      rotateX(PI);
      fill(189,41,78);
      model(teacup);
      pop();
      break;

    case 14: //kaleidoscope (chess)
      push();
      translate(cos(0) * tx1++, sin(0) * ty1--, -20);
      rotateZ(0);
      fill(0,100,100);
      model(teapot);
      pop();

      push();
      translate(cos(TWO_PI / 5) * tx2++, sin(TWO_PI / 5) * ty2--, -20);
      rotateZ(-(TWO_PI / 5));
      fill(72,100,100);
      model(teapot);
      pop();

      push();
      translate(cos(TWO_PI / 5 * 2) * tx3++, sin(TWO_PI / 5 * 2) * ty3--, -20);
      rotateZ(-(TWO_PI / 5 * 2));
      fill(144,100,100);
      model(teapot);
      pop();

      push();
      translate(cos(TWO_PI / 5 * 3) * tx4++, sin(TWO_PI / 5 * 3) * ty4--, -20);
      rotateZ(-(TWO_PI / 5 * 3));
      fill(216,100,100);
      model(teapot);
      pop();

      push();
      translate(cos(TWO_PI / 5 * 4) * tx5++, sin(TWO_PI / 5 * 4) * ty5--, -20);
      rotateZ(-(TWO_PI / 5 * 4));
      fill(288,100,100)
      model(teapot);
      pop();

      //reset variables
      tz1 = -50;
      tz2 = -70;
      tz3 = -70;
      tz4 = -90;
      tz5 = -90;
      break;

    case 15: //chess (glasses)
      ty1 = -45;
      ty2 = -45;
      ty3 = -45;
      ty4 = -45;
      ty5 = -45;
      tx1 = 45;
      tx2 = 45;
      tx3 = 45;
      tx4 = 45;
      tx5 = 45;

      tz += 3;

      push();
      translate(0, 0, tz1 -= 0.3);
      rotateX(HALF_PI);
      rotateZ(HALF_PI);
      fill(0, 100, 100);
      model(teapot);
      pop();

      push();
      translate(25, 0, tz2);
      rotateX(HALF_PI);
      rotateZ(HALF_PI / 2);
      fill(72,100,100);
      model(teapot);
      pop();

      push();
      translate(-25, 0, tz3);
      rotateX(HALF_PI);
      rotateZ(PI - (HALF_PI / 2));
      fill(144,100,100);
      model(teapot);
      pop();

      push();
      translate(55, 0, tz4 += 0.2);
      rotateX(HALF_PI);
      rotateZ(0);
      fill(216,100,100);
      model(teapot);
      pop();

      push();
      translate(-55, 0, tz5 += 0.2);
      rotateX(HALF_PI);
      rotateZ(PI);
      fill(288,100,100);
      model(teapot);
      pop();

      break;

    case 16: //scene change to 17
      scene += 1;
      tx1 = -100;
      break;

    case 17: //spotlight
      push();
      spotLight(200, 0, 100, tx1 += 10, 0, 300, 0, 0, -1, PI / 16);
      rotateX(HALF_PI);
      shininess(100);
      fill(144, 20, 100);
      model(teapot);
      pop();
      break;

    case 18: //dynamic movement: rotate & look upward
      push();
      rotateZ(rz);
      rotateX(rx);
      fill(72, 75, 100);
      model(teapot);
      pop();
      if (sound.currentTime() >= 9.7) {
        if (rz < TWO_PI) {  //fast rotation
          rz += HALF_PI / 6;
        } else {  //teapot look up
          rx = HALF_PI;
        }
      }
      tx1 = 45;
      brightness = 100;
      break;

    case 19: //kaleidoscope
      rz = 0;
      rx = 0;
      tx1 -= 2.2;
      tx2 -= 2.2;
      tx3 -= 2.2;
      tx4 -= 2.2;
      tx5 -= 2.2;
      ty1 += 2.2;
      ty2 += 2.2;
      ty3 += 2.2;
      ty4 += 2.2;
      ty5 += 2.2;

      push();
      translate(cos(0) * tx1, sin(0) * ty1, -20);
      rotateZ(0);
      fill(0,100,100);
      model(teapot);
      pop();

      push();
      translate(cos(TWO_PI / 5) * tx2, sin(TWO_PI / 5) * ty2, -20);
      rotateZ(-(TWO_PI / 5));
      fill(72,100,100);
      model(teapot);
      pop();

      push();
      translate(cos(TWO_PI / 5 * 2) * tx3, sin(TWO_PI / 5 * 2) * ty3, -20);
      rotateZ(-(TWO_PI / 5 * 2));
      fill(144,100,100);
      model(teapot);
      pop();

      push();
      translate(cos(TWO_PI / 5 * 3) * tx4, sin(TWO_PI / 5 * 3) * ty4, -20);
      rotateZ(-(TWO_PI / 5 * 3));
      fill(216,100,100);
      model(teapot);
      pop();

      push();
      translate(cos(TWO_PI / 5 * 4) * tx5, sin(TWO_PI / 5 * 4) * ty5, -20);
      rotateZ(-(TWO_PI / 5 * 4));
      fill(288, 100,100);
      model(teapot);
      pop();

      break;

    case 20: //scene change to 21
      tx1 = -80;
      ty1 = -45;
      ty2 = -45;
      ty3 = -45;
      ty4 = -45;
      ty5 = -45;
      tx2 = 45;
      tx3 = 45;
      tx4 = 45;
      tx5 = 45;
      scene += 1;
      brightness = 1;
      break;

    case 21: //dim spotlight
      spotLight(200, 0, 100 - brightness, tx1 += 5, 0, 1200, 0, 0, -1, PI / 8);
      push();
      translate(0, -5,15);
      fill(216, 40, 100);
      model(teapot);
      pop();
      break;

    case 22: //scene change to 23
      brightness = 100;
      tx1 = 0;
      tx2 = 30;
      tx3 = -30;
      ty1 = -20;
      ty2 = -20;
      ty3 = -20;
      tz1 = -30;
      tz2 = -30;
      tz3 = -30;
      scene += 1;
      rx = HALF_PI;
      break;

    case 23: //3 teapot pouring ( 3 color balloon)

      push();
      translate(tx1, ty1, tz1);
      rotateX(rx);
      rotateZ(HALF_PI);
      fill(0,color1,100);
      model(teapot); //center
      pop();

      push();
      translate(tx2, ty2, tz2);
      rotateX(rx);
      rotateZ(HALF_PI);
      fill(220, color2, 100);
      model(teapot); //right
      pop();

      push();
      translate(tx3, ty3, tz3);
      rotateX(rx);
      rotateZ(HALF_PI);
      fill(0, color, 100);
      model(teapot); //left : no tea left
      pop();

      push();
      translate(23.2, -4, 5);
      rotateX(PI);
      fill(189,41,78);
      model(teacup);
      pop();

      push();
      translate(29.8, -4,5);
      rotateX(PI);
      fill(189,41,78);
      model(teacup);
      pop();

      push();
      translate(16.5, -4, 5);
      rotateX(PI);
      fill(189,41,78);
      model(teacup);
      pop();

      if (sound.currentTime() >= 13.25 && sound.currentTime() < 14.5) { //tilt down
        if (rx >= HALF_PI / 16 * 3) {
          rx -= HALF_PI / 16;
        }
        if(color1 >= 50){
          color1 -= 1 ;
          color2 -= 1;
        }
      }
      //if(starty <= 20){
        //starty+=0.6;
      //}

      if(endy <=14 && inc == 1){
        starty+=0.6;
        endy+=0.8;
      }
      else if (endy > 0){
        inc = 0;
        starty+=0.6;
        endy-=0.8;
      }
      push();
      translate(tx2+7, ty2+5+starty, tz2);
      fill(190, 40, 80, 20);
      cylinder(0.6,endy);
      pop();
      push();
      translate(tx1, ty1+5+starty, tz1);
      fill(190, 40, 80, 20);
      cylinder(0.6,endy);
      pop()
      if (sound.currentTime() >= 14.5) { //tilt back up
        if (rx <= HALF_PI) {
          rx += HALF_PI / 10;
        }
        if(endy > 0){

          endy-=1.6;
        }
      }
      break;

    case 24: //scene change to 25
      tz = 200;
      scene += 1;
      color = 20;
      color1 = 100;
      color2 = 100;
      break;

    case 25: //Oh
      fill(255);
      let writetext5 = "Oh";
      text(writetext5, 0, 0);
      if (tz >= -600 && sound.currentTime() >= 15.11) {
        tz -= 50;
      }
      rz = PI;
      break;

    case 26: //rotation
      if (rz <= (TWO_PI + PI)) {
        rz += HALF_PI / 40;
      }
      push();
      shininess(100);
      translate(0,0,30);
      rotateX(HALF_PI);
      rotateZ(rz);
      fill(0,0,100);
      model(teapot);
      pop();

      break;

    case 27: //soft
      rz = PI;
      fill(255);
      let writetext6 = "Soft";
      text(writetext6, 0, 0);
      if (tz <= 50 && sound.currentTime() <= 17.9) {
        tz += 50;
      }

      rz = PI;
      break;

    case 28: //매끄러워 (부드러워)
      fill(255);
      let writetext7 = "매끄러워";
      text(writetext7, 0, 0);
      if (tz >= -600 && sound.currentTime() >= 15.11) {
        tz -= 50;
      }
      rz = PI;
      break;

    case 29: //teapot color difference by amount of tea inside
      if (sound.currentTime() < 19.5 && rz <= (TWO_PI + PI)) {
        rz += HALF_PI / 40;
      }
      if (sound.currentTime() >= 19.5 && rz >= 0) { //2nd teapot: saturation down
        rz -= HALF_PI / 40;
      }
      push(); //1st teapot: saturation up
      translate(-13, 0, 0);
      rotateX(HALF_PI);
      rotateZ(rz);
      fill(216, color, 100);
      model(teapot);
      pop();


      push();   //1 cup of tea
      translate(26, -3, 20);
      rotateX(PI);
      fill(189,41,78);
      model(teacup);
      pop();

      if (sound.currentTime() >= 19.1) { //5cups of tea
        if(color < 100){
          color += 10;
        }

        push();
        translate(26, -5, 20);
        rotateX(PI);
        fill(189,61,78);
        model(teacup);
        pop();

        push();
        translate(26, -7, 20);
        rotateX(PI);
        fill(189,61,78);
        model(teacup);
        pop();

        push();
        translate(26, -9, 20);
        rotateX(PI);
        fill(189,61,78);
        model(teacup);
        pop();

        push();
        translate(26, -11, 20);
        rotateX(PI);
        fill(189,61,78);
        model(teacup);
        pop();
      }

      if (sound.currentTime() >= 19.85) {
        if(color > 20){
                color -= 20;
        }

        background(0);
        push();
        translate(-13, 0, 0);
        rotateX(HALF_PI);
        rotateZ(rz);
        fill(216, color, 100);
        model(teapot);
        pop();


        push(); //1 cup of tea
        translate(26, -3, 20);
        rotateX(PI);
        fill(189,41,78);
        model(teacup);
        pop();

      }
      break;

    case 30: //차 양 알고싶어 (만지고 싶어)
      rz = PI;
      fill(255);
      let writetext8 = "차 양 알고싶어";
      text(writetext8, 0, 0);
      break;

    case 31: //scene change to 32
      tz = 100;
      scene += 1;
      break;

    case 32: //Quantity (touch)
      fill(255);
      let writetext9 = "Quantity";
      text(writetext9, 0, 0);
      if (tz >= -300 && sound.currentTime() <= 20.8) {
        tz -= 50;
      }
      rz = PI;
      break;

    case 33: //small teapots growing with big rotating teapot

    directionalLight(180,50,100,-100,0,0);
    directionalLight(297,50,100,100,0,0);

      rz += HALF_PI / 40;
      tz -= 15;
      push();
      translate(0, -5, -20);
      rotateZ(rz);
      fill(0, 50, 100);
      model(teapot);
      pop();

      if (sound.currentTime() >= 21.2) {
        for (let x = -20; x <= 20; x += 40) {
          for (let y = -20; y <= 20; y += 40) {
            push();
            translate(x, y, -120);
            rotateZ(rz);
            fill(0,0,100);
            model(teapot);
            pop();
          }
        }
      }

      if (sound.currentTime() >= 21.7) {
        for (let x = -60; x <= 60; x += 40) {
          for (let y = -60; y <= 60; y += 40) {
            push();
            translate(x, y, -120);
            rotateZ(rz);
            fill(0,0,100);
            model(teapot);
            pop();
          }
        }
      }

      if (sound.currentTime() >= 22.15) {
        for (let x = -100; x <= 100; x += 40) {
          for (let y = -100; y <= 100; y += 40) {
            push();
            translate(x, y, -120);
            rotateZ(rz);
            fill(0,0,100);
            model(teapot);
            pop();
          }
        }
      }
      tz1 = 0;
      tx2 = 0;
      ty2 = 50;
      break;

    case 34: //4 zoom in teapots
    directionalLight(180,50,100,-100,0,0);
    directionalLight(297,50,100,100,0,0);
      if (sound.currentTime() < 23.14) {
        rz1 += HALF_PI / 150;
      }

      rz += HALF_PI / 40;
      if (tz > -4600) {
        tz -= 15;
        tz1 += 0.61;
      }

      push();
      translate(-10, -7, tz1 + 60);
      rotateY(rz1);
      rotateX(HALF_PI * 5 / 6);
      fill(72, 50, 100);
      model(teapot);
      pop();

      for (let x = -180; x <= 180; x += 40) {
        for (let y = -180; y <= 180; y += 40) {
          push();
          translate(x, y, -120);
          rotateZ(rz);
          fill(0,0,100);
          model(teapot);
          pop();
        }
      }

      if (sound.currentTime() >= 23.14 && sound.currentTime() < 23.88) {
        background(0);

        for (let x = -180; x <= 180; x += 40) {
          for (let y = -180; y <= 180; y += 40) {
            push();
            translate(x, y, -120);
            rotateZ(rz);
            fill(0,0,100);
            model(teapot);
            pop();
          }
        }

        rz1 -= HALF_PI / 150;
        push();
        translate(10, 5, tz1 + 60);
        rotateY(rz1);
        rotateX(HALF_PI * 1 / 3);
        fill(144, 29, 100);
        model(teapot);
        pop();
      }

      if (sound.currentTime() >= 23.88 && sound.currentTime() < 24.6) {
        background(0);

        for (let x = -180; x <= 180; x += 40) {
          for (let y = -180; y <= 180; y += 40) {
            push();
            translate(x, y, -120);
            rotateZ(rz);
            fill(0,0,100);
            model(teapot);
            pop();
          }
        }

        rz1 += HALF_PI / 150;
        push();
        translate(-8, -4, tz1 + 60);
        rotateY(rz1);
        rotateX(PI * 5 / 6);
        fill(216, 72, 100);
        model(teapot);
        pop();
      }

      if (sound.currentTime() >= 24.6 && sound.currentTime() < 25.35) {
        background(0);
        for (let x = -180; x <= 180; x += 40) {
          for (let y = -180; y <= 180; y += 40) {
            push();
            translate(x, y, -120);
            rotateZ(rz);
            fill(0,0,100);
            model(teapot);
            pop();
          }
        }

        rz1 -= HALF_PI / 150;
        push();
        translate(11, 0, tz1 + 60);
        rotateY(rz1);
        rotateX(PI * 9 / 5);
        fill(288, 39, 100);
        model(teapot);
        pop();
      }

      if (sound.currentTime() >= 25.35) { //갈라짐
        background(0);
        tx2 += 0.5;

        for (let x = -180; x <= 0; x += 40) {
          for (let y = -180; y <= 180; y += 40) {
            push();
            translate(x - tx2, y, -120);
            rotateZ(rz);
            fill(0,0,100);
            model(teapot);
            pop();
          }
        }

        for (let x = 180; x >= 0; x -= 40) {
          for (let y = 180; y >= -180; y -= 40) {
            push();
            translate(x + tx2, y, -120);
            rotateZ(rz);
            fill(0,0,100);
            model(teapot);
            pop();
          }
        }


        rz1 -= HALF_PI / 150;
        if(ty2 >= 0){
                  ty2 -= 0.2;
        }
        push();
        translate(0, ty2, tz1);
        //rotateY(rz1);
        rotateX(HALF_PI);
        fill(0, 70, 100);
        model(teapot);
        pop();
      }

      tz3 = -1;
      break;

    case 35: //thinkU (thinQ)
        tz=0;
    background(0);

    tz3 += 0.01;
    pointLight(0,0,100,0,0,100);
    directionalLight(0,0,100,0,0,100);
    push();
    translate(0,0,tz3);
    image(thinku,0,-10,35*2/3,25*2/3);
    pop();
    rz += HALF_PI;
    break;

    case 36: //end
    background(0);
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

//draw edge
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
