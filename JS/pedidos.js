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
let arrayPedidos = [];
function validarDatos(e) {
    e.preventDefault();
    if (email.value == "" || marca.value == "" || modelo.value == "" || direccion.value == "") {
        alert("Error al ingresar los datos, complete todos los campos correctamente.")
    }
    arrayPedidos.push(new Pedidos(email.value, marca.value, modelo.value, direccion.value, talle.value));
    localStorage.setItem("arrayPedidos", JSON.stringify(arrayPedidos))
    rellenarDatos();
}
let pedidos = JSON.parse(localStorage.getItem("arrayPedidos"));
function rellenarDatos(){
    if (pedidos != null) {
        pedidos.forEach(pedido => {
            let divPedidos = document.getElementById("sus-pedidos");
            let ul = document.createElement("ul");
                ul.innerHTML = `<li> Zapatilla: ${pedido.marca} ${pedido.modelo}</li>
                                <li> Talle: ${pedido.talle}</li> 
                                <li> Direccion: ${pedido.direccion}</li>`;
                divPedidos.appendChild(ul)
                console.log(`Correo Electronico: ${pedido.email}`);
            });
    }
}
let buscadorFilter = document.querySelector("#buscadorFilter");
buscadorFilter.addEventListener("submit", pedidosFilter);
let pedidosBuscador = document.querySelector("#filtrados");
function pedidosFilter(e) {
    e.preventDefault();
    if (marca.value == "") {
        alert("Error al ingresar marca. Por favor ingrese una marca valida.")
    }else if (marca.value == "Jordan" || marca.value == "Adidas" || marca.value == "Nike" || marca.value == "Puma" ) {
        let productoFiltrado= pedidos.filter(elemento => elemento.marca == marca.value)
        productoFiltrado.forEach(filtrado => {
        let divFiltrados = document.getElementById("pedidosFiltrados");
        let ul = document.createElement("ul");
        ul.innerHTML = `<li> Zapatilla: ${filtrado.marca} ${filtrado.modelo}</li>
                        <li> Talle: ${filtrado.talle}</li> 
                        <li> Direccion: ${filtrado.direccion}</li>`;
        divFiltrados.appendChild(ul)
        console.log(`Correo Electronico: ${filtrado.email}`);
    })
    } 
}