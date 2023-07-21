const tbody = document.querySelector("tbody")

function tomarDatosTabla(instrumento){
    return `</tbody>
                <td>${instrumento.nombre}</td>
                <td>${instrumento.precio.toLocaleString()}</td>
            </tbody>`
}

function agregarDatosCarrito(){
    tbody.innerHTML = ""
    if (carrito.length > 0){
        carrito.forEach((instrumento) => {
            tbody.innerHTML += tomarDatosTabla(instrumento)
        })
    }
}

agregarDatosCarrito()

function vaciarCarrito(){
    const botonvaciar = document.querySelector("button.vaciarcarrito")
    botonvaciar.addEventListener("click", ()=>{
        tbody.innerHTML = ""
        localStorage.removeItem("carrito")
    })
}

vaciarCarrito()