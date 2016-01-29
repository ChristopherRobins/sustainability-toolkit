(function(){
console.log('reg.js fired');
/*
 * Company Form Section
 */

 var facilitiesRadios = document.querySelectorAll('#companyFacilities input[name=facilityRadio]');
 var facilitiesCountDiv = document.querySelector('#facilitiesCount');
 var facilitiesCounter = document.querySelector('#facilitiesCount input[name=facilitiesCount]');
 var companySelect = document.querySelector('#facilityCompany select[name=facilityCompany]');
 var companyName = document.querySelector('#facilityCompanyName input[name=facilityCompanyName]');
 var facilityAddress = document.querySelector('#facilityAddress input[name=facilityAddress]');

 function toggleCount(){
 	if(this.value == 1) {
 		facilitiesCounter.value = 2;
 		facilitiesCountDiv.classList.remove('hidden');
 	} else if(this.value == 0) {
 		facilitiesCounter.value = 1;
 		facilitiesCountDiv.classList.add('hidden');
 	}
 }

 function getCompanyName(){
 	companyName.setAttribute('value', companySelect.options[companySelect.selectedIndex].text+'-'+facilityAddress.value);
 }

if(companySelect!=null){
	companySelect.addEventListener('change', getCompanyName, false);
}
if(facilityAddress!=null){
	facilityAddress.addEventListener('keyup', getCompanyName, false);
}
 for(i=0;i<facilitiesRadios.length;i++){
 	facilitiesRadios[i].addEventListener('change', toggleCount, false);
 }
})();