var head = document.querySelector("#head");
var stem = document.querySelector("#stem");
var bud = document.querySelector("#bud");
var white = document.querySelector("#white");
var percent = document.querySelector("#percentage");
var midWheel = document.querySelector("#midWheel");

var randTopPos = Math.floor(Math.random()*0+100);
var	randScale = Math.random()*0.6+0.2;

var w = window.innerWidth;
var h = window.innerHeight;

var budLine = new TimelineMax();
var stemLine = new TimelineMax();
var growBudLine = new TimelineMax();
var growWhiteLine = new TimelineMax();

//bud.style.display = "none";

function init() {
	//console.log("init() running");
	TweenMax.to(white, 0, {opacity: 0});
	flower();
	//viewport();
	//bud.addEventListener("click", wheel, false);
	//white.addEventListener("click", wheel, false);
}

function flower() {
	//console.log("flower() running")

	console.log(randScale);
	console.log(randTopPos);

	TweenMax.to(midWheel, 0, {opacity: 0});
	TweenMax.to(midWheel, 0, { css:{scaleX: 0, scaleY: 0} });

	/*TweenMax.to(white, 0, { css: {scaleX: 0, scaleY: 0} });
	TweenMax.to(white, 0, { css: {bottom: randTopPos-200}, ease: Back.easeOut});
	//TweenMax.to(white, 1, {opacity: 0});

	TweenMax.to(stem, 0, { css: {scaleX: randScale} });
	TweenMax.to(stem, 1, { css: {top: randTopPos}, ease: Back.easeOut});*/

	budLine.to(bud, 0, { css: {scaleX: 1.5, scaleY: 1.5} }),
	budLine.to(white, 0, { css: {scaleX: 0, scaleY: 0} }),
	budLine.to(white, 0, { css: {bottom: randTopPos-200}, ease: Back.easeOut}),
	budLine.to(bud, 1, { css: {top: randTopPos}, ease: Back.easeOut});

	stemLine.to(stem, 0, { css: {scaleX: randScale} }),
	stemLine.to(stem, 1, { css: {top: randTopPos}, ease: Back.easeOut});

	/*TweenMax.to(percent, 0, {opacity: 0});
	TweenMax.to(percent, 1, {top: randTopPos-35});
	TweenMax.to(percent, 1, { css:{scaleX: 0.7, scaleY: 0.7} });
	//TweenMax.to(bud, 1, { css: {scaleX: randScale, scaleY: randScale}, delay: 1 });*/
}

function reverseTL() {
	flowerLine.reverse();
}

