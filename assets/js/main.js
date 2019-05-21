var lazyLoadInstance;
var swup;
var readmore_enabled = false;

function currentWindow() {
	return window.location.pathname.split('/')[1]
}

function initJS() {
	markNavLinks();
	lazyLoadInstance = new LazyLoad({});
	addReadmore()
}

function markNavLinks() {
	// add current
	$('nav li a').filter(function(){
	  return this.href === location.href;
	}).addClass('active');
	// remove previous
	$('nav li a').filter(function(){
	  return this.href !== location.href;
	}).removeClass('active');
}

function addReadmore() {
	console.log('added readmore')
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
	readmore_enabled = true;
}

function onPageChange() {
	markNavLinks()
}

$(function() {
	initJS()
  swup = new Swup();

  swup.on('contentReplaced', function () {
    onPageChange();
    initJS()
    if (readmore_enabled == false) {
    	addReadmore()
    }
	});
});