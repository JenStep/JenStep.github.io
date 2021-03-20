/**********************************************************
* Flowcharts to Illustrate Algorithms (6-8) Example
* CA K-12 CS Standards
* Created by Jenna Stephens
***********************************************************/
//global variables
let bg_color1 = "#00cc99";
let bg_color2 = "#330033";
var flowchart;
var que1, res_food, res_paper, res_plastic, res_metal, res_glass;
//food
var ans_comp;
//paper
var que_paper;
var res_paper_1;
var res_paper_2;
var que_paper_2;
var res_paper_2_1;
var res_paper_2_2;
var res_paper_3_1;
var res_paper_3_2;
var ans_paper_1;
var ans_paper_2_1;
var ans_paper_3_2;
var ans_paper_3_1;
//plastic
var que_plastic;
var res_plastic_1;
var res_plastic_2;
var ans_plastic_1;
var que_plastic_2;
var res_plastic_2_1;
var res_plastic_2_2;
var ans_plastic_2_1;
var ans_plastic_2_2;
//metal
var que_metal, res_metal_1, res_metal_2;
var que_metal_1, res_metal_1_1, res_metal_1_2;
var ans_metal_1_1, ans_metal_1_2, ans_metal_2;
//glass
var ans_glass;

// ------------------------ Title Sketch ------------------
let titlep5 = function(p) {
	let title = "6-8.AP.10 Flowcharts to Illustrate Algorithms";
  	let subtitle = "Cal Poly CSSE California K-12 Computer Science Standards Animated";

	p.preload = function() {
		poppinsFont = p.loadFont('lib/Poppins/Poppins-Regular.ttf');
	};

	p.setup = function() {
		p.createCanvas(p.windowWidth, 125);
		p.textFont(poppinsFont);
	};

	p.windowResized = function() {
		p.resizeCanvas(p.windowWidth, 125);
	};

	p.draw = function() {
		p.background(bg_color2);
		p.fill(255);
		p.drawTitle();
	};

	p.drawTitle = function() {
		let pgSize	= p.sqrt(p.width)/10;
		//title
		p.fill(125);
		p.noStroke();
		p.rect(0, pgSize*7, p.width, pgSize*15);
		p.fill(0);
		p.textAlign(p.CENTER, p.CENTER);
		p.textSize(pgSize*9);
		p.text(title, 0, pgSize*7, p.width, pgSize*11);
		//subtitle
		p.fill(50);
		p.rect(0, pgSize*22, p.width, pgSize*10);
		p.fill(200);
		p.textSize(pgSize*4);
		p.text(subtitle, 0, pgSize*15, p.width, pgSize*23);
		//credit
		p.push();
		p.fill(225);
		p.textSize(pgSize*3);
		p.textAlign(p.LEFT, p.CENTER);
		p.fill(225);
		p.text("Created by Jenna Stephens", 20, 3*pgSize);
		p.pop();
	}
};// --------- Title Sketch End --------

