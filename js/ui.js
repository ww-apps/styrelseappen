$(document).ready(function() {
	$('.hsb-range').change(function() {
		percent = (this.value - this.min)/(this.max - this.min)
		this.style.backgroundImage = '-webkit-gradient(linear, left top, right top,' +
										'color-stop(' + percent + ', #00377b), ' +
										'color-stop(' + percent + ', #e3e5e6))'
	}).change()
	$('[data-role="page"]').css('min-height', '')
})
