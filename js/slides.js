var main = function() {

	var paused = true

	$('.arrowR').click(function() {
		paused = true;
		$('#slideshow > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow');
	});
		
	$('.arrowL').click(function() {
		paused = true;
		$('#slideshow > div:last')
		.fadeIn(1000)
		.prependTo('#slideshow')
		.next()
		.fadeOut(1000)
		.end();
	});

	$('.arrowR2').click(function() {
		paused = true;
		$('#slideshow2 > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#slideshow2');
	});
		
	$('.arrowL2').click(function() {
		paused = true;
		$('#slideshow2 > div:last')
		.fadeIn(1000)
		.prependTo('#slideshow2')
		.next()
		.fadeOut(1000)
		.end();
	});
	
	setInterval(function() {
		if (paused === false) { 
			$('#slideshow > div:first')
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('#slideshow');
		};
	},  5000);
   
	
};

$(document).ready(main);
