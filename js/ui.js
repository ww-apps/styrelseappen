$(document).ready(function() {
	$('.hsb-range').change(function() {
		percent = (this.value - this.min)/(this.max - this.min)
		this.style.backgroundImage = '-webkit-gradient(linear, left top, right top,' +
										'color-stop(' + percent + ', #00377b), ' +
										'color-stop(' + percent + ', #e3e5e6))'
	}).change()
	/*$('#hsb-range-members').change(function() {
		var html = '';
		for(var i = 0; i < this.value; i++) {
			portrait = portraits[Math.floor(Math.random() * portraits.length)]
			html += '<div><img src="img/' + portrait + '.png" /></div>'
		}
		$('#hsb-grid-members > .hsb-grid-inner').html(html)
		$('#hsb-grid-members > .hsb-grid-inner')[0].setAttribute('data-children', this.value)
	}).change()*/
})
