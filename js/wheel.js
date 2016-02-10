var stem, stick, leave, botLeaf, bud, white, active, title;

var base_url = 'http://localhost:8888/sustainability-toolkit/';

var criteria = new Array(["Environment","environment",0,"1","colour1"],["Community","community",100,"2","colour2"],["Operating Practices","operatingPractices",50,"3","colour3"],["Products & Services","productsServices",10,"4","colour4"]);
var metrics = new Array(["0","community","colour1"],["20","environment","colour2"],["50","community","colour1"],["18","operatingPractices","colour3"],["100","productsServices","colour4"],["75","operatingPractices","colour3"],["80","operatingPractices","colour3"],["35","productsServices","colour4"],["25","environment","colour2"],["10","environment","colour2"],["46","community","colour1"],["64","productsServices","colour4"]);
var steps = new Array(["1"],["2"],["3"],["4"],["5"],["6"],["7"],["8"],["9"],["10"],["11"],["12"],["13"]);
var environmentMetrics = ["Air Emissions", "Biodiversity", "Energy", "Greenhouse Gas (GHG) Emissions", "Hazardous Substances", "Materials", "Waste", "Water", "Other Considerations"];
var communityMetrics = ["Stakeholder Engagement", "Community Development", "Philanthropy", "Volunteerism"];
var opMetrics = ["Diversity and Equal Opportunity", "Employment", "Ethics", "Human Rights", "Labor Relations", "Occupational Health and Safety", "Training and Education"];
var pnsMetrics = ["Consumer Health & Safety", "Life Cycle Considerations", "Responsible Sourcing", "Supplier Engagement"];
var stepsA = ['Identify stakeholders and assess their sustainability priorities:<br>• Stakeholder needs<br>• Benchmark', "Assess and prioritize risk of each criteria and define / identify relevant metrics", "Establish baseline for each metric", "Develop supporting policies for each criteria", "Develop action plan for all / each criteria and / or metric and set targets", "Implement processes / procedures for each sustainability metric, assigning responsibility and authority", "Implement communication / training to support processes for each sustainability metric", "Monitor metrics / indicators", "Audit policies, plans, procedures and self-correct", "Report results of objectives / plans, performance and audits internally to senior management", "Influence supply chain by advising of your policies and procedures and encourage their participation in similar programs", "Report results to stakeholders via website, CSR / investor reports, community engagement, etc.", "Internal / External Recognition"];

var objSteps = {
					levelA: [
						   		{
						   			stepNum: "1",
						   			step: "Identify stakeholders and assess their sustainability priorities:<br>• Stakeholder needs<br>• Benchmark"
						   		},
						   		{
						   			stepNum: "2",
						   			step: "Assess and prioritize risk of each criteria and define / identify relevant metrics"
						   		},
						   		{
						   			stepNum: "3",
						   			step: "Establish baseline for each metric"
						   		},
						   		{
						   			stepNum: "4",
						   			step: "Develop supporting policies for each criteria"
						   		},
						   		{
						   			stepNum: "5",
						   			step: "Develop action plan for all / each criteria and / or metric and set targets"
						   		},
						   		{
						   			stepNum: "6",
						   			step: "Implement processes / procedures for each sustainability metric, assigning responsibility and authority"
						   		},
						   		{
						   			stepNum: "7",
						   			step: "Implement communication / training to support processes for each sustainability metric"
						   		},
						   		{
						   			stepNum: "8",
						   			step: "Monitor metrics / indicators"
						   		},
						   		{
						   			stepNum: "9",
						   			step: "Audit policies, plans, procedures and self-correct"
						   		},
						   		{
						   			stepNum: "10",
						   			step: "Report results of objectives / plans, performance and audits internally to senior management"
						   		},
						   		{
						   			stepNum: "11",
						   			step: "Influence supply chain by advising of your policies and procedures and encourage their participation in similar programs"
						   		},
						   		{
						   			stepNum: "12",
						   			step: "Report results to stakeholders via website, CSR / investor reports, community engagement, etc."
						   		},
						   		{
						   			stepNum: "13",
						   			step: "Internal / External Recognition"
						   		}
						   ],

					levelAA:   [
						   		{
						   			stepNum: "14",
						   			step: "Review the following on a regular basis:<br>• Relevance of stakeholders<br>• Sustainability priorities of stakeholders<br>• Benchmarking assessment"
						   		},
						   		{
						   			stepNum: "15",
						   			step: "Assessment and prioritization of risk is regularly reviewed and revised as necessary"
						   		},
						   		{
						   			stepNum: "16",
						   			step: "Regular re-evaluation of metrics to ensure relevant risks are being addressed"
						   		},
						   		{
						   			stepNum: "17",
						   			step: "Policies are reviewed regularly and updated as required"
						   		},
						   		{
						   			stepNum: "18",
						   			step: "Regular review and update of Action Plan"
						   		},
						   		{
						   			stepNum: "19",
						   			step: "Processes / procedures are reviewed for accuracy and updated as required"
						   		},
						   		{
						   			stepNum: "20",
						   			step: "Formal assessments of core competency are conducted on a regular basis"
						   		},
						   		{
						   			stepNum: "21",
						   			step: "Performance reviewed regularly and programs developed / adjusted to ensure attainment of targets"
						   		},
						   		{
						   			stepNum: "22",
						   			step: "Audits are carried out annually and an audit programme developed"
						   		},
						   		{
						   			stepNum: "23",
						   			step: "Management of criteria / metrics have been integrated into formal business planning and reporting"
						   		},
						   		{
						   			stepNum: "24",
						   			step: "Request relevant sustainability information from suppliers"
						   		},
						   		{
						   			stepNum: "25",
						   			step: "Enhanced voluntary progress reporting through public corporate sustainability report or webpage"
						   		},
						   		{
						   			stepNum: "26",
						   			step: "Performance-based incentives (e.g. staff bonuses) in place to recognize progress"
						   		}
						   ],

					levelAAA:   [
						   		{
						   			stepNum: "27",
						   			step: "Procedures are in place to actively and regularly engage with stakeholders and consider their interests in decision-making"
						   		},
						   		{
						   			stepNum: "28",
						   			step: "Metrics that incorporate the life cycle impacts of products and/or services are identified and managed through engagement with suppliers and other value chain components"
						   		},
						   		{
						   			stepNum: "29",
						   			step: "Baseline data is established for the life cycle impacts of products and/or services through engagement with suppliers and other value chain components"
						   		},
						   		{
						   			stepNum: "30",
						   			step: "Corporate policies are communicated to major suppliers as a requirement that must be adopted and monitored accordingly"
						   		},
						   		{
						   			stepNum: "31",
						   			step: "Action plan incorporates processes to manage the life cycle impacts of products and/or services"
						   		},
						   		{
						   			stepNum: "32",
						   			step: "Support is provided to suppliers developing processes to manage relevant sustainability metrics"
						   		},
						   		{
						   			stepNum: "33",
						   			step: "• Staff are provided with continuing education opportunities to increase skills and competency<br>• Education of value chain on sustainability issues"
						   		},
						   		{
						   			stepNum: "34",
						   			step: "Performance targets are aligned with industry sector leaders"
						   		},
						   		{
						   			stepNum: "35",
						   			step: "Systems are externally audited / certified"
						   		},
						   		{
						   			stepNum: "36",
						   			step: "Life cycle impacts of products and/or services are a consideration in business planning decisions of senior management"
						   		},
						   		{
						   			stepNum: "37",
						   			step: "• Integrate supplier sustainability performance into purchasing decisions<br>• Audit supplier to confirm sustainability information"
						   		},
						   		{
						   			stepNum: "38",
						   			step: "• Results are reported through public sustainability reporting programs (e.g. Carbon Disclosure Project, GRI)<br>• External assurance of reporting"
						   		},
						   		{
						   			stepNum: "39",
						   			step: "Recognition from external organizations (e.g. government agency programs, associations, community organizations, NGOs, etc.)"
						   		}
						   ]
				}