// ------------------------ Flowchart Sketch ------------------
let myp5 = function(p) {
	let camX;
	let camY;

	p.preload = () => {
		poppinsFont = p.loadFont('lib/Poppins/Poppins-Regular.ttf');
	}

	p.setup = () => {
		flowchart = p.createFlowchart();
		var cnv = p.createCanvas(p.getWidth(), p.getHeight());
		p.textFont(poppinsFont);
		let ypos = -550;
		let xpos = 0;
		let xpad = 100;
		let ypad = 100;
		let y_save = ypos;

		//top
		que1 = p.createData		(txt='Material Type?', xpos, ypos);
		res_food = p.createData	(txt='Food/Plant', xpos-2*xpad, ypos+=ypad)
		res_paper = p.createData	(txt='Paper', xpos-xpad, ypos);
		res_plastic = p.createData	(txt='Plastic', xpos, ypos);
		res_metal = p.createData	(txt='Metal', xpos+xpad, ypos);
		res_glass = p.createData	(txt="Glass", xpos+2*xpad, ypos);

		//Food/Plant
		ans_comp = p.createData	("Compost", xpos-2.4*xpad, ypos+ypad);

		//Paper
		y_save = ypos;
		que_paper = p.createData("Can it be reused?", xpos-xpad*1.3, ypos+ypad);
		res_paper_1 = p.createData("Yes", xpos-2.4*xpad, ypos+=ypad*2.5);
		res_paper_2 = p.createData("No", xpos-3/2*xpad, ypos);
		ans_paper_1 = p.createData("Reuse!", xpos-2.4*xpad, ypos+=ypad);
		que_paper_2 = p.createData("Covered in Wax?", xpos-3/2*xpad, ypos);
		res_paper_2_1 = p.createData("Yes", xpos-2*xpad, ypos+=ypad);
		res_paper_2_2 = p.createData("No", xpos-xpad, ypos);
		ans_paper_2_1 = p.createData("Trash", xpos-2*xpad, ypos+=ypad);
		que_paper_3 = p.createData("Covered in Food?", xpos-xpad, ypos);
		res_paper_3_1 = p.createData("Yes", xpos-1.5*xpad, ypos+=ypad*1.2);
		res_paper_3_2 = p.createData("No", xpos-.5*xpad, ypos);
		ans_paper_3_1 = p.createData("Compost", xpos-1.5*xpad, ypos+=ypad);
		ans_paper_3_2 = p.createData("Recycle", xpos-.5*xpad, ypos);
		
		//Plastic
		ypos = y_save;
		que_plastic = p.createData		(txt='Residue Free?', xpos, ypos+=ypad);
		res_plastic_1 = p.createData	("Yes", x= xpos-xpad/2, ypos+=ypad);
		res_plastic_2 = p.createData	("No", xpos+xpad/2, ypos);
		ans_plastic_1 = p.createData	("Recycle!", xpos-xpad/2, ypos+=ypad);
		que_plastic_2 = p.createData	("Can you wash it?", xpos+xpad/2, ypos);
		res_plastic_2_1 = p.createData	("Yeah...", xpos, ypos+=ypad*1.2);
		res_plastic_2_2 = p.createData	("Nope!", xpos+xpad, ypos);
		ans_plastic_2_2 = p.createData	("Trash", xpos+xpad, ypos+=ypad);
		ans_plastic_2_1 = p.createData	("Wash & Recycle", xpos, ypos);

		//Metal
		ypos = y_save;
		que_metal = p.createData("Aluminum? Steel?", xpos+xpad*5/4, ypos+=ypad);
		res_metal_1 = p.createData("Yes", xpos+3/2*xpad, ypos+=ypad*1.5);
		res_metal_2 = p.createData("No", xpos+5/2*xpad, ypos);
		que_metal_1 = p.createData("Residue Free?", xpos+2*xpad, ypos+=ypad);
		ans_metal_2 = p.createData("Ask Local Facility", xpos+3*xpad, ypos);
		res_metal_1_1 = p.createData("Yes", xpos+1.8*xpad, ypos+=ypad);
		res_metal_1_2 = p.createData("No", xpos+2.7*xpad, ypos);
		ans_metal_1_1 = p.createData("Recycle", xpos+1.8*xpad, ypos+=ypad);
		ans_metal_1_2 = p.createData("Wash & Recycle!", xpos+2.7*xpad, ypos);

		que_metal.width = 100;
		que_plastic_2.width = 100;
		que_paper_3.width = 100;
		que_paper.width = 100;
		//Glass
		ypos = y_save;
		ans_glass = p.createData("Wash & Recycle", xpos+2.5*xpad, ypos+=ypad);

		//switch orientation
		que1.isQ = true;
		que_plastic.isQ = true;
		ans_plastic_1.isQ = true;
		que_plastic_2.isQ = true;
		ans_plastic_2_1.isQ = true;
		ans_plastic_2_2.isQ = true;
		ans_comp.isQ = true;
		que_paper.isQ = true;
		que_paper_2.isQ = true;
		que_paper_3.isQ = true;
		ans_paper_1.isQ = true;
		ans_paper_2_1.isQ = true;
		ans_paper_3_1.isQ = true;
		ans_paper_3_2.isQ = true;
		que_metal.isQ = true;
		que_metal_1.isQ = true;
		ans_metal_2.isQ = true;
		ans_metal_1_2.isQ = true;
		ans_metal_1_1.isQ = true;
		ans_glass.isQ = true;

		//question 1 - Material Type
		flowchart.addData(que1);
		flowchart.addData(res_food, que1);
		flowchart.addData(res_paper, que1);
		flowchart.addData(res_plastic, que1);
		flowchart.addData(res_metal, que1);
		flowchart.addData(res_glass, que1);

		//Food
		flowchart.addData(ans_comp, res_food);

		//Paper
		flowchart.addData(que_paper, res_paper);
		flowchart.addData(res_paper_1, que_paper);
		flowchart.addData(res_paper_2, que_paper);
		flowchart.addData(ans_paper_1, res_paper_1);
		flowchart.addData(que_paper_2, res_paper_2);
		flowchart.addData(res_paper_2_1, que_paper_2);
		flowchart.addData(res_paper_2_2, que_paper_2);
		flowchart.addData(ans_paper_2_1, res_paper_2_1);
		flowchart.addData(que_paper_3, res_paper_2_2);
		flowchart.addData(res_paper_3_1, que_paper_3);
		flowchart.addData(res_paper_3_2, que_paper_3);
		flowchart.addData(ans_paper_3_1, res_paper_3_1);
		flowchart.addData(ans_paper_3_2, res_paper_3_2);

		//Plastic
		flowchart.addData(que_plastic, res_plastic);
		flowchart.addData(res_plastic_1, que_plastic);
		flowchart.addData(res_plastic_2, que_plastic);
		flowchart.addData(ans_plastic_1, res_plastic_1);
		flowchart.addData(que_plastic_2, res_plastic_2);
		flowchart.addData(res_plastic_2_1, que_plastic_2);
		flowchart.addData(res_plastic_2_2, que_plastic_2);
		flowchart.addData(ans_plastic_2_1, res_plastic_2_1);
		flowchart.addData(ans_plastic_2_2, res_plastic_2_2);

		//Metal
		flowchart.addData(que_metal, res_metal);
		flowchart.addData(res_metal_1, que_metal);
		flowchart.addData(res_metal_2, que_metal);
		flowchart.addData(que_metal_1, res_metal_1);
		flowchart.addData(res_metal_1_1, que_metal_1);
		flowchart.addData(res_metal_1_2, que_metal_1);
		flowchart.addData(ans_metal_1_1, res_metal_1_1);
		flowchart.addData(ans_metal_1_2, res_metal_1_2);
		flowchart.addData(ans_metal_2, res_metal_2);

		//Glass
		flowchart.addData(ans_glass, res_glass);
		

		//start flowchart
		flowchart.selectData(que1);

		cnv.mousePressed(function() {flowchart.onMousePress();});
	}

	p.windowResized = () => {
		p.resizeCanvas(p.getWidth(), p.getHeight());
	}


	p.getWidth = () => {
		if (p.windowWidth < 1000) {
			return p.windowWidth;
		} else {
			return 1000;
		}
	}

	p.getHeight = () => {
		let factor = 1000;
		if(p.windowWidth < factor) {
			return 100+p.windowWidth/.6;
		} else {
			return 100+factor/.6;
		}
	}

	p.draw = () => {
		p.background(bg_color2);
		flowchart.draw(p);
	}
}; // --------- Flowchart Sketch End --------

