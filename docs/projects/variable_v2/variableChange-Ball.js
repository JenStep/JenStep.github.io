/**********************************************************
* Variable Changes (6-8) Example
* CA K-12 CS Standards
*
***********************************************************/
//global
  var b1Color ='magenta';
  var b1Radius = 50;
  var b1Mass = 1;
  var b1Speed = 1;
  var b1Center = false;
  var b1Enable = true;

  var b2Color = 'blue';
  var b2Radius = 25;
  var b2Mass = 2;
  var b2Speed = 1;
  var b2Center = false;
  var b2Enable = true;

/******************** create title sketch **********************/
let sketchTitle = function(p) {
  let title = "Variable Changes";
  let subtitle = "Cal Poly CSSE California K-12 Computer Science Standards Animated";

  p.preload = function() {
    poppinsFont = p.loadFont('lib/Poppins/Poppins-Regular.ttf');
  };

  p.setup = function() {
    p.createCanvas(p.windowWidth, 200);
    p.textFont(poppinsFont);
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, 200);
  };

  p.draw = function() {
    p.background(25);
    p.fill(255);
    p.drawTitle();
  };

  p.drawTitle = function() {
    let pgWidth = p.windowWidth;
    let pgSize = 5;
//title
    p.fill(125);
    p.noStroke();
    p.rect(0, pgSize*7, pgWidth, pgSize*15);
    p.fill(0);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(pgSize*9);
    p.text(title, 0, pgSize*7, pgWidth, pgSize*11);
//subtitle
    p.fill(50);
    p.rect(0, pgSize*22, pgWidth, pgSize*10);
    p.fill(200);
    p.textSize(pgSize*4);
    p.text(subtitle, 0, pgSize*15, pgWidth, pgSize*23);
//credit
    p.push();
    p.fill(225);
    p.textSize(pgSize*3);
    p.textAlign(p.LEFT, p.CENTER);
    p.fill(225);
    p.text("Created by Jenna Stephens", 20, 15);
    p.pop();
  };
};
/******************** end title sketch **********************/

/******************** create ball in box sketch **********************/
let sketchBall = function(p) {
  let ball = new CollisionObject(p);
  let ball2 = new CollisionObject(p);

  p.preload = function() {
    poppinsFont = p.loadFont('lib/Poppins/Poppins-Regular.ttf');
  };

  p.setup = function() {
    var cnv = p.createCanvas(p.windowWidth/2, 400);
    p.textFont(poppinsFont);

    ball.setRadius(b1Radius);
    ball2.setColor(p.color('blue'));
    ball2.setPosition(200, 300);
    ball2.setRadius(b2Radius);
    ball2.setMass(3);

  };

  p.update = function() {
    ball.update();
    ball.boundaryCollision(0, p.windowWidth/2, 0, 400);
    if (ball2.enabled & ball.enabled) {
      ball.objectCollision(ball2);
    }
    ball2.update();
    ball2.boundaryCollision(0, p.windowWidth/2, 0, 400);
    if (ball.enabled & ball2.enabled) {
      //ball2.objectCollision(ball);
    }
    //variable options
    ball.setColor(p.color(b1Color));
    ball.setRadius(b1Radius);
    ball.setMass(b1Mass);
    ball.setSpeed(b1Speed);
    ball.enabled = b1Enable;
    ball2.setColor(p.color(b2Color));
    ball2.setRadius(b2Radius);
    ball2.setMass(b2Mass);
    ball2.setSpeed(b2Speed);
    ball2.enabled = b2Enable;

    if (b1Center) {
      b1Center = false;
      ball.setPosition(p.windowWidth/4, 200);
    }

    if (b2Center) {
      b2Center = false;
      ball2.setPosition(p.windowWidth/4, 200);
    }
  }

  p.windowResized = function() {
    cnv = p.resizeCanvas(p.windowWidth/2, 400);
  };

  p.draw = function() {
    p.update();
    p.background(200);
    ball.draw();
    ball2.draw();
  };

};
/******************** end ball in box sketch **********************/

