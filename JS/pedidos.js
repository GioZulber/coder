class Pedidos {
    constructor(email, marca, modelo, direccion, talle) {
        this.email = email;
        this.marca = marca;
        this.modelo = modelo;
        this.direccion = direccion;
        this.talle = talle;
    }
}
let formulario = document.querySelector('#formulario');
formulario.addEventListener("submit", validarDatos);
let email = $('#exampleInputEmail1');
let marca = $('#marca');
let modelo = $('#modelo');
let direccion = $('#direccion');
let talle = $('#talle');
let arrayPedidos = [];
function validarDatos(e) {
    e.preventDefault();
    if (email.val() == "" || marca.val() == "" || modelo.val() == "" || direccion.val() == "") {
        alert("Error al ingresar los datos, complete todos los campos correctamente.")
    }
    arrayPedidos.push(new Pedidos(email.val(), marca.val(), modelo.val(), direccion.val(), talle.val()));
    localStorage.setItem("arrayPedidos", JSON.stringify(arrayPedidos))
    rellenarDatos();
}
let pedidos = JSON.parse(localStorage.getItem("arrayPedidos"));
function rellenarDatos(){
    if (pedidos != null) {
        pedidos.forEach(pedido => {
            $('#sus-pedidos').append(`<ul><li> Zapatilla: ${pedido.marca} ${pedido.modelo}</li>
            <li> Talle: ${pedido.talle}</li> 
            <li> Direccion: ${pedido.direccion}</li></ul>`);
                console.log(`Correo Electronico: ${pedido.email}`);
            });
    }
    email.val("");
    marca.val("");
    modelo.val("");
    direccion.val("");
}
let buscadorFilter = document.querySelector("#buscadorFilter");
buscadorFilter.addEventListener("submit", pedidosFilter);
let pedidosBuscador = $('#filtrados');
function pedidosFilter(e) {
    e.preventDefault();
    if (marca.value == "") {
        alert("Error al ingresar marca. Por favor ingrese una marca valida.")
    }else if (marca.val() == "Jordan" || marca.val() == "Adidas" || marca.val() == "Nike" || marca.val() == "Puma" ) {
        let productoFiltrado= pedidos.filter(elemento => elemento.marca == marca.value)
        productoFiltrado.forEach(filtrado => {
        $('#pedidosFiltrados').append(`<ul><li> Zapatilla: ${filtrado.marca} ${filtrado.modelo}</li>
        <li> Talle: ${filtrado.talle}</li> 
        <li> Direccion: ${filtrado.direccion}</li> </ul>`);
        
        console.log(`Correo Electronico: ${filtrado.email}`);
    })
    } 
}