function grow(i) {
	//console.log("grow() running");

	if(i == "zero") {
		//console.log(i);
		//grow.to(bud, 1, { css:{ height: "25px", width: "25px", position: "absolute"} });
		growBudLine.reverse(5);
		growWhiteLine.reverse(2);
		TweenMax.to(bud, 1, { css:{ height: "25px", width: "25px", position: "absolute"} });
		TweenMax.to(bud, 1, { css:{scaleX: 1.5, scaleY: 1.5} });
		TweenMax.to(bud, 1, {css:{top: randTopPos}});

		/*TweenMax.to(white, 1, { css:{ height: "50px", width: "50px", position: "absolute"} });
		TweenMax.to(white, 1, { css:{scaleX: 0, scaleY: 0} });
		TweenMax.to(white, 1, {opacity: 1});
		TweenMax.to(white, 1, {css: {bottom: randTopPos-200}});*/

		//TweenMax.to(stem, 1, {top: randTopPos});
		//TweenMax.to(stem, 1, {opacity: 1});
		stemLine.play();

		TweenMax.to(percent, 0.3, {opacity: 0});

		TweenMax.to(midWheel, 0.3, {opacity: 0});
		TweenMax.to(midWheel, 1, { css:{scaleX: 0, scaleY: 0} });
		TweenMax.to(midWheel, 1, {rotation: 0, ease: Circ.easeOut});
		console.log(bud.width);
	}
	if(i == "ten") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{ height: "25px", width: "25px", position: "absolute"} });
		TweenMax.to(bud, 1, { css:{scaleX: 2, scaleY: 2} });
		TweenMax.to(bud, 1, {top: randTopPos});

		TweenMax.to(white, 1, { css:{ height: "50px", width: "50px", position: "absolute"} });
		TweenMax.to(white, 1, { css:{scaleX: 0.7, scaleY: 0.7} });
		TweenMax.to(white, 1, {opacity: 1});
		TweenMax.to(white, 1, {css: {bottom: randTopPos-200}});

		TweenMax.to(stem, 1, {top: randTopPos});
		TweenMax.to(stem, 1, {opacity: 1});

		TweenMax.to(percent, 1, {opacity: 0.3, delay: 0.5});
		TweenMax.to(percent, 1, { css:{scaleX: 0.7, scaleY: 0.7} });
		percent.innerHTML = "10%";

		TweenMax.to(midWheel, 0.3, {opacity: 0});
		TweenMax.to(midWheel, 1, { css:{scaleX: 0, scaleY: 0} });
		TweenMax.to(midWheel, 1, {rotation: 0, ease: Circ.easeOut});
	}
	if(i == "twenty") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{ height: "25px", width: "25px", position: "absolute"} });
		TweenMax.to(bud, 1, { css:{scaleX: 2.5, scaleY: 2.5} });
		TweenMax.to(bud, 1, {top: randTopPos});

		TweenMax.to(white, 1, { css:{ height: "50px", width: "50px", position: "absolute"} });
		TweenMax.to(white, 1, { css:{scaleX: 0.9, scaleY: 0.9} });
		TweenMax.to(white, 1, {opacity: 1});
		TweenMax.to(white, 1, {css: {bottom: randTopPos-200}});

		TweenMax.to(stem, 1, {top: randTopPos});
		TweenMax.to(stem, 1, {opacity: 1});

		TweenMax.to(percent, 1, {opacity: 0.3, delay: 0.5});
		TweenMax.to(percent, 1, { css:{scaleX: 0.8, scaleY: 0.8} });
		percent.innerHTML = "20%";

		TweenMax.to(midWheel, 0.3, {opacity: 0});
		TweenMax.to(midWheel, 1, { css:{scaleX: 0, scaleY: 0} });
		TweenMax.to(midWheel, 1, {rotation: 0, ease: Circ.easeOut});
	}
	if(i == "thirty") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{ height: "25px", width: "25px", position: "absolute"} });
		TweenMax.to(bud, 1, { css:{scaleX: 3, scaleY: 3} });
		TweenMax.to(bud, 1, {top: randTopPos});

		TweenMax.to(white, 1, { css:{ height: "50px", width: "50px", position: "absolute"} });
		TweenMax.to(white, 1, { css:{scaleX: 1.1, scaleY: 1.1} });
		TweenMax.to(white, 1, {opacity: 1});
		TweenMax.to(white, 1, {css: {bottom: randTopPos-200}});

		TweenMax.to(stem, 1, {top: randTopPos});
		TweenMax.to(stem, 1, {opacity: 1});

		TweenMax.to(percent, 1, {opacity: 0.3, delay: 0.5});
		TweenMax.to(percent, 1, { css:{scaleX: 0.9, scaleY: 0.9} });
		percent.innerHTML = "30%";

		TweenMax.to(midWheel, 0.3, {opacity: 0});
		TweenMax.to(midWheel, 1, { css:{scaleX: 0, scaleY: 0} });
		TweenMax.to(midWheel, 1, {rotation: 0, ease: Circ.easeOut});
	}
	if(i == "fourty") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{ height: "25px", width: "25px", position: "absolute"} });
		TweenMax.to(bud, 1, { css:{scaleX: 3.5, scaleY: 3.5} });
		TweenMax.to(bud, 1, {top: randTopPos});

		TweenMax.to(white, 1, { css:{ height: "50px", width: "50px", position: "absolute"} });
		TweenMax.to(white, 1, { css:{scaleX: 1.3, scaleY: 1.3} });
		TweenMax.to(white, 1, {opacity: 1});
		TweenMax.to(white, 1, {css: {bottom: randTopPos-200}});

		TweenMax.to(stem, 1, {top: randTopPos});
		TweenMax.to(stem, 1, {opacity: 1});

		TweenMax.to(percent, 1, {opacity: 0.3, delay: 0.5});
		TweenMax.to(percent, 1, { css:{scaleX: 1.1, scaleY: 1.1} });
		percent.innerHTML = "40%";

		TweenMax.to(midWheel, 0.3, {opacity: 0});
		TweenMax.to(midWheel, 1, { css:{scaleX: 0, scaleY: 0} });
		TweenMax.to(midWheel, 1, {rotation: 0, ease: Circ.easeOut});
	}
	if(i == "fifty") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{ height: "25px", width: "25px", position: "absolute"} });
		TweenMax.to(bud, 1, { css:{scaleX: 4, scaleY: 4} });
		TweenMax.to(bud, 1, {top: randTopPos});

		TweenMax.to(white, 1, { css:{ height: "50px", width: "50px", position: "absolute"} });
		TweenMax.to(white, 1, { css:{scaleX: 1.5, scaleY: 1.5} });
		TweenMax.to(white, 1, {opacity: 1});
		TweenMax.to(white, 1, {css: {bottom: randTopPos-200}});

		TweenMax.to(stem, 1, {top: randTopPos});
		TweenMax.to(stem, 1, {opacity: 1});

		TweenMax.to(percent, 1, {opacity: 0.3, delay: 0.5});
		TweenMax.to(percent, 1, { css:{scaleX: 1.3, scaleY: 1.3} });
		percent.innerHTML = "50%";

		TweenMax.to(midWheel, 0.3, {opacity: 0});
		TweenMax.to(midWheel, 1, { css:{scaleX: 0, scaleY: 0} });
		TweenMax.to(midWheel, 1, {rotation: 0, ease: Circ.easeOut});
	}
	if(i == "sixty") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{ height: "25px", width: "25px", position: "absolute"} });
		TweenMax.to(bud, 1, { css:{scaleX: 4.5, scaleY: 4.5} });
		TweenMax.to(bud, 1, {top: randTopPos});

		TweenMax.to(white, 1, { css:{ height: "50px", width: "50px", position: "absolute"} });
		TweenMax.to(white, 1, { css:{scaleX: 1.7, scaleY: 1.7} });
		TweenMax.to(white, 1, {opacity: 1});
		TweenMax.to(white, 1, {css: {bottom: randTopPos-200}});

		TweenMax.to(stem, 1, {top: randTopPos});
		TweenMax.to(stem, 1, {opacity: 1});

		TweenMax.to(percent, 1, {opacity: 0.3, delay: 0.5});
		TweenMax.to(percent, 1, { css:{scaleX: 1.5, scaleY: 1.5} });
		percent.innerHTML = "60%";

		TweenMax.to(midWheel, 0.3, {opacity: 0});
		TweenMax.to(midWheel, 1, { css:{scaleX: 0, scaleY: 0} });
		TweenMax.to(midWheel, 1, {rotation: 0, ease: Circ.easeOut});
	}
	if(i == "seventy") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{ height: "25px", width: "25px", position: "absolute"} });
		TweenMax.to(bud, 1, { css:{scaleX: 5, scaleY: 5} });
		TweenMax.to(bud, 1, {top: randTopPos});

		TweenMax.to(white, 1, { css:{ height: "50px", width: "50px", position: "absolute"} });
		TweenMax.to(white, 1, { css:{scaleX: 1.9, scaleY: 1.9} });
		TweenMax.to(white, 1, {opacity: 1});
		TweenMax.to(white, 1, {css: {bottom: randTopPos-200}});

		TweenMax.to(stem, 1, {top: randTopPos});
		TweenMax.to(stem, 1, {opacity: 1});

		TweenMax.to(percent, 1, {opacity: 0.3, delay: 0.5});
		TweenMax.to(percent, 1, { css:{scaleX: 1.7, scaleY: 1.7} });
		percent.innerHTML = "70%";

		TweenMax.to(midWheel, 0.3, {opacity: 0});
		TweenMax.to(midWheel, 1, { css:{scaleX: 0, scaleY: 0} });
		TweenMax.to(midWheel, 1, {rotation: 0, ease: Circ.easeOut});
	}
	if(i == "eighty") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{ height: "25px", width: "25px", position: "absolute"} });
		TweenMax.to(bud, 1, { css:{scaleX: 5.5, scaleY: 5.5} });
		TweenMax.to(bud, 1, {top: randTopPos});

		TweenMax.to(white, 1, { css:{ height: "50px", width: "50px", position: "absolute"} });
		TweenMax.to(white, 1, { css:{scaleX: 2.1, scaleY: 2.1} });
		TweenMax.to(white, 1, {opacity: 1});
		TweenMax.to(white, 1, {css: {bottom: randTopPos-200}});

		TweenMax.to(stem, 1, {top: randTopPos});
		TweenMax.to(stem, 1, {opacity: 1});

		TweenMax.to(percent, 1, {opacity: 0.3, delay: 0.5});
		TweenMax.to(percent, 1, { css:{scaleX: 1.9, scaleY: 1.9} });
		percent.innerHTML = "80%";

		TweenMax.to(midWheel, 0.3, {opacity: 0});
		TweenMax.to(midWheel, 1, { css:{scaleX: 0, scaleY: 0} });
		TweenMax.to(midWheel, 1, {rotation: 0, ease: Circ.easeOut});
	}
	if(i == "ninety") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{ height: "25px", width: "25px", position: "absolute"} });
		TweenMax.to(bud, 1, { css:{scaleX: 6, scaleY: 6} });
		TweenMax.to(bud, 1, {top: randTopPos});

		TweenMax.to(white, 1, { css:{ height: "50px", width: "50px", position: "absolute"} });
		TweenMax.to(white, 1, { css:{scaleX: 2.3, scaleY: 2.3} });
		TweenMax.to(white, 1, {opacity: 1});
		TweenMax.to(white, 1, {css: {bottom: randTopPos-200}});

		TweenMax.to(stem, 1, {top: randTopPos});
		TweenMax.to(stem, 1, {opacity: 1});

		TweenMax.to(percent, 1, {opacity: 0.3, delay: 0.5});
		TweenMax.to(percent, 1, { css:{scaleX: 2, scaleY: 2} });
		percent.innerHTML = "90%";

		TweenMax.to(midWheel, 0.3, {opacity: 0});
		TweenMax.to(midWheel, 1, { css:{scaleX: 0, scaleY: 0} });
		TweenMax.to(midWheel, 1, {rotation: 0, ease: Circ.easeOut});
	}
	if(i == "full") {
		//console.log(i);
		TweenMax.to(bud, 2, { css:{scaleX: 6.5, scaleY: 6.5} });
		TweenMax.to(bud, 2, { css:{ height: "25px", width: "25px", position: "absolute"} });
		TweenMax.to(bud, 1, {top: randTopPos});

		TweenMax.to(white, 2, { css:{ height: "50px", width: "50px", position: "absolute"} });
		TweenMax.to(white, 2, { css:{scaleX: 2.5, scaleY: 2.5} });
		TweenMax.to(white, 1, {opacity: 1});
		TweenMax.to(white, 1, {css: {bottom: randTopPos-200}});

		TweenMax.to(stem, 1, {top: randTopPos});
		TweenMax.to(stem, 1, {opacity: 1});

		TweenMax.to(percent, 1, {opacity: 0.3, delay: 0.5});
		TweenMax.to(percent, 1, { css:{scaleX: 2, scaleY: 2} });
		percent.innerHTML = "100%";

		TweenMax.to(midWheel, 0.3, {opacity: 0});
		TweenMax.to(midWheel, 1, { css:{scaleX: 0, scaleY: 0} });
		TweenMax.to(midWheel, 1, {rotation: 0, ease: Circ.easeOut});
	}
}

