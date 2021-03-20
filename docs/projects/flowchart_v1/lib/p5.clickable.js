//Determines if the mouse was pressed on the previous frame
var cl_mouseWasPressed = false;
//Last hovered button
var cl_lastHovered = null;
//Last pressed button
var cl_lastClicked = null;
//All created buttons
var cl_clickables = [];

//This function is what makes the magic happen and should be ran after
//each draw cycle.
p5.prototype.runGUI = function(){
	for(i = 0; i < cl_clickables.length; ++i){
		if(cl_lastHovered != cl_clickables[i])
			cl_clickables[i].onOutside();
	}
	if(cl_lastHovered != null){
		if(cl_lastClicked != cl_lastHovered){
			cl_lastHovered.onHover();
		}
	}
	if(!cl_mouseWasPressed && cl_lastClicked != null){
		cl_lastClicked.onPress();
	}
	if(cl_mouseWasPressed && !mouseIsPressed && cl_lastClicked != null){
		if(cl_lastClicked == cl_lastHovered){
			cl_lastClicked.onRelease();
		}
		cl_lastClicked = null;
	}
	cl_lastHovered = null;
	cl_mouseWasPressed = mouseIsPressed;
}

p5.prototype.registerMethod('post', p5.prototype.runGUI);

//Button Class
function Clickable(x,y){
	this.x = x || 0;			//X position of the clickable
	this.y = y || 0;			//Y position of the clickable
	this.width = 100;			//Width of the clickable
	this.height = 50;			//Height of the clickable
	this.color = nuetralFill;			//Background color of the clickable
	this.cornerRadius = 10;			//Corner radius of the clickable
	this.strokeWeight = 2;			//Stroke width of the clickable
	this.stroke = nuetralBorder;		//Border color of the clickable
	this.text = "Press Me";			//Text of the clickable
	this.textColor = nuetralBorder;		//Color for the text shown
	this.textSize = 14;			//Size for the text shown
	this.textFont = poppinsFont;		//Font for the text shown	
	this.isQuestion = false;			//added rotation for clickable
	this.changeBody = null;
    this.changeHair = null;
    this.changeOutfit = null;
	
	this.onHover = function(){
		//This function is ran when the clickable is hovered but not
		//pressed.

	}
	
	this.onOutside = function(){
		//This function is ran when the clickable is NOT hovered.
	}
	
	this.onPress = function(){
		//This function is ran when the clickable is pressed.
	}
	
	this.onRelease = function(){
		//This funcion is ran when the cursor was pressed and then
		//released inside the clickable. If it was pressed inside and
		//then released outside this won't work.
	}
	
	this.locate = function(x, y){
		this.x = x;
		this.y = y;
	}
	
	this.resize = function(w, h){
		this.width = w;
		this.height = h;
	}
	
	this.draw = function(){
		fill(this.color);
		stroke(this.stroke);
		strokeWeight(this.strokeWeight);
		
		//allow for rotated buttons. rectMode = CENTER
		push();
		translate(this.x, this.y);
		if (this.isQuestion) {
			rotate(radians(45));
		}
		rect(0, 0, this.width, this.height, this.cornerRadius);
		pop();

		fill(this.textColor);
		noStroke();
		textAlign(CENTER, CENTER);
		textSize(this.textSize);
		textFont(this.textFont);
		text(this.text, this.x+1, this.y+1, this.width, this.height);
		if(mouseX >= this.x-this.width/2 + moveGraphic.x && mouseY >= this.y-this.height/2 + moveGraphic.y
		   && mouseX < this.x+this.width/2 + moveGraphic.x && mouseY < this.y+this.height/2 + moveGraphic.y){
			cl_lastHovered = this;
			if(mouseIsPressed && !cl_mouseWasPressed) {
				cl_lastClicked = this;
			}
		}
	}
	
	cl_clickables.push(this);
}
