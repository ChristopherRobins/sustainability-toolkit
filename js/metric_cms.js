(function(){
  console.log('metric cms script fired');
  var cmsButton = document.querySelector("#cmsIcon");
  var addMetricDiv = document.querySelector("#addMetric");
  var addMetricInput = document.querySelector('#addMetric input');
  var addMetricButton = document.querySelector('#addMetric button');

  function openCms(){
    var customMetrics = document.querySelectorAll("#metrics li:not([data-editable='0'])");
    if(this.getAttribute('data-cms') == 'closed'){
      toggleCmsOn();
    }else{
      toggleCmsOff();
    }
  }

  function disableMetric(e){
    console.log(this.parentNode);
    if(confirm("Are you sure you'd like to disable '"+this.parentNode.textContent+"' metric?")) {
			console.log('confirmed');
      metricData = {
  			theId: this.parentNode.getAttribute('data-metric')
  	  };
			$.ajax({
				type: "POST",
				url: base_url + "index.php/home/disableMetric",
				data: metricData,
				success: function(data) {
					console.log('disabled metric '+data);
					getMetrics(titleHeader.getAttribute('criteria'));
				},
				error: function(data){
				console.log('failed');
				}
			});
      toggleCmsOff();
  	}else{
  		console.log('nothing to see here');
  	}
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
  				},
          complete: function(data){
            toggleCmsOff();
          }
  			});
  		}
  	}else{
  		console.log('nothing to see here');
  	}
  }

  function toggleCmsOn(){
    cmsButton.setAttribute('data-cms', 'open');
    addMetricDiv.classList.remove('hidden');
    var customMetrics = document.querySelectorAll("#metrics li:not([data-editable='0'])");
    for(i=0;i<customMetrics.length;i++){
      console.log(customMetrics[i]);
      var button = document.createElement("button");
      button.setAttribute("class", "removeMetric");
      var node = document.createTextNode("-");
      button.appendChild(node);
      button.addEventListener('click', disableMetric, false);
      customMetrics[i].appendChild(button);
    }
  }

  function toggleCmsOff(){
    addMetricDiv.classList.add('hidden');
    cmsButton.setAttribute('data-cms', 'closed');
    var customMetrics = document.querySelectorAll("#metrics li:not([data-editable='0'])");
    for(i=0;i<customMetrics.length;i++){
      customMetrics[i].removeChild(customMetrics[i].childNodes[1]);
    }
  }

  addMetricButton.addEventListener("click", addMetric, false);
  cmsButton.addEventListener('click', openCms, false);
})();