function wheelScreen(e) {
	console.log("wheel() running");
	console.log("width: " + w + " and height: " + h);

	stemLine.reverse();

	growBudLine.to(bud, 2, { css:{ height: h, width: h, position: "fixed"}, ease: Cubic.easeInOut }),
	growBudLine.to(bud, 2, { css:{scaleX: 1, scaleY: 1} }, '-=2'),
	growBudLine.to(bud, 1, { css:{ top: 0, bottom: 0, left: 0, right: 0, margin: "auto" }, ease: Cubic.easeInOut }, '-=2');

	growWhiteLine.to(white, 2, { css:{ scaleX: 1, scaleY: 1 }, delay:1 }),
	growWhiteLine.to(white, 2, { css:{ height: h-100, width: h-100, position: "fixed"} }, '-=2'),
	growWhiteLine.to(white, 1, { css:{ top: 0, bottom: 0, left: 0, right: 0, margin: "auto"}, ease: Cubic.ease }, '-=2'),
	growWhiteLine.to(white, 1, {opacity: 1}, '-=2');
	
	/*TweenMax.to(bud, 2, { css:{ height: h, width: h, position: "fixed"} });
	TweenMax.to(bud, 2, { css:{scaleX: 1, scaleY: 1} });
	TweenMax.to(bud, 1, { css:{ top: 0, bottom: 0, left: 0, right: 0, margin: "auto" }, ease: Cubic.ease });

	TweenMax.to(white, 2, { css:{scaleX: 1, scaleY: 1} });
	TweenMax.to(white, 2, { css:{ height: h-100, width: h-100, position: "fixed"} });
	TweenMax.to(white, 1, { css:{ top: 0, bottom: 0, left: 0, right: 0, margin: "auto"}, ease: Cubic.ease });
	TweenMax.to(white, 1, {opacity: 1});

	//TweenMax.to(stem, 1, {opacity: 0});

	TweenMax.to(percent, 1, {opacity: 0});

	midOpac = TweenMax.to(midWheel, 1, {opacity: 1, delay: 1});
	midRot = TweenMax.to(midWheel, 1.5, {rotation: 360, delay: 0.5, ease: Circ.easeOut, onComplete: budSize() });*/
}

function budSize() {
	console.log(h);
}

window.addEventListener("load", init, false);