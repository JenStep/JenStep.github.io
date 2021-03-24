/*
 Sprite Animation based on flowchart values
*/
p5.prototype.anim = function(p, x, y, w, h) {
	this.x = x || 0;
	this.y = y || 0;
	this.width = w || 300;
	this.height = h || 300;
	this.idleSprite = [];
	this.index = 0;

	//load images for idle sprite animation
	this.loadIdle = function(arr) {
		this.idleSprite = arr;
	}

	this.relocate = function(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
	}

	this.draw = function() {
		//center mode
		p.push();
		p.translate(p.width/2, p.height/2);
		p.imageMode(p.CENTER);
		p.image(this.idleSprite[p.int(this.index)], this.x, this.y, this.width, this.height);
		p.pop();
	}

	this.playForward = function(start, end, ft) {
		this.index += ft;
		if (this.index > end+1 || this.index < start) {
			this.index = start;
		}
	}

};

p5.prototype.createAnim = function(x, y, w, h) {
	return new p5.prototype.anim(p=this, x, y, w, h);
};