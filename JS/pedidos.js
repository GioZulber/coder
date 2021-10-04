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
            $('#tablaPedidos').append(`
                <tr> 
                    <td> ${pedido.marca} ${pedido.modelo} </td>
                    <td> ${pedido.talle}</td>
                    <td> ${pedido.direccion}</td>
                </tr>`);
            console.log(`Correo Electronico: ${pedido.email}`
            );
        });
            
        
    };
}
//En este evento estoy haciendo que la lista se oculte(si es que ya hay pedidos guardados en el LocalStorage), ocultandola con un "display: none"
//Para que al hacer click, aparezca y al volver a hacer click vuelva a desaparecer.

$("#mostrarTabla").css("display", "none")
$("#mostrar").click(() => {
    if ($("#mostrar").html() == "Mostrar pedidos") {
        $("#mostrar").html("Esconder pedidos")
        $("#mostrarTabla").fadeIn("slow")
    } else {
        $("#mostrarTabla").fadeOut("slow")
        $("#mostrar").html("Mostrar pedidos")
    }
});

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
    $('#tablaPedidos').append(`
                <tr class="mostrarTabla"> 
                    <td> ${marca.val()} ${modelo.val()} </td>
                    <td> ${talle.val()}</td>
                    <td> ${direccion.val()}</td>
                </tr>`);
    console.log(`Correo Electronico: ${email.val()}`);
    }
    email.val("");
    marca.val("");
    modelo.val("");
    direccion.val("");
}
//Con esta funcion creamos la lista en el html
///LLamamos al input que funciona como buscador
let pedidosBuscador = $('#filtrados');

let boton = $('#buscar');
$('#buscadorFilter').submit(pedidosFilter);
$('#buscar').click(pedidosFilter)

//Esta funcion busca los pedidos por marca
function pedidosFilter(e) {
    e.preventDefault();
    $('#tablaFilter').html("");
    if (pedidosBuscador.val() == "") {
        alert("Error al ingresar marca. Por favor ingrese una marca valida.")
    } else if (pedidosBuscador.val().toUpperCase() == "JORDAN" || pedidosBuscador.val().toUpperCase() == "ADIDAS" || pedidosBuscador.val().toUpperCase() == "NIKE" || pedidosBuscador.val().toUpperCase() == "PUMA") {
        let productoFiltrado = pedidos.filter(producto => producto.marca.toUpperCase() == pedidosBuscador.val().toUpperCase());
        productoFiltrado.forEach(filtrado => {
            $("#tablaFilter").append(`
                    <tr class="mostrarTabla"> 
                        <td> ${filtrado.marca} ${filtrado.modelo} </td>
                        <td> ${filtrado.talle}</td>
                        <td> ${filtrado.direccion}</td>
                    </tr>`);
            console.log(`Correo Electronico: ${filtrado.email}`);
        })
    } else{
        
        $("#tablaFilter").append(`
                    <tr class="mostrarTabla"> 
                        <td> </td>
                        <td> No tiene ningun pedido de ${pedidosBuscador.val()} </td>
                        <td> </td>
                    </tr>`);
    }       
}
