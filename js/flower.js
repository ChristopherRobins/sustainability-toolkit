// JavaScript Document

var head = document.querySelector("#head");
var stem = document.querySelector("#stem");
var bud = document.querySelector("#bud");
var white = document.querySelector("#white");

//bud.style.display = "none";

function init() {
	//console.log(image);
	//head.style.display = "none";
	TweenMax.to(white, 0, {opacity: 0});
	flower();
	console.log(head);
}

function flower() {
	console.log("works")
	//var circleTL = new TweenMax();
	
	var randTopPos = Math.floor(Math.random()*300)+150;

	var randScale = Math.random()*0.6+0.2; //
	
	console.log(randTopPos);
	console.log(randScale);

	TweenMax.to(white, 0, { css:{scaleX: 0, scaleY: 0} });
	TweenMax.to(stem, 0, { css: {scaleX: randScale} });
	TweenMax.to(white, 1, {top: randTopPos-27.5});
	TweenMax.to(stem, 1, {top: randTopPos});
	TweenMax.to(bud, 1, {top: randTopPos-15});
	TweenMax.to(white, 1, {opacity: 0});
	//TweenMax.to(bud, 1, { css: {scaleX: randScale, scaleY: randScale}, delay: 1 });
}

function grow(i) {
	//console.log("grow flower head");

	if(i == "zero") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{scaleX: 1, scaleY: 1} });
		TweenMax.to(white, 1, { css:{scaleX: 0, scaleY: 0} });
		TweenMax.to(white, 1, {opacity: 0});
	}
	if(i == "ten") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{scaleX: 1.5, scaleY: 1.5} });
		TweenMax.to(white, 1, { css:{scaleX: 0.5, scaleY: 0.5} });
		TweenMax.to(white, 1, {opacity: 1});
	}
	if(i == "twenty") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{scaleX: 2, scaleY: 2} });
		TweenMax.to(white, 1, { css:{scaleX: 0.7, scaleY: 0.7} });
		TweenMax.to(white, 1, {opacity: 1});
	}
	if(i == "thirty") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{scaleX: 2.5, scaleY: 2.5} });
		TweenMax.to(white, 1, { css:{scaleX: 0.9, scaleY: 0.9} });
		TweenMax.to(white, 1, {opacity: 1});
	}
	if(i == "fourty") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{scaleX: 3, scaleY: 3} });
		TweenMax.to(white, 1, { css:{scaleX: 1.1, scaleY: 1.1} });
		TweenMax.to(white, 1, {opacity: 1});
	}
	if(i == "fifty") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{scaleX: 3.5, scaleY: 3.5} });
		TweenMax.to(white, 1, { css:{scaleX: 1.3, scaleY: 1.3} });
		TweenMax.to(white, 1, {opacity: 1});
	}
	if(i == "sixty") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{scaleX: 4, scaleY: 4} });
		TweenMax.to(white, 1, { css:{scaleX: 1.5, scaleY: 1.5} });
		TweenMax.to(white, 1, {opacity: 1});
	}
	if(i == "seventy") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{scaleX: 4.5, scaleY: 4.5} });
		TweenMax.to(white, 1, { css:{scaleX: 1.7, scaleY: 1.7} });
		TweenMax.to(white, 1, {opacity: 1});
	}
	if(i == "eighty") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{scaleX: 5, scaleY: 5} });
		TweenMax.to(white, 1, { css:{scaleX: 1.9, scaleY: 1.9} });
		TweenMax.to(white, 1, {opacity: 1});
	}
	if(i == "ninety") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{scaleX: 5.5, scaleY: 5.5} });
		TweenMax.to(white, 1, { css:{scaleX: 2.1, scaleY: 2.1} });
		TweenMax.to(white, 1, {opacity: 1});
	}
	if(i == "full") {
		//console.log(i);
		TweenMax.to(bud, 1, { css:{scaleX: 6, scaleY: 6} });
		TweenMax.to(white, 1, { css:{scaleX: 2.3, scaleY: 2.3} });
		TweenMax.to(white, 1, {opacity: 1});
	}
}

window.addEventListener("load", init, false);