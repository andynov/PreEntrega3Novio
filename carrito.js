const tbody = document.querySelector("tbody")
let textototal  = document.querySelector("h4.total-carrito")

function tomarDatosTabla(instrumento){
    return `</tbody>
                <tr>
                <td>${instrumento.nombre}</td>
                <td>${instrumento.precio.toLocaleString()}</td>
                <td><button class=btn-quitar id="${instrumento.nombre}">🛑</button></td>
                </tr> 
            </tbody>`
}

function agregarDatosCarrito(){
    tbody.innerHTML = ""
    if (carrito.length > 0){
        carrito.forEach((instrumento) => {
            tbody.innerHTML += tomarDatosTabla(instrumento)
        })
    }
    quitarElementoCarrito()
    sumarTotalCarrito(carrito)
}

function vaciarCarrito(){
    const botonvaciar = document.querySelector("button.vaciarcarrito")
    botonvaciar.addEventListener("click", ()=>{
        tbody.innerHTML = ""
        localStorage.removeItem("carrito")
        textototal.innerHTML= `El total del carrito es: $${0}`
    })
}

function quitarElementoCarrito(){
    const botonquitar = document.querySelectorAll("button.btn-quitar")
    botonquitar.forEach((boton)=> {
        boton.addEventListener("click", ()=>{
            const resultado = carrito.find((instrumento)=> boton.id === instrumento.nombre)
            const indice = carrito.indexOf(resultado)
            carrito.splice(indice, 1)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            agregarDatosCarrito()
        })
    })
}

function sumarTotalCarrito(carrito){
    if (carrito.length > 0){
        let totalCarrito = carrito.reduce((acc, carrito)=> acc + carrito.precio, 0)
        textototal.textContent = "El total del carrito es: $" + totalCarrito.toLocaleString()
    }
    else{
        textototal.textContent = "El total del carrito es: $0"
    }
}

agregarDatosCarrito()
vaciarCarrito()
