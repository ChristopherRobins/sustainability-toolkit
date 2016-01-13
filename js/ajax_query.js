(function(){
	console.log('fired');

	var ajaxCall = $.ajax({
		url : 'caller.php',
		type : 'GET',
		dataType : 'JSON'
	})
	.done(successFn)
	.fail(errorFn)
	.always(function(){ console.log("You sent a request!" ); });

	function successFn(result){
		console.log(result);
	}

	function errorFn(xhr, status, strError){
		console.log("your ajax call broke!");
	}

	console.log(ajaxCall);
})();