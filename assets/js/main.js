$(function() {
  $('nav li a').filter(function(){
	  return this.href === location.href;
	}).addClass('active');

  $('.readmore').readmore({
  	speed: 100,
  	collapsedHeight: 100,
  	moreLink: '<a href="#" class="readmore-link">Read more</a>',
	lessLink: '<a href="#" class="readmore-link">Read less</a>'
  });
});