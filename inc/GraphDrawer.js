"use strict";

class GraphDrawer {
	constructor(canvas) {
		if(canvas === undefined)
			return error("canvas is undefined !");

		this.canvas = canvas;
		this.context = canvas.getContext("2d");

		this.func = (x)=>0;
		this.funcColor = Color.rgb(0, 0);
		this.funcRange = new Vector(-Infinity, Infinity);

		this.widthRange = new Vector(-100, 100);
		this.heightRange = new Vector(-100, 100);

		this.zoomRatio = new Vector(canvas.width/(this.widthRange.y - this.widthRange.x),
									canvas.height/(this.heightRange.y - this.heightRange.x));

		this.gridScale = new Vector(5, 5);

		this.resolution = 10;

		this.isDrawGrid = true;
		this.isDrawXAxis = true;
		this.isDrawYAxis = true;
	}

	draw() {
		this.drawGrid();
		this.drawAxis();
	}
	

	drawGrid() {
		if(this.isDrawGrid) {
			strokeWeight(0.2)
			stroke(Color.rgb(160));
			grid(new Vector(0, 0), new Vector(this.gridScale.x*canvas.width/(this.widthRange.y - this.widthRange.x), this.gridScale.y*canvas.height/(this.heightRange.y - this.heightRange.x)), 
				 new Vector(0, 0), new Vector(this.canvas.width, this.canvas.height), this.context);
		}
	}

	drawAxis() {
		strokeWeight(2);
		stroke(Color.rgb(255, 110, 110));

		let originPos = this.getAbsolutePos(new Vector(0, 0));

		if(this.isDrawXAxis && this.heightRange.x <= 0 && this.heightRange.y >= 0) {
			let absoluteY = this.heightRange.y*( canvas.height/(this.heightRange.y - this.heightRange.x) );

			line(0, originPos.y, canvas.width, originPos.y, this.context);
		}

		if(this.isDrawYAxis && this.widthRange.x <= 0 && this.widthRange.y >= 0) {
			line(originPos.x, 0, originPos.x, canvas.height, this.context);
		}

	}

	getAbsolutePos(pos) {
		return new Vector(pos.x - this.widthRange.x*this.zoomRatio.x,
						  pos.y + this.heightRange.y*this.zoomRatio.y);
	}

	setFunction(func, color=Color.rgb(0)) {
		this.func = func;
		this.funcColor = color;
	}

	setFunctionRange(min, max=Infinity) {
		this.funcRange = new Vector(min, max);
	}

	setWidthRange(min, max) {
		this.widthRange = new Vector(min, max);
	}

	setHeightRange(min, max) {
		this.heightRange = new Vector(min, max);
	}

	setGridScale(x, y) {
		this.gridScale = new Vector(x, y);
	}

	setResolution(resolution) {
		this.resolution = resolution;
	}

	setDrawGrid(isDrawGrid) {
		this.isDrawGrid = isDrawGrid;
	}

	setDrawXAxis(isDrawXAxis) {
		this.isDrawXAxis = isDrawXAxis;
	}

	setDrawYAxis(isDrawYAxis) {
		this.isDrawYAxis = isDrawYAxis;
	}
}
