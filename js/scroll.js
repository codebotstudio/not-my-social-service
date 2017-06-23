//EL JSON
var json = [
	{"id": 1, "text": "Esta formula es super duper importante!" 
	+ " ya que el termino $\\vec{\\gamma}$ y la variable $\\vec{\\mu}$ son ambas letras griegas y los físicos nos gustan las letras griegas por que hace que nuestro trabajo se vea como si lo copiamos de algún pedazo de metal alienigena en Roswell."}, 
	{"id": 2, "text": "Este es otra anotacion!! desde JSON (kind off)"},
	{"id": 3, "text": "Esta es nueva la acabao de poner"}
];
//STUFF
jQuery(document).ready(function($) {

	//var json = $.getJSON("anotaciones.json");
	$(window).on('scroll', function() {
	    $('.target').each(function() {
	        if($(window).scrollTop() >= $(this).offset().top) {
	            var id = $(this).attr('id');
	            //alert(id);
	            $('#lat-bar ul a').removeClass('highlight');
	            $('#lat-bar ul a[href=#'+ id +']').addClass('highlight');
	        }
	    });
	});

	//Para hacer el scroll suave
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 400, function(){

			window.location.hash = hash;
			});
		} // End if
	});

	$('.formula').click(function(e) {
		var id = $(this).attr('id');
		var text = ""
		//Busca el objeto
		for (var i = 0; i < json.length; i++) {
			if (json[i].id == id) {
				text = json[i].text;
			} 
		}

		//Cambia la barra lateral 
		$('#lat-bar').toggle("fast");
		$('#anbar').text(text);
		$('#anbar').toggle("fast");
		MathJax.Hub.Typeset();

	});
}); //END READY