"use strict";

let canvas;
let drawer;

window.onload = init;

function init() {
	canvas = document.querySelector("canvas");
	setTargetContext(canvas.getContext("2d"));

	if(window.innerHeight < window.innerWidth) {
		canvas.height = Math.floor(7*window.innerHeight/8);
		canvas.width = canvas.height*1.618;
	} else {
		canvas.width = Math.floor(7*window.innerWidth/8);
		canvas.height = canvas.width/1.618;
	}

	drawer = new GraphDrawer(canvas);

	drawer.setFunction(x => 2 + 0.2*Math.sin(x*5) - x/4 );
	drawer.setWidthRange(-5, 5)
	drawer.setHeightRange(-1, 5)
	drawer.setResolution(100)
	drawer.setGridScale(0.5, 0.5);

	drawer.draw();
}