/******************** create variable sketch *********************/
let sketchVar = function(p) {
    var xPos1;
    var xPos2;
    var color1;
    var rad1;
    var color2;
    var rad2;
    var disable1;
    var disable2;

  p.preload = function() {
    poppinsFont = p.loadFont('lib/Poppins/Poppins-Regular.ttf');
  };

  p.setup = function() {
    var cnv = p.createCanvas(p.windowWidth/3, 400);
    p.textFont(poppinsFont);
    p.textAlign(p.CENTER);
    createOptions();
  };

  p.windowResized = function() {
    cnv = p.resizeCanvas(p.windowWidth/3, 400);
    xPos1 = p.windowWidth/12;
    xPos2 = p.windowWidth/4.5;
  };

  p.draw = function() {
    p.background(220);
    p.fill(50);
    p.textSize(20);
    p.text('Ball 1', xPos1, 30);
    p.text('Ball 2', p.windowWidth/4.5, 30);
    positionOptions();
  };

  function createOptions() {
    //column positions
    xPos1 = p.windowWidth/12;
    xPos2 = p.windowWidth/4.5;

    //color select ball 1
    color1 = p.createSelect();
    color1.option('magenta');
    color1.option('blue');
    color1.option('red');
    color1.option('orange');
    color1.option('yellow');
    color1.option('pink');
    color1.option('gray');
    color1.option('purple');
    color1.option('green');
    color1.changed(b1ColorEvent);

    rad1 = p.createInput(b1Radius);
    rad1.input(rad1Event);
    rad1.size(50);

    mass1 = p.createInput('1');
    mass1.input(mass1Event);
    mass1.size(50);

    speed1 = p.createInput('1');
    speed1.input(speed1Event);
    speed1.size(50);

    center1 = p.createButton('center_1');
    center1.mousePressed(center1Event);

    disable1 = p.createCheckbox('disable1', false);
    disable1.changed(disable1Event);

    //color select ball 2
    color2 = p.createSelect();
    color2.option('blue');
    color2.option('magenta');
    color2.option('purple');
    color2.option('yellow');
    color2.option('black');
    color2.option('white');
    color2.option('teal');
    color2.option('cyan')
    color2.option('red');
    color2.option('orange');
    color2.changed(b2ColorEvent);


    rad2 = p.createInput(b2Radius);
    rad2.input(rad2Event);
    rad2.size(50);

    mass2 = p.createInput('1');
    mass2.input(mass2Event);
    mass2.size(50);

    speed2 = p.createInput('1');
    speed2.input(speed2Event);
    speed2.size(50);

    center2 = p.createButton('center_2');
    center2.mousePressed(center2Event);

    disable2 = p.createCheckbox('disable2', false);
    disable2.changed(disable2Event);


  }

  function positionOptions() {
    let textPos1 = xPos1 - 30;
    let textPos2 = xPos2 - 30;
    let base = 60;
    p.textAlign(p.LEFT, p.CENTER);
    p.textSize(15);

    p.text('color_1', textPos1, base);
    color1.position(xPos1, base+=15);

    p.text('radius_1', textPos1, base +=40);
    rad1.position(xPos1, base+=15);

    p.text('mass_1', textPos1, base+=40);
    mass1.position(xPos1, base+=15);

    p.text('speed_1', textPos1, base+=40);
    speed1.position(xPos1, base+=15);

    disable1.position(xPos1, base+=50);

    center1.position(xPos1, base+=50);

    p.text('color_2', textPos2, base=60);
    color2.position(xPos2, base+=15);

    p.text('radius_2', textPos2, base +=40);
    rad2.position(xPos2, base+=15);

    p.text('mass_2', textPos2, base+=40);
    mass2.position(xPos2, base+=15);

    p.text('speed_2', textPos2, base+=40);
    speed2.position(xPos2, base+=15);

    disable2.position(xPos2, base+=50);

    center2.position(xPos2, base+=50);
  }

  //option response events - ball 1
  function b1ColorEvent() { b1Color = color1.value(); }
  function rad1Event()    { b1Radius = rad1.value(); }
  function mass1Event()   { b1Mass = mass1.value(); }
  function speed1Event()  { b1Speed = speed1.value(); }
  function center1Event() { b1Center = true; }
  function disable1Event() { 
    if (this.checked()) { b1Enable = false; } 
    else { b1Enable = true; }
  }

  //option response events - ball 2
  function b2ColorEvent() { b2Color = color2.value(); }
  function rad2Event()    { b2Radius = rad2.value(); }
  function mass2Event()   { b2Mass = mass2.value(); }
  function speed2Event()  { b2Speed = speed2.value(); }
  function center2Event() { b2Center = true; }
  function disable2Event() { 
    if (this.checked()) { b2Enable = false; } 
    else { b2Enable = true; }
  }

};
/******************** end variable sketch *********************/

