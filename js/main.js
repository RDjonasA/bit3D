const tarjeta = document.querySelector('#tarjeta'),
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	  formulario = document.querySelector('#formulario-tarjeta'),
	  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  logoMarca = document.querySelector('#logo-marca'),
	  firma = document.querySelector('#tarjeta .firma p'),
	  firma2 = document.querySelector('#tarjeta .firma2 p'),
	  	  firma3 = document.querySelector('#tarjeta .firma3 p'),
	  	  	  firma4 = document.querySelector('#tarjeta .firma4 p'),
	  	firma5 = document.querySelector('#tarjeta .firma5 p'),
	  		  	firma6 = document.querySelector('#tarjeta .firma6 p'),
	  		  		  	firma7 = document.querySelector('#tarjeta .firma7 p'),
	  		  		  		  	firma8 = document.querySelector('#tarjeta .firma8 p'),
	  ccv = document.querySelector('#tarjeta .ccv');
	  var numeroCaracteres;


// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
});





// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;
	firma2.textContent = valorInput;
	firma3.textContent = valorInput;
	firma4.textContent = valorInput;
		firma5.textContent = valorInput;
			firma6.textContent = valorInput;
				firma7.textContent = valorInput;
					firma8.textContent = valorInput;


	if(valorInput == ''){
		nombreTarjeta.textContent = 'Bit 3D';
	}
	mostrarFrente();
});


// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value

	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');
ccv.textContent = formulario.inputCCV.value;
	if(parseInt(ccv.textContent, 10) <= 7){ ccv.textContent = nombreTarjeta.textContent.length * 25;	}
	if(parseInt(ccv.textContent, 10) <= 10){ ccv.textContent = nombreTarjeta.textContent.length * 80;	}
	if(parseInt(ccv.textContent, 10) <= 15){ ccv.textContent = nombreTarjeta.textContent.length * 100;	}
	if(parseInt(ccv.textContent, 10) <= 20){ ccv.textContent = nombreTarjeta.textContent.length * 250;	}
});