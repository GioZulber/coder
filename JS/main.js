//Definimos array general
let listaTareas = [];

//creamos el objeto tarea
class Tarea {
    constructor(id, nombre, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    toString() {
        //devolvemos nuestro objeto en formato json
        return JSON.stringify(this);
    }
}
//contador para usar de ID
let contador = 0;

function agregarTarea(evento) {
    //evento.preventDefault();
    // forma 1 de traerlo
    let nombre = $('#nombre');
    //Forma 2
    // let nombre = $('form #formTareas #nombre')
    let descripcion = $('#descripcion');

    // En vez de utilizar la propiedad value del input utilizamos un metodo val()
    //Validamos que nombre no este vacio
    if (nombre.val() == "") {
        //si esta vacio sale y muestra un alert
        alert("Ingresar Nombre valido");
        return;
    }

    //Validamos que descripcion no este vacio
    if (descripcion.val() == "") {
        //si esta vacio sale y muestra un alert
        alert("Ingresar Descripcion valido");
        return;
    }

    console.log(`Nombre: ${nombre.val()} \n Descripcion: ${descripcion.val()}`);

    //agregamos objeto Tarea
    listaTareas.push(new Tarea(++contador, nombre.val(), descripcion.val()));

    //recuperamos el elemento tabla
    // let table = document.getElementById("tabla-tareas");

    //creamos el Table ROW Element
    // let tr = document.createElement("tr");
    //Le cargamos los table data
    // tr.innerHTML = `<td>${contador}</td>\n
    // <td>${nombre.val()}</td>\n
    // <td>${descripcion.val()}</td>`;
    //agregamos a la estructura table
    // table.appendChild(tr);

    //METODOS NUEVO
    //CON EL METODO APPEND SE AGREGA AL FINAL DE DONDE QUEREMOS
    $('#tabla-tareas').append(`<tr><td>${contador}</td>\n
                                    <td>${nombre.val()}</td>\n
                                    <td>${descripcion.val()}</td>
                                    </tr>`);
    //CON EL METODO PREPEND SE AGREGA AL PRINCIPIO, ARRIBA DE DODNE QUEREMOS
    // $('#tabla-tareas').prepend(`<tr><td>${contador}</td>\n
    //                             <td>${nombre.val()}</td>\n
    //                             <td>${descripcion.val()}</td></tr>`
    // );
    //Limpiamos lso valores de los inputs
    nombre.val("");
    descripcion.val("");

}


//Funcion para guardar nuestro array en storage
function guardarLista() {
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
    console.log("La lista se ha guardado con " + listaTareas.length + " tareas:");
    for (tarea of listaTareas) {
        console.log(tarea.toString());
    }
}

$(document).ready(function () {

    // let boton = document.getElementById("boton");  
    // boton.addEventListener("click", agregarTarea);
    //Remplazo de evento por .on de jQuery
    $('#boton').on('click', agregarTarea);
    //capturamos evento click de guardar
    // let btnGuardar = document.getElementById('btnGuardar');
    // btnGuardar.addEventListener("click", guardarLista);
    $('btnGuardar').on('click', guardarLista)

    //TAMBIEN SE PUEDE HACER LA FUNCION DENTRO DEL EVENTO
  /*  $('#btnGuardar').on('click', function guardarLista() {
        localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
        console.log("La lista se ha guardado con " + listaTareas.length + " tareas:");
        for (tarea of listaTareas) {
            console.log(tarea.toString());
        }
    })
    */

    //METODO shortcut CLICK(), es lo mismo que on.(click) pero mas corto
    
    $('#btnReset').click(function () {
        console.log("Reset");
        localStorage.setItem("listaTareas", "");
    })
    
    //METODO CHANGE
    $('#nombre').change(function(e) {
        if (this.value == "") {
            alert("Debe ingresar un nombre")
        }
    })
    //Usamos metodo .change de jQuery para validar descripcion
    $('#descripcion').change(function () {
        if(this.value == ""){
            alert("Debe ingresar una descripcion valida")
        }
    })

    //CAPTURAMOS SUBMIT()
    $('#formTareas').submit(function () {
        console.log(this);
        if($("#nombre").val() == "" || $("#descripcion").val() == ""){
            alert("Se deben ingresar un nombre y descripcion")
        }else{
            //debemos agregar
            //Forzamos el evento click en el boton agregar
            //EL METODO TRIGGER FUNCIONA PARA FORZAR UN EVENTO
            $('#boton').trigger('click')
        }
    })
})

//Cambiar algo en un grupo de nodos que traemos por selectores
// ocultamos los elementos seleccionados
/*
$('h1, h2, p').hide();
// Volvemos a visualizar los h1
$('h1').show();
*/

//Camiar contenido en los html-
//Esto cambia el texto en todos los Parrafos
// $('p').html("Otro texto que se pega en todos los p");
