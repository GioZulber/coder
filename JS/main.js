//Esto es para acordarme de lo visto en clase


// //Definimos array general
// let listaTareas = [];

// //creamos el objeto tarea
// class Tarea {
//     constructor(id, nombre, descripcion) {
//         this.id = id;
//         this.nombre = nombre;
//         this.descripcion = descripcion;
//     }

//     toString() {
//         //devolvemos nuestro objeto en formato json
//         return JSON.stringify(this);
//     }
// }
// //contador para usar de ID
// let contador = 0;

// function agregarTarea(evento) {
//     //evento.preventDefault();
//     // forma 1 de traerlo
//     let nombre = $('#nombre');
//     //Forma 2
//     // let nombre = $('form #formTareas #nombre')
//     let descripcion = $('#descripcion');

//     // En vez de utilizar la propiedad value del input utilizamos un metodo val()
//     //Validamos que nombre no este vacio
//     if (nombre.val() == "") {
//         //si esta vacio sale y muestra un alert
//         alert("Ingresar Nombre valido");
//         return;
//     }

//     //Validamos que descripcion no este vacio
//     if (descripcion.val() == "") {
//         //si esta vacio sale y muestra un alert
//         alert("Ingresar Descripcion valido");
//         return;
//     }

//     console.log(`Nombre: ${nombre.val()} \n Descripcion: ${descripcion.val()}`);

//     //agregamos objeto Tarea
//     listaTareas.push(new Tarea(++contador, nombre.val(), descripcion.val()));

//     //recuperamos el elemento tabla
//     // let table = document.getElementById("tabla-tareas");

//     //creamos el Table ROW Element
//     // let tr = document.createElement("tr");
//     //Le cargamos los table data
//     // tr.innerHTML = `<td>${contador}</td>\n
//     // <td>${nombre.val()}</td>\n
//     // <td>${descripcion.val()}</td>`;
//     //agregamos a la estructura table
//     // table.appendChild(tr);

//     //METODOS NUEVO
//     //CON EL METODO APPEND SE AGREGA AL FINAL DE DONDE QUEREMOS
//     $('#tabla-tareas').append(`<tr><td>${contador}</td>\n
//                                     <td>${nombre.val()}</td>\n
//                                     <td>${descripcion.val()}</td>
//                                     </tr>`);
//     //CON EL METODO PREPEND SE AGREGA AL PRINCIPIO, ARRIBA DE DODNE QUEREMOS
//     // $('#tabla-tareas').prepend(`<tr><td>${contador}</td>\n
//     //                             <td>${nombre.val()}</td>\n
//     //                             <td>${descripcion.val()}</td></tr>`
//     // );
//     //Limpiamos lso valores de los inputs
//     nombre.val("");
//     descripcion.val("");

// }


// //Funcion para guardar nuestro array en storage
// function guardarLista() {
//     localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
//     console.log("La lista se ha guardado con " + listaTareas.length + " tareas:");
//     for (tarea of listaTareas) {
//         console.log(tarea.toString());
//     }
// }

// $(document).ready(function () {

//     // let boton = document.getElementById("boton");  
//     // boton.addEventListener("click", agregarTarea);
//     //Remplazo de evento por .on de jQuery
//     $('#boton').on('click', agregarTarea);
//     //capturamos evento click de guardar
//     // let btnGuardar = document.getElementById('btnGuardar');
//     // btnGuardar.addEventListener("click", guardarLista);
//     $('btnGuardar').on('click', guardarLista)

//     //TAMBIEN SE PUEDE HACER LA FUNCION DENTRO DEL EVENTO
//   /*  $('#btnGuardar').on('click', function guardarLista() {
//         localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
//         console.log("La lista se ha guardado con " + listaTareas.length + " tareas:");
//         for (tarea of listaTareas) {
//             console.log(tarea.toString());
//         }
//     })
//     */

//     //METODO shortcut CLICK(), es lo mismo que on.(click) pero mas corto
    
//     $('#btnReset').click(function () {
//         console.log("Reset");
//         localStorage.setItem("listaTareas", "");
//     })
    
//     //METODO CHANGE
//     $('#nombre').change(function(e) {
//         if (this.value == "") {
//             alert("Debe ingresar un nombre")
//         }
//     })
//     //Usamos metodo .change de jQuery para validar descripcion
//     $('#descripcion').change(function () {
//         if(this.value == ""){
//             alert("Debe ingresar una descripcion valida")
//         }
//     })

//     //CAPTURAMOS SUBMIT()
//     $('#formTareas').submit(function () {
//         console.log(this);
//         if($("#nombre").val() == "" || $("#descripcion").val() == ""){
//             alert("Se deben ingresar un nombre y descripcion")
//         }else{
//             //debemos agregar
//             //Forzamos el evento click en el boton agregar
//             //EL METODO TRIGGER FUNCIONA PARA FORZAR UN EVENTO
//             $('#boton').trigger('click')
//         }
//     })
// })

// //Cambiar algo en un grupo de nodos que traemos por selectores
// // ocultamos los elementos seleccionados
// /*
// $('h1, h2, p').hide();
// // Volvemos a visualizar los h1
// $('h1').show();
// */

