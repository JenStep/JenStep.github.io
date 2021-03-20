/**********************************************************
* Flowcharts to Illustrate Algorithms (6-8) Example
* CA K-12 CS Standards
*
* Character artwork credited to Mike Miller (MoikMellah) 
* which can be found at https://opengameart.org/users/moikmellah
***********************************************************/

var zero;                   //starting node for graph
var myGraph;                //graph representation of flowchart
var spriteX = 0;            //sprite animation location x
var spriteY = 0;            //sprite animation location y
var forward = true;         //direction of sprite animation
var spriteBody = null;      //sprite image selection body
var spriteHair = null;      //sprite image selection hair
var spriteOutfit = null;    //sprite image selection outfit
var spriteDone = true;      //sprite animation status
var currentAnim;            //current playing sprite animation
var moveGraphic = new p5.Vector(0, 75);        //relative starting position


//color pallette
const selectColor = "#AAAAFF";
const optionColor = "#e8d1ff";
const border = "#000000";
const nuetralBorder = "#B3B3B3";
const nuetralFill = "#e8e8e8";


/***************************
* Preload
****************************/
function preload() {
  //male base
  spriteGuide = loadImage('lib/maleBase/frameGuide.png');
  spriteBodyGreen = loadImage('lib/maleBase/base/base_undead.png');
  spriteBodyLight = loadImage('lib/maleBase/base/base_light.png');
  spriteBodyDark = loadImage('lib/maleBase/base/base_dark.png');
  spriteHairLight = loadImage('lib/maleBase/head/head_hair_light00.png');
  spriteHairDark = loadImage('lib/maleBase/head/head_hair_dark01.png');
  spriteHairRed = loadImage('lib/maleBase/head/head_ninja_red.png');
  spriteHairGray = loadImage('lib/maleBase/head/head_ninja_gray.png');
  spriteHairBlue = loadImage('lib/maleBase/head/head_ninja_blue.png');
  spriteHairHelmet = loadImage('lib/maleBase/head/head_steel_helm.png');
  spriteOutfitArmor = loadImage('lib/maleBase/outfit/outfit_lightArmor.png');
  spriteOutfitRed = loadImage('lib/maleBase/outfit/outfit_ninja_red.png');
  spriteOutfitGray = loadImage('lib/maleBase/outfit/outfit_ninja_gray.png');
  spriteOutfitBlue = loadImage('lib/maleBase/outfit/outfit_ninja_blue.png');
  //female base
  spriteHairLong = loadImage('lib/femaleBase/hair/hair_buns_blonde2.png');
  //load font
  poppinsFont = loadFont('lib/Poppins/Poppins-Regular.ttf');
}

/***************************
* setup
*****************************/
function setup() {
  var cnv = createCanvas(1300, 800);
  rectMode(CENTER);

  textFont(poppinsFont);

  setupFlow();
  setupParentLink();

  myLine = new Connect();
  myLine.resize(start.x, start.y-start.height, 80, 200);
}

/***************************
* draw
*****************************/
function draw() {
  textFont(poppinsFont);
  background(255, 215, 200);
  fill(100);
  textSize(50);
  text("Character Design Flowchart", 75, 75);

  push(); //store previous settings
  translate(moveGraphic);
  rect(400, 350, 750, 650);
  
  myGraph.drawGraph(zero);
  reset.draw();
  var dWidth = 32;
  var dHeight = 65;

  //draw info graphic
  drawText(1000, -25);
  link.draw();
  fill('#6363d4');
  text("Looking for More? Click to Visit", 1000, 525);

  //draw sprite
  randomSprite();

  if (spriteBody) {
    image(spriteBody, 600, 300, sWidth=100, sHeight=200, dWidth*round(spriteX), dHeight*spriteY, dWidth, dHeight);
  }
  if (spriteHair) {
    image(spriteHair, 600, 300, sWidth=100, sHeight=200, dWidth*round(spriteX), dHeight*spriteY, dWidth, dHeight);
  }
  if (spriteOutfit) {
    image(spriteOutfit, 600, 300, sWidth=100, sHeight=200, dWidth*round(spriteX), dHeight*spriteY, dWidth, dHeight);
  }

  textSize(15);
  fill(nuetralFill);
  text("Character Artwork by Mike Miller", 650, 655);
  fill(optionColor);
  text("Created by Jenna Stephens", 150, 655);
  pop(); //restore previous settings

}

