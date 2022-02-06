/* 
	$contentAcordeon: alamacena cada uno de los elementos html
	que tienen la clase content_accordeon.
*/
let $contentAccordeon = document.querySelectorAll('.content_accordeon');

/* 
	realizamos un recorridocon forEach por cada elemento 
*/
$contentAccordeon.forEach((acordeon) => {
	/* 
		agregamos a cada elemento un evento click
	*/
	acordeon.addEventListener('click', () => {
		/* 
			finalmente a cada elemento agregamos o quitamos 
			la clase js_show_accordeon definida en la hoja de estilos
		*/
		acordeon.classList.toggle('js_show_accordeon');
	});
});
