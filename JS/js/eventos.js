//EVENTOS DE MOUSE

// let boton = document.getElementById("button-agregado")
// console.log(boton);
/*
boton.addEventListener("click", agregarItem);
*/
// FORMA 1
/*
function agregarItem(){
      console.log("Agregando Item");
      //Se puede pedir solo el valor del dato de esta manera
      let item = document.getElementById("item").value;
      let cantidad = document.getElementById("cantidad").value;
      console.log(`${item}: ${cantidad}.`);

}

function agregarItem(){
    console.log("Agregando Item");
    //O tambien de esta, ambas son validas
    let item = document.getElementById("item");
    let cantidad = document.getElementById("cantidad");
    console.log(`${item.value}: ${cantidad.value}.`);

}  
*/

// Forma 2
/*
boton.onclick = () => {
    console.log("Agregando Item");
      //Se puede pedir solo el valor del dato de esta manera
      let item = document.getElementById("item").value;
      let cantidad = document.getElementById("cantidad").value;
      console.log(`${item}: ${cantidad}.`);
}
*/

//Tercer Forma => Anda al HTML, en titulo y head. No es buena practica, no la uses pelotudo
/*
function cambiarColor() {
    let h1 = document.getElementById("titulo");
    h1.classList.toggle("rojo");
}

let listaLimpieza = document.getElementById("comestibles");
listaLimpieza.onmouseover = () => {
    listaLimpieza.classList.toggle("rojo");
    console.log("Movimiento en lista");
}
*/

//Fin de eventos de mouse

//EVENTOS DE TECLADO

let item = document.getElementById("item");
//Eventos sobre el teclado
/*
item.onkeyup = () => {
    console.log(item.value);
}
*/

//Evento change

item.onchange = () => {
    if (item.vlaue == ""){
        console.log(`Campo vacio, por favor, completar`);
    }else{
        console.log(`Change: ${item.value}`);
    }
}

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarDatos);

function validarDatos(e){
    
    e.preventDefault();

    let item = document.getElementById("item");
    let cantidad = document.getElementById("cantidad");

    let p = document.createElement("p");
    
    if (item.value == " ") {
        p.innerText = "Ingresar item";
    }else if (cantidad.value == NaN || cantidad.value == 0){
        p.innerText = "Ingresar cantidad";
    }    
    
   
    p.classList.toggle("textoRojo");
    let msj = document.createElement("div");
    msj.appendChild(p);
    let listas = document.getElementById("listas");
    listas.appendChild(msj);
    console.log(`${item.value}: ${cantidad.value}`);
    //Mensaje al lado del input
    let mensajeItem = document.getElementById("mensajeItem");
    mensajeItem.appendChild(p);
    let mensajeCantidad = document.getElementById("mensajeCantidad");
    mensajeCantidad.
    mensajeItem.classList.toggle("ocultar");
}