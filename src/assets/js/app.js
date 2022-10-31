import $ from 'jquery';
window.jQuery = $;
import ResponsiveImage from './modules/responsive-image';
import ScrollAnimation from './modules/scroll-animation';
import mobileNavigation from './modules/mobile-menu';
import './modules/smooth-scroll';
import throttle from 'lodash.throttle';
import 'slick-carousel'


window.addEventListener('DOMContentLoaded', () => {

	new ResponsiveImage();

	mobileNavigation.init();
	$.smoothScroll();

	const sa = document.querySelectorAll('.sa');
	new ScrollAnimation(sa);

	$('.slick').slick();

	// window.addEventListener('scroll', throttle(function() {
	// 	console.log('throttle');
	// }, 1000));

	$(function(){
		$('.toggle__title').click(function(){
			$(this).toggleClass('selected');
			$(this).next('.toggle__content').slideToggle();
		});
	});

	if ((navigator.userAgent.indexOf('iPhone') > 0) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
		var metalist = document.getElementsByTagName('meta');
		for(var i = 0; i < metalist.length; i++) {
			var name = metalist[i].getAttribute('name');
			if(name && name.toLowerCase() === 'viewport') {
				metalist[i].setAttribute('content', 'width=device-width,initial-scale=1');
				break;
			}
		}
	}

});