// ------------------------ Animation Sketch ------------------
let anim = function(p) {
	var sprite_bag;
	var s_compost;
	var s_trash;
	var s_recycle;
	var s_plane;
	var idle = [];
	var compost = [];
	var recycle = [];
	var trash = [];
	var plane = [];

	p.preload = function() {
		idle.push(p.loadImage('lib/sprites/trash_0.png'));
		idle.push(p.loadImage('lib/sprites/trash_1.png'));
		idle.push(p.loadImage('lib/sprites/trash_2.png'));
		idle.push(p.loadImage('lib/sprites/trash_3.png'));
		idle.push(p.loadImage('lib/sprites/trash_4.png'));
		idle.push(p.loadImage('lib/sprites/trash_5.png'));
		compost.push(p.loadImage('lib/sprites/compost_0.png'));
		compost.push(p.loadImage('lib/sprites/compost_1.png'));
		compost.push(p.loadImage('lib/sprites/compost_2.png'));
		compost.push(p.loadImage('lib/sprites/compost_3.png'));
		compost.push(p.loadImage('lib/sprites/compost_4.png'));
		compost.push(p.loadImage('lib/sprites/compost_5.png'));
		recycle.push(p.loadImage('lib/sprites/recycle_00.png'));
		recycle.push(p.loadImage('lib/sprites/recycle_01.png'));
		recycle.push(p.loadImage('lib/sprites/recycle_02.png'));
		recycle.push(p.loadImage('lib/sprites/recycle_03.png'));
		recycle.push(p.loadImage('lib/sprites/recycle_04.png'));
		recycle.push(p.loadImage('lib/sprites/recycle_05.png'));
		recycle.push(p.loadImage('lib/sprites/recycle_06.png'));
		recycle.push(p.loadImage('lib/sprites/recycle_07.png'));
		recycle.push(p.loadImage('lib/sprites/recycle_08.png'));
		recycle.push(p.loadImage('lib/sprites/recycle_09.png'));
		recycle.push(p.loadImage('lib/sprites/recycle_10.png'));
		recycle.push(p.loadImage('lib/sprites/recycle_11.png'));
		trash.push(p.loadImage('lib/sprites/trash_00.png'));
		trash.push(p.loadImage('lib/sprites/trash_01.png'));
		trash.push(p.loadImage('lib/sprites/trash_02.png'));
		trash.push(p.loadImage('lib/sprites/trash_03.png'));
		trash.push(p.loadImage('lib/sprites/trash_04.png'));
		trash.push(p.loadImage('lib/sprites/trash_05.png'));
		trash.push(p.loadImage('lib/sprites/trash_06.png'));
		trash.push(p.loadImage('lib/sprites/trash_07.png'));
		trash.push(p.loadImage('lib/sprites/trash_08.png'));
		trash.push(p.loadImage('lib/sprites/trash_09.png'));
		trash.push(p.loadImage('lib/sprites/trash_10.png'));
		trash.push(p.loadImage('lib/sprites/trash_11.png'));
		plane.push(p.loadImage('lib/sprites/plane_0.png'));
		plane.push(p.loadImage('lib/sprites/plane_1.png'));
		plane.push(p.loadImage('lib/sprites/plane_2.png'));
	}

	p.setup = function() {
		var cnv = p.createCanvas(500, 500);
		p.textFont(poppinsFont);
		sprite_bag = p.createAnim();
		sprite_bag.loadIdle(idle);
		s_compost = p.createAnim();
		s_compost.loadIdle(compost);
		s_trash = p.createAnim();
		s_trash.loadIdle(trash);
		s_recycle = p.createAnim();
		s_recycle.loadIdle(recycle);
		s_plane = p.createAnim();
		s_plane.loadIdle(plane);
	}

	p.draw = function() {
		p.background(bg_color2);
		p.drawTitle();
		p.chooseSprite();
	}

	p.drawTitle = () => {
		p.push();
		p.textAlign(p.CENTER);
		p.fill(255);
		p.textSize(35*p.width/800);
		p.text("Where to Throw Your Rubbish?", p.width/2, 30);
		p.textSize(25*p.width/800);
		p.text("Select an option to decide!", p.width/2, 60);
		p.pop();
	}

	//choose sprite
	p.chooseSprite = function() {
		//question 1 - material
		if (flowchart.checkSelect(que1)) {
			sprite_bag.playForward(0, 5, 0.1);
		}

		//Compost End
		if (flowchart.checkSelect(ans_comp)
			|| flowchart.checkSelect(ans_paper_3_1)) {
			s_compost.playForward(0, 5, 0.1);
			return s_compost.draw();
		}
		//Recycle End
		if (flowchart.checkSelect(ans_plastic_1) 
			|| flowchart.checkSelect(ans_plastic_2_1)
			|| flowchart.checkSelect(ans_paper_3_2)
			|| flowchart.checkSelect(ans_metal_1_1)
			|| flowchart.checkSelect(ans_metal_1_2)
			|| flowchart.checkSelect(ans_glass)) {
			s_recycle.playForward(0, 11, 0.2);
			return s_recycle.draw();
		}
		//Trash End
		if (flowchart.checkSelect(ans_plastic_2_2)
			|| flowchart.checkSelect(ans_paper_2_1)) {
			s_trash.playForward(0, 11, 0.05);
			return s_trash.draw();
		}

		//Plane End
		if (flowchart.checkSelect(ans_paper_1)
			|| flowchart.checkSelect(ans_metal_2)) {
			s_plane.playForward(0, 2, 0.2);
			return s_plane.draw();
		}

		//response 1 - paper, plastic, metal
		if(flowchart.checkSelect(res_plastic)) {
			sprite_bag.index = 4;
		} else if (flowchart.checkSelect(res_metal)) {
			sprite_bag.index = 0;
		} else if (flowchart.checkSelect(res_paper)) {
			sprite_bag.index = 1;
		} else if (flowchart.checkSelect(res_food)) {
			sprite_bag.index = 3;
		} else if (flowchart.checkSelect(res_glass)) {
			sprite_bag.index = 2;
		}
		sprite_bag.draw();
	}
};

