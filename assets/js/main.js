// /assets/js/main.js

function markNavLinks() {
	// add current
	$('nav li a').filter(function(){
		return this.href.split("/")[3] === location.href.split("/")[3];
	}).addClass('active');
	// remove previous
	$('nav li a').filter(function(){
	  return this.href.split("/")[3] !== location.href.split("/")[3];
	}).removeClass('active');
}

$(function() {
	markNavLinks()
	$(".lazy").unveil(100, function() {
	  $(this).on('load', function() {
	    this.style.opacity = 1;
	  });
	});
});
