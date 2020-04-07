let teapot;
let rot;
let hue; // teapot hue slider
let tea;  //tea amount slider
let amount; //how much servings of tea
let teaamount; //exact water amount
let dir1, dir2; // directional light hue

function preload() {
teapot = loadModel('data/teapot.obj');
font = loadFont('data/NotoSansKR-Black.otf');
}

function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);
colorMode(HSB, 360, 100, 100);
textFont(font);

let huelabel = createDiv('hue');
huelabel.id('hue');
huelabel.position(10, 10);
hue = createSlider(0, 360, 120);
hue.position(0, 20);
hue.parent(huelabel);
hue.style('width', '80px');

let tealabel = createDiv('tea');
tealabel.id('tea');
tealabel.position(windowWidth-30, windowHeight/2-50);
tea = createSlider(0, 100, 0);
tea.position(0,20);
tea.parent(tealabel);
tea.style('width', '200px');

amount = 0;
rot=0;

dir1 = 180;
dir2 = 297;
}
function draw() {
background(0);

// setting lights
if(dir1 <= 360){
  dir1 += 1;
}
else{
  dir1 = 0;
}
if(dir2 <= 360){
dir2 += 3;
}
else{
  dir2 = 0;
}

console.log("dir1: "+dir1+" dir2: "+dir2);
pointLight(0, 0, 100, 0, 0, 500);
directionalLight(dir1,50,100,-100,0,0);
directionalLight(dir2,50,100,100,0,0);
//set the amount of tea
teaamount = 100-tea.value();
if(teaamount>= 0 &&teaamount < 20){
  amount = 0;
}
else if(teaamount>= 20 &&teaamount < 40){
  amount = 1;
}
else if(teaamount>= 40 &&teaamount < 60){
  amount = 2;
}
else if(teaamount>= 60 &&teaamount < 80){
  amount = 3;
}
else if(teaamount>= 80 &&teaamount < 100){
  amount = 4;
}
else if(teaamount == 100){
  amount = 5;
}

//info textAscent()
textAlign(CENTER, TOP);
textSize(20);
fill(0, 0, 100);
text("teapotV40thinkU.\nThe next generation of the teapot.",0,-(windowHeight/2)+30);
textSize(15);
fill(0, 0, 70);
text("teapotV40thinkU changes its color as its amount of tea loaded.\n With the slider, change the amount of tea and see what happens!",0,-(windowHeight/2)+100);



//servings of tea text
textAlign(CENTER, BOTTOM);
textSize(50);
fill(0, 0, 100);
text(amount+" servings of tea",0,windowHeight/2-50);

// transform the teapot
translate(0, 200, -300);
rotateX(HALF_PI);
rotateZ(rot);
scale(20);
noStroke();
// set teapot material colors
fill(hue.value(), 100-tea.value(), 100);
// display teapots
model(teapot);
// rotate teapots
rot += 0.02;

}
