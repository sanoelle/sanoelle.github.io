var $win = $(window);
var $mainBannerSection = $('.main-banner-section');
var $extraordinarySection = $('.extraordinary-section');
var $extraordinary = $('.extraordinary');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	$mainBannerSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});
	
$extraordinarySection.waypoint(function (){
	$extraordinary.addClass('js-extraordinary-fade');
}, { offset: '50%' });