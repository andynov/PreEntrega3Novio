const tbody = document.querySelector("tbody")

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

