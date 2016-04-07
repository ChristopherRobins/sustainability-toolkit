var base_url = 'http://localhost:8888/sustainability-toolkit/';

//circles  
    var environ = document.querySelector("#environment"),
        comm = document.querySelector("#community"),
        operat = document.querySelector("#operating"),
        products = document.querySelector("#products");


    var div1html = document.querySelector("#div1"),
        div2html = document.querySelector("#div2"),
        div3html = document.querySelector("#div3"),
        div4html = document.querySelector("#div4");

    var div1 = d3.select(div1html),
        div2 = d3.select(div2html),
        div3 = d3.select(div3html),
        div4 = d3.select(div4html);

    var divA = document.querySelector("#a"),
        divAA = document.querySelector("#aa"),
        divAAA = document.querySelector("#aaa");

    var subrings = document.querySelector("#subrings");


    // var subdiv1html = document.querySelector("#subdiv1"),
    //     subdiv2html = document.querySelector("#subdiv2"),
    //     subdiv3html = document.querySelector("#subdiv3"),
    //     subdiv4html = document.querySelector("#subdiv4"),

    //     subdiv5html = document.querySelector("#subdiv5"),
    //     subdiv6html = document.querySelector("#subdiv6"),
    //     subdiv7html = document.querySelector("#subdiv7"),
    //     subdiv8html = document.querySelector("#subdiv8"),

    //     subdiv9html = document.querySelector("#subdiv9"),
    //     subdiv10html = document.querySelector("#subdiv10"),
    //     subdiv11html = document.querySelector("#subdiv11"),
    //     subdiv12html = document.querySelector("#subdiv12");

    var chart;
    var subtoggle, toggle1, toggle2, toggle3, toggle4;
    //     title = document.querySelector("#chartTitle");

    // var rings = document.querySelectorAll(".rings");

    var margin = {top: 20, right: 20, bottom: 50, left: 40},
        width = 500 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var svg = d3.select("#main").append("svg");

         svg.attr("width", width + margin.left + margin.right)
         .attr("height", height + margin.top + margin.bottom)
         .attr("id", "barchart");

    var xExists, yExists, labels;
    
    var selected1, selected2, selected3;

    var currentFadeMain, currentFadeLevel, currentFadeMini, currentToggle;

    var legendRectSize = 18;
    var legendSpacing = 4;

    var con = d3.select("div").select("div").append("svg");
        con.attr("id", "legendCon")
        .attr("width", 150)
        .attr("height", 200);

    //var rpsub1, rpsub2, rpsub3, rpsub4, rpsub5, rpsub6, rpsub7, rpsub8, rpsub9, rpsub10, rpsub11, rpsub12;
    
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
        console.log(jsonData);
        var progress = ["0", "1", "2", "3"];
        var csv = ["a-environment.csv", "a-community.csv", "a-operating.csv", "a-products.csv"];
        var rp1 = radialProgress(div1html)
                .label("Environment")
                .onClick(function(d, i) {
                    var data = jsonData.facility.environment;
                    showLegend();
                    if (div1html.style.webkitFilter === 'grayscale(0%)' || div1html.style.mozFilter === 'grayscale(0%)' || div1html.style.msFilter === 'grayscale(0%)' || div1html.style.filter === 'grayscale(0%)') {
                        toggle1 = 0;
                        toggleSubrings();
                        toggleMainrings(div1html);
                    } else {
                        //d3.csv(datafile, function(error, data) {
                            var cirColor = "#9acb6d";
                            var div = "#div1";
                            var level = "0";
                            var toggle = "toggle1";
                            var subvalue = ["26", "56", "32"];
                            addFaded(div, toggle);
                            //toggleSubrings(); //gets rid of existing sub rings associated with the previously clicked criteria
                            updateSubrings(subvalue);
                            barchart(data.metrics.total, cirColor, level, div);
                        //});
                        toggle1 = 1;
                    }
                })
                .diameter(150)
                .value(jsonData.facility.environment.total)
                .render();

        var rp2 = radialProgress(div2html)
                .label("Community")
                .onClick(function(d, i) {
                    var data = jsonData.facility.community;
                    showLegend();
                    if (div2html.style.webkitFilter === 'grayscale(0%)' || div2html.style.mozFilter === 'grayscale(0%)' || div2html.style.msFilter === 'grayscale(0%)' || div2html.style.filter === 'grayscale(0%)') {
                        toggle2 = 0;
                        toggleSubrings();
                        toggleMainrings(div2html);
                    } else {
                        //d3.csv(datafile, function(error, data) {
                            var cirColor = "#e3bb6a";
                            var div = "#div2";
                            var level = "1";
                            var toggle = "toggle2";
                            var subvalue = ["55", "37", "98"];
                            addFaded(div, toggle);
                            //toggleSubrings();
                            updateSubrings(subvalue);
                            barchart(data.metrics.total, cirColor, level, div);
                        //});
                        toggle2 = 1;
                    }
                })
                .diameter(150)
                .value(jsonData.facility.community.total)
                .render();

        var rp3 = radialProgress(div3html)
                .label("Operating Practices")
                .onClick(function(d, i) {
                    var data = jsonData.facility.operating;
                    showLegend();
                    if (div3html.style.webkitFilter === 'grayscale(0%)' || div3html.style.mozFilter === 'grayscale(0%)' || div3html.style.msFilter === 'grayscale(0%)' || div3html.style.filter === 'grayscale(0%)') {
                        toggle3 = 0;
                        toggleSubrings();
                        toggleMainrings(div3html);
                    } else {
                        //d3.csv(datafile, function(error, data) {
                            var cirColor = "#637da1";
                            var div = "#div3";
                            var level = "2";
                            var toggle = "toggle3";
                            var subvalue = ["65", "14", "8"];
                            addFaded(div, toggle);
                            //toggleSubrings();
                            updateSubrings(subvalue);
                            barchart(data.metrics.total, cirColor, level, div);
                        //});
                        toggle3 = 1;
                    }
                })
                .diameter(150)
                .value(jsonData.facility.operating.total)
                .render();

        var rp4 = radialProgress(div4html)
                .label("Products & Services")
                .onClick(function(d, i) {
                    var data = jsonData.facility.products;
                    showLegend();
                    if (div4html.style.webkitFilter === 'grayscale(0%)' || div4html.style.mozFilter === 'grayscale(0%)' || div4html.style.msFilter === 'grayscale(0%)' || div4html.style.filter === 'grayscale(0%)') {
                        console.log("main ring had color");
                        toggle4 = 0;
                        toggleSubrings();
                        toggleMainrings(div4html);
                    } else {
                        console.log("main ring had no color");
                        //d3.csv(datafile, function(error, data) {
                            var cirColor = "#ddda74";
                            var div = "#div4";
                            var level = "3";
                            var toggle = "toggle4";
                            var subvalue = ["90", "37", "85"];
                            addFaded(div, toggle);
                            //toggleSubrings();
                            updateSubrings(subvalue);
                            barchart(data.metrics.total, cirColor, level, div);
                        //});
                        toggle4 = 1 ;
                    }
                })
                .diameter(150)
                .value(jsonData.facility.products.total)
                .render();
    }


    function showLegend() {
        var color = ["#8ecee9", "#9acb6d", "#e3bb6a", "#637da1", "#ddda74"];
        var names = ["Level", "Environment", "Community", "Operating Practices", "Products & Services"];

        //con[0][0]is the legend svg
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

    function addFaded(div, toggle) {
        console.log("in addFaded");
        console.log(toggle);
        //console.log(miniCircle);
        if (currentFadeMain != null) { //something else is already faded out
            d3.select(currentFadeMain) //grey out last main circle that was selected
                .transition()
                .duration(500)
                .style("-webkit-filter", "grayscale(100%)")
                .style("-moz-filter", "grayscale(100%)")
                .style("-ms-filter", "grayscale(100%)")
                .style("filter", "grayscale(100%)");

            window[currentToggle] = 0;
            fade();
        } else {
            fade();
        }

        function fade() { //add color to whats currently selected

            d3.select(div) //full color on main ring
                .transition()
                .duration(500)
                .style("-webkit-filter", "grayscale(0%)")
                .style("-moz-filter", "grayscale(0%)")
                .style("-ms-filter", "grayscale(0%)")
                .style("filter", "grayscale(0%)");

            currentFadeMain = div;
            currentToggle = toggle;
            console.log(currentToggle);
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


    function toggleMainrings(div) {
        //console.log("in toggle main");
            removeColor(div);

            //console.log(toggle1, toggle2, toggle3, toggle4);
            if (toggle1 != 1 && toggle2 != 1 && toggle3 != 1 && toggle4 != 1) {
                while (svg[0][0].lastChild) {
                     svg[0][0].lastChild.remove();
                }
                //console.log('removed barchart');
                //svg[0][0] is the barchart

                xExists = 0;
                yExists = 0;
                con[0][0].classList.add('hide'); //hiding legend svg
            }
    }


    function toggleSubrings() {
        if (subtoggle === 1) {
            while (divA.lastChild) {
                 divA.lastChild.remove();
            }
            while (divAA.lastChild) {
                divAA.lastChild.remove();
            }
            while (divAAA.lastChild) {
                divAAA.lastChild.remove();
            }
            subrings.classList.add("hide");

            subtoggle = 0;
        }
    }

    function updateSubrings(subvalue) {
        radialProgress(divA)
            .diameter(150)
            .value(subvalue[0])
            .label("A")
            .render();
        radialProgress(divAA)
            .diameter(150)
            .value(subvalue[1])
            .label("AA")
            .render();
        radialProgress(divAAA)
            .diameter(150)
            .value(subvalue[2])
            .label("AAA")
            .render();
    }

    

function barchart(data, cirColor, level, div) {
    console.log('in barchart');

        console.log("had colorMain, made chart");

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
                .text("Progress by Metric")
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

            var criteria = [["a-environment.csv", "aa-environment.csv", "aaa-environment.csv"], ["a-community.csv", "aa-community.csv", "aaa-community.csv"], ["a-operating.csv", "aa-operating.csv", "aaa-operating.csv"], ["a-products.csv", "aa-products.csv", "aaa-products.csv"]];

                bars.enter().append("rect")
                  .attr("x", 0)
                  .attr("y", function(d) { return y(d.name); })
                  .attr("fill", cirColor)
                  .attr("class", "bar")
                  .on("mouseover", tip.show)
                  .on("mouseout", tip.hide)
                  .on("click", function(d, i) {
                        console.log("clicked chart");

                        // do they want to be able to toggle the sub rings?

                        if (subtoggle === 1) { //sub rings already showing
                             toggleSubrings();
                        } else {
                            subrings.classList.remove("hide");
                                radialProgress(divA)
                                .diameter(150)
                                .value(70)
                                .label("A")
                                .render();
                                radialProgress(divAA)
                                .diameter(150)
                                .value(36)
                                .label("AA")
                                .render();
                                radialProgress(divAAA)
                                .diameter(150)
                                .value(97)
                                .label("AAA")
                                .render();

                                subtoggle = 1;
                        }
                    });

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