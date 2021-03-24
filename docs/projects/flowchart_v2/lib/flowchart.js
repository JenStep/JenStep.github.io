/***********************************************
 * Flowchart Library
 ***********************************************/
p5.prototype.Flowchart = function(p) {
	this.root = null;
	this.p = p;

	this.onMousePress = function(p) {
		this.p = p || this;
		if (this.root != null) {
			this.root.allPress(this.p);
		}
	}

	this.search = function(data) {
		return this.root.search(data);
	};

	this.addData = function(data, parent) {
		var n = createNode(data);
		//set as root if empty
		if (this.root == null) {
			this.root = n;
			this.root.enableOption();
		}
		//attach data to flowchart
		else if (!(typeof parent === 'undefined')) {
			var p = this.root.search(parent);
			if (p == null) {
				console.log('Error: could not find parent node');
			}
			p.pushChild(n);
		}
		return n;
	};

	this.selectData = function(data) {
		this.search(data).selectNode();
	}

	this.deselectData = function(data) {
		this.search(data).deselectNode();
	}

	this.checkSelect = function(data) {
		return this.search(data).isSelected;
	}

	this.draw = function(sp) {
		this.root.drawAll(sp);
	};
};

p5.prototype.createFlowchart = function() {
	return new p5.prototype.Flowchart(p=this);
};

 /*********************************************
  * Node
  *********************************************/
Node = function(p, data) {
	this.data = data;
	this.children = [];
	this.parent = null;
	this.isSelected = false;
	this.isOption = false;
	this.isHover = false;

	this.search = function(d) {
		if (this.data == d) {
			return this;
		} else {
			for (let i = 0; i < this.children.length; i++) {
				let result = this.children[i].search(d);
				if (result != null) {
					return result;
				}
			}
		}
		return null;
	};

	this.pushChild = function(node) {
		this.children.push(node);
		node.parent = this;
	};

	this.popChild = function(node) {
		const i = this.children.indexOf(node);
		if (index > -1) {
			this.children.splice(index, 1);
			node.parent = null;
			return node;
		}
	};

	this.getChildren = function() {
		return this.children;
	};

	this.getParent = function() {
		return this.parent;
	};

	this.isChild = function(node) {
		return this.children.indexOf(node) > -1;
	};

	this.deselectSiblings = function() {
		if (this.parent) {
			for (let i = 0; i < this.parent.children.length; i++) {
				if (this.parent.children[i] != this) {
					this.parent.children[i].deselectNode();
				}
			}
		}
	}

	this.selectNode = function() {
		//deselect siblings
		this.deselectSiblings();
		this.isSelected = true;
		this.data.select();
		//make children options
		for (let i = 0; i < this.children.length; i++) {
			this.children[i].enableOption();
			if (this.children[i].data.isQ) {
				this.children[i].selectNode();
			}
		}
	}

	this.enableOption = function() {
		this.data.makeOption();
		this.isOption = true;
	}

	this.deselectNode = function() {
		this.data.deselect();
		this.isSelected = false;
		for (let i = 0; i < this.children.length; i++) {
			this.children[i].deselectNode();
			this.children[i].isOption = false;
		}
		if(this.parent != null && this.parent.isSelected) {
			this.enableOption();
		}
	}

	this.onHover = function(p) {
		//recenter canvas (translate)
		let x = (p.mouseX - p.width/2);
		let y = (p.mouseY - p.height/2);
		let scale = p.width/this.data.scaleFactor;

		//calculate boundaries
		let xMin = this.data.x*scale - this.data.width/2;
		let xMax = this.data.x*scale + this.data.width/2;
		let yMin = this.data.y*scale - this.data.height/2;
		let yMax = this.data.y*scale + this.data.height/2;

		if (x > xMin && x < xMax && y > yMin && y < yMax) {
			this.isHover = true;
			if (this.isOption) {
				this.data.hover();
			}
		} else {
			this.isHover = false;
			if (this.isSelected) {
				this.data.select();
			}
			else if (this.isOption && !this.isSelected) {
				this.data.makeOption();
			}
		}
		return this.isHover;
	}

	//Calls onPress for all children recursively
	this.allPress = function(p) {
		this.onPress(p);
		for (let i = 0; i < this.children.length; i++) {
			this.children[i].allPress(p);
		}
	}

	this.onPress = function(p) {
		if (this.isHover) {
			if (this.isSelected) {
				this.deselectNode();
				this.isSelected = false;
			} else if (this.isOption) {
				this.selectNode();
				this.isSelected = true;
			}
		}
	}

	this.drawLine = function(p, node, child) {
		let x1 = node.data.x;
		let y1 = node.data.y;
		let x2 = child.data.x;
		let y2 = child.data.y;
		let yhalf = (y2 + y1)/2;

		p.push();
		p.translate(p.width/2, p.height/2);
		p.scale(p.width/node.data.scaleFactor);
		p.stroke(node.data.color);
		p.strokeWeight(node.data.strokeWeight);
		p.line(x1, y1, x1, yhalf);
		p.line(x1, yhalf, x2, yhalf);
		p.line(x2, yhalf, x2, y2);
		p.pop();
	}

	this.drawAll = function(p) {
		this.onHover(p);
		//draw lines
		for (let i = 0; i < this.children.length; i++) {
			this.drawLine(p, this, this.children[i]);
		}
		//draw vertex
		this.data.draw();
		//draw children
		for (let i = 0; i < this.children.length; i++) {
			this.children[i].drawAll(p);
		}
	};
};

function createNode(data) {
	return new Node(p=this, data);
};