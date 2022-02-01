/* 
	boxAcordeon: alamacena cada una de las cajas contenedoras
	de el acordeon.
*/
let boxAcordeon = document.querySelectorAll('.box_acordeon');

/* 
	realizamos un recorrido por cada caja
*/
boxAcordeon.forEach((acordeon1) =>
	/* 
		a cada caja agregamos un evento click 
	*/
	acordeon1.addEventListener('click', () => {
		/* 
			si el recorrido heacho a boxAcordeon contiene la clase active 
			definida en la hoja de estilos la removemos...
		*/
		if (acordeon1.classList.contains('active')) {
			acordeon1.classList.remove('active');
		} else {
			/* 
			de lo contrario hacemos un segundo  recorrido a 
			box_acordeon para remover de este la clase active y 
			añadir al primer recorrido la clase active
		*/
			boxAcordeon.forEach((acordeon2) => acordeon2.classList.remove('active'));
			acordeon1.classList.add('active');
		}
	})
);