// //Camiar contenido en los html-
// //Esto cambia el texto en todos los Parrafos
// // $('p').html("Otro texto que se pega en todos los p");

// // ESPERAMOS CARGA DEL DOM
// $(function(){
//     //capturamos el evento de click del boton show()
//     $('#btnShow').click( () => $('#caja-prueba').show());
//     //capturamos el evento de click del boton hide()
//     $('#btnHide').click( () => $('#caja-prueba').hide());
//     //capturamos el evento de click del boton fadeIn()
//     $('#btnFadeIn').click( () => $('#caja-prueba').fadeIn("slow"));
//     //capturamos el evento de click del boton fadeOut()
//     $('#btnFadeOut').click( () => $('#caja-prueba').fadeOut("slow"));

//     //Con el callback podes mandarle un metodo tras otro
//     $("#btnCallBack").click( () => {
//         $("#caja-prueba").fadeIn("slow", () => $("#caja-prueba").fadeOut(2000, () => $("#caja-prueba").fadeIn("fast")))
//     })

//     //capturamos el evento de click del boton SlideDown
//     $('#btnSlideDown').click( () => $('#caja-prueba').slideDown("slow"));
//     //capturamos el evento de click del boton slideUp
//     $('#btnSlideUp').click( () => $('#caja-prueba').slideUp("slow"));
//     //capturamos el evento de click del boton slideToggle
//     $("#btnSlideToggle").click( () => $("#caja-prueba").slideToggle("slow"));



//     //capturamos boton de cambiar fondo a rojo
//     $("#btnRojo").click( () => { $("body").css("background-color", "red")});
//     //capturamos boton de cambiar fondo a Azul
//     $("#btnAzul").click( () => {
//         $("body").css("background-color", "blue");
//         // $("h1, h2, h3").css("color", "white");
        
        
//     });
//     //capturamos boton de cambiar fondo a Verde
//     $("#btnVerde").click( () => {$("body").css("background-color", "green")});
//     //capturamos boton de cambiar fondo a Sinfondo
//     $("#btnSinFondo").click( () => {$("body").css("background-color", "white")});

//     $(".textoAnimado").animate({ left:'250px',
//                       opacity:'0.5',
//                       height:'150px',
//                       width:'150px' }, //1er parámetro propiedades 
//                       "4000",          //2do parámetro duración
//                                        //3er parámetro callback
//                       function(){  
//                         console.log("final de animación");
//                       });

//     // Asociamos la animación al click en un elemento <a>
//     $('#btnTop').click( () => {
//         //Animamos sus propiedades CSS con animate
//         $('html,body').animate({
//             scrollTop: $("body").offset().top}, 2000);} );

//     $('#subtitulo').css("color", "darkgray")
//                    .fadeOut(3000)
//                 //USamos el metood delay para darle un tiempo a que realice la otra accion
//                    .delay(2000)
//                    .css("color", "dark")
//                    .fadeIn("slow");
// })      


// $(function () {
//     //Declaramos la url que vamos a usar para el GET
//     const URLGET = "https://jsonplaceholder.typicode.com/posts"
//     //Escuchamos el evento click del botón agregado
//     $("#pedir").click(() => { 
//     $.get(URLGET, function (respuesta, estado) {
//           if(estado === "success"){
//             let misDatos = respuesta;
//             for (const dato of misDatos) {
//               $("body").append(`<div class="card">
//                                     <h5 class="card-header">ID: ${dato.id}</h5>
//                                     <div class="card-body">
//                                         h5 class="card-title"> ${dato.title} </h5>
//                                         <p class="card-text"> ${dato.body} </p>
//                                     </div>
//                                 </div>`);
//             }  
//           }
//         });
//     });
//     //Declaramos la información a enviar
//     const infoPost =  { nombre: "Ana", profesion: "Programadora" };
//     //Escuchamos el click del boton enviar
//     $("#enviar").click( () => {
//       $.post(URLGET, infoPost, (respuesta, estado) => {
//         if(estado == "success"){
//           console.log(respuesta);
//           alert( `El usuario ${respuesta.nombre} se creo con el id: ${respuesta.id}`);
//         }
//       })
//     });


//     //Escuchamos el click del boton getFile
//     $("#getFile").click( () => {
//       $.getJSON('./data/datos.json', (respuesta, estado) =>{
//         if(estado == "success"){
//           console.log(respuesta);
//         }
//       });
//     });


//     //Capturamos el click del boton ajaxPost
//     $("#ajaxPost").click( () => {
//           //Utilizamos el metodo ajax de jquery con la posibilidad de manipular atributos del mensaje que enviamos a la api
//           $.ajax({
//             method: "POST",
//             url: URLGET,
//             data: infoPost,
//             success: function(respuesta){
//               console.log(respuesta);
//               $("main").append(`<div class="card">
//                                   <h5 class="card-header">ID: ${respuesta.id}</h5>
//                                   <div class="card-body">
//                                     <h5 class="card-title"> ${respuesta.nombre} </h5>
//                                     <p class="card-text"> ${respuesta.profesion} </p>
//                                   </div>
//                                 </div>`)
//             }
//           })
//     });









// });
