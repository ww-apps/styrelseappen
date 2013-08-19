// JS is only used to add the <div>s
$(document).ready(function() {
	var switches = document.querySelectorAll('input[type="checkbox"].ios-switch');
	
	for (var i=0, sw; sw = switches[i++]; ) {
		var div = document.createElement('div');
		div.className = 'switch';
		sw.parentNode.insertBefore(div, sw.nextSibling);
	}
})

/*$(document).ready(function() {
	$('input.ios-switch').after('<div class="switch"></div>')
})*/
