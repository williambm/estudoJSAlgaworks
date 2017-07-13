/**
 * http://usejsdoc.org/
 */
$(function(){
	$.ajax({
		url:'http://localhost:8080/estados',
		method:'GET',
		dataType:'jsonp',
	});

});


 