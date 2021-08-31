class Pedidos{
    constructor(email, marca, modelo, direccion, talle){
        this.email = email;
        this.marca = marca;
        this.modelo = modelo;
        this.direccion = direccion;
        this.talle = talle;
    }
}
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarDatos);
let email = document.querySelector("#exampleInputEmail1");
let marca = document.querySelector("#marca");
let modelo = document.querySelector("#modelo");
let direccion = document.querySelector("#direccion");
let talle = document.querySelector("#talle");
let arrayPedidos =[];
function validarDatos (e){
    e.preventDefault();
    if (email.value == "" || marca.value == "" || modelo.value == "" || direccion.value == ""){
        alert("Error al ingresar los datos, complete todos los campos correctamente.")
    }else if (talle.value == NaN){
        alert("Ingrese un talle valido")
    }
    arrayPedidos.push(new Pedidos(email.value, marca.value, modelo.value, direccion.value, talle.value));
    arrayPedidos.forEach(pedido => {
        let divPedidos = document.getElementById("sus-pedidos");
        let ul = document.createElement("ul");
        ul.innerHTML = `<li> Zapatilla: ${pedido.marca} ${pedido.modelo}</li>
                        <li> Talle: ${pedido.talle}</li> 
                        <li> Direccion: ${pedido.direccion}</li>`
        divPedidos.appendChild(ul)
    })
}