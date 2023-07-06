const instrumentos = [{imagen: "🎸", nombre: "Fender", precio: 115000},
                      {imagen: "🎸", nombre: "Gibson", precio: 130000},                      
                      {imagen: "🎸", nombre: "Ibanez", precio: 100000},
                      {imagen: "🎺", nombre: "trompeta", precio: 250000},
                      {imagen: "🪕", nombre: "banjo", precio: 170000},
                      {imagen: "🎷", nombre: "saxo", precio: 160000},
                      {imagen: "🎷", nombre: "clarinete", precio: 200000},
                      {imagen: "🎷", nombre: "oboe", precio: 250000}]


function filtrarInstrumento(nom) { 
    let resultado = instrumentos.filter ((instrumento) => instrumento.nombre.toLowerCase().includes(nom.toLowerCase()));
    return resultado;
}

function consultarInstrumento() {
    let nom = prompt("Ingrese el nombre del instrumento del listado por el que desea hacer su consulta:");
    let instrumentoSeleccionado = filtrarInstrumento(nom)
    if (instrumentoSeleccionado.length === 0) {
        alert("🛑 No hemos encontrado coincidencia con su respuesta: " + nom.toUpperCase() + ". Por favor, vuelva a intentar.");
    }
    else {
        console.table(instrumentoSeleccionado)
    }
}

const carrito = []

class Compra {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras;    
    }
    
    obtenerPrecioTotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acc, instrumento) => acc + instrumento.precio, 0);
        }
    }
}

function buscarInstrumento(nom) {
    let resultado = instrumentos.find ((instrumento) => instrumento.nombre.toLowerCase() === (nom.toLowerCase()));
    return resultado;
}

function terminarCompra() {
    const carritolleno = new Compra(carrito)
    console.log("Muchas gracias por su compra. El precio total es: $" + carritolleno.obtenerPrecioTotal())
}

function realizarCompra() {
    let nom = prompt("Ingrese el nombre del instrumento que desea comprar:");
    let instrumentoElegido = buscarInstrumento(nom);
        if (instrumentoElegido !== undefined) {
            carrito.push(instrumentoElegido);
            alert("Se ha agregado existosamente " + nom.toUpperCase() + " a tu carrito.");
            let respuesta = confirm("¿Deseas agregar otro producto?");
                if (respuesta === true) {
                    realizarCompra()
                }
                else {
                terminarCompra()
                }
        }
        else {
            alert("🛑 No entendimos tu respuesta: " + nom.toUpperCase() + ". Por favor, vuelve a intentar.");
        }
}
