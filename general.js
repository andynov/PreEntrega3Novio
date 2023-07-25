const instrumentos = [{imagen: "🎸", nombre: "Guitarra Fender", precio: 115000},
                      {imagen: "🎸", nombre: "Guitarra Gibson", precio: 130000},                      
                      {imagen: "🎸", nombre: "Guitarra Ibanez", precio: 100000},
                      {imagen: "🎺", nombre: "Trompeta Parquer", precio: 250000},
                      {imagen: "🪕", nombre: "Banjo", precio: 170000},
                      {imagen: "🎷", nombre: "Saxo Alto", precio: 160000},
                      {imagen: "🎷", nombre: "Clarinete Bufet", precio: 200000},
                      {imagen: "🎷", nombre: "Oboe", precio: 250000}]

function tomarCarrito(){
    JSON.parse(localStorage.getItem("carrito"))
    if (localStorage.getItem("carrito") !== null) {
        return JSON.parse(localStorage.getItem("carrito"))
    }
    else{
        return []
    }
}

const carrito = tomarCarrito()

function toast(mensaje){
    Toastify({
    text: mensaje,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
    background: "blue",
    },
    className: "toastify"
  }).showToast();
}