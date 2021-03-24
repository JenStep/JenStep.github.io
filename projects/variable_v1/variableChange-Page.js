/**********************************************************
* Variable Changes (6-8) Example
* CA K-12 CS Standards
*
***********************************************************/
//global
var bgColor = "#BE94FF";
var text1Color = "black";
var text2Color = "black";
var titleColor = "black";
var themeColor = 125;
var themeColor2 = 50;
var titleSize = 25;
var text1Size = 24;
var text2Size = 20;
var showParent = false;

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
    p.fill(themeColor);
    p.noStroke();
    p.rect(0, pgSize*7, pgWidth, pgSize*15);
    p.fill(0);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(pgSize*9);
    p.text(title, 0, pgSize*7, pgWidth, pgSize*11);
//subtitle
    p.fill(themeColor2);
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

/******************** create description text *****************/
let sketchDes = function(p) {
  let title = "6-8.DA.9. Test & Analyze Effects of Changing Variables"
  let bullet1 = "Why change variables in a computational model?"
  let bullet2 = "- Alter a computer simulation"
  let bullet3 = "- More accurately represent how various data is related"
  let bullet4 = "How?"
  let bullet5 = "Interact with a given model, make changes, & observe results."
  let cite = "- CA K-12 CS Standards";

  p.preload = function() {
    poppinsFont = p.loadFont('lib/Poppins/Poppins-Regular.ttf');
  };

  p.setup = function() {
    var cnv = p.createCanvas(p.windowWidth/2, 400);
    p.textFont(poppinsFont);
    p.textAlign(p.CENTER);
  };

  p.windowResized = function() {
    cnv = p.resizeCanvas(p.windowWidth/2, 400);
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
    p.textSize(p.int(titleSize));
    p.text(title, 0, base, p.width, p.height/2);

    //bullets
    p.fill(text1Color);
    p.textSize(p.int(text1Size));
    p.text(bullet1, 0, base+=100, p.width, p.height/2);
    //sub bullet
    p.fill(text2Color);
    p.textSize(p.int(text2Size));
    p.text(bullet2, 0, base+=70, p.width, p.height/2);
    p.text(bullet3, 0, base+=30, p.width, p.height/2);

    //bullet
    p.fill(text1Color);
    p.textSize(p.int(text1Size));
    p.text(bullet4, 0, base+=70, p.width, p.height/2);
    //sub bullet
    p.fill(text2Color);
    p.textSize(p.int(text2Size));
    p.text(bullet5, 0, base+=30, p.width, p.height/2);

    //cite
    p.text(cite, 30, base +=50, p.width, p.height/2);
  }
}

/********************* end description text *******************/

