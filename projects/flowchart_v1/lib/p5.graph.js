/*************************************
* Connect Line Class
* connect two buttons, built off of the external p5 clickable addon
**************************************/
function Connect(x1, y1, x2, y2) {
	rectMode(CENTER);
	this.stroke = border;
	this.strokeWeight = 3;
	this.x1 = x1 || 0;
	this.y1 = y1 || 0;
	this.x2 = x2 || 0;
	this.y2 = y2 || 0;
	this.yhalf = (y2 + y1)/2;

	this.resize = function(x1, y1, x2, y2) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.yhalf = (y2 + y1)/2;
	}

	this.draw = function(){
		stroke(this.stroke);
		strokeWeight(this.strokeWeight);
		line(this.x1, this.y1, this.x1, this.yhalf);
		line(this.x1, this.yhalf, this.x2, this.yhalf);
		line(this.x2, this.yhalf, this.x2, this.y2);
	}
}

/**************************************
* Node Class == Clickable
****************************************/
class Node {
  constructor(clickable) {
    this.isSelected = false;
    this.isOption = false;
    this.clickable = clickable;
    this.children = [];
    this.parent = null;
  }

  addChild(node) {
    this.children.push(node);
    node.parent = this;
  }

  removeChild(node) {
    const index = this.children.indexOf(node);
    if (index > -1) {
      this.children.splice(index, 1);
      node.parent = null;
      return node;
    }
  }

  getChildren() {
    return this.children;
  }

  getParent() {
    return this.parent;
  }

  isChild(node) {
    return this.children.indexOf(node) > -1;
  }

  deselectNode() {
  	//deselect node
  	if (!this.isOption) {
    	this.clickable.color = nuetralFill;
	} else {
		this.clickable.color = optionColor;
	}
	this.clickable.stroke = nuetralBorder;
    this.clickable.textColor = nuetralBorder;
    this.isSelected = false;

    //change sprite
    if (this.clickable.changeBody) {
    	spriteBody = null;
    }
    if(this.clickable.changeHair) {
    	spriteHair = null;
    }
    if (this.clickable.changeOutfit) {
    	spriteOutfit = null;
    }

    //deselect children
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].isOption = false;
      this.children[i].deselectNode();
    }
  }

  selectNode() {
    if (this.isOption) {

    	//deselect siblings
    	if (this.parent) {
    		for (let i = 0; i < this.parent.children.length; i++) {
    			if (this.parent.children[i] != this) {
    				this.parent.children[i].deselectNode();
    			}
    			
    		}
    	}

    	//select node
    	this.isOption = true;
    	this.isSelected = true;
    	this.clickable.color = selectColor;
    	this.clickable.stroke = border;
    	this.clickable.textColor = border;

    	//change sprite
    	if (this.clickable.changeBody) {
    		spriteBody = this.clickable.changeBody;
    	}
    	if (this.clickable.changeHair) {
    		spriteHair = this.clickable.changeHair;
    	}
    	if (this.clickable.changeOutfit) {
    		spriteOutfit = this.clickable.changeOutfit;
    	}

    	//make children selectable
    	for (let i = 0; i < this.children.length; i++) {
    		//make children selectable
    		this.children[i].isOption = true;
    		if (!this.children[i].isSelected) {
    			this.children[i].clickable.color = optionColor;
    			this.children[i].clickable.textColor = border;
    			this.children[i].clickable.stroke = border;
    		}

    		//if next is question, select
    		if (this.children[i].clickable.isQuestion) {
    			this.children[i].selectNode();
    		}
    	}
	}
  }

}

/********************************************
* Directed Graph Class
**********************************************/
class Graph {
  constructor() {
    this.nodes = new Map();
  }

  //add edge to graph
  addEdge(source, dest) {
    const srcNode = this.addVertex(source);
    const destNode = this.addVertex(dest);

    //add child node to parent
    srcNode.addChild(destNode);
    return destNode;
  }

  //add node/vertex to graph
  addVertex(clickable) {
    if (this.nodes.has(clickable)) {
      return this.nodes.get(clickable);
    } else {
      const vertex = new Node(clickable);
      this.nodes.set(clickable, vertex);
      let myGraph = this;
      clickable.onPress = function () {
    	myGraph.selectGraph(vertex);
  	  }
  	  clickable.onHover = function() {
  	  	if (vertex.isOption && !vertex.isSelected) {
  	  		this.color = selectColor;
          cursor(HAND);
        }

  	  }
  	  clickable.onOutside = function() {
  	  	if (vertex.isSelected) {
  	  		this.color = selectColor;
  	  	}
  	  	else if (vertex.isOption) {
  	  		this.color = optionColor;
  	  	}
        cursor(ARROW);
  	  }
      return vertex;
    }
  }

  //remove vertex
  removeVertex(clickable) {
    const current = this.nodes.get(clickable);
    if (current) {
      for (const node of this.nodes.values()) {
        node.removeChild(current);
      }
    }
    return this.nodes.delete(clickable);
  }

  //remove edge
  removeEdge(source, dest) {
    const srcNode = this.nodes.get(source);
    const destNode = this.nodes.get(dest);

    if (srcNode && destNode) {
      srcNode.removeChild(destNode);
    }

    return [srcNode, destNode];
  }

  //select item in graph
  selectGraph(node) {
    //const children = node.getChildren();
    if (node.isSelected) {
      node.deselectNode();
    } else {
      node.selectNode();
    }
  }

  resetGraph(node) {
  	node.deselectNode();
  	node.isOption = true;
  	node.selectNode();
  }

  //draw graph using locations inside nodes
  //draw edges first to ensure they are drawn underneath
  drawGraph(node) {
  	var chosenLines = this.drawEdges(node);
  	for (let i = 0; i < chosenLines.length; i++) {
  		chosenLines[i].draw();
  	}
  	this.drawVertices(node);
  }

  /*recursively draw edges */
  drawEdges(node) {
  	const children = node.getChildren();
    var chosenLines = [];
  	//recursive
    if (children) {

        //draw children and edges
        for (let i = 0; i < children.length; i++) {
          const edge = new Connect(node.clickable.x, node.clickable.y, children[i].clickable.x, children[i].clickable.y);
          
          //if children selected - decide color
          if (node.isSelected && children[i].isSelected) {
            edge.stroke = node.clickable.color;
            chosenLines.push(edge);
          } else {
            edge.stroke = "#FFFFFF";
            edge.draw();
          }
        }

        //draw children of children
        for (let i = 0; i < children.length; i++) {
          chosenLines = concat(chosenLines, this.drawEdges(children[i]));
        }
    }
    return chosenLines;
  }

/* Recursively draw vertices */
  drawVertices(node) {
  	const children = node.getChildren();
  	for (let i = 0; i < children.length; i++) {
  		this.drawVertices(children[i]);
  	}
  	node.clickable.draw();
  }
}