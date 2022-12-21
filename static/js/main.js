/*-----------------------------------------------------------------------------------
    Template Name: Cantus Agency HTML Template
    Template URI: https://webtend.biz/cantus
    Author: WebTend
    Author URI: https://www.webtend.com
    Version: 1.0

	Note: This is Main js File For custom and jQuery plugins activation Code..
-----------------------------------------------------------------------------------

/*---------------------------
	JS INDEX
	===================
    01. Preloader
	02. MeanMenu
	03. OnePage Nav
	04. OFF Canvas Menu
	05. Sticky
	06. Search Form
	07. Feature Box Hover Effect
	08. Project Image Popup & Isotope
	09. Service Boxes Hover Effect
	10. Team Slider Active
	11. Counter UP
	12.  Video Popup
	13. Testimonial Slider Activation
	14. Init Wow js
	15. Scroll Event
-----------------------------*/

$(function() {
	'use strict';

	// ===== 01. Preloader
	$(window).on('load', function(event) {
		$('#preloader')
			.delay(500)
			.fadeOut(500);
	});

	// ===== 02. MeanMenu
	$('header .main-mneu').meanmenu({
		meanMenuContainer: '.mobilemenu',
		meanScreenWidth: '991',
		meanRevealPosition: 'right'
	});

	// ===== 03. OnePage Nav
	var top_offset = $('header').height();
	$('.main-mneu ul, .mobilemenu ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset
	});

	// ===== 04. OFF Canvas Menu
	$('.off-canver-menu').on('click', function(e) {
		e.preventDefault();
		$('.off-canvas-wrap').addClass('show-off-canvas');
		$('.overly').addClass('show-overly');
	});
	$('.off-canvas-close').on('click', function(e) {
		e.preventDefault();
		$('.overly').removeClass('show-overly');
		$('.off-canvas-wrap').removeClass('show-off-canvas');
	});
	$('.overly').on('click', function(e) {
		$(this).removeClass('show-overly');
		$('.off-canvas-wrap').removeClass('show-off-canvas');
	});

	// ===== 05. Sticky
	$(window).on('scroll', function(event) {
		var scroll = $(window).scrollTop();
		if (scroll < 110) {
			$('header').removeClass('sticky');
		} else {
			$('header').addClass('sticky');
		}
	});

	//===== 06. Search Form
	$('.search-icon').on('click', function(e) {
		e.preventDefault();
		$('.search-form').toggleClass('show-search');
	});

	//===== 07. Feature Box Hover Effect
	$('.feature-loop').on('mouseover', '.feature-box', function() {
		$('.feature-box.active').removeClass('active');
		$(this).addClass('active');
	});

	//===== 08. Project Image Popup & Isotope
	var grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-item'
		}
	});
	$('.portfolio-menu ul li').on('click', function() {
		$(this)
			.siblings('.active')
			.removeClass('active');
		$(this).addClass('active');
		var filterValue = $(this).attr('data-filter');
		grid.isotope({ filter: filterValue });
	});
	$('.image-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	//===== 09. Service Boxes Hover Effect
	$('.service-loop').on('mouseover', '.service-box', function() {
		$('.service-box.active').removeClass('active');
		$(this).addClass('active');
	});

	//===== 10. Team Slider Active
	var teamSlider = $('#teamSlider');
	teamSlider.slick({
		autoplay: true,
		arrows: false,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	//===== 11. Counter UP
	$('.counter').counterUp({
		delay: 10,
		time: 3000
	});

	//===== 12.  Video Popup
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});

	//===== 13. Testimonial Slider Activation
	var testimonialSlide = $('#testimonialSlide');
	var testimonialAuthor = $('#testimonialAuthor');
	testimonialSlide.slick({
		autoplay: false,
		arrows: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:
			'<span class="slick-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></span>',
		nextArrow:
			'<span class="slick-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></span>',
		asNavFor: testimonialAuthor
	});
	testimonialAuthor.slick({
		autoplay: false,
		arrows: false,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: testimonialSlide,
		focusOnSelect: true
	});

	//===== 14. Init Wow js
	new WOW().init();

	//===== 15. Scroll Event
	$(window).on('scroll', function() {
		var scrolled = $(window).scrollTop();
		if (scrolled > 300) $('.go-top').addClass('active');
		if (scrolled < 300) $('.go-top').removeClass('active');
	});
	$('.go-top').on('click', function() {
		$('html, body').animate(
			{
				scrollTop: '0'
			},
			1200
		);
	});
});
