var base_url = 'http://localhost:8888/sustainability-toolkit/';

//circles
    var aBox = document.querySelector("#aBox"),
        aaBox = document.querySelector("#aaBox"),
        aaaBox = document.querySelector("#aaaBox");

    var div1html = document.querySelector("#div1"),
        div2html = document.querySelector("#div2"),
        div3html = document.querySelector("#div3");

    var div1 = d3.select(div1html),
        div2 = d3.select(div2html),
        div3 = d3.select(div3html);

    var subdiv1html = document.querySelector("#subdiv1"),
        subdiv2html = document.querySelector("#subdiv2"),
        subdiv3html = document.querySelector("#subdiv3"),
        subdiv4html = document.querySelector("#subdiv4"),

        subdiv5html = document.querySelector("#subdiv5"),
        subdiv6html = document.querySelector("#subdiv6"),
        subdiv7html = document.querySelector("#subdiv7"),
        subdiv8html = document.querySelector("#subdiv8"),

        subdiv9html = document.querySelector("#subdiv9"),
        subdiv10html = document.querySelector("#subdiv10"),
        subdiv11html = document.querySelector("#subdiv11"),
        subdiv12html = document.querySelector("#subdiv12");

    var chart,
        title = document.querySelector("#chartTitle");

    var rings = document.querySelectorAll(".rings");

    var margin = {top: 20, right: 20, bottom: 50, left: 40},
        width = 500 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var svg = d3.select("div").append("svg");

         svg.attr("width", width + margin.left + margin.right)
         .attr("height", height + margin.top + margin.bottom)
         .attr("id", "barchart");

    var xExists, yExists, labels;
    
    var selected1, selected2, selected3;

    var currentFadeMain, currentFadeLevel, currentFadeMini;

    var legendRectSize = 18;
    var legendSpacing = 4;

    var con = d3.select("div").select("div").append("svg");
        con.attr("id", "legendCon")
        .attr("width", 150)
        .attr("height", 200);

    var rpsub1, rpsub2, rpsub3, rpsub4, rpsub5, rpsub6, rpsub7, rpsub8, rpsub9, rpsub10, rpsub11, rpsub12;//circles
    
$( document ).ready(function() {
    getJSON();
});

function getJSON(){
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: base_url + "index.php/home/test",
        dataType: 'json',
        async: true,
        data: "{}", 
        success: function (data) {
            var jsonData = data;
            populateGraphs(jsonData);

        },
        error: function (result) {

        }
    })
}

