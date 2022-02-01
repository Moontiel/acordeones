/* 
	boxAcordeon: alamacena cada una de las cajas contenedoras
	de el acordeon.
*/
let boxAcordeon = document.querySelectorAll('.box_acordeon');

/* 
	realizamos un recorrido por cada caja 
*/
boxAcordeon.forEach((acordeon) => {
	/* 
		a cada caja agregamos un evento click
	*/
	acordeon.addEventListener('click', () => {
		/* 
			finalmente a cada elemento del recorrido
			le agregamos o quitamos la clase js_acordeon
			definida en la hoja de estilos
		*/
		acordeon.classList.toggle('js_acordeon');
	});
});