/******************** create variable sketch *********************/
let sketchVar = function(p) {
    var bgColorSel;
    var titleColorSel;
    var text1ColorSel;
    var text2ColorSel;
    var titleSizeInput;
    var sizeInput1;
    var sizeInput2;
    var pageThemeSel;
    var checkbox;

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
    p.text('Variables', xPos1, 30);
    positionOptions();
    titleSize = titleSizeInput.value();
    text1Size = sizeInput1.value();
    text2Size = sizeInput2.value();
  };

  function createOptions() {
    //column positions
    xPos1 = p.windowWidth/12;
    xPos2 = p.windowWidth/4.5;

    //titleInput
    titleSizeInput = p.createInput(titleSize.toString());
    titleSizeInput.size(50, 20);
    sizeInput1 = p.createInput(text1Size.toString());
    sizeInput1.size(50, 20);
    sizeInput2 = p.createInput(text2Size.toString());
    sizeInput2.size(50, 20);

    //bgColorSel setup
    bgColorSel = p.createSelect();
    bgColorSel.option('violet');
    bgColorSel.option('blue');
    bgColorSel.option('red');
    bgColorSel.option('green');
    bgColorSel.option('yellow');
    bgColorSel.option('pink');
    bgColorSel.option('gray');
    bgColorSel.option('white');
    bgColorSel.changed(bgSelectEvent);

    //titleColorSel setup
    titleColorSel = p.createSelect();
    titleColorSel.option('black');
    titleColorSel.option('violet');
    titleColorSel.option('blue');
    titleColorSel.option('red');
    titleColorSel.option('green');
    titleColorSel.option('yellow');
    titleColorSel.option('pink');
    titleColorSel.option('gray');
    titleColorSel.changed(titleSelectEvent);


    //text1ColorSel setup
    text1ColorSel = p.createSelect();
    text1ColorSel.option('black');
    text1ColorSel.option('violet');
    text1ColorSel.option('blue');
    text1ColorSel.option('red');
    text1ColorSel.option('green');
    text1ColorSel.option('yellow');
    text1ColorSel.option('pink');
    text1ColorSel.option('gray');
    text1ColorSel.changed(text1SelectEvent);

    //text2ColorSel Setup
    text2ColorSel = p.createSelect();
    text2ColorSel.option('black');
    text2ColorSel.option('violet');
    text2ColorSel.option('blue');
    text2ColorSel.option('red');
    text2ColorSel.option('green');
    text2ColorSel.option('yellow');
    text2ColorSel.option('pink');
    text2ColorSel.option('gray');
    text2ColorSel.changed(text2SelectEvent);

    //pageThemeSel Setup
    pageThemeSel = p.createSelect();
    pageThemeSel.option('gray');
    pageThemeSel.option('coral');
    pageThemeSel.option('indigo');
    pageThemeSel.option('saphire');
    pageThemeSel.changed(themeSelectEvent);

    checkbox = p.createCheckbox();
    checkbox.changed(showStandardsEvent);
    
  }

  function positionOptions() {
    let textPos1 = xPos1 - 30;
    let textPos2 = xPos2 - 30;
    let base = 60;
    p.textAlign(p.LEFT, p.CENTER);
    p.textSize(15);

    p.text('titleSize', textPos1, base);
    titleSizeInput.position(xPos1, base +=15);

    p.text('textSize1', textPos1, base+=40);
    sizeInput1.position(xPos1, base+=15);

    p.text('textSize2', textPos1, base+=40);
    sizeInput2.position(xPos1, base+=15);

    p.text('showParent', textPos1, base+=40);
    checkbox.position(xPos1, base+=15);

    p.text('bgColor', textPos2, base=60);
    bgColorSel.position(xPos2, base+=15);

    p.text('titleColor', textPos2, base+=40);
    titleColorSel.position(xPos2, base+=15);

    p.text('text1Color', textPos2, base +=40);
    text1ColorSel.position(xPos2, base+=15);

    p.text('text2Color', textPos2, base+=40);
    text2ColorSel.position(xPos2, base+=15);

    p.text('pageTheme', textPos2, base+=40);
    pageThemeSel.position(xPos2, base+=15);
  }

  //option response events
  function themeSelectEvent() {
    switch(pageThemeSel.value()) {
      case "gray":
        themeColor = 125;
        themeColor2 = 50;
        break;
      case "coral":
        themeColor = '#f88379';
        themeColor2 = "#8b0000";
        break;
      case "indigo":
        themeColor = "#b19cd9";
        themeColor2 = "#4b0082";
        break;
      case "saphire":
        themeColor = "#0d98ba";
        themeColor2 = '#0f52ba';
        break;
    }
  }

  function bgSelectEvent() { bgColor = GeneralColorSelect(bgColorSel.value());}
  function titleSelectEvent() { titleColor = GeneralColorSelect(titleColorSel.value());}
  function text1SelectEvent() { text1Color = GeneralColorSelect(text1ColorSel.value());}
  function text2SelectEvent() { text2Color = GeneralColorSelect(text2ColorSel.value());}

  function GeneralColorSelect(color) {
    switch (color) {
      case "violet": 
        return "#BE94FF";
        break;
      case "blue":
        return "#5598FF";
        break;
      case "red":
        return "#FF6F75";
        break;
      case "green":
        return "#9CFFA2";
        break;
      case "yellow":
        return "#FFFD9C";
        break;
      case "pink":
        return "#FF9CF9";
        break;
      case "gray":
        return "#B1B1B1";
        break;
      case "black":
        return "#000000";
        break;
      case "white":
        return "#FFFFFF";
        break;
    }
  }

  function showStandardsEvent() {
    if (this.checked()) {
      showParent = true;
     } else {
      showParent = false;
    }
  }

};
/******************** end variable sketch *********************/

/******************** create reference sketch **********************/
let sketchRef = function(p) {
  let cnv;
  let title = "Looking for More? Click to Visit: ";
  let subtitle = "Dr. Zoe Wood Outreach - Cal Poly CSSE California K-12 Computer Science Standards Animated";
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
    if (showParent) {
      p.background(25);
      p.fill(255);
      p.drawTitle();
    } else {
      p.clear();
    }
  };

  p.drawTitle = function() {
    //box
    p.fill(themeColor);
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
    if (showParent)
      window.open('http://users.csc.calpoly.edu/~zwood/Outreach/CACSK12/introK12.html');
  }
  function hoverLink() {
    if (showParent)
      p.cursor(p.HAND);
  }
};
/******************** end title sketch **********************/

//draw sketches
var titleSketch = new p5(sketchTitle, 'div0');
var desSketch = new p5(sketchDes, 'div1');
var varSketch = new p5(sketchVar, 'div2');
var refSketch = new p5(sketchRef, 'div3');