function populateGraphs(jsonData){    

    start();

    function start(e) { //inital circles
        console.log(jsonData.facility);
        var progress = ["0", "1", "2"];

        var rp1 = radialProgress(div1html)
                .label("A")
                .onClick(function() { start2(progress[0], "A"); })
                .diameter(150)
                .value(jsonData.facility.all.A)
                .render();

        var rp2 = radialProgress(div2html)
                .label("AA")
                .onClick(function() { start2(progress[1], "AA"); })
                .diameter(150)
                .value(jsonData.facility.all.AA)
                .render();

        var rp3 = radialProgress(div3html)
                .label("AAA")
                .onClick(function() { start2(progress[2], "AAA"); })
                .diameter(150)
                .value(jsonData.facility.all.AAA)
                .render();
    }


    function showLegend() {
        var color = ["#8ecee9", "#9acb6d", "#e3bb6a", "#637da1", "#ddda74"];
        var names = ["Level", "Environment", "Community", "Operating Practices", "Products & Services"];

        if (con[0][0].classList.contains("hide")) {
            con[0][0].classList.remove("hide");
        } else {
            var legend = con.selectAll(".legend")
            .data(color)
            .enter()
            .append('g')
            .attr("class", "legend")
            .attr("transform", function(d, i) {
                var vert = (legendRectSize + legendSpacing) * i;
                return 'translate(0,' + vert + ')';  
            });

            legend.append("rect")
                .attr("width", 18)
                .attr("height", 18)
                .style("fill", function(d, i) {
                    return color[i];
                })
                .style("stroke", color);

            legend.append('text')
                .attr('x', legendRectSize + legendSpacing)
                .attr('y', legendRectSize - legendSpacing)
                .text(function(d, i) {
                    return names[i];
                });
        }
        
    }

    function addFaded(level, rings, div, miniCircle) {
        console.log("in addFaded");
        console.log(miniCircle);
        if (currentFadeMain != null) { //something else is already faded out
            d3.select(currentFadeMain) //grey out last main circle that was selected
                //.transition()
                //.duration(500)
                .style("-webkit-filter", "grayscale(100%)")
                .style("-moz-filter", "grayscale(100%)")
                .style("-ms-filter", "grayscale(100%)")
                .style("filter", "grayscale(100%)");

            d3.select(currentFadeLevel)
            .selectAll(rings) //grey out mini rings in that level
                //.transition()
                //.duration(500)
                .style("-webkit-filter", "grayscale(100%)")
                .style("-moz-filter", "grayscale(100%)")
                .style("-ms-filter", "grayscale(100%)")
                .style("filter", "grayscale(100%)");
            fade();
        } else {
            fade();
        }

        function fade() { //add color to whats currently selected
            console.log(level);
            d3.select(level)
                .selectAll(rings) //fading mini rings only in that level
                //.transition()
                //.duration(500)
                .style("-webkit-filter", "grayscale(60%)")
                .style("-moz-filter", "grayscale(60%)")
                .style("-ms-filter", "grayscale(60%)")
                .style("filter", "grayscale(60%)");

            d3.select(div) //full color on main ring
                //.transition()
                //.duration(500)
                .style("-webkit-filter", "grayscale(0%)")
                .style("-moz-filter", "grayscale(0%)")
                .style("-ms-filter", "grayscale(0%)")
                .style("filter", "grayscale(0%)");
            if (miniCircle) {
                console.log('in minicircle');
                d3.select(miniCircle) //add color to mini ring thats selected
                    //.transition()
                    //.duration(500)
                    .style("-webkit-filter", "grayscale(0%)")
                    .style("-moz-filter", "grayscale(0%)")
                    .style("-ms-filter", "grayscale(0%)")
                    .style("filter", "grayscale(0%)");

                currentFadeMini = miniCircle;
                console.log(currentFadeMini);
            }

            currentFadeMain = div;
            currentFadeLevel = level;
            
        }
    }

    function removeColor(div) {
        console.log("in remove color");
        d3.select(div) 
            .transition()
            .duration(500)
            .style("-webkit-filter", "grayscale(100%)")
            .style("-moz-filter", "grayscale(100%)")
            .style("-ms-filter", "grayscale(100%)")
            .style("filter", "grayscale(100%)");

    }


    function start2(rp, lvl) { //sub circles
        showLegend();
        console.log(rp);

        var rpsubs = [["rpsub1", "rpsub2", "rpsub3", "rpsub4"],["rpsub5", "rpsub6", "rpsub7", "rpsub8"],["rpsub9", "rpsub10", "rpsub11", "rpsub12"]];
        var subdivs = [["subdiv1html", "subdiv2html", "subdiv3html", "subdiv4html"], ["subdiv5html", "subdiv6html", "subdiv7html", "subdiv8html"], ["subdiv9html", "subdiv10html", "subdiv11html", "subdiv12html"]];
        var values =    [[jsonData.facility.environment.A, jsonData.facility.community.A, jsonData.facility.operating.A, jsonData.facility.products.A],
                        [jsonData.facility.environment.AA, jsonData.facility.community.AA, jsonData.facility.operating.AA, jsonData.facility.products.AA],
                        [jsonData.facility.environment.AAA, jsonData.facility.community.AAA, jsonData.facility.operating.AAA, jsonData.facility.products.AAA]];
                        console.log(values);
        for (var i=0; i < 4; i++) {  
             console.log(rpsubs[rp][i]);
             window[rpsubs[rp][i]] = radialProgress(window[subdivs[rp][i]])
                .diameter(140)
                .value(values[rp][i])
                .render();
        }

        console.log(box);

        var levelList = ["#aBox", "#aaBox", "#aaaBox"];
        var box = ["aBox", "aaBox", "aaaBox"];
        var divList = ["#div1", "#div2", "#div3"];
        var selectedVars = ["selected1", "selected2", "selected3"];
        var csv = [["a-environment.csv", "a-community.csv", "a-operating.csv", "a-products.csv"],["aa-environment.csv", "aa-community.csv", "aa-operating.csv", "aa-products.csv"],["aaa-environment.csv", "aaa-community.csv", "aaa-operating.csv", "aaa-products.csv"]];
        var criteriaList = ['1', '2', '3', '4'];
        var miniList = [["#subdiv1", "#subdiv2", "#subdiv3", "#subdiv4"],["#subdiv5", "#subdiv6", "#subdiv7", "#subdiv8"],["#subdiv9", "#subdiv10", "#subdiv11", "#subdiv12"]];
        var rings = ".rings";
        var level = levelList[rp];
        var div = divList[rp];

        if (window[box[rp]].firstChild.nextSibling.nextSibling.nextSibling.classList.contains("hide")) { //if top level rid is hidden, show it
            window[selectedVars[rp]] = 1;
                //environment
                window[rpsubs[rp][0]].onClick(function(d, i) {
                    var data = jsonData.facility.environment.metrics[lvl];
                    //d3.json(datafile, function(error, data) {
                        var cirColor = "#9acb6d";
                        var miniCircle = miniList[rp][0];
                        var criteria = criteriaList[0];
                        addFaded(level, rings, div, miniCircle);
                        barchart(data, criteria, cirColor);
                    //});
                });
                console.log(subdivs[rp][0].classList);
                window[subdivs[rp][0]].classList.remove("hide");

                //community
                window[rpsubs[rp][1]].onClick(function(d, i) {
                    var data = jsonData.facility.community.metrics[lvl];
                    console.log(data);
                    //d3.json(datafile, function(error, data) {
                        var cirColor = "#e3bb6a";
                        var miniCircle = miniList[rp][1];
                        var criteria = criteriaList[1];
                        addFaded(level, rings, div, miniCircle);
                        barchart(data, criteria, cirColor);
                    //});
                });
                window[subdivs[rp][1]].classList.remove("hide");

                //operating
                window[rpsubs[rp][2]].onClick(function(d, i) {
                    var data = jsonData.facility.operating.metrics[lvl];
                    //d3.json(datafile, function(error, data) {
                        var cirColor = "#637da1";
                        var miniCircle = miniList[rp][2];
                        var criteria = criteriaList[2];
                        addFaded(level, rings, div, miniCircle);
                        barchart(data, criteria, cirColor);
                    //});
                });
                window[subdivs[rp][2]].classList.remove("hide");

                //environment
                window[rpsubs[rp][3]].onClick(function(d, i) {
                    var data = jsonData.facility.products.metrics[lvl];
                    //d3.json(datafile, function(error, data) {
                        var cirColor = "#ddda74";
                        var miniCircle = miniList[rp][3];
                        var criteria = criteriaList[3];
                        addFaded(level, rings, div, miniCircle);
                        barchart(data, criteria, cirColor);
                    //});
                });
                window[subdivs[rp][3]].classList.remove("hide");
        }
        

        else {
            console.log('removed main and ran barchart');
            removeColor(div);
            for (var m=0; m < 4; m++) {
                window[subdivs[rp][m]].classList.add("hide");
            }
        
            xExists = 0;
            yExists = 0;
            window[selectedVars[rp]] = 0;

            if (selected1 != 1 && selected2 != 1 && selected3 != 1) {
                //console.log(svg[0][0].lastChild);
                while (svg[0][0].lastChild) {
                    svg[0][0].lastChild.remove();
                }
                con[0][0].classList.add("hide");
            }
    }//end of if else statement
}

    

function barchart(data, criteria, cirColor) {
    console.log('in barchart');

    console.log(data);

        var x = d3.scale.linear()
            .domain([0, 100])
            .range([0, width]);

        var y = d3.scale.ordinal()
            .rangeBands([0, height], 0.2);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .ticks(10);

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

             y.domain(data.map(function(d) { return d.name; }));

        var tip = d3.tip()
            .attr("class", "tip")
            .offset([-10,0])
            .html(function(d) {
                return d.name + ": " + d.value + "%";
            });

            if (chart === 1) {
                d3.select("#chartTitle")
                    .remove();
            }

            svg.append("text")
                .text(title)
                .attr("id", "chartTitle")
                .attr("dx", "6.5em")
                .attr("dy", "1em");

            chart = 1;

            svg.call(tip);

            var container = document.querySelector("#container");

            if (!container) {

                svg.append("g")
                    .attr("id", "container")
                    .attr("height", function(d,i) {
                        height - y.rangeBand(); 
                    });
            }

            var graph = d3.select("#container");

            var bars = graph.selectAll("rect.bar")
                        .data(data);

            var labels = graph.selectAll("text.labels")
                        .data(data);

                bars.enter().append("rect")
                  .attr("x", 0)
                  .attr("y", function(d) { return y(d.name); })
                  .attr("fill", cirColor)
                  .attr("class", "bar")
                  .on("mouseover", tip.show)
                  .on("mouseout", tip.hide);

                labels.enter().append("text")
                    .attr("class", "labels")
                    .attr("x", 0)
                    .attr("y", function(d, i) {
                        return y(d.name) + y.rangeBand()/2;
                    })
                    .text(function(d) {
                        return d.value + "%";
                    });

                bars.exit()
                    .transition()
                    .duration(400)
                    .ease("easeout")
                    .attr("width", 0)
                    .remove();

                labels.exit()
                    .attr("x", 0)
                    .remove();

                bars.transition()
                    .duration(400)
                    .ease("easeout")
                    .attr("fill", cirColor)
                    .attr("width", function(d) {
                        return x(d.value);
                    })
                    .attr("height", y.rangeBand())
                    .attr("transform", function(d, i) {
                        return "translate(" + [0, y.rangeBand()] + ")"
                     })
                    .attr("y", function(d) { return y(d.name); });
                    

                

                labels.transition()
                    .duration(600)
                    .attr("x", function(d) {
                        return x(d.value) + 10;
                    })
                    .attr("y", function(d, i) {
                        return y(d.name) + y.rangeBand()/2;
                    })
                    .attr("transform", function(d, i) {
                        return "translate(" + [0, y.rangeBand()] + ")"
                     })
                    .text(function(d) {
                        return d.value + "%";
                    });




                if(xExists !=1 || yExists !=1 ) {//if axes don't already exist because chart doesn't already exists

                        d3.select("#container").append("g")
                          .attr("class", "x axis")
                          .attr("transform", "translate(0," + (height + margin.bottom + margin.top) + ")")
                          .call(xAxis)
                        .append("text")
                          .attr("y", 30)
                          .attr("x", 265)
                          .attr("dy", ".71em")
                          .style("text-anchor", "end")
                          .text("Percentage %");
                      

                        svg.append("g")
                                .attr("class", "y axis yticks")
                                .attr("height", height + margin.bottom + margin.top)
                                .attr("transform", "translate(0," + (margin.bottom) + ")")
                                .call(yAxis)
                            .append("text")
                                  .attr("transform", "rotate(-90)")
                                  .attr("y", -30)
                                  .attr("x", -200)
                                  .attr("dy", "0.71em")
                                  .style("text-anchor", "end")
                                  .text("Metrics");

                        xExists = 1;
                        yExists = 1;
                    }
 }
}