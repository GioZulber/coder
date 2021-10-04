const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=70",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
		"x-rapidapi-key": "aac0ac2a5bmsh659049576fd54bcp1b035fjsn88bfa4a855c9"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
	let arrayDatos = response.results;

	//Filtre las mas caras.
	let arrayExpensive = arrayDatos.filter(elemento => elemento.retailPrice >= 190 && elemento.media.smallImageUrl != null);
		// console.log(arrayExpensive);
		//Ahora voy a usar jQuery para cargar las cards desde JS
		arrayExpensive.forEach(elemento => {
			$("#divCardsIndex").append(`
				<div class="col fila__cards">
					<div class="card fila__cards__hover" style="width: 18rem;">
						  <img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
						<div class="card-body">
							<h6 class="card-title"> ${elemento.title} </h6>					
							<p class="card-text">$${elemento.retailPrice}</p>
							<p class="card-text pBlanco">${elemento.colorway}</p>
							<a href="#" class="btn fila__cards__button elementoId">Ver detalles.</a>
						</div>
					</div>
				  </div>
				`)		
		});
	//Filtre por precio mayor a 190 y por genero de hombre. 12 pares
    let arrayHombres = arrayDatos.filter(elemento => elemento.retailPrice >= 180 && elemento.gender == "men" && elemento.media.smallImageUrl != null);	 	
		// console.log(arrayHombres);
		arrayHombres.forEach(elemento => {
			$("#divCardsHombre").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h6 class="card-title"> ${elemento.title} </h6>
						<p class="card-text">$${elemento.retailPrice}</p>
						<p class="card-text pBlanco">${elemento.colorway}</p>
						<a href="#" class="btn fila__cards__button elementoIdPages">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)	
		 });
	//Filtre en categoria para niños pequeños. 3 pares 
	let arrayToddler = arrayDatos.filter(elemento => elemento.gender == "toddler" && elemento.media.smallImageUrl != null);		
		// console.log(arrayToddler);
		arrayToddler.forEach(elemento => {
			$("#divCardsChild").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h6 class="card-title"> ${elemento.title} </h6>
						<p class="card-text">$${elemento.retailPrice}</p>
						<p class="card-text pBlanco">${elemento.colorway}</p>
						<a href="#" class="btn fila__cards__button elementoIdPages">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)
		});

	//Filtre en categoria para niños. 5 pares
	let arrayChild = arrayDatos.filter(elemento => elemento.gender == "child" && elemento.media.smallImageUrl != null);
		// console.log(arrayChild);
		arrayChild.forEach(elemento => {
			$("#divCardsChild").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h6 class="card-title"> ${elemento.title} </h6>
						<p class="card-text">$${elemento.retailPrice}</p>
						<p class="card-text pBlanco">${elemento.colorway}</p>
						<a href="#" class="btn fila__cards__button elementoIdPages">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)	
		});
	//Filtre en categoria para mujer. 5 pares, 3 dañados, asi que los tuve que cambiar
	let arrayMujeres = arrayDatos.filter(elemento => elemento.retailPrice >= 90 && elemento.retailPrice <= 120 && elemento.media.smallImageUrl != null)		
		// console.log(arrayMujeres);
		arrayMujeres.forEach(elemento => {
			$("#divCardsMujer").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h6 class="card-title"> ${elemento.title} </h6>
						<p class="card-text">$${elemento.retailPrice}</p>
						<p class="card-text pBlanco">${elemento.colorway}</p>
						<a href="#" class="btn fila__cards__button elementoIdPages">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)	
		});


	
		
	//Filtre las mas baratas. 8 pares
	let arrayCheap = arrayDatos.filter(elemento => elemento.retailPrice <=80 && elemento.retailPrice >= 50 && elemento.media.smallImageUrl != null);	
		// console.log(arrayCheap);
		arrayCheap.forEach(elemento => {
			$("#divCardsOferta").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h6 class="card-title"> ${elemento.title} </h6>
						<p class="card-text">$${elemento.retailPrice - 15}</p>
						<p class="card-text pBlanco">${elemento.colorway}</p>
						<a href="#" class="btn fila__cards__button elementoIdPages">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)
		});


	//Aca empiezo a filtrar por marca

	//Filtre por marca nike y que el precio sea menor a 120. 8 pares
	let arrayNike = arrayDatos.filter(elemento => elemento.brand == "Nike" && elemento.retailPrice <= 140 && elemento.media.smallImageUrl != null);
		// console.log(arrayNike);
		arrayNike.forEach(elemento => {
			$("#divCardsNike").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h6 class="card-title"> ${elemento.title} </h6>
						<p class="card-text">$${elemento.retailPrice}</p>
						<p class="card-text pBlanco">${elemento.colorway}</p>
						<a href="#" class="btn fila__cards__button elementoIdMarcas">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)
		});
	//Filtre por Marca Jordan y que su valor sea mayor a $100.  
	let arrayJordan = arrayDatos.filter(elemento => elemento.brand == "Jordan" && elemento.retailPrice >= 100 && elemento.media.smallImageUrl != null);
		// console.log(arrayJordan);
		arrayJordan.forEach(elemento => {
			$("#divCardsJordan").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h6 class="card-title"> ${elemento.title} </h6>
						<p class="card-text">$${elemento.retailPrice}</p>
						<p class="card-text pBlanco">${elemento.colorway}</p>
						<a href="#" class="btn fila__cards__button elementoIdMarcas">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)
		});
	//Filtre por marca adidas. 5 pares
	let arrayAdidas = arrayDatos.filter(elemento => elemento.brand == "adidas" && elemento.media.smallImageUrl != null);
		// console.log(arrayAdidas);
		arrayAdidas.forEach(elemento => {
			$("#divCardsAdidas").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h6 class="card-title"> ${elemento.title} </h6>
						<p class="card-text">$${elemento.retailPrice}</p>
						<p class="card-text pBlanco">${elemento.colorway}</p>
						<a href="#" class="btn fila__cards__button elementoIdMarcas">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)
		});
	//Filtre por marca Puma. 5 pares
	let arrayPuma = arrayDatos.filter(elemento => elemento.brand == "Puma" && elemento.media.smallImageUrl != null);
		// console.log(arrayPuma);
		arrayPuma.forEach(elemento => {
			$("#divCardsPuma").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h6 class="card-title"> ${elemento.title} </h6>
						<p class="card-text">$${elemento.retailPrice}</p>
						<p class="card-text pBlanco">${elemento.colorway}</p>
						<a href="#" class="btn fila__cards__button elementoIdMarcas">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)
		});

	//Carrusel de cards
	//Em cada filter quise que queden 3 pares.
	let arrayCarrusel = arrayDatos.filter(elemento => elemento.retailPrice == 200 && elemento.media.smallImageUrl != null && elemento.brand != "adidas");
		console.log(arrayCarrusel);
		arrayCarrusel.forEach(elemento =>{
			$('#cardsCarrusel').append(`
			<div class="col-sm-12 col-lg-4">
			<div class="card card__margin" style="width: 8rem;">
			  <img src= ${elemento.media.smallImageUrl} alt= ${elemento.shoe}>
			  <div class="card-body">
				<h6 class="card-title h6-card"> ${elemento.title}</h6>
				<p class="card-text">$${elemento.retailPrice}</p>
				<p class="card-text pBlanco">${elemento.colorway}</p>
				<a href="#" class="btn carousel__button elementoIdCarrouel elementoIdCarrouselMarcas">Ver detalles.</a>
			  </div>
			</div>
		  </div>`)
		})
	let arrayCarrusel1 = arrayDatos.filter(elemento => elemento.retailPrice >= 225 && elemento.media.smallImageUrl != null);
		console.log(arrayCarrusel1);
		arrayCarrusel1.forEach(elemento =>{
			$('#cardsCarrusel1').append(`
			<div class="col-sm-12 col-lg-4">
			<div class="card card__margin" style="width: 8rem;">
			  <img src= ${elemento.media.smallImageUrl} alt= ${elemento.shoe}>
			  <div class="card-body">
				<h6 class="card-title h6-card"> ${elemento.title}</h6>
				<p class="card-text">$${elemento.retailPrice}</p>
				<p class="card-text pBlanco">${elemento.colorway}</p>
				<a href="#" class="btn carousel__button elementoIdCarrouel elementoIdCarrouselMarcas">Ver detalles.</a>
			  </div>
			</div>
		  </div>`)
		})	
	let arrayCarrusel2 = arrayDatos.filter(elemento => elemento.retailPrice >= 80 && elemento.retailPrice <= 90 && elemento.media.smallImageUrl != null);
		console.log(arrayCarrusel2);
		arrayCarrusel2.forEach(elemento =>{
			$('#cardsCarrusel2').append(`
			<div class="col-sm-12 col-lg-4">
			<div class="card card__margin" style="width: 8rem;">
			  <img src= ${elemento.media.smallImageUrl} alt= ${elemento.shoe}>
			  <div class="card-body">
				<h6 class="card-title h6-card"> ${elemento.title}</h6>
				<p class="card-text">$${elemento.retailPrice}</p>
				<p class="card-text pBlanco">${elemento.colorway}</p>
				<a href="#" class="btn carousel__button elementoIdCarrouel elementoIdCarrouselMarcas">Ver detalles.</a>
			  </div>
			</div>
		  </div>`)
		})	

	//En esta parte, una vez que el usuario haga click en el boton "ver detalles", se creara una card con los datos del par clickeado, todo esto en un html a parte
	//Creamos el enveto click
	$('.elementoId').click( (e) => {
		//Declaramos el array vacio
		let arrayComprar = [];
		console.log(e.target.parentNode.children)
		//Creamos el objeto con la card clickeada		
		arrayComprar.push({
			//Con esto llegamos al innerText, al innerText del precio y tambein obtuvimos la imagen
			"nombre": e.target.parentNode.children[0].innerText,
			"descripcion": e.target.parentNode.children[2].innerText,
			"precio": e.target.parentNode.children[1].innerText,
			"img": e.target.parentNode.parentNode.children[0].currentSrc,
		});
		//Lo guardamos en el storage
		localStorage.setItem("arrayComprar", JSON.stringify(arrayComprar));
		window.location.href="./pages/detalles.html";
		
		console.log(arrayComprar);	
	});

	$('.elementoIdPages').click( (e) => {
		//Declaramos el array vacio
		let arrayComprar = [];
		console.log(e.target.parentNode.children)
		//Creamos el objeto con la card clickeada		
		arrayComprar.push({
			//Con esto llegamos al innerText, al innerText del precio y tambein obtuvimos la imagen
			"nombre": e.target.parentNode.children[0].innerText,
			"descripcion": e.target.parentNode.children[2].innerText,
			"precio": e.target.parentNode.children[1].innerText,
			"img": e.target.parentNode.parentNode.children[0].currentSrc,
		});
		//Lo guardamos en el storage
		localStorage.setItem("arrayComprar", JSON.stringify(arrayComprar));
		window.location.href="detalles.html";
		
		console.log(arrayComprar);	
	});
	$('.elementoIdMarcas').click( (e) => {
		//Declaramos el array vacio
		let arrayComprar = [];
		console.log(e.target.parentNode.children)
		//Creamos el objeto con la card clickeada		
		arrayComprar.push({
			//Con esto llegamos al innerText, al innerText del precio y tambein obtuvimos la imagen
			"nombre": e.target.parentNode.children[0].innerText,
			"descripcion": e.target.parentNode.children[2].innerText,
			"precio": e.target.parentNode.children[1].innerText,
			"img": e.target.parentNode.parentNode.children[0].currentSrc,
		});
		//Lo guardamos en el storage
		localStorage.setItem("arrayComprar", JSON.stringify(arrayComprar));
		window.location.href="../detalles.html";
		
		console.log(arrayComprar);	
	});
	$('.elementoIdCarrouel').click( (e) => {
		//Declaramos el array vacio
		let arrayComprar = [];
		console.log(e.target.parentNode.children)
		//Creamos el objeto con la card clickeada		
		arrayComprar.push({
			//Con esto llegamos al innerText, al innerText del precio y tambein obtuvimos la imagen
			"nombre": e.target.parentNode.children[0].innerText,
			"descripcion": e.target.parentNode.children[2].innerText,
			"precio": e.target.parentNode.children[1].innerText,
			"img": e.target.parentNode.parentNode.children[0].currentSrc,
		});
		//Lo guardamos en el storage
		localStorage.setItem("arrayComprar", JSON.stringify(arrayComprar));
		window.location.href="./detalles.html";
		
		console.log(arrayComprar);	
	});
	$('.elementoIdCarrouelMarcas').click( (e) => {
		//Declaramos el array vacio
		let arrayComprar = [];
		console.log(e.target.parentNode.children)
		//Creamos el objeto con la card clickeada		
		arrayComprar.push({
			//Con esto llegamos al innerText, al innerText del precio y tambein obtuvimos la imagen
			"nombre": e.target.parentNode.children[0].innerText,
			"descripcion": e.target.parentNode.children[2].innerText,
			"precio": e.target.parentNode.children[1].innerText,
			"img": e.target.parentNode.parentNode.children[0].currentSrc,
		});
		//Lo guardamos en el storage
		localStorage.setItem("arrayComprar", JSON.stringify(arrayComprar));
		window.location.href="../detalles.html";
		
		console.log(arrayComprar);	
	});
	//Declaramos al cardsComprar el arrayComrpar
	let cardDetalles = JSON.parse(localStorage.getItem("arrayComprar"));
	//Una vez que el usuario clicke el par que quiera se creara una card para poder añadirlo al carro
	cardDetalles.forEach(elemento => {
		$("#cardCompra").append(`		
		<div class="col-md-12 section__compra__card cardCarrito">
                <img src= ${elemento.img} class="img-fluid rounded-start img-compra"   alt=${elemento.nombre}>
              <div class="col-md-12">
                <div class="card-body">
                  <h5 class="card-title">${elemento.nombre}</h5>
				  <h6 class="card-text"> Colores: ${elemento.descripcion} </h6>
                  <div>
                    <label for="talle">Talle:</label>
                    <select name="talle" class="section__compra__select" id="">
                      <option value="39">39</option>
					  <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                      <option value="44">44</option>
                      
                      <option value="45">45</option>
                    </select>
                  </div>
                  <p class="card-text">${elemento.precio}</p>
                  <a href="#" class="btn section__btn addToCartButton">Añadir al carrito.</a>
              </div>
		`)
		
	});



	//Desde aca empieza el carrito
	//Llamo al boton de añadir al carro y le doy el evento click 
	$(".addToCartButton").click(addToCartButtonClick);

	//Creo la funcion para que se ejecute al darle click, en esta funcion obtengo los valores que quiero mostrar mas adelante
	function addToCartButtonClick(e) {
		let carrito = JSON.parse(localStorage.getItem("arrayCarrito"));
		let arrayCarrito;
		if(carrito == []){
			arrayCarrito = [];
		}else{
			arrayCarrito = carrito;
		}				
		// Añado el contenido de la card al arrayCarrito
		arrayCarrito.push({
			//Traigo lo que necesito de la card
			"cardImg": e.target.parentNode.parentNode.parentNode.children[0].currentSrc,//Busco la imagen
			"cardNombre": e.target.parentNode.parentNode.parentNode.children[1].children[0].children[0].innerText,//Busco el nombre del producto
			"cardTalle": e.target.parentNode.parentNode.parentNode.children[1].children[0].children[2].children[1].value,//Busco el talle
			"cardPrecio": e.target.parentNode.parentNode.parentNode.children[1].children[0].children[3].innerText,//Busco el precio
		});
		//Lo guardo en el localStorage
		localStorage.setItem("arrayCarrito", JSON.stringify(arrayCarrito));
		// Una vez que agregues al carro un producto te lleva directamente al html del carrito
		// let button = e.target;
		// let cardCompra = button.parentNode;
		// console.log(cardCompra);
		window.location.href="carrito.html";
		
	}
	//Cambiar cantidad
	
	//Llamamos a la funcion
	addProductToBuy();
	//Creo la funcion addProductToBuy
	function addProductToBuy() {
		//Iba a usar esto para borrar un elemento del carrito			
		// $("#divCarrito").html("")
		//Ahora el arrayCarrito lo traigo y lo convierto en productosCarrito
		let productosCarrito = JSON.parse(localStorage.getItem("arrayCarrito"));	
		//Por cada producto crea un div con los datos de la compra
		productosCarrito.forEach(elemento => {
			$('#divCarrito').append(`
				<div class="row" id="productosCarrito">
					<div class="col-4" >
						<div class="carritoItem d-flex align-items-center h-100 border-bottom pb-2 pt-3">
							<img src=${elemento.cardImg} class="carritoImg" >
							<h6 class=" cardNombre text-truncate ml-3 mb-0">${elemento.cardNombre}</h6>
						</div> 
					</div> 
					<div class="col-2" >
						<div class="carritoItem d-flex align-items-center h-100 border-bottom pb-2 pt-3">
							<p class="item-price mb-0" id="precioCarrito"> ${elemento.cardPrecio}</p>
						</div> 
					</div> 
					<div class="col-2" >
						<div class="carritoItem d-flex align-items-center h-100 border-bottom pb-2 pt-3">
							<p class="item-price mb-0"> ${elemento.cardTalle}</p> 
						</div> 
					</div> 
					<div class="col-4">
						<div class="carritoItemCantidad d-flex justify-content-around align-items-center h-100 border-bottom pb-2 pt-3">
							<input class="cantidad" id="cantidad"type="number" value = "1">
							<button class="btn btn-danger buttonBorrar" type= "button"> X </button> 
						</div > 
					</div> 			
				</div>`);
		});
		precioTotal();
		
	};
	// $(".comprarButton").click(comprar);
	// function comprar() {
	// 	let carrito = JSON.parse(localStorage.getItem("arrayCarrito"));
	// 	carrito = [];
	// 	$("#divCarrito").html("");
	// 	localStorage.setItem("arrayCarrito", JSON.stringify(carrito));
	// 	precioTotal()		
	// }
	//Creo el evento click para eliminar un producto
	$(".buttonBorrar").click(eliminarProducto);
	//Esta funcion permite que al clickear la X elimina el producto seleccionado
	function eliminarProducto(e) {
		e.preventDefault();
		//Traemos los datos del localStorage
		let carrito = JSON.parse(localStorage.getItem("arrayCarrito"));
		//Con el metodo findIndex() buscamos el nom re de cada producto;
		let borrarProducto = carrito.findIndex(elemento => elemento.cardNombre == e.target.parentNode.parentNode.parentNode.children[0].children[0].children[1].innerText)
		//
		carrito.splice(borrarProducto, 1);
		//Guardamos los nuevos datos en el local storage 
		localStorage.setItem("arrayCarrito", JSON.stringify(carrito));
		//Recargamos la pagina para que se demuestre que borro el producto
		location.reload();
		//Con el llamado a esta funcion iba  a hacer que borre sin necesidad de cargar la pagina
		//Usando $("divCarrito").html("") y lo hacia pero solo 1 vez, despues no me tomaba los clicks
		// addProductToBuy()
	};
	$(".cantidad").change(cambiarCantidad);
	function cambiarCantidad(e) {
		//Busco el valor del input
		let valorInput = e.target;
		//Esto es para que el contador no baje de cero
		if (valorInput.value <= 0){
			valorInput.value = 1;			
		}
		//LLamo a la funcion precioTotal para actualizar el precio
		precioTotal();
	}; 
	function precioTotal () {
	//Quise hacerlo de esta manera pero no entendi muy bien como funcionaba el metodo reduce()
	// 	let carrito = JSON.parse(localStorage.getItem("arrayCarrito"));
	// 	localStorage.setItem("arrayCarrito", JSON.stringify(carrito));
	// 	let resultado =	carrito.reduce( (precio1, precio2) => {
	// 		return  precio1 + precio2;
	// 	});	
	// 	console.log(resultado);
	// $('.carritoTotal').append(`
	// 	 	<p class="ml-4 mb-0" id="precioFinal"> ${resultado}</p>	
	// `);	
	// }
	let carrito = JSON.parse(localStorage.getItem("arrayCarrito"));
	let total = 0;
	const productos = carrito;
	productos.forEach( elemento =>{
	 const elementoPrecio =	parseFloat(elemento.cardPrecio.replace('$', ''));
	 const cantidad = parseFloat($(".cantidad").val());
	 total = total + elementoPrecio * cantidad;
	});
	$("#precioFinal").html(`$${total}`);
	};

});