// ---------- create details sketch ------------
let detailp5 = function(p) {
	let title = "Okay... but how does this help me?"
    let bullet1 = 'Flowcharts and pseudocode help design and illustrate algorithms to solve complex problems.';
    let bullet1_0 = 'Problem Solving';
    let bullet2 =  'What are complex problems?';
    let bullet3 = 'Problems that are difficult to solve without being broken down into multiple steps!';
    let bullet4 = '(i.e. using flowcharts or pseudocode).';
    let cite = '- CA K-12 CS Standards';

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
    var cnv = p.createCanvas(p.getWidth(), 400);
    p.textFont(poppinsFont);
    p.textAlign(p.CENTER);
  };

  p.getWidth = function() {
  	if (p.windowWidth < 700) {
  		return p.windowWidth/1.3;
  	} else {
  		return 700/1.3;
  	}
  }

  p.windowResized = function() {
    cnv = p.resizeCanvas(p.getWidth(), 400);
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
    p.text(title, 0, base, p.width, p.height/4);

    //bullets
    p.textStyle(p.NORMAL);
    p.fill(text1Color);
    p.textSize(text1Size);
    p.text(bullet1_0, 0, base+=60, p.width, p.height/4);
    p.textSize(text2Size);
    p.fill(text2Color);
    p.text(bullet1, 0, base+=60, p.width, p.height/4);
    //sub bullet
    p.fill(text1Color);
    p.textSize(text1Size);
    p.text(bullet2, 0, base+=70, p.width, p.height/4);
    p.fill(text2Color);
    p.textSize(text2Size);
    p.text(bullet3, 0, base+=50, p.width, p.height/2);

    //cite
    p.textSize(citeSize);
    p.text(cite, 30, base +=80, p.width, p.height/4);
  }
}; // -------- end details sketch ---------

