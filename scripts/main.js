runOnStartup(runtime => {
	// block certain keys
	window.addEventListener("keydown", function(e) {
		if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
			e.preventDefault();
		}
	}, false);

	var style = document.createElement("style");
	style.innerText =`
	/* border texture */
	body:before {
		background: url(border.png);
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		animation: fadeBackground 0.5s forwards;
	}

	/* border frame */
	canvas {
		box-shadow: 0px 0px 0px calc(2px * var(--construct-scale)) #566066, 0px 0px calc(5px * var(--construct-scale)) calc(2px * var(--construct-scale)) #000000;
		background: #000000;
		opacity: 0;
		animation: fadeBorder 0.25s forwards;
	}
	`;

	document.head.appendChild(style);
});