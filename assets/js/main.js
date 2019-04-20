$(function() {
  $('nav li a').filter(function(){
	  return this.href === location.href;
	}).addClass('active');
});