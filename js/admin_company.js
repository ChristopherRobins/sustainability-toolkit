(function(){

  var overlay1 = document.querySelector(".overlay1");
  var overlay2 = document.querySelector(".overlay2");
  var stepDesc = document.querySelector(".step-desc");
  var midWheel = document.querySelector("#midWheel");
  var innerWheel = document.querySelector("#innerWheel");
  var innercircle = document.querySelector("#wheelCirc img");
  var pieces = document.querySelectorAll(".pieces");
  var colpiece = document.querySelector("#colpiece1");
  var colpiece2 = document.querySelector("#colpiece2");
  var colpiece3 = document.querySelector("#colpiece3");
  var colpiece4 = document.querySelector("#colpiece4");
  var colpiece5 = document.querySelector("#colpiece5");
  var colpiece6 = document.querySelector("#colpiece6");
  var colpiece7 = document.querySelector("#colpiece7");
  var colpiece8 = document.querySelector("#colpiece8");
  var colpiece9 = document.querySelector("#colpiece9");
  var colpiece10 = document.querySelector("#colpiece10");
  var colpiece11 = document.querySelector("#colpiece11");
  var colpiece12 = document.querySelector("#colpiece12");
  var colpiece13 = document.querySelector("#colpiece13");
  var piece1 = document.getElementById("piece1");
  var piece2 = document.getElementById("piece2");
  var piece3 = document.getElementById("piece3");
  var piece4 = document.getElementById("piece4");
  var piece5 = document.getElementById("piece5");
  var piece6 = document.getElementById("piece6");
  var piece7 = document.getElementById("piece7");
  var piece8 = document.getElementById("piece8");
  var piece9 = document.getElementById("piece9");
  var piece10 = document.getElementById("piece10");
  var piece11 = document.getElementById("piece11");
  var piece12 = document.getElementById("piece12");
  var piece13 = document.getElementById("piece13");
  var piecestep1 = document.getElementById("step1");
  var piecestep2 = document.getElementById("step2");
  var piecestep3 = document.getElementById("step3");
  var piecestep4 = document.getElementById("step4");
  var piecestep5 = document.getElementById("step5");
  var piecestep6 = document.getElementById("step6");
  var piecestep7 = document.getElementById("step7");
  var piecestep8 = document.getElementById("step8");
  var piecestep9 = document.getElementById("step9");
  var piecestep10 = document.getElementById("step10");
  var piecestep11 = document.getElementById("step11");
  var piecestep12 = document.getElementById("step12");
  var piecestep13 = document.getElementById("step13");
  var step1desc = document.getElementById("step1desc");
  var step2desc = document.getElementById("step2desc");
  var step3desc = document.getElementById("step3desc");
  var step4desc = document.getElementById("step4desc");
  var step5desc = document.getElementById("step5desc");
  var step6desc = document.getElementById("step6desc");
  var step7desc = document.getElementById("step7desc");
  var step8desc = document.getElementById("step8desc");
  var step9desc = document.getElementById("step9desc");
  var step10desc = document.getElementById("step10desc");
  var step11desc = document.getElementById("step11desc");
  var step12desc = document.getElementById("step12desc");
  var step13desc = document.getElementById("step13desc");
  var textfield = document.querySelector("#textfield");
  var planImg = document.getElementById('plan');
  var doImg = document.getElementById('do');
  var checkImg = document.getElementById('check');
  var actImg = document.getElementById('act');
  var prevButton = document.querySelector('.prev');
  var nextButton = document.querySelector('.next');
  var currLevel = document.querySelector('.page');
  var active = document.querySelector(".active");

  function adminWheelScreen() {

  	TweenMax.to(active, 1.5, { css:{scaleX: 1, scaleY: 1, opacity: 1, zIndex: 5}, delay: 0.5 });
  	TweenMax.to(overlay1, 1.5, { css:{opacity: 0.3, zIndex: 3}, delay: 0.5 });

  	TweenMax.to(innercircle, 1, { css:{ scaleX: 1, scaleY: 1 }, delay: 0.5 });

  	TweenMax.to(midWheel, 1, { css:{ scaleX: 1, scaleY: 1 }, delay: 1 });
  	TweenMax.to(midWheel, 1, { css:{ top: 0, bottom: 0, right: 0, margin: "auto", zIndex: 3 }, ease: Cubic.ease });

  	TweenMax.to(planImg, 1, {opacity: 1, delay: 2 });
  	TweenMax.to(doImg, 1, {opacity: 1, delay: 2.2 });
  	TweenMax.to(checkImg, 1, {opacity: 1, delay: 2.5 });
  	TweenMax.to(actImg, 1, {opacity: 1, delay: 2.7 });

  	TweenMax.to(midWheel, 1, {opacity: 1, delay: 2});
  	TweenMax.to(midWheel, 2, {rotation: 360, delay: 1.5, ease: Circ.easeOut });

  	TweenMax.to(innerWheel, 1, {opacity: 1, delay: 1});
  	TweenMax.to(innerWheel, 2, { css:{scaleX: 1, scaleY: 1}, delay: 0.5 });
  	TweenMax.to(innerWheel, 1.5, { css:{ bottom: 0, left: 0, right: 0, margin: "auto", zIndex: 3}, ease: Cubic.ease });

  	TweenMax.to([piece1, piecestep1], 1, {opacity: 1, delay: 1 });
  	TweenMax.to([piece2, piecestep2], 1, {opacity: 1, delay: 1.15 });
  	TweenMax.to([piece3, piecestep3], 1, {opacity: 1, delay: 1.3 });
  	TweenMax.to([piece4, piecestep4], 1, {opacity: 1, delay: 1.45 });
  	TweenMax.to([piece5, piecestep5], 1, {opacity: 1, delay: 1.6 });
  	TweenMax.to([piece6, piecestep6], 1, {opacity: 1, delay: 1.75 });
  	TweenMax.to([piece7, piecestep7], 1, {opacity: 1, delay: 1.9 });
  	TweenMax.to([piece8, piecestep8], 1, {opacity: 1, delay: 2.15 });
  	TweenMax.to([piece9, piecestep9], 1, {opacity: 1, delay: 2.3 });
  	TweenMax.to([piece10, piecestep10], 1, {opacity: 1, delay: 2.45 });
  	TweenMax.to([piece11, piecestep11], 1, {opacity: 1, delay: 2.6 });
  	TweenMax.to([piece12, piecestep12], 1, {opacity: 1, delay: 2.75 });
  	TweenMax.to([piece13, piecestep13], 1, {opacity: 1, delay: 2.9 });
  }

  window.addEventListener("load", adminWheelScreen, false);
})();
