/***************************************************
* Class to create physics objects with collision detection
****************************************************/

class CollisionObject {
	constructor(p) {
		this.p = p;
		this.x = 100;
		this.y = 100;
		this.radius = 50;
		this.col = this.p.color('magenta');
		this.yVel = .98;
		this.xVel = 1;
		this.speed = 1;
		this.mass = 1;
		this.enabled = true;
	}

	setRadius (rad) {
		this.radius = this.p.float(rad) || 1;
	}

	setColor (c) {
		this.col = c;
	}
	setMass (m) {
		this.mass = this.p.float(m) || 1;
	}

	setPosition (x1, y1) {
		this.x = x1;
		this.y = y1;
	}

	setSpeed (s) {
		this.speed = this.p.float(s) || 0;
	}

	update() {
		if (this.enabled) {
			this.x += this.xVel * this.speed;
			this.y += this.yVel * this.speed;
		}
	}

	boundaryCollision(xMin, xMax, yMin, yMax) {
		if (this.x + this.radius > xMax) {
			this.xVel *= -1;
		} else if (this.x - this.radius < xMin) {
			this.xVel *= -1;
		} else if (this.y + this.radius > yMax) {
			this.yVel *= -1;
		} else if (this.y - this.radius < yMin) {
			this.yVel *= -1;
		}
	}

	collided(c1, c2) {
		let dx = c1.x - c2.x;
		let dy = c1.y - c2.y;
		let dist = this.p.sqrt(dx * dx + dy * dy);
		return (dist < c1.radius + c2.radius);
		
	}

	objectCollision(other) {
		//let d = this.p.int(this.p.dist(this.x, this.y, other.x, other.y));
		if (this.collided(this, other)) {
		//if (d < this.radius + other.radius) {
			//collision
			let newVelx1 = (this.xVel * (this.mass - other.mass) + (2 * other.mass * other.xVel)) / (this.mass + other.mass);
			let newVely1 = (this.yVel * (this.mass - other.mass) + (2 * other.mass * other.yVel)) / (this.mass + other.mass);
			let newVelx2 = (other.xVel * (other.mass - this.mass) + (2 * this.mass * this.xVel)) / (other.mass + this.mass);
			let newVely2 = (other.yVel * (other.mass - this.mass) + (2 * this.mass * this.yVel)) / (other.mass + this.mass);
			//set new velocity
			this.xVel = newVelx1;
			this.yVel = newVely1;
			other.xVel = newVelx2;
			other.yVel = newVely2;
			//bounce away
			this.x += newVelx1;
			this.y += newVely1;
			other.x += newVelx2;
			other.y += newVely2;
		}
	}

	draw() {
		if (this.enabled) {
			this.p.fill(this.col);
			this.p.ellipse(this.x, this.y, this.radius*2, this.radius*2);
		}
	}
}