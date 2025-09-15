//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "20 oct 2025 14:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	