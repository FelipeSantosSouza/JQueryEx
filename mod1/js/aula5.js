$(function(){
	/*
	
	$('img').on('error', function(){		
		$('img').attr("src","img/error.png");
	});
*/
/*
	$('img').on('error', function(){		
		var imagem = $(this).attr("src");
		alert('imagem indisponivel ' + imagem)
	});
*/

//	$('img').width($(window).width()).height($(window).height());

	$(window).resize(function(){
	
		$('img').width($(window).width()).height($(window).height());

	});

/*
	$(window).scroll(function(){

		$('img').fadeOut(2000);

	});
*/
/*
	$(window).scroll(function(){

		var topo = $(window).scrollTop();
		alert(topo);

	});
*/
	
	$('img').css('height', '50000px')
	$(window).scroll(function(){

		var topo = $(window).scrollTop();
		if (topo>400){
			$('img').fadeOut(1000);
		}
		else{
			$('img').fadeIn(1000);
		}

	});



});