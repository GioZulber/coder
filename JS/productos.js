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

    // for(dato of arrayDatos){
    //     console.log(dato.brand);
    // }

	//Filtre por precio mayor a 190 y por genero de hombre. 12 pares
    let arrayHombres = arrayDatos.filter(elemento => elemento.retailPrice >= 180 && elemento.gender == "men");
	 	console.log(arrayHombres);
		 arrayHombres.forEach(elemento => {
			$("#divCardsHombre").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h5 class="card-title"> ${elemento.shoe} </h5>
						<p class="card-text">$${elemento.retailPrice}</p>
						<a href="pages/marcas/nike/air-force-1.html" class="btn fila__cards__button">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)	
		 });
	//Filtre en categoria para niños pequeños. 3 pares 
	let arrayToddler = arrayDatos.filter(elemento => elemento.gender == "toddler");
		console.log(arrayToddler);
		arrayToddler.forEach(elemento => {
			$("#divCardsChild").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h5 class="card-title"> ${elemento.shoe} </h5>
						<p class="card-text">$${elemento.retailPrice}</p>
						<a href="pages/marcas/nike/air-force-1.html" class="btn fila__cards__button">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)
		});

	//Filtre en categoria para niños. 5 pares
	let arrayChild = arrayDatos.filter(elemento => elemento.gender == "child");
		console.log(arrayChild);
		arrayChild.forEach(elemento => {
			$("#divCardsChild").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h5 class="card-title"> ${elemento.shoe} </h5>
						<p class="card-text">$${elemento.retailPrice}</p>
						<a href="pages/marcas/nike/air-force-1.html" class="btn fila__cards__button">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)	
		});
	//Filtre en categoria para mujer. 5 pares, 3 dañados, asi que los tuve que cambiar
	let arrayMujeres = arrayDatos.filter(elemento => elemento.retailPrice >= 90 && elemento.retailPrice <= 120)
		console.log(arrayMujeres);
		arrayMujeres.forEach(elemento => {
			$("#divCardsMujer").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h5 class="card-title"> ${elemento.shoe} </h5>
						<p class="card-text">$${elemento.retailPrice}</p>
						<a href="pages/marcas/nike/air-force-1.html" class="btn fila__cards__button">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)	
		});


	//Filtre las mas caras. 4 pares
	let arrayExpensive = arrayDatos.filter(elemento => elemento.retailPrice >= 190);
		console.log(arrayExpensive);

		//Ahora voy a usar jQuery para cargar las cards desde JS
		arrayExpensive.forEach(elemento => {
			$("#divCardsIndex").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 18rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h5 class="card-title"> ${elemento.shoe} </h5>
						<p class="card-text">$${elemento.retailPrice}</p>
						<a href="pages/marcas/nike/air-force-1.html" class="btn fila__cards__button">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)		
		});
		
	//Filtre las mas baratas. 8 pares
	let arrayCheap = arrayDatos.filter(elemento => elemento.retailPrice <=80 && elemento.retailPrice >= 50);
		console.log(arrayCheap);
		arrayCheap.forEach(elemento => {
			$("#divCardsOferta").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h5 class="card-title"> ${elemento.shoe} </h5>
						<p class="card-text"><span class="tachado">$${elemento.retailPrice + 25}</span> $${elemento.retailPrice}  </p>
						<a href="pages/marcas/nike/air-force-1.html" class="btn fila__cards__button">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)
		});


	//Aca empiezo a filtrar por marca

	//Filtre por marca nike y que el precio sea menor a 120. 8 pares
	let arrayNike = arrayDatos.filter(elemento => elemento.brand == "Nike" && elemento.retailPrice <= 140);
		console.log(arrayNike);
		arrayNike.forEach(elemento => {
			$("#divCardsNike").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h5 class="card-title"> ${elemento.shoe} </h5>
						<p class="card-text">$${elemento.retailPrice}</p>
						<a href="pages/marcas/nike/air-force-1.html" class="btn fila__cards__button">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)
		});
	//Filtre por Marca Jordan y que su valor sea mayor a $100.  
	let arrayJordan = arrayDatos.filter(elemento => elemento.brand == "Jordan" && elemento.retailPrice >= 100);
		console.log(arrayJordan);
		arrayJordan.forEach(elemento => {
			$("#divCardsJordan").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h5 class="card-title"> ${elemento.shoe} </h5>
						<p class="card-text">$${elemento.retailPrice}</p>
						<a href="pages/marcas/nike/air-force-1.html" class="btn fila__cards__button">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)
		});
	//Filtre por marca adidas. 5 pares
	let arrayAdidas = arrayDatos.filter(elemento => elemento.brand == "adidas");
		console.log(arrayAdidas);
		arrayAdidas.forEach(elemento => {
			$("#divCardsAdidas").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h5 class="card-title"> ${elemento.shoe} </h5>
						<p class="card-text">$${elemento.retailPrice}</p>
						<a href="pages/marcas/nike/air-force-1.html" class="btn fila__cards__button">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)
		});
	//Filtre por marca Puma. 5 pares
	let arrayPuma = arrayDatos.filter(elemento => elemento.brand == "Puma");
		console.log(arrayPuma);
		arrayPuma.forEach(elemento => {
			$("#divCardsPuma").append(`
			<div class="col fila__cards">
        		<div class="card fila__cards__hover" style="width: 12rem;">
          			<img src= ${elemento.media.smallImageUrl} class="card-img-top" alt= ${elemento.shoe}>
					<div class="card-body">
						<h5 class="card-title"> ${elemento.shoe} </h5>
						<p class="card-text">$${elemento.retailPrice}</p>
						<a href="pages/marcas/nike/air-force-1.html" class="btn fila__cards__button">Ver detalles.</a>
					</div>
				</div>
      		</div>
			`)
		});
});

