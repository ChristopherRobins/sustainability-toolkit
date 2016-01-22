(function(){
//console.log('reg.js fired');
/*
 * Company Form Section
 */

 var facilitiesRadios = document.querySelectorAll('#companyFacilities input[name=facilityRadio]');
 var facilitiesCountDiv = document.querySelector('#facilitiesCount');
 var facilitiesCounter = document.querySelector('#facilitiesCount input[name=facilitiesCount]')

 function toggleCount(){
 	if(this.value == 1) {
 		facilitiesCounter.value = 2;
 		facilitiesCountDiv.classList.remove('hidden');
 	} else if(this.value == 0) {
 		facilitiesCounter.value = 1;
 		facilitiesCountDiv.classList.add('hidden');
 	}
 }

 for(i=0;i<facilitiesRadios.length;i++){
 	facilitiesRadios[i].addEventListener('change', toggleCount, false);
 }
})();