var overlay1 = document.querySelector(".overlay1");
var overlay2 = document.querySelector(".overlay2");
var exitWheel = document.getElementById("exitWheel");
var topHolder = document.getElementById("mainHeader");
var topTitle = document.getElementById("title");
var metricHolder = document.getElementById("metricHolder");
var head = document.querySelector("#head");
var percent = document.querySelector("#percentage");
var titleText = document.querySelector("#text");
var titleBG = document.querySelector("#metricHeader");
var titleHeader = document.querySelector("#metricHeader h2");
var titleMetric = document.querySelector("#metricHeader h3");
var metricList = document.querySelector("#metrics");
var theMetrics = document.querySelectorAll("#metrics li a");
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
var homecontent = document.querySelector("#homecontent");
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
var addMetricInput = document.querySelector('#addMetric input');
var addMetricButton = document.querySelector('#addMetric button');

var randTopPos = Math.floor(Math.random()*200+250);
var randScale = Math.random()*0.35+0.35;
var leafPos = 20;
var growBud;
var unsaved = false;

var budTL = new TimelineMax();
var whiteTL = new TimelineMax();
var hide = new TimelineMax();
var hideStem = new TimelineMax();
var hideLeaves = new TimelineMax();
var hideTitle = new TimelineMax();

var w = window.innerWidth;
var h = window.innerHeight;

