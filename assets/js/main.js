function initJS() {
	// add current
	$('nav li a').filter(function(){
	  return this.href === location.href;
	}).addClass('active');
	// remove previous
	$('nav li a').filter(function(){
	  return this.href !== location.href;
	}).removeClass('active');

  $('.readmore').readmore({
  	speed: 100,
  	collapsedHeight: 100,
  	moreLink: '<a class="readmore-link">Read more</a>',
	lessLink: '<a class="readmore-link">Read less</a>'
  });
}

$(function() {
	initJS()
  const swup = new Swup();

  swup.on('contentReplaced', function () {
    initJS();
	});
});