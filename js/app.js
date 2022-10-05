window.onload = function () {

	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});


	$('.tabs__tm').click(function (e) {
		$('.tabs__list-md').toggleClass('tabs__list-act');
		$('.tabs__arrow').toggleClass('tabs__arrow-act');
	});



	$('.tabs__triger_1').click(function (e) {
		e.preventDefault();
		$('.tabs__abs').css('left', '0px');
		$('.tabs__abs').css('width', '260px');
	});
	$('.tabs__triger_2').click(function (e) {
		e.preventDefault();
		$('.tabs__abs').css('left', '260px');
		$('.tabs__abs').css('width', '190px');
	});

	$('.tabs__triger_3').click(function (e) {
		e.preventDefault();
		$('.tabs__abs').css('left', '450px');
		$('.tabs__abs').css('width', '190px');
	});
	$('.tabs__triger_4').click(function (e) {
		e.preventDefault();
		$('.tabs__abs').css('left', '650px');
		$('.tabs__abs').css('width', '260px');
	});




	$('.tabs__triger').click(function(e) {
		e.preventDefault();

		let inner = $(this).text();
		$('.tabs__i').text(inner);


		$('.tabs__arrow').toggleClass('tabs__arrow-act');

		$('.tabs__list-md').toggleClass('tabs__list-act');

		$('.tabs__triger').removeClass('tabs__act-tr');
		$('.tabs__item').removeClass('tabs__act-it');

		$(this).addClass('tabs__act-tr');
		$($(this).attr('href')).addClass('tabs__act-it');

	});

	$('.tabs__triger:first').click();




	$('.ask__triger').click(function(e) {
		$(this).next('.ask__content').slideToggle();
		$(this).children('.ask__plus').toggleClass('ask__plus-act') ;
	})


	$('.menu__burger').click(function (event) {
		$('.menu__burger,.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

};