function init() {
	var flowerHolder = document.getElementById("flowers");
	var metricFlowers = document.querySelector("#metricFlowers");

	exitWheel.addEventListener("click", grow, false);

	step1desc.addEventListener("mouseover", function() {
		textfield.innerHTML = "Assess Stakeholder Priorities and Benchmark";
		TweenMax.to(textfield, 0.5, { css:{opacity: 1}});
	}, false);

	step1desc.addEventListener("mouseout", function() {
		TweenMax.to(textfield, 0.5, { css:{opacity: 0}});
	}, false);

	step1desc.addEventListener("click", function() {
		i = "1. Assess Stakeholder Priorities and Benchmark";
		switch(currLevel.innerHTML){
			case "A":
				d = objSteps["levelA"][0]["step"];
				s = objSteps["levelA"][0]["stepNum"];
				break;
			case "AA":
				d = objSteps["levelAA"][0]["step"];
				s = objSteps["levelAA"][0]["stepNum"];
				break;
			case "AAA":
				d = objSteps["levelAAA"][0]["step"];
				s = objSteps["levelAAA"][0]["stepNum"];
				break;
		}
		n = 0;
		showForm(i, d, n, s); // Reveals and populates the form with information from the database depending on stored variables
	}, false);

	step2desc.addEventListener("mouseover", function() {
		textfield.innerHTML = "Prioritize Risk and Define Material Metrics";
		TweenMax.to(textfield, 0.5, { css:{opacity: 1}});
	}, false);

	step2desc.addEventListener("mouseout", function() {
		TweenMax.to(textfield, 0.5, { css:{opacity: 0}});
	}, false);

	step2desc.addEventListener("click", function() {
		i = "2. Prioritize Risk and Define Material Metrics";
		switch(currLevel.innerHTML){
			case "A":
				d = objSteps["levelA"][1]["step"];
				s = objSteps["levelA"][1]["stepNum"];
				break;
			case "AA":
				d = objSteps["levelAA"][1]["step"];
				s = objSteps["levelAA"][1]["stepNum"];
				break;
			case "AAA":
				d = objSteps["levelAAA"][1]["step"];
				s = objSteps["levelAAA"][1]["stepNum"];
				break;
		}
		n = 1;
		showForm(i, d, n, s);
	}, false);

	step3desc.addEventListener("mouseover", function() {
		textfield.innerHTML = "Establish Baseline";
		TweenMax.to(textfield, 0.5, { css:{opacity: 1}});
	}, false);

	step3desc.addEventListener("mouseout", function() {
		TweenMax.to(textfield, 0.5, { css:{opacity: 0}});
	}, false);

	step3desc.addEventListener("click", function() {
		i = "3. Establish Baseline";
		switch(currLevel.innerHTML){
			case "A":
				d = objSteps["levelA"][2]["step"];
				s = objSteps["levelA"][2]["stepNum"];
				break;
			case "AA":
				d = objSteps["levelAA"][2]["step"];
				s = objSteps["levelAA"][2]["stepNum"];
				break;
			case "AAA":
				d = objSteps["levelAAA"][2]["step"];
				s = objSteps["levelAAA"][2]["stepNum"];
				break;
		}
		n = 2;
		showForm(i, d, n, s);
	}, false);

	step4desc.addEventListener("mouseover", function() {
		textfield.innerHTML = "Develop Supporting Policies";
		TweenMax.to(textfield, 0.5, { css:{opacity: 1}});
	}, false);

	step4desc.addEventListener("mouseout", function() {
		TweenMax.to(textfield, 0.5, { css:{opacity: 0}});
	}, false);

	step4desc.addEventListener("click", function() {
		i = "4. Develop Supporting Policies";
		switch(currLevel.innerHTML){
			case "A":
				d = objSteps["levelA"][3]["step"];
				s = objSteps["levelA"][3]["stepNum"];
				break;
			case "AA":
				d = objSteps["levelAA"][3]["step"];
				s = objSteps["levelAA"][3]["stepNum"];
				break;
			case "AAA":
				d = objSteps["levelAAA"][3]["step"];
				s = objSteps["levelAAA"][3]["stepNum"];
				break;
		}
		n = 3;
		showForm(i, d, n, s);
	}, false);

	step5desc.addEventListener("mouseover", function() {
		textfield.innerHTML = "Develop Action Plan";
		TweenMax.to(textfield, 0.5, { css:{opacity: 1}});
	}, false);

	step5desc.addEventListener("mouseout", function() {
		TweenMax.to(textfield, 0.5, { css:{opacity: 0}});
	}, false);

	step5desc.addEventListener("click", function() {
		i = "5. Develop Action Plan";
		switch(currLevel.innerHTML){
			case "A":
				d = objSteps["levelA"][4]["step"];
				s = objSteps["levelA"][4]["stepNum"];
				break;
			case "AA":
				d = objSteps["levelAA"][4]["step"];
				s = objSteps["levelAA"][4]["stepNum"];
				break;
			case "AAA":
				d = objSteps["levelAAA"][4]["step"];
				s = objSteps["levelAAA"][4]["stepNum"];
				break;
		}
		n = 4;
		showForm(i, d, n, s);
	}, false);

	step6desc.addEventListener("mouseover", function() {
		textfield.innerHTML = "Implement Processes/ Procedures";
		TweenMax.to(textfield, 0.5, { css:{opacity: 1}});
	}, false);

	step6desc.addEventListener("mouseout", function() {
		TweenMax.to(textfield, 0.5, { css:{opacity: 0}});
	}, false);

	step6desc.addEventListener("click", function() {
		i = "6. Implement Processes/Procedures";
		switch(currLevel.innerHTML){
			case "A":
				d = objSteps["levelA"][5]["step"];
				s = objSteps["levelA"][5]["stepNum"];
				break;
			case "AA":
				d = objSteps["levelAA"][5]["step"];
				s = objSteps["levelAA"][5]["stepNum"];
				break;
			case "AAA":
				d = objSteps["levelAAA"][5]["step"];
				s = objSteps["levelAAA"][5]["stepNum"];
				break;
		}
		n = 5;
		showForm(i, d, n, s);
	}, false);

	step7desc.addEventListener("mouseover", function() {
		textfield.innerHTML = "Training and Competency Development";
		TweenMax.to(textfield, 0.5, { css:{opacity: 1}});
	}, false);

	step7desc.addEventListener("mouseout", function() {
		TweenMax.to(textfield, 0.5, { css:{opacity: 0}});
	}, false);

	step7desc.addEventListener("click", function() {
		i = "7. Training and Competency Development";
		switch(currLevel.innerHTML){
			case "A":
				d = objSteps["levelA"][6]["step"];
				s = objSteps["levelA"][6]["stepNum"];
				break;
			case "AA":
				d = objSteps["levelAA"][6]["step"];
				s = objSteps["levelAA"][6]["stepNum"];
				break;
			case "AAA":
				d = objSteps["levelAAA"][6]["step"];
				s = objSteps["levelAAA"][6]["stepNum"];
				break;
		}
		n = 6;
		showForm(i, d, n, s);
	}, false);

	step8desc.addEventListener("mouseover", function() {
		textfield.innerHTML = "Monitor Performance";
		TweenMax.to(textfield, 0.5, { css:{opacity: 1}});
	}, false);

	step8desc.addEventListener("mouseout", function() {
		TweenMax.to(textfield, 0.5, { css:{opacity: 0}});
	}, false);

	step8desc.addEventListener("click", function() {
		i = "8. Monitor Performance";
		switch(currLevel.innerHTML){
			case "A":
				d = objSteps["levelA"][7]["step"];
				s = objSteps["levelA"][7]["stepNum"];
				break;
			case "AA":
				d = objSteps["levelAA"][7]["step"];
				s = objSteps["levelAA"][7]["stepNum"];
				break;
			case "AAA":
				d = objSteps["levelAAA"][7]["step"];
				s = objSteps["levelAAA"][7]["stepNum"];
				break;
		}
		n = 7;
		showForm(i, d, n, s);
	}, false);

	step9desc.addEventListener("mouseover", function() {
		textfield.innerHTML = "Audit Procedures and Self-Correct";
		TweenMax.to(textfield, 0.5, { css:{opacity: 1}});
	}, false);

	step9desc.addEventListener("mouseout", function() {
		TweenMax.to(textfield, 0.5, { css:{opacity: 0}});
	}, false);

	step9desc.addEventListener("click", function() {
		i = "9. Audit and Self-Correct";
		switch(currLevel.innerHTML){
			case "A":
				d = objSteps["levelA"][8]["step"];
				s = objSteps["levelA"][8]["stepNum"];
				break;
			case "AA":
				d = objSteps["levelAA"][8]["step"];
				s = objSteps["levelAA"][8]["stepNum"];
				break;
			case "AAA":
				d = objSteps["levelAAA"][8]["step"];
				s = objSteps["levelAAA"][8]["stepNum"];
				break;
		}
		n = 8;
		showForm(i, d, n, s);
	}, false);

	step10desc.addEventListener("mouseover", function() {
		textfield.innerHTML = "Report to Management for Continual Improvement";
		TweenMax.to(textfield, 0.5, { css:{opacity: 1}});
	}, false);

	step10desc.addEventListener("mouseout", function() {
		TweenMax.to(textfield, 0.5, { css:{opacity: 0}});
	}, false);

	step10desc.addEventListener("click", function() {
		i = "10. Report to Management for Continual Improvement";
		switch(currLevel.innerHTML){
			case "A":
				d = objSteps["levelA"][9]["step"];
				s = objSteps["levelA"][9]["stepNum"];
				break;
			case "AA":
				d = objSteps["levelAA"][9]["step"];
				s = objSteps["levelAA"][9]["stepNum"];
				break;
			case "AAA":
				d = objSteps["levelAAA"][9]["step"];
				s = objSteps["levelAAA"][9]["stepNum"];
				break;
		}
		n = 9;
		showForm(i, d, n, s);
	}, false);

	step11desc.addEventListener("mouseover", function() {
		textfield.innerHTML = "Influence Value Chain";
		TweenMax.to(textfield, 0.5, { css:{opacity: 1}});
	}, false);

	step11desc.addEventListener("mouseout", function() {
		TweenMax.to(textfield, 0.5, { css:{opacity: 0}});
	}, false);

	step11desc.addEventListener("click", function() {
		i = "11. Influence Value Chain";
		switch(currLevel.innerHTML){
			case "A":
				d = objSteps["levelA"][10]["step"];
				s = objSteps["levelA"][10]["stepNum"];
				break;
			case "AA":
				d = objSteps["levelAA"][10]["step"];
				s = objSteps["levelAA"][10]["stepNum"];
				break;
			case "AAA":
				d = objSteps["levelAAA"][10]["step"];
				s = objSteps["levelAAA"][10]["stepNum"];
				break;
		}
		n = 10;
		showForm(i, d, n, s);
	}, false);

	step12desc.addEventListener("mouseover", function() {
		textfield.innerHTML = "Report to Stakeholders";
		TweenMax.to(textfield, 0.5, { css:{opacity: 1}});
	}, false);

	step12desc.addEventListener("mouseout", function() {
		TweenMax.to(textfield, 0.5, { css:{opacity: 0}});
	}, false);

	step12desc.addEventListener("click", function() {
		i = "12. Report to Stakeholders";
		switch(currLevel.innerHTML){
			case "A":
				d = objSteps["levelA"][11]["step"];
				s = objSteps["levelA"][11]["stepNum"];
				break;
			case "AA":
				d = objSteps["levelAA"][11]["step"];
				s = objSteps["levelAA"][11]["stepNum"];
				break;
			case "AAA":
				d = objSteps["levelAAA"][11]["step"];
				s = objSteps["levelAAA"][11]["stepNum"];
				break;
		}
		n = 11;
		showForm(i, d, n, s);
	}, false);

	step13desc.addEventListener("mouseover", function() {
		textfield.innerHTML = "Recognition";
		TweenMax.to(textfield, 0.5, { css:{opacity: 1}});
	}, false);

	step13desc.addEventListener("mouseout", function() {
		TweenMax.to(textfield, 0.5, { css:{opacity: 0}});
	}, false);

	step13desc.addEventListener("click", function() {
		i = "13. Recognition";
		switch(currLevel.innerHTML){
			case "A":
				d = objSteps["levelA"][12]["step"];
				s = objSteps["levelA"][12]["stepNum"];
				break;
			case "AA":
				d = objSteps["levelAA"][12]["step"];
				s = objSteps["levelAA"][12]["stepNum"];
				break;
			case "AAA":
				d = objSteps["levelAAA"][12]["step"];
				s = objSteps["levelAAA"][12]["stepNum"];
				break;
		}
		n = 12;
		showForm(i, d, n, s);
	}, false);

	for(i=0; i < metrics.length; i++) {

		baseList = document.createElement("li");
		switch(metrics[i][2]) {
			case "colour1":
				baseList.setAttribute("class", "green");
				break;

			case "colour2":
				baseList.setAttribute("class", "orange");
				break;

			case "colour3":
				baseList.setAttribute("class", "blue");
				break;

			case "colour4":
				baseList.setAttribute("class", "yellow");
				break;
		}

		baseHolder = document.createElement("div");
		baseHolder.setAttribute("class","mstem");
		//baseHolder.style.marginTop = randTopPos+"px";

		budHolder = document.createElement("img");
		budHolder.setAttribute("class","mbud");
		budHolder.src = base_url + "images/bud.png";

		whiteHolder = document.createElement("div");
		whiteHolder.setAttribute("class","mwhite");
		whiteHolder.setAttribute("id",metrics[i][2]); // sets colour of background flowers

		stickHolder = document.createElement("img");
		stickHolder.setAttribute("class","mstick");
		stickHolder.src = base_url + "images/stem.png";

		baseHolder.appendChild(budHolder);
		baseHolder.appendChild(whiteHolder);
		baseHolder.appendChild(stickHolder);
		baseList.appendChild(baseHolder);
		metricFlowers.appendChild(baseList);
	}

	// Background flower variables
	mbud = document.querySelectorAll(".mbud");
	mwhite = document.querySelectorAll(".mwhite");
	mstick = document.querySelectorAll(".mstick");
	mstem = document.querySelectorAll(".mstem");

	// Groups flowers together depending on their colour and moves them behind matching criteria flower
	var greenCluster = document.querySelectorAll(".green");
		for(i=0; i<greenCluster.length; i++){
			greenCluster[i].style.left = (Math.ceil(Math.random()*30))+"%";
			greenCluster[i].style.marginTop = 55 + "px";
		}

	var orangeCluster = document.querySelectorAll(".orange");
		for(i=0; i<orangeCluster.length; i++){
			orangeCluster[i].style.left = (Math.ceil(Math.random()*30)+20)+"%";
			orangeCluster[i].style.marginTop = 40 + "px";
		}

	var blueCluster = document.querySelectorAll(".blue");
		for(i=0; i<blueCluster.length; i++){
			blueCluster[i].style.left = (Math.floor(Math.random()*30)+40)+"%";
			blueCluster[i].style.marginTop = 20 + "px";
		}

	var yellowCluster = document.querySelectorAll(".yellow");
		for(i=0; i<yellowCluster.length; i++){
			yellowCluster[i].style.left = (Math.floor(Math.random()*30)+60)+"%";
		}

	for(i=0; i < mbud.length; i++) {

		for(a=0; a < metrics.length; a++) {
			sub = metrics[i][0];
		}
		if(sub >= 0 && sub < 10) {
			TweenMax.to(mbud[i], 1, { css:{scaleX: 0.6, scaleY: 0.6} });
			//var randTopPos = Math.floor(140);
			//mbud[i].style.marginTop = randTopPos+"px";
			TweenMax.to(mbud[i], 1, { css: {opacity: 0.2}, delay: 1 });
			TweenMax.to(mstick[i], 1, { css: {opacity: 0.2}, delay: 1});
			mbud[i].style.marginTop = 30+"px";
		}
		if(sub >= 10 && sub < 20) {
			TweenMax.to(mbud[i], 1, { css:{scaleX: 0.625, scaleY: 0.625} });
			//var randTopPos = Math.floor(150);
			//mbud[i].style.marginTop = randTopPos+"px";
			TweenMax.to(mbud[i], 1, { css: {opacity: 0.25}, delay: 1 });
			TweenMax.to(mstick[i], 1, { css: {opacity: 0.25}, delay: 1});
			mbud[i].style.marginTop = 27+"px";
		}
		if(sub >= 20 && sub < 30) {
			TweenMax.to(mbud[i], 1, { css:{scaleX: 0.65, scaleY: 0.65} });
			//var randTopPos = Math.floor(160);
			//mbud[i].style.marginTop = randTopPos+"px";
			TweenMax.to(mbud[i], 1, { css: {opacity: 0.3}, delay: 1 });
			TweenMax.to(mstick[i], 1, { css: {opacity: 0.3}, delay: 1});
			mbud[i].style.marginTop = 24+"px";
		}
		if(sub >= 30 && sub < 40) {
			TweenMax.to(mbud[i], 1, { css:{scaleX: 0.675, scaleY: 0.675} });
			//var randTopPos = Math.floor(170);
			//mbud[i].style.marginTop = randTopPos+"px";
			TweenMax.to(mbud[i], 1, { css: {opacity: 0.35}, delay: 1 });
			TweenMax.to(mstick[i], 1, { css: {opacity: 0.35}, delay: 1});
			mbud[i].style.marginTop = 21+"px";
		}
		if(sub >= 40 && sub < 50) {
			TweenMax.to(mbud[i], 1, { css:{scaleX: 0.7, scaleY: 0.7} });
			//var randTopPos = Math.floor(180);
			//mbud[i].style.marginTop = randTopPos+"px";
			TweenMax.to(mbud[i], 1, { css: {opacity: 0.4}, delay: 1 });
			TweenMax.to(mstick[i], 1, { css: {opacity: 0.4}, delay: 1});
			mbud[i].style.marginTop = 18+"px";
		}
		if(sub >= 50 && sub < 60) {
			TweenMax.to(mbud[i], 1, { css:{scaleX: 0.725, scaleY: 0.725} });
			//var randTopPos = Math.floor(190);
			//mbud[i].style.marginTop = randTopPos+"px";
			TweenMax.to(mbud[i], 1, { css: {opacity: 0.45}, delay: 1 });
			TweenMax.to(mstick[i], 1, { css: {opacity: 0.45}, delay: 1});
			mbud[i].style.marginTop = 15+"px";
		}
		if(sub >= 60 && sub < 70) {
			TweenMax.to(mbud[i], 1, { css:{scaleX: 0.75, scaleY: 0.75} });
			//var randTopPos = Math.floor(200);
			//mbud[i].style.marginTop = randTopPos+"px";
			TweenMax.to(mbud[i], 1, { css: {opacity: 0.5}, delay: 1 });
			TweenMax.to(mstick[i], 1, { css: {opacity: 0.5}, delay: 1});
			mbud[i].style.marginTop = 12+"px";
		}
		if(sub >= 70 && sub < 80) {
			TweenMax.to(mbud[i], 1, { css:{scaleX: 0.775, scaleY: 0.775} });
			//var randTopPos = Math.floor(210);
			//mbud[i].style.marginTop = randTopPos+"px";
			TweenMax.to(mbud[i], 1, { css: {opacity: 0.55}, delay: 1 });
			TweenMax.to(mstick[i], 1, { css: {opacity: 0.55}, delay: 1});
			mbud[i].style.marginTop = 9+"px";
		}
		if(sub >= 80 && sub < 90) {
			TweenMax.to(mbud[i], 1, { css:{scaleX: 0.8, scaleY: 0.8} });
			//var randTopPos = Math.floor(220);
			//mbud[i].style.marginTop = randTopPos+"px";
			TweenMax.to(mbud[i], 1, { css: {opacity: 0.6}, delay: 1 });
			TweenMax.to(mstick[i], 1, { css: {opacity: 0.6}, delay: 1});
			mbud[i].style.marginTop = 6+"px";
		}
		if(sub >= 90 && sub < 100) {
			TweenMax.to(mbud[i], 1, { css:{scaleX: 0.825, scaleY: 0.825} });
			//var randTopPos = Math.floor(230);
			//mbud[i].style.marginTop = randTopPos+"px";
			TweenMax.to(mbud[i], 1, { css: {opacity: 0.65}, delay: 1 });
			TweenMax.to(mstick[i], 1, { css: {opacity: 0.65}, delay: 1});
			mbud[i].style.marginTop = 3+"px";
		}
		if(sub == 100) {
			TweenMax.to(mbud[i], 1, { css:{scaleX: 0.85, scaleY: 0.85} });
			//var randTopPos = Math.floor(240);
			//mbud[i].style.marginTop = randTopPos+"px";
			TweenMax.to(mbud[i], 1, { css: {opacity: 0.7}, delay: 1 });
			TweenMax.to(mstick[i], 1, { css: {opacity: 0.7}, delay: 1});
			//baseHolder.style.marginTop = randTopPos+"px";
		}
	}

	for(i=0; i < mwhite.length; i++) {
		for(a=0; a < metrics.length; a++) {
			sub = metrics[i][0];
		}
		if(sub >= 0 && sub < 10) {
			TweenMax.to(mwhite[i], 1, { css:{scaleX: 0.6, scaleY: 0.6} });
		}
		if(sub >= 10 && sub < 20) {
			TweenMax.to(mwhite[i], 1, { css:{scaleX: 0.625, scaleY: 0.625} });
		}
		if(sub >= 20 && sub < 30) {
			TweenMax.to(mwhite[i], 1, { css:{scaleX: 0.65, scaleY: 0.65} });
		}
		if(sub >= 30 && sub < 40) {
			TweenMax.to(mwhite[i], 1, { css:{scaleX: 0.675, scaleY: 0.675} });
		}
		if(sub >= 40 && sub < 50) {
			TweenMax.to(mwhite[i], 1, { css:{scaleX: 0.7, scaleY: 0.7} });
		}
		if(sub >= 50 && sub < 60) {
			TweenMax.to(mwhite[i], 1, { css:{scaleX: 0.725, scaleY: 0.725} });
		}
		if(sub >= 60 && sub < 70) {
			TweenMax.to(mwhite[i], 1, { css:{scaleX: 0.75, scaleY: 0.75} });
		}
		if(sub >= 70 && sub < 80) {
			TweenMax.to(mwhite[i], 1, { css:{scaleX: 0.775, scaleY: 0.775} });
		}
		if(sub >= 80 && sub < 90) {
			TweenMax.to(mwhite[i], 1, { css:{scaleX: 0.8, scaleY: 0.8} });
		}
		if(sub >= 90 && sub < 100) {
			TweenMax.to(mwhite[i], 1, { css:{scaleX: 0.825, scaleY: 0.825} });
		}
		if(sub == 100) {
			TweenMax.to(mwhite[i], 1, { css:{scaleX: 0.85, scaleY: 0.85} });
		}
	}

	for(i=0; i < criteria.length; i++) {

		if(i == 0) {
			var moveLeft = 30;
		}
		if(i == 1) {
			var moveLeft = 45;
		}
		if(i == 2) {
			var moveLeft = 60;
		}
		if(i == 3) {
			var moveLeft = 75;
		}

		baseList = document.createElement("li");
		baseList.setAttribute("class", criteria[i][1]);

		baseHolder = document.createElement("div");
		baseHolder.setAttribute("class","stem");
		baseHolder.style.left = moveLeft+"%";

		budHolder = document.createElement("img");
		budHolder.setAttribute("class","bud " + criteria[i][2]);
		budHolder.setAttribute("id",criteria[i][1]);
		budHolder.src = base_url + "images/bud.png";
		budHolder.addEventListener("click", function() {
			a = this.id;
			console.log('bud clicked');
			wheelScreen();
			displayMetric(this.id);
		},false);

		whiteHolder = document.createElement("div");
		whiteHolder.setAttribute("class","white");
		whiteHolder.setAttribute("id",criteria[i][4]);

		stickHolder = document.createElement("img");
		stickHolder.setAttribute("class","stick");
		stickHolder.setAttribute("id",criteria[i][1]);
		stickHolder.src = base_url + "images/stem.png";
		stickHolder.style.height = 600+"px";
		stickHolder.addEventListener("click", function() {
			console.log('stick clicked');
			wheelScreen();
			displayMetric(this.id);
		},false);

		leafOne = document.createElement("img");
		leafOne.setAttribute("class","leaf");
		leafOne.src = base_url + "images/leaf.png";

		leafTwo = document.createElement("img");
		leafTwo.setAttribute("class","leaf");
		leafTwo.src = base_url + "images/leaf.png";

		leafThree = document.createElement("img");
		leafThree.setAttribute("class","leaf");
		leafThree.src = base_url + "images/leaf.png";

		leafFour = document.createElement("img");
		leafFour.setAttribute("class","leaf");
		leafFour.src = base_url + "images/leaf.png";

		nameLeaf = document.createElement("img");
		nameLeaf.setAttribute("class","botLeaf");
		nameLeaf.src = base_url + "images/leaf-bot.png";

		titleHolder = document.createElement("div");
		titleHolder.setAttribute("class","title");

		titleTextHolder = document.createElement("h2");
		titleTextHolder.setAttribute("class","text");
		titleTextHolder.setAttribute("criteria",criteria[i][3]);
		titleText = document.createTextNode(criteria[i][0]);

		titleTextHolder.appendChild(titleText);
		titleHolder.appendChild(titleTextHolder);
		baseHolder.appendChild(titleHolder);

		baseHolder.appendChild(leafOne);
		baseHolder.appendChild(leafTwo);
		baseHolder.appendChild(leafThree);
		baseHolder.appendChild(leafFour);

		baseHolder.appendChild(nameLeaf);

		baseHolder.appendChild(budHolder);
		baseHolder.appendChild(whiteHolder);
		baseHolder.appendChild(stickHolder);
		baseList.appendChild(baseHolder);
		flowerHolder.appendChild(baseList);
	}

	var criteriaSelect = document.querySelectorAll("#flowers li");
	[].forEach.call(criteriaSelect, function(el){
		//console.log(el);
		el.addEventListener("click", function(){
			swapHeaderBG(el)}, false);
	});

	leaves = document.querySelectorAll(".leaf");
	stick = document.querySelectorAll(".stick");
	botLeaf = document.querySelectorAll(".botLeaf");
	title = document.querySelectorAll(".title");
	bud = document.querySelectorAll(".bud");
	white = document.querySelectorAll(".white");
	stem = document.querySelectorAll(".stem");
	active = document.querySelector(".active");
	colour1 = document.querySelector("#colour1");
	colour2 = document.querySelector("#colour2");
	colour3 = document.querySelector("#colour3");
	colour4 = document.querySelector("#colour4");

	for(i=0; i < bud.length; i++) {
		for(a=0; a < criteria.length; a++) {
			sub = criteria[i][2];
		}
		if(sub >= 0 && sub < 10) {
			TweenMax.to(bud[i], 1, { css:{scaleX: 1, scaleY: 1} });
		}
		if(sub >= 10 && sub < 20) {
			TweenMax.to(bud[i], 1, { css:{scaleX: 1.5, scaleY: 1.5} });
		}
		if(sub >= 20 && sub < 30) {
			TweenMax.to(bud[i], 1, { css:{scaleX: 1.7, scaleY: 1.7} });
		}
		if(sub >= 30 && sub < 40) {
			TweenMax.to(bud[i], 1, { css:{scaleX: 1.9, scaleY: 1.9} });
		}
		if(sub >= 40 && sub < 50) {
			TweenMax.to(bud[i], 1, { css:{scaleX: 2.1, scaleY: 2.1} });
		}
		if(sub >= 50 && sub < 60) {
			TweenMax.to(bud[i], 1, { css:{scaleX: 2.3, scaleY: 2.3} });
		}
		if(sub >= 60 && sub < 70) {
			TweenMax.to(bud[i], 1, { css:{scaleX: 2.5, scaleY: 2.5} });
		}
		if(sub >= 70 && sub < 80) {
			TweenMax.to(bud[i], 1, { css:{scaleX: 2.7, scaleY: 2.7} });
		}
		if(sub >= 80 && sub < 90) {
			TweenMax.to(bud[i], 1, { css:{scaleX: 2.9, scaleY: 2.9} });
		}
		if(sub >= 90 && sub < 100) {
			TweenMax.to(bud[i], 1, { css:{scaleX: 3.1, scaleY: 3.1} });
		}
		if(sub == 100) {
			TweenMax.to(bud[i], 1, { css:{scaleX: 3.3, scaleY: 3.3} });
		}
	}

	for(i=0; i < white.length; i++) {
		for(a=0; a < criteria.length; a++) {
			sub = criteria[i][2];
		}
		if(sub >= 0 && sub < 10) {
			TweenMax.to(white[i], 1, { css:{scaleX: 1, scaleY: 1} });
		}
		if(sub >= 10 && sub < 20) {
			TweenMax.to(white[i], 1, { css:{scaleX: 1.5, scaleY: 1.5} });
		}
		if(sub >= 20 && sub < 30) {
			TweenMax.to(white[i], 1, { css:{scaleX: 1.7, scaleY: 1.7} });
		}
		if(sub >= 30 && sub < 40) {
			TweenMax.to(white[i], 1, { css:{scaleX: 1.9, scaleY: 1.9} });
		}
		if(sub >= 40 && sub < 50) {
			TweenMax.to(white[i], 1, { css:{scaleX: 2.1, scaleY: 2.1} });
		}
		if(sub >= 50 && sub < 60) {
			TweenMax.to(white[i], 1, { css:{scaleX: 2.3, scaleY: 2.3} });
		}
		if(sub >= 60 && sub < 70) {
			TweenMax.to(white[i], 1, { css:{scaleX: 2.5, scaleY: 2.5} });
		}
		if(sub >= 70 && sub < 80) {
			TweenMax.to(white[i], 1, { css:{scaleX: 2.7, scaleY: 2.7} });
		}
		if(sub >= 80 && sub < 90) {
			TweenMax.to(white[i], 1, { css:{scaleX: 2.9, scaleY: 2.9} });
		}
		if(sub >= 90 && sub < 100) {
			TweenMax.to(white[i], 1, { css:{scaleX: 3.1, scaleY: 3.1} });
		}
		if(sub == 100) {
			TweenMax.to(white[i], 1, { css:{scaleX: 3.3, scaleY: 3.3} });
		}
	}

	for(i=0; i < stem.length; i++) {
		if(i == 0) {
			var delay = 0.2;
		}
		if(i == 1) {
			var delay = 0.4;
		}
		if(i == 2) {
			var delay = 0.6;
		}
		if(i == 3) {
			var delay = 0.8;
		}
		TweenMax.to(stem[i], 1, { css: {bottom: "-250px"}, ease: Back.easeOut, delay: delay});
		TweenMax.to(title[i], 1, { css:{bottom: "50px"}, ease: Back.easeOut, delay:delay });

	}

	for(i=0; i < title.length; i++) {
		TweenMax.to(title[i], 0, { rotation: 270 });
		TweenMax.to(title[i], 0, { css:{opacity: 1}});
	}

	for(i=0; i < stick.length; i++) {
		TweenMax.to(stick[i], 0, { css: {scaleX: randScale} });
	}

	for (i=1; i < leaves.length; i++) {
		counter = Math.random()*2+5;
		var leavesSpot = leafPos*counter;
		TweenMax.to(leaves[i], 1, { css: {marginTop: leavesSpot+"px"}, ease: Back.easeOut});
	}

	for (i=0; i < botLeaf.length; i++) {
		if(i == 0) {
			var delay = 0.2;
		}
		if(i == 1) {
			var delay = 0.4;
		}
		if(i == 2) {
			var delay = 0.6;
		}
		if(i == 3) {
			var delay = 0.8;
		}
	}

	budTL.to(bud, 2, { css: {scaleX: 1, scaleY: 1}, delay: 1 });
	whiteTL.to(white, 2, { css: {scaleX: 0, scaleY: 0, opacity: 1}, delay: 1 });

	hide.to(stem, 1, {css: {bottom: "-700px"}, ease: Back.easeIn });
	hide.to(title, 1, {css: {bottom: "-300px"}, ease: Back.easeIn });

	budTL.pause();
	whiteTL.pause();
	hide.pause();

	TweenMax.to(active, 0, { css:{scaleX: 0, scaleY: 0} });

	TweenMax.to(midWheel, 0, { css:{scaleX: 0, scaleY: 0} });

	TweenMax.to(innercircle, 0, { css:{scaleY: 0, scaleY: 0} });

	TweenMax.to(innerWheel, 0, { css:{scaleX: 0, scaleY: 0} });
	TweenMax.to(innerWheel, 0, { css:{top: 0, bottom: 0, left: 0, right: 0, margin: "auto", zIndex: 0} });

	TweenMax.to(homecontent, 1.5, { css:{opacity: 1}, delay: 0.5 });
	TweenMax.to(topHolder, 1.5, { css:{opacity: 1}, delay: 0.5 });
	TweenMax.to(exitWheel, 0, { css:{ opacity: 0} });
}

