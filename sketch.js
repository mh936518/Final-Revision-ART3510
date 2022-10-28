var motion_slider;
var x = 200;
var y = 200;
var textin = "hello";
var button;
var button2;
var colorPicker;
var colorPicker2;

let slider;
let slider2;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  
  // Code from Mark Franz 
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
  slider.addClass("sliderClass");
  
  // Code from Mark Franz
  slider2 = createSlider(-10, 10, 0);
  slider2.position(10, 30);
  slider2.style('width', '80px');
  slider2.addClass("sliderClass");
  
  // Code from Mark Franz
  button = createButton("Download");
  button.position(10, 197);
  button.mousePressed(saveit);
  button.style("width", "100px");
  
  // Code from Sally Lambright
  button2 = createButton('reset sketch');
  button2.position(10, 172);
  button2.mousePressed(resetSketch);
  
  // Code from Mark Franz
  colorPicker = createColorPicker("#6A73B6");
  colorPicker.position(10, 105);
  colorPicker.style("width", "100px");
  
  colorPicker2 = createColorPicker("#decade");
  colorPicker2.position(10, 138);
  colorPicker2.style("width", "100px");
  
  // Code from Mark Franz 
  sel = createSelect();
  sel.position(10, 55);
  sel.option("Avenir");
  sel.option("Futura");
  sel.option("Courier New");
  sel.option("Rockwell");
  sel.selected("Avenir");
  sel.style("width", "100px");
  
  // Code from Mark Franz
  sel2 = createSelect();
  sel2.position(10, 80);
  sel2.option(NORMAL);
  sel2.option(ITALIC);
  sel2.option(BOLD);
  sel2.option(BOLDITALIC);
  sel2.selected(NORMAL);
  sel2.style("width", "100px");

  background(colorPicker2.color());
} 

function draw() { 
    var c = color(255, 204, 0);
  
   //background(colorPicker2.color());

  rotate(slider2.value()/ 10);
  stroke(255);

  
 
 
  // Code from Mark Franz
  textStyle(sel2.value());
  textFont(sel.value());
  fill(colorPicker.color());
  textSize(slider.value());
  text(textin,x,y);
  
   rotate(PI / 7.0);
  
  // Code from https://www.geeksforgeeks.org/p5-js-rotate-function/  
  
}

   // Code from    https://editor.p5js.org/2sman/sketches/rkGp1alib
function keyPressed() {
  if (keyCode === UP_ARROW) {
    y = y - 10;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 10;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 5;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 5;
  }
   if (keyIsDown(UP_ARROW) && keyIsDown(SHIFT)) {
    y += -30;
  } 
  if (keyIsDown(DOWN_ARROW) && keyIsDown(SHIFT)) {
   y += 30;
  }
   if (keyIsDown(LEFT_ARROW) && keyIsDown(SHIFT)) {
    x += -50;
  }
  if (keyIsDown(RIGHT_ARROW) && keyIsDown(SHIFT)) {
    x += 50;
  }
  
  
  if (x > windowWidth){
    x=0
  }
  if (y > windowHeight){
    y=0
  }
  
 if (x>windowWidth/2 && y<windowHeight/2){
   textin = 'turtle'
 } else if(x<windowWidth/2 && y<windowHeight/2){
   textin= 'hello'}
  else if(x<windowWidth/2 && y>windowHeight/2){
  textin='shore'}
  else if (x>windowWidth/2 && y>windowHeight/2){
  textin='crumb'}
}

// Code from Sally Lambright
function resetSketch() {
   background(colorPicker2.color())
}

function mousePressed() {
   x = mouseX 
   y = mouseY
}

// Code from Mark Franz
function saveit() {
  save("textGridGenerator.svg");
}

// Code from Mark Franz
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

