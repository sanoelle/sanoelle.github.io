var $win = $(window);
var $mainBannerSection = $('.main-banner-section');
var $extraordinarySection = $('.extraordinary-section');
var $extraordinary = $('.extraordinary');
var $topBtn = $('.top-btn');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	$mainBannerSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	$extraordinarySection.css('background-position', 'center ' + scrollPos / 1 + 'px');
});

	
$extraordinarySection.waypoint(function (){
	$extraordinary.addClass('js-extraordinary-fade');
}, { offset: '50%' });

$topBtn.localScroll();

$('.about-section').waypoint(function (direction) {
	if(direction=="down"){
		$topBtn.attr('data-state', 'visible');
	} else {
		$topBtn.attr('data-state', 'hidden');
	}
});

	
//$(document).ready(function() {
	//$(window).scroll(function() {
		//if ($(this).topButton() > 200 {
			//$('.top-button').fadeIn(200);
		//} else {
			//$('.top-button').fadeOut(200);
		//}
	//});