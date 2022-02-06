/* 
	$contentAcordeon: alamacena cada uno de los elementos html
	que tienen la clase content_accordeon.
*/
let $contentAccordeon = document.querySelectorAll('.content_accordeon');

/* 
	realizamos un recorridocon forEach por cada elemento 
*/
$contentAccordeon.forEach((acordeon1) =>
	/* 
		agregamos a cada elemento un evento click
	*/
	acordeon1.addEventListener('click', () => {
		/* 
			si el recorrido hecho a cada elemento tiene la clase
			js_show_accordeon que definimos en la hoja de estilo,
			la removemos...
		*/
		if (acordeon1.classList.contains('js_show_accordeon')) {
			acordeon1.classList.remove('js_show_accordeon');
		} else {
			/* 
				de lo contrario hacemos un segundo recorrido forEach 
				a cada elemento para remover de este la clase 
				js_show_active y haciendo uso del primer recorrido
				añadimos la clase js_show_accordeon definida en la
				hoja de estilos
			*/
			$contentAccordeon.forEach((acordeon2) => acordeon2.classList.remove('js_show_accordeon'));
			acordeon1.classList.add('js_show_accordeon');
		}
	})
);
