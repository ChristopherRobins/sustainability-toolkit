<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="initial-scale=1.0, width=device-width">
<title>Sustainability Toolkit</title>
    <link href="css/normalize.css" rel="stylesheet" type="text/css" media="screen">
    <link href="css/foundation.css" rel="stylesheet" type="text/css" media="screen">
    <link href="css/fonts.css" rel="stylesheet" type="text/css" media="screen">
    <link href="css/main.css" rel="stylesheet" type="text/css" media="screen">

    <script src="js/TweenLite.js"></script>
    <script src="js/TweenMax.js"></script>
    <script src="js/TimelineLite.js"></script>
    <script src="js/TimelineMax.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    
</head>
<body>
    <div id="holder">
        <div class="row">
            <div id="topHolder" class="large-12 columns">
                <nav>
                    <ul>
                        <li><a href="#">Tool Kit</a></li>
                        <li><a href="#">Principles &amp; Criteria</a></li>
                        <li><a href="#">Action Plan &amp; Assessment</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </nav>
                <header id="mainHeader" class="row">
                    <div id="title" class="small-12 columns">
                        <h1>Sustainability Toolkit</h1>
                        <p>The Sustainability Toolkit has been developed to address the lack of available and practical guidance on how to implement sustainability in an organization.</p>
                        <img id="decor" src="images/buildings.png" alt="buildings decor">
                    </div>
                    <!--<img src="images/headers/DashBoard_BlueHeader.png" alt="metric header">-->
                </header>
                <nav id="secondary" class="row">
                    <ul class="small-6 columns">
                        <li><a href="#">Company Profile</a></li>
                        <li><a href="#">AAA Standing</a></li>
                        <li><a href="#">Set Up Metric</a></li>
                    </ul>
                    <div class="companies" class="small-5 columns">
                        <img src="images/tavares.png" alt="Tavares Logo">
                        <img src="images/kuzuka.png" alt="Kuzuka Logo">
                    </div>
                </nav>
            </div>
        </div>

        <div id="homecontent">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida venenatis volutpat. Suspendisse sed dui lobortis tortor lacinia vehicula sit amet at nunc. Nam tincidunt tincidunt mi sit amet commodo. Morbi vel lobortis metus, quis luctus arcu. In et mi non urna euismod venenatis ullamcorper non nunc. Maecenas mattis sem velit, eu vestibulum elit malesuada in. Cras viverra lectus id nunc laoreet, nec accumsan lacus sodales. Integer ultrices massa at ex ultricies euismod. Proin id suscipit turpis. Donec laoreet volutpat feugiat. Suspendisse lobortis, ipsum condimentum facilisis volutpat, metus mi sollicitudin metus, maximus maximus ligula magna vitae orci.</p>
        </div>

    	<div id="container">
            <div class="row">
                <ul id="flowers" class="large-12 columns">
                </ul>
            </div>
        </div>

        <div class="active">
            <div id="midWheel">
                <img id="plan" src="images/plan.png" alt="Plan">
                <img id="do" src="images/do.png" alt="Do">
                <img id="check" src="images/check.png" alt="Check">
                <img id="act" src="images/act.png" alt="Act">
            </div>
            
            <div id="innerWheel">
                <div id="wheelCirc">
                    <p id="textfield">step desc</p>
                    <img src="images/inner-circ.png" alt="inner circle">
                </div>
                <p id="step1" onClick="loadForm()">1</p>
                <p id="step1desc" class="stepdesc">Priorities</p>
                <img class="pieces" id="piece1" src="images/pieces/piece1.png" alt="Step 1">
                <p id="step2">2</p>
                <p id="step2desc" class="stepdesc">Prioritize &amp; Define</p>
                <img class="pieces" id="piece2" src="images/pieces/piece2.png" alt="Step 2">
                <p id="step3">3</p>
                <p id="step3desc" class="stepdesc">Baseline</p>
                <img class="pieces" id="piece3" src="images/pieces/piece3.png" alt="Step 3">
                <p id="step4">4</p>
                <p id="step4desc" class="stepdesc">Policies</p>
                <img class="pieces" id="piece4" src="images/pieces/piece4.png" alt="Step 4">
                <p id="step5">5</p>
                <p id="step5desc" class="stepdesc">Action Plan</p>
                <img class="pieces" id="piece5" src="images/pieces/piece5.png" alt="Step 5">
                <p id="step6">6</p>
                <p id="step6desc" class="stepdesc">Process</p>
                <img class="pieces" id="piece6" src="images/pieces/piece6.png" alt="Step 6">
                <p id="step7">7</p>
                <p id="step7desc" class="stepdesc">Training</p>
                <img class="pieces" id="piece7" src="images/pieces/piece7.png" alt="Step 7">
                <p id="step8">8</p>
                <p id="step8desc" class="stepdesc">Monitor</p>
                <img class="pieces" id="piece8" src="images/pieces/piece8.png" alt="Step 8">
                <p id="step9">9</p>
                <p id="step9desc" class="stepdesc">Audit</p>
                <img class="pieces" id="piece9" src="images/pieces/piece9.png" alt="Step 9">
                <p id="step10">10</p>
                <p id="step10desc" class="stepdesc">Mgmt Report</p>
                <img class="pieces" id="piece10" src="images/pieces/piece10.png" alt="Step 10">
                <p id="step11">11</p>
                <p id="step11desc" class="stepdesc">Influence</p>
                <img class="pieces" id="piece11" src="images/pieces/piece11.png" alt="Step 11">
                <p id="step12">12</p>
                <p id="step12desc" class="stepdesc">Stakeholder Report</p>
                <img class="pieces" id="piece12" src="images/pieces/piece12.png" alt="Step 12">
                <p id="step13">13</p>
                <p id="step13desc" class="stepdesc">Recognition</p>
                <img class="pieces" id="piece13" src="images/pieces/piece13.png" alt="Step 13">

                <img class="colpieces" id="colpiece1" src="images/pieces/col-piece1.png" alt="Step 1">
                <img class="colpieces" id="colpiece2" src="images/pieces/col-piece2.png" alt="Step 2">
                <img class="colpieces" id="colpiece3" src="images/pieces/col-piece3.png" alt="Step 3">
                <img class="colpieces" id="colpiece4" src="images/pieces/col-piece4.png" alt="Step 4">
                <img class="colpieces" id="colpiece5" src="images/pieces/col-piece5.png" alt="Step 5">
                <img class="colpieces" id="colpiece6" src="images/pieces/col-piece6.png" alt="Step 6">
                <img class="colpieces" id="colpiece7" src="images/pieces/col-piece7.png" alt="Step 7">
                <img class="colpieces" id="colpiece8" src="images/pieces/col-piece8.png" alt="Step 8">
                <img class="colpieces" id="colpiece9" src="images/pieces/col-piece9.png" alt="Step 9">
                <img class="colpieces" id="colpiece10" src="images/pieces/col-piece10.png" alt="Step 10">
                <img class="colpieces" id="colpiece11" src="images/pieces/col-piece11.png" alt="Step 11">
                <img class="colpieces" id="colpiece12" src="images/pieces/col-piece12.png" alt="Step 12">
                <img class="colpieces" id="colpiece13" src="images/pieces/col-piece13.png" alt="Step 13">
            </div>

            <!-- COLOUR PIECES -->
                

            <img id="bud" src="images/outer-w-white.png" alt="bud">
        </div>

        <div id="popup">
            <div id="inner-popup">
                <div id="form">
                    <div class="row">
                        <div class="large-6 columns">
                            <p id="close">X</p>
                        </div>
                        <div class="large-6 columns">
                            <img id="accept" src="images/checkmark.png" alt="accept changes">
                        </div>
                    </div>
                    <div class="row">
                        <div class="large-12 columns">
                            <h1 id="stage">1. Assess Stakeholder Priorities</h1>
                            <p class="step-desc"></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="principles">
                            <input type="checkbox">
                            <label>Accountability</label>
                        </div>
                        <div class="principles">
                            <input type="checkbox">
                            <label>Compliance</label>
                        </div>
                        <div class="principles">
                            <input type="checkbox">
                            <label>Ethical Behaviour</label>
                        </div>
                        <div class="principles">
                            <input type="checkbox">
                            <label>Stakeholder</label>
                        </div>
                        <div class="principles">
                            <input type="checkbox">
                            <label>Transparency</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="large-12 columns">
                            <!--<label>Principle Name</label>
                            <input type="text" placeholder="principle name">-->
                            <label>Principle Description</label>
                            <textarea>principle description</textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="large-12 columns">
                            <label>Initial Assessment (GAPS)</label>
                            <textarea></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="large-12 columns">
                            <label>Actions</label>
                            <textarea></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div class="large-12 columns">
                            <label>Responsibility</label>
                            <select>
                                <option vale="0">Select User</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="large-12 columns">
                            <label>Comments</label>
                            <textarea></textarea>
                        </div>
                    </div>
                </div>
                <!--<div class="row">
                    <div class="large-6 columns">
                        <select>
                            <option vale="0">Select a Principle</option>
                            <option vale="1">Accountability</option>
                            <option vale="2">Compliance</option>
                            <option vale="3">Ethical Behaviour</option>
                            <option vale="4">Stakeholder Interests</option>
                            <option vale="5">Transparency</option>
                        </select>
                    </div>
                </div>-->
            </div>
            <div class="row">
                <div class="large-12 columns pages">
                    <p><span class="prev">&lt;&lt;</span> level <span class="page">1</span> of 3 <span class="next">&gt;&gt;</span></p>
                </div>
            </div>
        </div>

        <div id="coverOne">
        </div>

        <div id="coverTwo">
        </div>

        <div id="background">
            <img id="grass" src="images/GrassSeparate.png" alt="Background">
            <img id="frontHill" src="images/FrontHill.png" alt="Background">
            <img id="backHills" src="images/ThreeHillsBackground.png" alt="Background">
            <ul id="metricFlowers">
            </ul>
        </div>

        <div id="metricHolder">
            <nav id="primary" class="row">
                <ul class="small-7 columns">
                    <li><a href="#">Tool Kit</a></li>
                    <li><a href="#">Principles &amp; Criteria</a></li>
                    <li><a href="#">Action Plan &amp; Assessment</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
                <div class="companies" class="large-3 columns">
                    <img src="images/tavares.png" alt="Tavares Logo">
                    <img src="images/kuzuka.png" alt="Kuzuka Logo">
                </div>
            </nav>
            <div class="row">
                <div id="metricHeader" class="large-12 columns">
                    <div id="text" class="large-12 columns">
                        <h2></h2>
                        <h3></h3>
                        <div class="row">
                            <div class="large-4 columns">
                                <ul id="level">
                                    <li>A</li>
                                    <li>AA</li>
                                    <li>AAA</li>
                                </ul>
                                <div id="levelview"></div>
                            </div>
                        </div>
                    </div>
                    <!--<img src="images/headers/EnvironmentHeader.png" alt="metric header">-->
                </div>
                <div class="large-3 columns">
                </div>
            </div>
            <ul id="metrics">
                <!--<li><a href="#"><span class="selected">Air Emissions</span></a></li>
                <li><a href="#">Biodiversity</a></li>
                <li><a href="#">Energy</a></li>
                <li><a href="#">Greenhouse Gas (GHG) Emissions</a></li>
                <li><a href="#">Hazardous Substances</a></li>
                <li><a href="#">Materials</a></li>
                <li><a href="#">Waste</a></li>
                <li><a href="#">Water</a></li>
                <li><a href="#">Other Considerations</a></li>-->
            </ul>
        </div>

        <div id="exitWheel">
            <img src="images/flower-link.png" alt="exit wheel">
        </div>
    </div>
    
    <script src="js/wheel.js"></script>
</body>
</html>
