//Creamos el objeto Pedidos
class Pedidos {
    constructor(email, marca, modelo, direccion, talle) {
        this.email = email;
        this.marca = marca;
        this.modelo = modelo;
        this.direccion = direccion;
        this.talle = talle;
    }
}
let pedidos = JSON.parse(localStorage.getItem("arrayPedidos"));

function rellenarDatos() {
    if (pedidos != null) {
        pedidos.forEach(pedido => {
            $('#sus-pedidos').append(`<ul><li> Zapatilla: ${pedido.marca} ${pedido.modelo}</li>
            <li> Talle: ${pedido.talle}</li> 
            <li> Direccion: ${pedido.direccion}</li></ul>`);
            console.log(`Correo Electronico: ${pedido.email}`);
        });
    }
}
if (pedidos != null) {
    rellenarDatos();
}
//Llamamos a todos los inputs
let email = $('#exampleInputEmail1');
let marca = $('#marca');
let modelo = $('#modelo');
let direccion = $('#direccion');
let talle = $('#talle');
//Creamos el array para los pedidos
let arrayPedidos = [];
$("#enviar").click(validarDatos)
$('#formulario').submit(validarDatos);

//Con esta funcion nos encargamos de que valide los datos.
function validarDatos(e) {
    let datos = localStorage.getItem("arrayPedidos")
    if (datos != null) {
        arrayPedidos = JSON.parse(datos)
    }
    e.preventDefault();
    if (email.val() == "" || marca.val() == "" || modelo.val() == "" || direccion.val() == "") {
        alert("Error al ingresar los datos, complete todos los campos correctamente.")
    }else{
        arrayPedidos.push(new Pedidos(email.val(), marca.val(), modelo.val(), direccion.val(), talle.val()));
    localStorage.setItem("arrayPedidos", JSON.stringify(arrayPedidos))
    $('#sus-pedidos').append(`<ul><li> Zapatilla: ${marca.val()} ${modelo.val()}</li>
    <li> Talle: ${talle.val()}</li> 
    <li> Direccion: ${direccion.val()}</li></ul>`);
    console.log(`Correo Electronico: ${email.val()}`);
    }
    email.val("");
    marca.val("");
    modelo.val("");
    direccion.val("");
}
/* Hasta acá es lo que yo hice y como lo resolví! */
//Con esta funcion creamos la lista en el html
///LLamamos al input que funciona como buscador
let pedidosBuscador = $('#filtrados');

let boton = $('#buscar');
$('#buscadorFilter').submit(pedidosFilter);
$('#buscar').click(pedidosFilter)

//Esta funcion busca los pedidos por marca
function pedidosFilter(e) {
    e.preventDefault();
    $('#pedidosFiltrados').html("");
    if (pedidosBuscador.val() == "") {
        alert("Error al ingresar marca. Por favor ingrese una marca valida.")
    } else if (pedidosBuscador.val().toUpperCase() == "JORDAN" || pedidosBuscador.val().toUpperCase() == "ADIDAS" || pedidosBuscador.val().toUpperCase() == "NIKE" || pedidosBuscador.val().toUpperCase() == "PUMA") {
        let productoFiltrado = pedidos.filter(producto => producto.marca.toUpperCase() == pedidosBuscador.val().toUpperCase());
        productoFiltrado.forEach(filtrado => {
            $('#pedidosFiltrados').append(`<ul> <li> Zapatilla: ${filtrado.marca} ${filtrado.modelo}</li>
                                                <li> Talle: ${filtrado.talle}</li> 
                                                <li> Direccion: ${filtrado.direccion}</li> </ul>`);
            console.log(`Correo Electronico: ${filtrado.email}`);
        })
    }else{
        $('#pedidosFiltrados').html(`<p>No tiene ningun pedido de ${pedidosBuscador.val()}`)
    }
}

// $(document).ready(function () {
/*
let formulario = document.querySelector('#formulario');
formulario.addEventListener("submit", validarDatos);
*/
//Utilizamos metodo submit

/*
let buscadorFilter = document.querySelector("#buscadorFilter");
buscadorFilter.addEventListener("submit", pedidosFilter);
*/
//Utilizamos metodo submit

// })