/*****************************
* draw text
*****************************/
function drawText(x, y) {
  title = '6-8.AP.10 Flowcharts to Illustrate Algorithms';
  bullet1 = 'Flowcharts and pseudocode help design and illustrate algorithms to solve complex problems.';
  bullet2 =  'What are complex problems?';
  bullet3 = 'Problems that are difficult to solve without being broken down into multiple steps \n(i.e. using flowcharts or pseudocode).';
  cite = '- CA K-12 CS Standards';
  textFont(poppinsFont);
  fill(60);
  rect(x, y+275, 400, 425);
  fill(selectColor);
  textSize(30);
  text(title, x, y+125, 350, 100);
  fill(225);
  textSize(20);
  text(bullet1, x, y+225, 350, 500);
  fill(optionColor);
  textSize(20);
  text(bullet2, x, y+300, 350, 500);
  fill(225);
  textSize(17);
  text(bullet3, x, y+350, 375, 500);
  fill(150);
  text(cite, x+50, y+425);
}

/****************************
* Setup Parent Link
*****************************/
function setupParentLink() {
  link = new Clickable(1000, 550);
  link.text = "\nCal Poly CSSE California K-12 Computer Science Standards Animated";
  link.textSize = 17;
  link.cornerRadius = 1;
  link.strokeWeight = 1;
  link.textColor = 60;
  link.color = 220;
  link.width = 350;
  link.height = 125;
  link.onHover = function() {
    this.color = optionColor;
    cursor(HAND);
  }

  link.onOutside = function() {
    this.color = 220;
    cursor(ARROW);
  }

  link.onPress = function() {
    this.color = selectColor;
    window.open('http://users.csc.calpoly.edu/~zwood/Outreach/CACSK12/introK12.html');
  }
}

/*****************************
* Play animation forward
******************************/
function spriteForward(xmin, xmax, y) {
  //play anim forward
  spriteX += 0.1;
  spriteY = y;
  if (spriteX > xmax || spriteX < xmin) {
    spriteX = xmin;
    spriteDone = true;
  }
}


/*****************************
* Play animation forward and reverse
******************************/
function spriteForwardBack(xmin, xmax, y) {
  spriteY = y;
  //start anim
  if (spriteX < xmin || spriteX > xmax+1){
      spriteX = xmin;
  }
  //play anim forward
  if (forward) {
    if (spriteX >= xmax) {
      forward = false;
    }
    spriteX += 0.1;

    //play anim backward
  } else {
    spriteX -= 0.1;
    if (spriteX <= xmin) {
      spriteDone = true;
      forward = true;
    }
  }
}


/****************************
* Select random sprite animation
*****************************/
function randomSprite() {
  let anim = ['walk', 'crouch', 'jump'];
  if (spriteDone == true) {
    currentAnim = random(anim);
    spriteDone = false;
    //choose start frame
    switch(currentAnim) {
      case 'walk':
        spriteX = 1;
        spriteY = 0;
        break;
      case 'crouch':
        spriteX = 7;
        spriteY = 0;
        break;
      case 'jump':
        spriteX = 4;
        spriteY = 1;
    }
  }
  //play animation
  switch(currentAnim) {
    case 'walk':
      spriteForward(1, 6, 0);
      break;
    case 'crouch':
      spriteForwardBack(7, 9, 0);
      break;
    case 'jump':
      spriteForward(4, 9, 1);
  }
}

