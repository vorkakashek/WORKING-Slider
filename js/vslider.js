'use strict'

console.log('vslider.js');

const swiper = new Swiper('.main-banner__slider', {
	// Optional parameters
	speed: 600,
	direction: 'vertical',
	loop: true,
	loopAdditionalSlides: 0,
	spaceBetween: 0,
	grabCursor: true,
	slidesPerView: "auto",
	effect: "coverflow",
	initialSlide: 4,
	centeredSlides: true,
	coverflowEffect: {
		rotate: 10,
		stretch: 0,
		scale: 1,
		depth: 30,
		modifier: 1.25,
		slideShadows: false,
	},
	mousewheel: {
		eventsTarget: ".main-banner__slider",
		sensitivy: 2,
	},
	slideToClickedSlide: true,
	loopPreventsSlide: true,
});


swiper.on('slideChange', function () {
	const activeSlide = swiper.slides[swiper.activeIndex].querySelector('.slide-content').innerText;

	document.querySelector('.slide-content-copy').innerText = activeSlide;
	document.querySelector('.main-banner__slider__overlay').style.width = document.querySelector('.slide-content-copy').clientWidth + 40 + "px";

});