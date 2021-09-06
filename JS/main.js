//Definimos array general
let listaTareas = [];

//creamos el objeto tarea
class Tarea{
    constructor(id,nombre,descripcion){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    toString(){
        //devolvemos nuestro objeto en formato json
        return JSON.stringify(this);
    }
}
//contador para usar de ID
let contador = 0;

function agregarTarea(evento){
    //evento.preventDefault();
    // forma 1 de traerlo
    let nombre = $('#nombre');
    //Forma 2
    // let nombre = $('form #formTareas #nombre')
    let descripcion = $('#descripcion');

    // En vez de utilizar la propiedad value del input utilizamos un metodo val()
    //Validamos que nombre no este vacio
    if ( nombre.val() == "" ){
        //si esta vacio sale y muestra un alert
        alert("Ingresar Nombre valido");
        return;
    }

    //Validamos que descripcion no este vacio
    if ( descripcion.val() == "" ){
        //si esta vacio sale y muestra un alert
        alert("Ingresar Descripcion valido");
        return;
    }

    console.log(`Nombre: ${nombre.val()} \n Descripcion: ${descripcion.val()}` );

    //agregamos objeto Tarea
    listaTareas.push(new Tarea(++contador, nombre.val(),descripcion.val()));

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
                                <td>${descripcion.val()}</td></tr>`
                                );
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
function guardarLista(){
    localStorage.setItem("listaTareas",JSON.stringify(listaTareas));
    console.log("La lista se ha guardado con " + listaTareas.length + " tareas:");
    for(tarea of listaTareas){
        console.log(tarea.toString());
    }
}

let boton = document.getElementById("boton");

boton.addEventListener("click",agregarTarea);

//capturamos evento click de guardar
let btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click",guardarLista);

//Seleccion de distintos elementos utilizando un mismo selector
let todosLosParrafos = $("p, tr");
console.log(todosLosParrafos);

//Usando seletores avanzados 
let nombreTh = $('tr > th');

console.log(nombreTh);

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
