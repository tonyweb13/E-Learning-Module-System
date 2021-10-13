$(document).ready(function() {

	$('#province').change(function() {
		console.log($(this).val());
		$.ajax({
		    type: "POST",
		    url: "/getcities",
		    data: {
		        id: $(this).val()
		    },
		    dataType: 'JSON',
		    success: function (res) {
		        console.log(res);
	        	//$('#city').removeAttr('disabled');
	        	$('#city').empty();
	        	for (var i = 0; i <= res.length - 1; i++) {
	        		$('#city').append(`
	        			<option value="${res[i].id}">${res[i].city}</option>
	        		`);
	        	}
		        
		    },
		    error: function(error) {
            	showHttpErrorAlert(error);
        	}
		});
	});
	$('#city').change(function() {
			console.log($(this).val());
			$.ajax({
			    type: "POST",
			    url: "/getzipcodes",
			    data: {
			        id: $(this).val()
			    },
			    dataType: 'JSON',
			    success: function (res) {
			        console.log(res);
	        		$('#zipcode').removeAttr('disabled');
	        		$('#zipcode').empty();
	        		for (var i = 0; i <= res.length - 1; i++) {
	        			$('#zipcode').append(`
	        				<option value="${res[i].id}">${res[i].area} - ${res[i].zip_code_number}</option>
	        			`);
	        		}
			        
			    },
			    error: function(error) {
	            	showHttpErrorAlert(error);
	        	}
		});

	});


});