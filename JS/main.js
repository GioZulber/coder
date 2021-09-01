class Pedidos {
    constructor(email, marca, modelo, direccion, talle) {
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

function validarDatos(e) {
    let arrayPedidos = [];
    e.preventDefault();
    if (email.value == "" || marca.value == "" || modelo.value == "" || direccion.value == "") {
        alert("Error al ingresar los datos, complete todos los campos correctamente.")
    }
    arrayPedidos.push(new Pedidos(email.value, marca.value, modelo.value, direccion.value, talle.value));
    arrayPedidos.forEach(pedido => {
        let divPedidos = document.getElementById("sus-pedidos");
        let ul = document.createElement("ul");
        ul.innerHTML = `<li> Zapatilla: ${pedido.marca} ${pedido.modelo}</li>
                        <li> Talle: ${pedido.talle}</li> 
                        <li> Direccion: ${pedido.direccion}</li>`;
        divPedidos.appendChild(ul)
        console.log(`Correo Electronico: ${pedido.email}`);
    });
}

let buscadorFilter = document.querySelector("#buscadorFilter");
buscadorFilter.addEventListener("submit", pedidosFilter);
let pedidosBuscador = document.querySelector("#filtrados");

function pedidosFilter(e) {
    e.preventDefault();
    let arrayPedidos = [];
    if (marca.value == "") {
        alert("Error al ingresar marca. Por favor ingrese una marca valida.")
    }
    let productoFiltrado = arrayPedidos.filter(elemento => elemento.marca == marca.value);
    productoFiltrado.forEach(pedido => {
        let divFiltrados = document.getElementById("pedidos-filtrados");
        let ul = document.createElement("ul");
        ul.innerHTML = `<li> Zapatilla: ${pedido.marca} ${pedido.modelo}</li>
                        <li> Talle: ${pedido.talle}</li> 
                        <li> Direccion: ${pedido.direccion}</li>`;
        divFiltrados.appendChild(ul)
        console.log(`Correo Electronico: ${pedido.email}`)
    })

}