/*****************************
*create flowchart
*******************************/
function setupFlow() {
  //create options
  reset = new Clickable(700, 100);
  reset.color = "#99e051";
  reset.text = "RESET";
  reset.textColor = "#000000";
  reset.stroke = "#000000";
  reset.onPress = function () {
    myGraph.resetGraph(zero);
    reset.color = "#99e051";
  }
  reset.onHover = function() {
    reset.color = "#fff59e";
    cursor(HAND);
  }
  reset.onOutside = function() {
    reset.color = "#99e051";
    cursor(ARROW);
  }

  start = new Clickable(100, 100);
  start.resize(100,100);
  start.text = "Choose Your Character!";
  start.isQuestion = true;

  question1 = new Clickable(400, 100);
  question1.resize(60,60);
  question1.text = "Skin tone?";
  question1.isQuestion = true;

  honeyTone = new Clickable(200, 200);
  honeyTone.text = "Honey";
  honeyTone.changeBody = spriteBodyLight;

  mintTone = new Clickable(400, 200);
  mintTone.text = "Mint";
  mintTone.changeBody = spriteBodyGreen;

  chocolateTone = new Clickable(600, 200);
  chocolateTone.text = "Chocolate";
  chocolateTone.changeBody = spriteBodyDark;

  question2 = new Clickable(400, 300);
  question2.resize(60,60);
  question2.text = "Job?";
  question2.isQuestion = true;

  guardOption = new Clickable(200, 400);
  guardOption.text = "Acrobat!";
  guardOption.changeOutfit = spriteOutfitArmor;

  ninjaOption = new Clickable(500, 400);
  ninjaOption.text = "Ninja!";
  ninjaOption.changeOutfit = spriteOutfitGray;

  question3 = new Clickable(200, 500);
  question3.resize(60, 60);
  question3.text = "Hair?"
  question3.isQuestion = true;

  question4 = new Clickable(500, 500);
  question4.resize(60, 60);
  question4.text = "Color?";
  question4.isQuestion = true;

  lightHair = new Clickable(100, 600);
  lightHair.text = "Spiked";
  lightHair.changeHair = spriteHairLight;
  lightHair.resize(60, 60);

  darkHair = new Clickable(200, 600);
  darkHair.text = "Straight";
  darkHair.changeHair = spriteHairDark;
  darkHair.resize(60, 60);

  helmHair = new Clickable(300, 600);
  helmHair.text = "Bun";
  helmHair.changeHair = spriteHairLong;
  helmHair.resize(60, 60);

  ninjaRed = new Clickable(500, 600);
  ninjaRed.text = "Red";
  ninjaRed.changeOutfit = spriteOutfitRed;
  ninjaRed.changeHair = spriteHairRed;
  ninjaRed.resize(60, 60);

  ninjaBlue = new Clickable(600, 600);
  ninjaBlue.text = "Blue";
  ninjaBlue.changeOutfit = spriteOutfitBlue;
  ninjaBlue.changeHair = spriteHairBlue;
  ninjaBlue.resize(60, 60);

  ninjaGray = new Clickable(700, 600);
  ninjaGray.text = "Gray";
  ninjaGray.changeOutfit = spriteOutfitGray;
  ninjaGray.changeHair = spriteHairGray;
  ninjaGray.resize(60, 60);

  //create graph connections
  myGraph = new Graph();
  zero = myGraph.addVertex(start);
  myGraph.addEdge(start, question1);
  myGraph.addEdge(question1, honeyTone);
  myGraph.addEdge(question1, mintTone);
  myGraph.addEdge(question1, chocolateTone);
  myGraph.addEdge(honeyTone, question2);
  myGraph.addEdge(mintTone, question2);
  myGraph.addEdge(chocolateTone, question2);
  myGraph.addEdge(question2, guardOption);
  myGraph.addEdge(question2, ninjaOption);
  myGraph.addEdge(guardOption, question3);
  myGraph.addEdge(question3, lightHair);
  myGraph.addEdge(question3, darkHair);
  myGraph.addEdge(question3, helmHair);
  myGraph.addEdge(ninjaOption, question4);
  myGraph.addEdge(question4, ninjaRed);
  myGraph.addEdge(question4, ninjaGray);
  myGraph.addEdge(question4, ninjaBlue);

  zero.isOption = true;
  zero.selectNode();
}