// Changes the pie piece colour on the wheel when the correlating form information is accepted
function changeToColour() {
	unsaved = false;
	closePopUp();
	switch(i) {
		case "1. Assess Stakeholder Priorities and Benchmark":
			TweenMax.to(colpiece, 1.5, { css:{opacity: 0.3}, delay: 1 });
			break;
		case "2. Prioritize Risk and Define Material Metrics":
			TweenMax.to(colpiece2, 1.5, { css:{opacity: 0.3}, delay: 1 });
			break;
		case "3. Establish Baseline":
			TweenMax.to(colpiece3, 1.5, { css:{opacity: 0.3}, delay: 1 });
			break;
		case "4. Develop Supporting Policies":
			TweenMax.to(colpiece4, 1.5, { css:{opacity: 0.3}, delay: 1 });
			break;
		case "5. Develop Action Plan":
			TweenMax.to(colpiece5, 1.5, { css:{opacity: 0.3}, delay: 1 });
			break;
		case "6. Implement Processes/Procedures":
			TweenMax.to(colpiece6, 1.5, { css:{opacity: 0.3}, delay: 1 });
			break;
		case "7. Training and Competency Development":
			TweenMax.to(colpiece7, 1.5, { css:{opacity: 0.3}, delay: 1 });
			break;
		case "8. Monitor Performance":
			TweenMax.to(colpiece8, 1.5, { css:{opacity: 0.3}, delay: 1 });
			break;
		case "9. Audit and Self-Correct":
			TweenMax.to(colpiece9, 1.5, { css:{opacity: 0.3}, delay: 1 });
			break;
		case "10. Report to Management for Continual Improvement":
			TweenMax.to(colpiece10, 1.5, { css:{opacity: 0.3}, delay: 1 });
			break;
		case "11. Influence Value Chain":
			TweenMax.to(colpiece11, 1.5, { css:{opacity: 0.3}, delay: 1 });
			break;
		case "12. Report to Stakeholders":
			TweenMax.to(colpiece12, 1.5, { css:{opacity: 0.3}, delay: 1 });
			break;
		case "13. Recognition":
			TweenMax.to(colpiece13, 1.5, { css:{opacity: 0.3}, delay: 1 });
			break;
		default:
			console.log("Not quite.");
			break;
	}
}

