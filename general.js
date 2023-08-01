const instrumentos = []

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