//----------- create parent reference sketch --------------
let parentp5 = function(p) {
  let cnv;
  let title = "Looking for More? Click to Visit: ";
  let subtitle = "http://users.csc.calpoly.edu/~zwood/Outreach/CACSK12/introK12.html";
  p.preload = function() {
    poppinsFont = p.loadFont('lib/Poppins/Poppins-Regular.ttf');
  };

  p.setup = function() {
    cnv = p.createCanvas(p.windowWidth, 75);
    cnv.mousePressed(openLink);
    cnv.mouseOver(hoverLink);
    p.textFont(poppinsFont);

  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, 75);
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
    p.textSize(25);
    p.text(title, 0, 0, p.width, p.height/2);
    p.textSize(15);
    p.text(subtitle, 0, 10, p.width, p.height);
  };

  function openLink() {
    window.open('http://users.csc.calpoly.edu/~zwood/Outreach/CACSK12/introK12.html');
  }
  function hoverLink() {
    p.cursor(p.HAND);
  }
} //--------- End of Parent Sketch ----------


var titleSketch = new p5(titlep5, 'titleSketch');
var flowSketch = new p5(myp5, 'flowSketch');
var animSketch = new p5(anim, 'animSketch');
var detailSketch = new p5(detailp5, 'detailSketch');
var parentSketch = new p5(parentp5, 'parentSketch');