/******************** create description text *****************/
let sketchDes = function(p) {
  let title = "6-8.DA.9. Test & Analyze Effects of Changing Variables"
  let bullet1 = "Why change variables in a computational model?"
  let bullet2 = "- Alter a computer simulation"
  let bullet3 = "- More accurately represent how various data is related"
  let bullet4 = "How?"
  let bullet5 = "Interact with a given model, make changes, & observe results."
  let cite = "- CA K-12 CS Standards";

  let bgColor = 'beige';
  let titleColor = '#00008b';
  let titleSize = 25;
  let text1Color = 'black';
  let text2Color = 'gray';
  let text1Size = 23;
  let text2Size = 20;
  let citeSize = 15;

  p.preload = function() {
    poppinsFont = p.loadFont('lib/Poppins/Poppins-Regular.ttf');
  };

  p.setup = function() {
    var cnv = p.createCanvas(p.windowWidth/1.3, 400);
    p.textFont(poppinsFont);
    p.textAlign(p.CENTER);
  };

  p.windowResized = function() {
    cnv = p.resizeCanvas(p.windowWidth/1.3, 400);
  };

  p.draw = function() {
    let base = 0;
    //box
    p.fill(bgColor);
    p.stroke(0);
    p.strokeWeight(6);
    p.rect(0, 0, p.width, p.height);
    //title text
    p.noStroke();
    p.fill(titleColor);
    p.textSize(titleSize);
    p.textStyle(p.BOLD);
    p.text(title, 0, base, p.width, p.height/2);

    //bullets
    p.textStyle(p.NORMAL);
    p.fill(text1Color);
    p.textSize(text1Size);
    p.text(bullet1, 0, base+=100, p.width, p.height/2);
    //sub bullet
    p.fill(text2Color);
    p.textSize(text2Size);
    p.text(bullet2, 0, base+=70, p.width, p.height/2);
    p.text(bullet3, 0, base+=30, p.width, p.height/2);

    //bullet
    p.fill(text1Color);
    p.textSize(text1Size);
    p.text(bullet4, 0, base+=70, p.width, p.height/2);
    //sub bullet
    p.fill(text2Color);
    p.textSize(text2Size);
    p.text(bullet5, 0, base+=30, p.width, p.height/2);

    //cite
    p.textSize(citeSize);
    p.text(cite, 30, base +=60, p.width, p.height/2);
  }
}

/********************* end description text *******************/

/******************** create reference sketch **********************/
let sketchRef = function(p) {
  let cnv;
  let title = "Looking for More? Click to Visit: ";
  let subtitle = "Cal Poly CSSE California K-12 Computer Science Standards Animated";
  p.preload = function() {
    poppinsFont = p.loadFont('lib/Poppins/Poppins-Regular.ttf');
  };

  p.setup = function() {
    cnv = p.createCanvas(p.windowWidth/1.3, 150);
    cnv.mousePressed(openLink);
    cnv.mouseOver(hoverLink);
    p.textFont(poppinsFont);

  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth/1.3, 150);
  };

  p.draw = function() {
    p.background(25);
    p.fill(255);
    p.drawTitle();
  };

  p.drawTitle = function() {
    //box
    p.fill(125);
    p.noStroke();
    p.rect(0, 0, p.width, p.height);
    //text
    p.fill(0);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(30);
    p.text(title, 0, 20, p.width);
    p.textSize(20);
    p.text(subtitle, 0, 70, p.width);
  };

  function openLink() {
    window.open('http://users.csc.calpoly.edu/~zwood/Outreach/CACSK12/introK12.html');
  }
  function hoverLink() {
    p.cursor(p.HAND);
  }
};
/******************** end title sketch **********************/


//draw sketches
var titleSketch = new p5(sketchTitle, 'div0');
var ballSketch = new p5(sketchBall, 'div1');
var varSketch = new p5(sketchVar, 'div2');
var desSketch = new p5(sketchDes, 'div3');
var refSketch = new p5(sketchRef, 'div4');
