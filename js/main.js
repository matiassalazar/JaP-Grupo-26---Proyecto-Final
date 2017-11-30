$(document).ready(function(){
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;
	var data = [{title: 'Eminem', text: '', url: 'http://www.eminem.com/', html: 'eminem.html'}, {title: 'Linkin Park', text: '', url: 'https://linkinpark.com/home', html: 'linkinpark.html'}, {title: 'Drake', text: '', url: 'http://www.drakeofficial.com/', html: 'drake.html'}, {title: 'The Weeknd', text: '', url: 'https://www.theweeknd.com/', html: 'theweeknd.html'}];

	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.slider li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide
	$('.pagination li:first').css({'color': '#EAC435'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);
	$('#goToSite.button').click(goToSite);
	$('#goToCase.button').click(goToCase);
	

	// FUNCIONES =========================================================

	function goToSite(){
		//javascript abrir nueva ventana con url del array data con posicion paginationPos - 1
		var url = data[imgPos - 1].url;
		window.open(url,'_blank');		
	}

	function goToCase(){
		var html = data[imgPos - 1].html;
		window.open(html,'_parent');		
	}

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado
		
		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#EAC435'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

});