// Reveals the landing page criteria flowers/closes the wheel
// IMPORTANT: this area holds front end css properties for many elements!!
function grow() {

	for(i=0; i < stem.length; i++) {
		if(i == 0) {
			var delay = 0.2;
		}
		if(i == 1) {
			var delay = 0.4;
		}
		if(i == 2) {
			var delay = 0.6;
		}
		if(i == 3) {
			var delay = 0.8;
		}
		TweenMax.to(stem[i], 1, { css: {bottom: "-250px"}, ease: Back.easeOut, delay: delay});
		TweenMax.to(title[i], 1, { css: {bottom: "50px"}, ease: Back.easeOut, delay: delay});
	}

	for (i=0; i < botLeaf.length; i++) {
		if(i == 0) {
			var delay = 0.2;
		}
		if(i == 1) {
			var delay = 0.4;
		}
		if(i == 2) {
			var delay = 0.6;
		}
		if(i == 3) {
			var delay = 0.8;
		}
		TweenMax.to(botLeaf[i], 1, { css: {bottom: "70px"}, ease: Back.easeOut, delay: delay});
	}

	TweenMax.to(active, 0.5, { css:{scaleX: 0, scaleY: 0, opacity: 0} });

	TweenMax.to(planImg, 0.3, {opacity: 0});
	TweenMax.to(doImg, 0.3, {opacity: 0});
	TweenMax.to(checkImg, 0.3, {opacity: 0});
	TweenMax.to(actImg, 0.3, {opacity: 0});

	TweenMax.to(midWheel, 1, { css:{scaleX: 0, scaleY: 0} });
	TweenMax.to(midWheel, 1, {rotation: 0, ease: Circ.easeOut});

	TweenMax.to(overlay1, 1, { css:{opacity: 0, zIndex: 0} });

	TweenMax.to([piece1, piecestep1], 0.3, {opacity: 0});
	TweenMax.to([piece2, piecestep2], 0.3, {opacity: 0});
	TweenMax.to([piece3, piecestep3], 0.3, {opacity: 0});
	TweenMax.to([piece4, piecestep4], 0.3, {opacity: 0});
	TweenMax.to([piece5, piecestep5], 0.3, {opacity: 0});
	TweenMax.to([piece6, piecestep6], 0.3, {opacity: 0});
	TweenMax.to([piece7, piecestep7], 0.3, {opacity: 0});
	TweenMax.to([piece8, piecestep8], 0.3, {opacity: 0});
	TweenMax.to([piece9, piecestep9], 0.3, {opacity: 0});
	TweenMax.to([piece10, piecestep10], 0.3, {opacity: 0});
	TweenMax.to([piece11, piecestep11], 0.3, {opacity: 0});
	TweenMax.to([piece12, piecestep12], 0.3, {opacity: 0});
	TweenMax.to([piece13, piecestep13], 0.3, {opacity: 0});

	TweenMax.to(innerWheel, 1, { css:{scaleX: 0, scaleY: 0} });
	TweenMax.to(innerWheel, 1, {rotation: 0, ease: Circ.easeOut});

	TweenMax.to(metricHolder, 0.5, { css:{ opacity: 0, zIndex: 0 } });
	TweenMax.to(homecontent, 1.5, { css:{opacity: 1}, delay: 0.5 });
	TweenMax.to(topHolder, 1.5, { css:{opacity: 1}, delay: 0.5 });
	TweenMax.to(exitWheel, 1, { css:{ opacity: 0} });
	TweenMax.to(metricFlowers, 1, { css: {opacity: 1}, delay: 1 });
}

