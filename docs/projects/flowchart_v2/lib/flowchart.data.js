//color pallette
const selectColor = "#33CCFF";
const optionColor = "#CCFFFF";
const selectBorder = "#000000";
const optionBorder = "#333366";
const nuetralBorder = "#B3B3B3";
const nuetralFill = "#e8e8e8";

/**********************************
 * Data Structure
 *********************************/
p5.prototype.dataStruct = function(p, txt, x, y, q) {
	this.text = txt;
	this.x = x || 0;
	this.y = y || 0;
	this.width = 75;
	this.height = 50;
	this.isQ = q || false;
	this.color = nuetralFill;
	this.stroke = nuetralBorder;
	this.strokeWeight = 2;
	this.corner = 10;
	this.textColor = nuetralBorder;
	this.textSize = 12;
	this.scaleFactor = 700;

	this.draw = function() {
		//p.print('Data: ' + this.text);
		p.fill(this.color);
		p.stroke(this.stroke);
		p.strokeWeight(this.strokeWeight);
		p.rectMode(p.CENTER);

		//center mode
		p.push();
		p.translate(p.width/2, p.height/2);
		p.scale(p.width/this.scaleFactor);
		//allow rotated buttons
		p.push();
		p.translate(this.x, this.y);
		if (this.isQ) {
			p.rotate(p.radians(45));
			//make button square by averaging width & height
			let square = (this.height+this.width)/2;
			this.height = square;
			this.width = square;
		}

		//scale
		p.rect(0, 0, this.width, this.height, this.corner);
		p.pop();

		//text
		p.fill(this.textColor);
		p.noStroke();
		p.textAlign(p.CENTER, p.CENTER);
		p.textSize(this.textSize);
		p.text(this.text, this.x, this.y, this.width, this.height);
		p.pop();
	}

	this.select = function() {
		this.color = selectColor;
		this.stroke = selectBorder;
		this.textColor = selectBorder;
	}

	this.deselect = function() {
		this.color = nuetralFill;
		this.stroke = nuetralBorder;
		this.textColor = nuetralBorder;
	}

	this.makeOption = function() {
		this.color = optionColor;
		this.stroke = optionBorder;
		this.textColor = optionBorder;
	}

	this.hover = function() {
		this.color = selectColor;
		this.stroke = optionBorder;
		this.textColor = selectBorder;
	}

	this.position = function(x, y) {
		this.x = x;
		this.y = y;
	}

	this.resize = function(w, h) {
		this.width = w;
		this.height = h;
	}

	this.recolor = function(c) {
		this.color = c;
	}

	this.getX = function() {
		return this.x;
	}

	this.getY = function() {
		return this.y;
	}
}

p5.prototype.createData = function(txt, x, y, q) {
	return new p5.prototype.dataStruct(p = this, txt, x, y, q);
}