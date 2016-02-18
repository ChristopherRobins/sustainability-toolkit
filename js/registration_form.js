(function(){
console.log('reg.js fired');
/*
 * Company Form Section
 */

 var base_url = 'http://localhost:8888/sustainability-toolkit/';

 var facilitiesRadios = document.querySelectorAll('#companyFacilities input[name=facilityRadio]');
 var facilitiesCountDiv = document.querySelector('#facilitiesCount');
 var facilitiesCounter = document.querySelector('#facilitiesCount input[name=facilitiesCount]');
 var companySelect = document.querySelector('#facilityCompany select[name=facilityCompany]');
 var companyName = document.querySelector('#facilityCompanyName input[name=facilityCompanyName]');
 var facilityAddress = document.querySelector('#facilityAddress input[name=facilityAddress]');
 var userPrivilege = document.querySelector('#userPrivileges select[name=privileges]');
 var userCompanyDiv = document.querySelector('#userCompany');
 var userCompany = document.querySelector('#userCompany select[name=userCompany]');
 var userFacilityDiv = document.querySelector('#userFacility');
 var userFacility = document.querySelector('#userFacility select[name=userFacility]')

 function toggleCount(){
 	if(this.value == 1) {
 		facilitiesCounter.value = 2;
 		facilitiesCountDiv.classList.remove('hidden');
 	} else if(this.value == 0) {
 		facilitiesCounter.value = 1;
 		facilitiesCountDiv.classList.add('hidden');
 	}
 }

 function companyToggle(){
 	console.log(this);
 	console.log(userPrivilege.value);
 	if(userPrivilege.value == 1){
 		userCompany.value='1';
 		userFacility.innerHTML = '<option type="hidden" value="1">Tavares</option>';
 		userFacility.value='1';
 		if(!userCompanyDiv.classList.contains('hidden')){
 			userCompanyDiv.classList.toggle('hidden');
 		}
 		if(!userFacilityDiv.classList.contains('hidden')){
			userFacilityDiv.classList.toggle('hidden');
		}
 	} else {
 		if(userCompanyDiv.classList.contains('hidden')){
 			userCompanyDiv.classList.toggle('hidden');
 		}
 	}
 }

 function getCompanyName(){
 	companyName.setAttribute('value', companySelect.options[companySelect.selectedIndex].text+'-'+facilityAddress.value);
 }

 function facilitySearch(){
 	console.log(this.value);
 	userFacility.innerHTML = "";
 	if(!userFacilityDiv.classList.contains('hidden')){
		userFacilityDiv.classList.toggle('hidden');
	}

 	var getData = {
        companyId: this.value
      };

 	$.ajax({
		type: "POST",
		url: base_url + "index.php/home/getFacilities",
		data: getData,
		dataType: 'json',
		success: function(data) {
			if(userFacilityDiv.classList.contains('hidden') && data.length > 0){
				userFacilityDiv.classList.toggle('hidden');
				for(i=0;i<data.length;i++){
					userFacility.innerHTML += '<option value="'+data[i].facility_id+'">'+data[i].facility_name+'</option>';
				}
			}
		},
		error: function(){
			alert("failed");
		}
	});
 }

if(userCompany!=null){
	userCompany.addEventListener('change', facilitySearch, false);
}

if(userPrivilege!=null){
	userPrivilege.addEventListener('change', companyToggle, false);
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
