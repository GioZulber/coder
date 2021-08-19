//INICIO DESAFIO C6

class Producto {
    constructor(pMarca, pProducto, pPrecio) {
        this.marca = pMarca;
        this.producto = pProducto;
        this.precio = pPrecio;
    }
    sumarIVA() {
        this.precio = this.precio * 1.21;
    }
    visualizar() {
        console.log(this);
    }
}
//Creamos nuestro array 
const listaProductos = [];
//Adidas
listaProductos.push(new Producto("Adidas", "Yeezy", "25000"));
listaProductos.push(new Producto("Adidas", "Originals Stan Smith", "13000"));
listaProductos.push(new Producto("Adidas", "Originals Boost", "14000"));
listaProductos.push(new Producto("Adidas", "Originals Superstar", "15000"));
// Fin Adidas
//Puma
listaProductos.push(new Producto("Puma", "RS-Fast Mix", "14000"));
listaProductos.push(new Producto("Puma", "RS-X3", "11000"));
listaProductos.push(new Producto("Puma", "Cruise Rider Silk Road", "13500"));
listaProductos.push(new Producto("Puma", "RS-X Bubble", "9000"));
//Fin Puma
//Jordan
listaProductos.push(new Producto("Jordan", "1 High Retro", "15000"));
listaProductos.push(new Producto("Jordan", "XXXV", "25000"));
listaProductos.push(new Producto("Jordan", "4 x Off White", "95000"));
listaProductos.push(new Producto("Jordan", "4 White Oreo", "25000"));
//Fin Jordan
//Nike
listaProductos.push(new Producto("Nike", "Air Force 1", "10000"));
listaProductos.push(new Producto("Nike", "Air Max 720", "20000"));
listaProductos.push(new Producto("Nike", "Air Max 720 Se", "20500"));
listaProductos.push(new Producto("Nike","Air Force 1 LX", "16000"));
//Fin Nike


//Le sumamos el iva a los productos.
for (const producto of listaProductos) {
    producto.sumarIVA();
    console.log(`El precio final con IVA de ${producto.marca} ${producto.producto} es: $${producto.precio}`);
}

//Le damos al usuario entre 4 marcas y usamos filter
let buscadorMarca = prompt("Que marca buscas?(Adidas/Puma/Jordan/Nike)");
const productoFiltrado = listaProductos.filter(elemento => elemento.marca == buscadorMarca);

console.log(`Estos son los productos de ${buscadorMarca}`);
for (const marcaEncontrada of productoFiltrado) {
    marcaEncontrada.visualizar();
}

//Ordenados por precio

let ordenadosPrecio = [];
ordenadosPrecio = listaProductos.map(elemento => elemento);
ordenadosPrecio = listaProductos;
ordenadosPrecio.sort(function(a, b) {
    return a.precio- b.precio;
});
console.log(`Ordenados por precio del más barato al más caro:`);
console.log(ordenadosPrecio);


