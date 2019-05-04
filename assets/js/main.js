var readmore_enabled = false;
var lazyLoad_enabled = false;
var lazyLoadInstance;

function currentWindow() {
	return window.location.pathname.split('/')[1]
}
function initJS() {
	// add current
	$('nav li a').filter(function(){
	  return this.href === location.href;
	}).addClass('active');
	// remove previous
	$('nav li a').filter(function(){
	  return this.href !== location.href;
	}).removeClass('active');

	if (!readmore_enabled &&  currentWindow() == 'our-team') {
	  $('.readmore').readmore({
	  	speed: 100,
	  	collapsedHeight: 100,
	  	moreLink: '<a class="readmore-link">Read more</a>',
			lessLink: '<a class="readmore-link">Read less</a>',
			afterToggle: function(trigger, element, expanded) {
        if(! expanded) { // The "Close" link was clicked
          $('html, body').animate({scrollTop: element.offset().top}, {duration: 100});
        }
      }
	  });
	  readmore_enabled = true
	}
	if (!lazyLoad_enabled) {
		lazyLoadInstance = new LazyLoad({});
		lazyLoad_enabled = false
	}
}

$(function() {
	initJS()
  const swup = new Swup();

  swup.on('contentReplaced', function () {
    initJS();
	});
});