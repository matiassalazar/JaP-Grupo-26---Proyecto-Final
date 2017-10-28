$(document).ready(function(){
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;
	var data = [{title: '', text: '', url: 'http://www.eminem.com/', nombre: 'eminem'}, {title: '', text: '', url: 'https://linkinpark.com/home', nombre: 'linkinPark'}, {title: '', text: '', url: 'http://www.drakeofficial.com/', nombre: 'drake'}, {title: '', text: '', url: 'https://www.theweeknd.com/', nombre: 'theWeeknd'}];

	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
		$('.slider-botones').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.slider li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide
	$('.slider-botones li:first').css({'color': '#EAC435'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.slider-botones li').click(sliderbotones);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);
	$('#goToSite').click(goToSite);
	$('#goToCase').click(goToCase);
	

	// FUNCIONES =========================================================

	function goToSite(){
		//javascript abrir nueva ventana con url del array data con posicion sliderbotonesPos - 1
		var url = data[imgPos - 1].url;
		window.open(url,'_blank');		
	}

	function goToCase(){
		var pagina = data[imgPos - 1].nombre + '.html';
		window.open(pagina,'_blank');
	}

	function sliderbotones(){
		var sliderbotonesPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ sliderbotonesPos +')').fadeIn(); // Mostramos el Slide seleccionado
		
		// Dandole estilos a la paginacion seleccionada
		$('.slider-botones li').css({'color': '#858585'});
		$(this).css({'color': '#EAC435'});

		imgPos = sliderbotonesPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}
		var sliderActual = $('.slider-botones li:nth-child(' + imgPos +')');

		$('.slider-botones li').css({'color': '#858585'});
		$('.slider-botones li:nth-child(' + imgPos +')').css({'color': '#EAC435'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
		
	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider-botones li').css({'color': '#858585'});
		$('.slider-botones li:nth-child(' + imgPos +')').css({'color': '#EAC435'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

});