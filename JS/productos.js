const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=70",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
		"x-rapidapi-key": "0ad7d9e15dmshc74262e27cf3876p1f7f76jsn1c6f9e7d93b1"
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
							<h5 class="card-title"> ${elemento.title} </h5>					
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
						<h5 class="card-title"> ${elemento.title} </h5>
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
						<h5 class="card-title"> ${elemento.title} </h5>
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
						<h5 class="card-title"> ${elemento.title} </h5>
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
						<h5 class="card-title"> ${elemento.title} </h5>
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
						<h5 class="card-title"> ${elemento.title} </h5>
						<p class="card-text"><span class="tachado">$${elemento.retailPrice + 25}</span> $${elemento.retailPrice}</p>
						<p class="card-text pBlanco">${elemento.colorway}</p>
						<a href="#" class="btn fila__cards__button elementoIdOferta">Ver detalles.</a>
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
						<h5 class="card-title"> ${elemento.title} </h5>
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
						<h5 class="card-title"> ${elemento.title} </h5>
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
						<h5 class="card-title"> ${elemento.title} </h5>
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
						<h5 class="card-title"> ${elemento.title} </h5>
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
	let arrayCarrusel = arrayDatos.filter(elemento => elemento.retailPrice == 200 && elemento.media.smallImageUrl != null);
		console.log(arrayCarrusel);
		arrayCarrusel.forEach(elemento =>{
			$('#cardsCarrusel').append(`
			<div class="col-sm-12 col-lg-4">
			<div class="card card__margin" style="width: 12rem;">
			  <img src= ${elemento.media.smallImageUrl} alt= ${elemento.shoe}>
			  <div class="card-body">
				<h5 class="card-title"> ${elemento.title}</h5>
				<p class="card-text">$${elemento.retailPrice}</p>
				<p class="card-text pBlanco">${elemento.colorway}</p>
				<a href="#" class="btn carousel__button elementoId">Ver detalles.</a>
			  </div>
			</div>
		  </div>`)
		})
	let arrayCarrusel1 = arrayDatos.filter(elemento => elemento.retailPrice >= 220 && elemento.media.smallImageUrl != null);
		console.log(arrayCarrusel1);
		arrayCarrusel1.forEach(elemento =>{
			$('#cardsCarrusel1').append(`
			<div class="col-sm-12 col-lg-4">
			<div class="card card__margin" style="width: 12rem;">
			  <img src= ${elemento.media.smallImageUrl} alt= ${elemento.shoe}>
			  <div class="card-body">
				<h5 class="card-title"> ${elemento.title}</h5>
				<p class="card-text">$${elemento.retailPrice}</p>
				<p class="card-text pBlanco">${elemento.colorway}</p>
				<a href="#" class="btn carousel__button elementoId">Ver detalles.</a>
			  </div>
			</div>
		  </div>`)
		})	
	let arrayCarrusel2 = arrayDatos.filter(elemento => elemento.retailPrice == 110 && elemento.media.smallImageUrl != null && elemento.brand != "Converse" && elemento.brand != "Puma");
		console.log(arrayCarrusel2);
		arrayCarrusel2.forEach(elemento =>{
			$('#cardsCarrusel2').append(`
			<div class="col-sm-12 col-lg-4">
			<div class="card card__margin" style="width: 12rem;">
			  <img src= ${elemento.media.smallImageUrl} alt= ${elemento.shoe}>
			  <div class="card-body">
				<h5 class="card-title"> ${elemento.title}</h5>
				<p class="card-text">$${elemento.retailPrice}</p>
				<p class="card-text pBlanco">${elemento.colorway}</p>
				<a href="#" class="btn carousel__button elementoId">Ver detalles.</a>
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

	$('.elementoIdOferta').click( (e) => {
		//Declaramos el array vacio
		let arrayComprar = [];
		console.log(e.target.parentNode.children)
		//Creamos el objeto con la card clickeada		
		arrayComprar.push({
			//Con esto llegamos al innerText, al innerText del precio y tambein obtuvimos la imagen
			"nombre": e.target.parentNode.children[0].innerText,
			"descripcion": e.target.parentNode.children[2].innerText,
			"precio": e.target.parentNode.children[1].innerHTML,
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
	//Declaramos al cardsComprar el arrayComrpar
	let cardsComprar = JSON.parse(localStorage.getItem("arrayComprar"));
	//Una vez que el usuario clicke el par que quiera se creara una card para poder añadirlo al carro
	cardsComprar.forEach(elemento => {
		$("#cardCompra").append(`		
		<div class="col-md-12 section__compra__card">
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
                  <a href="#" class="btn section__btn">Añadir al carrito.</a>
              </div>
		`)
		
	});
	
});

