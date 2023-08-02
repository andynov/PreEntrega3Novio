const tbody = document.querySelector("tbody")
let textototal  = document.querySelector("h4.total-carrito")
const btncomprar = document.querySelector("button.btn-comprar")

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
        if (carrito.length > 0){
            tbody.innerHTML = ""
            localStorage.removeItem("carrito")
            carrito = []
            textototal.textContent = "El total del carrito es: $0"
            }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Orquesta sin instrumentos',
                text: 'Su carrito ya se encuentra vacío. Puede agregar sus instrumentos en la página principal.',
        })}
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

function comprar(){
    btncomprar.addEventListener("click", ()=>{
        if (carrito.length > 0) {
            Swal.fire({
                title: '¿Deseas confirmar la compra?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'CONFIRMAR',
                cancelButtonText: 'CANCELAR'
            }).then((result) => {
                if (result.isConfirmed) {
                    tbody.innerHTML = ""
                    localStorage.removeItem("carrito")
                    carrito = []
                    textototal.textContent = "El total del carrito es: $0"
                    Swal.fire(
                    'Tu compra ha sido confirmada',
                    'A partir del próximo día hábil podrás retirarla en nuestro local',
                    'success'
            )}
})}     else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Su carrito está vacío. Agregue los instrumentos e inténtelo nuevamente',
         })}
    })
}

agregarDatosCarrito()
vaciarCarrito()
comprar()
