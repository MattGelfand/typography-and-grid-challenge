/*window.onload = function() {
    baseliner = new Baseliner({'gridColor': 'grey', 'gridHeight': 28 });
};
*/
$(document).ready(function(){
	$('.row > div').on('click', function(){
	$(this).find('ul').toggleClass('visible');
	return false; 
	});
});

/*
$(document).ready(function(){
	$('a').on('click', function(){
	return false; 
	});
});
*/