// Reveals the wheel
// IMPORTANT: this area holds front end css properties for many elements!!
function wheelScreen() {
	hide.restart();

	TweenMax.to(metricFlowers, 1, { css: {opacity: 0}, delay: 0.5 });
	TweenMax.to(topHolder, 1.5, { css:{opacity: 0}, delay: 0.5 });
	TweenMax.to(homecontent, 1.5, { css:{opacity: 0}, delay: 0.5 });
	TweenMax.to(exitWheel, 1.5, { css:{ opacity: 1}, delay: 1 });

	TweenMax.to(botLeaf, 1.7, {css: {bottom: "-220px"}, ease: Back.easeInOut });

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

function displayMetric(e) {
	TweenMax.to(metricHolder, 1, { css:{ opacity: 1, zIndex: 4 }, delay: 1 });
}

// Animation for revealing the form and populates it with information from the database depending
// on selected criteria, metric, step
function showForm(i, d, n, s) {
	for(m=0; m<theMetrics.length; m++){
		if(theMetrics[m].classList.contains("selected")){
			var stepname = document.getElementById("stage");
			stepname.innerHTML = i;
			stepDesc.innerHTML = d;

			switchFormContent(s);

			TweenMax.to(pop, 0, { css:{ zIndex: 10} });
			TweenMax.to(pop, 1.5, { css:{ opacity: 1, scaleX: 1, scaleY: 1} });
			TweenMax.to(overlay2, 0, { css:{zIndex: 4} });
			TweenMax.to(overlay2, 1, { css:{opacity: 0.5} });

			changeLevel(n);
		}
	}
	alert("Please select a metric.");
	return false;
}

function popupstart() {
	pop = document.querySelector("#popup");
	link = document.querySelector("#link");
	alertMsg = document.querySelector("#alert");

	TweenMax.to(pop, 0, { css:{scaleX: 0, scaleY: 0} });

	close = document.querySelector("#close");
	close.addEventListener("click", closePopUp, false);
}

// Animation for closing the form
function closePopUp() {
	
	if(unsaved == true) {
		if(confirm("You are about to close the window without saving your changes. Do you want to continue?")) {
				TweenMax.to(pop, 1, {opacity: 0, scaleX: 0, scaleY: 0});
				TweenMax.to(pop, 0, { css:{ zIndex: 0}, delay: 1 });
				TweenMax.to(overlay2, 1, { css:{opacity: 0} });
				TweenMax.to(overlay2, 0, { css:{zIndex: 0}, delay: 1 });
				unsaved = false;
		}
	} else {
		TweenMax.to(pop, 1, {opacity: 0, scaleX: 0, scaleY: 0});
		TweenMax.to(pop, 0, { css:{ zIndex: 0}, delay: 1 });
		TweenMax.to(overlay2, 1, { css:{opacity: 0} });
		TweenMax.to(overlay2, 0, { css:{zIndex: 0}, delay: 1 });
	}
}

var unsaved = false;

$(document).on('change', ':input', function(){ //triggers change in all input fields including text type
  unsaved = true;
});



// Swaps the header and metric list content depending on which criteria was selected
function swapHeaderBG(e){

	titleMetric.innerHTML = '';

	//console.log(e.firstChild.firstChild.textContent);

    console.log(e.firstChild.firstChild.firstChild.getAttribute('criteria'));
	getMetrics(e.firstChild.firstChild.firstChild.getAttribute('criteria'));
}

function getMetrics(n){
	if (metricList) {
		while (metricList.firstChild) {
	    	metricList.removeChild(metricList.firstChild);
	  }
	}
	var criteriaData = {
		criteriaId: n
    };
    console.log(criteriaData);
	$.ajax({
		type: "POST",
		url: base_url + "index.php/home/criteriaMetrics",
		data: criteriaData,
		dataType: 'json',
		success: function(data) {
			console.log(data);
			titleHeader.textContent = data[0]["criteria_name"];
			titleHeader.setAttribute('criteria', data[0]["criteria_id"]);
			for(i=0; i<data.length; i++){
				var node = document.createElement("li");
				var anchor = document.createElement("a");
				var textnode = document.createTextNode(data[i]["metric_name"]);
				anchor.setAttribute("href", "#");
				node.appendChild(anchor);
				node.setAttribute("class", data[i]["metric_id"]);
				node.setAttribute("editable", data[i]["company_id"]);
				anchor.appendChild(textnode);
				metricList.appendChild(node);
			}
			theMetrics = document.querySelectorAll("#metrics li a");
			//console.log(theMetrics);

			[].forEach.call(theMetrics, function(el){
					//console.log(el);
					el.addEventListener("click", swapMetrics, false);
				});
		},
		error: function(data){
		//console.log(data);
		//alert("failed");
		}
	});
}

function addMetric(){
	if(addMetricInput.value != ''){
		console.log(addMetricInput.value);
		console.log(titleHeader.getAttribute("criteria"));
		metricData = {
			theName: addMetricInput.value,
			theCriteria: titleHeader.getAttribute("criteria")
	    };
	    console.log(metricData);
		if(confirm("Are you sure you'd like to add '"+addMetricInput.value+"' as a new metric?")) {
			console.log('confirmed');
			$.ajax({
				type: "POST",
				url: base_url + "index.php/home/addMetrics",
				data: metricData,
				success: function(data) {
					console.log('added '+data);
					getMetrics(titleHeader.getAttribute('criteria'));
				},
				error: function(data){
				console.log('failed');
				}
			});
		}
	}else{
		console.log('nothing to see here');
	}
}

// Applies the selected class to desired metric in order to properly update/pull from database
function swapMetrics(e){
	console.log(e.target);
	for(i=0; i<theMetrics.length; i++){
		theMetrics[i].classList.remove("selected");
	}
	titleMetric.textContent = e.target.innerHTML;
	if(e.target.innerHTML = titleMetric.textContent){
		e.target.classList.add("selected");
	}

	/*stepLevel
	metricLevel*/
	// var metricDataA = {
	// 	metricLevel: $('.selected').parent().attr("class"),
	// 	stepLevel: 14
	// };
	// //console.log(metricData);

	// var metricDataAA = {
	// 	metricLevel: $('.selected').parent().attr("class"),
	// 	stepLevel: 27
	// };
	// //console.log(metricDataAA);

	// var metricDataAAA = {
	// 	metricLevel: $('.selected').parent().attr("class"),
	// 	stepLevel: 40
	// };

	// var metricData = [metricDataA, metricDataAA, metricDataAAA];
	// console.log(metricData);

	var metricData = {
		metricLevel: $('.selected').parent().attr("class"),
		stepLevel: 14
	};

	$.ajax({
		type: "POST",
		url: base_url + "index.php/home/getProgress",
		data: metricData,
		success: function(data) {
			console.log("data: "+data);
			//console.log("metricData works " + metricData);
			var percentA = parseInt(data[5]);
			var percentAA = parseInt(data[12]);
			var percentAAA = parseInt(data[20]);

			var progressA = (percentA/13) * 100;
			console.log("progress %: "+progressA);
			var progressBarA = document.querySelector(".levelA div");
			progressBarA.style.width = progressA + "%";

			var progressAA = (percentAA/13) * 100;
			console.log("progressAA %: "+progressAA);
			var progressBarAA = document.querySelector(".levelAA div");
			progressBarAA.style.width = progressAA + "%";
			
			var progressAAA = (percentAAA/13) * 100;
			console.log("progressAAA %: "+progressAAA);
			var progressBarAAA = document.querySelector(".levelAAA div");
			progressBarAAA.style.width = progressAAA + "%";
		},
		error: function(){
		alert("failed");
		}
	});
	switchFormContent(s);
}

// Changes the form content when switching between "A" levels
function changeLevel(){
	//console.log(n);
	if(this.classList.contains('next')){
		console.log("goin' up");
		if(currLevel.innerHTML == "A"){
			console.log("yep");
			currLevel.innerHTML = "AA";
		}else if(currLevel.innerHTML == "AA"){
			currLevel.innerHTML = "AAA";
		}
	}else if(this.classList.contains('prev')){
		console.log("goin' down");
		if(currLevel.innerHTML == "AAA"){
			currLevel.innerHTML = "AA";
		}else if(currLevel.innerHTML == "AA"){
			currLevel.innerHTML = "A";
		}
	}

	switch(currLevel.innerHTML){
			case "A":
				stepDesc.innerHTML = objSteps["levelA"][n]["step"];
				s = objSteps["levelA"][n]["stepNum"];
				break;
			case "AA":
				stepDesc.innerHTML = objSteps["levelAA"][n]["step"];
				s = objSteps["levelAA"][n]["stepNum"];
				break;
			case "AAA":
				stepDesc.innerHTML = objSteps["levelAAA"][n]["step"];
				s = objSteps["levelAAA"][n]["stepNum"];
				break;
		}

	switchFormContent(s); // Calls the switchFormContent() function to update the form whenever there is a change in the level
}

// Dynamically updates/inserts form content to the database when accept is clicked
$("#accept").click(function(event) {
                event.preventDefault();
                var arrPrinciples = [];
                $('input[name=principle]:checked').each(function(){
                	arrPrinciples.push($(this).val());
                });
                var formData = {
                	id: 1,
                	inputStep: s,
                	inputMetric: $('.selected').parent().attr("class"),
                    inputDesc:  $('textarea[name=inputDesc]').val(),
                    inputGAPS:  $('textarea[name=inputGAPS]').val(),
                    inputActions: $('textarea[name=inputActions]').val(),
                    inputComments: $('textarea[name=inputComments]').val(),
                    inputPrinciples: arrPrinciples,
                };
                console.log(formData);
                $.ajax({
                type: "POST",
                url: base_url + "index.php/home/formInput",
                data: formData,
                success: function() {
                	changeToColour();
                	console.log(formData);
                	//alert("success");
                },
                error: function(){
                	alert("failed");
                }
                });
            });

// Dynamically updates content when a new metric/level/step is selected while the form is open
function switchFormContent(s){
	m = $('.selected').parent().attr('class');
	var getData = {
        theStep: s,
        theMetric: m
      };

	$.ajax({
		type: "POST",
		url: base_url + "index.php/home/input",
		data: getData,
		dataType: 'json',
		success: function(data) {
			console.log(data);
			$('textarea[name=inputDesc]').val(data["metricstep_description"]),
        	$('textarea[name=inputGAPS]').val(data["metricstep_gaps"]),
        	$('textarea[name=inputActions]').val(data["metricstep_actions"]),
        	$('textarea[name=inputComments]').val(data["metricstep_comments"])
		},
		error: function(){
		alert("failed");
		}
	});
}

if(addMetricButton != null) {
	addMetricButton.addEventListener("click", addMetric, false);
}
prevButton.addEventListener("click", changeLevel, false);
nextButton.addEventListener("click", changeLevel, false);
window.addEventListener("load", popupstart, false);
window.addEventListener("load", init, false);
