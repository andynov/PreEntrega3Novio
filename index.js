const container = document.querySelector("div#container.container")
const buscador = document.querySelector("input#buscador")
const URL = "./instrumentos.json"

function retornarCard(instrumento){
    return `<div class="card">
                <h3>${instrumento.nombre}</h3>
                <h4>$${instrumento.precio}</h4>
                <button class="btn-agregar" id="${instrumento.nombre}">Agregar al carrito</button>
                </div>`
}

function retornarAvisoError(){
    return `<div class="error">
    <h2>🎶🎸En este momento, estamos afinando los instrumentos.🎷🪕</h3>
    <h3>Te esperamos a la brevedad con toda la orquesta lista.</h2>
</div>`
}

function cargarInstrumentos(array){
    container.innerHTML = ""
    array.forEach((instrumento)=> {
    container.innerHTML += retornarCard(instrumento) 
    }
    )
    agregarCarritoClick()
}

buscador.addEventListener("search", () => {
        const resultado = instrumentos.filter((instrumento) => instrumento.nombre.toUpperCase().includes(buscador.value.toUpperCase()))
        cargarInstrumentos(resultado)
} )

function agregarCarritoClick(){
    const buttons = document.querySelectorAll("button.btn-agregar")
    buttons.forEach((boton) => {
        boton.addEventListener("click", () =>{
            let resultado = instrumentos.find((instrumento) => boton.id === instrumento.nombre)
            carrito.push(resultado)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            toast("✔ Has agregado 1 item al carrito")
        })
    })
}

async function obtenerInstrumentos(){
    try {
        const response = await fetch(URL)
    const data = await response.json()
    instrumentos.push(...data)
    cargarInstrumentos(instrumentos)
    } catch(error) {
        container.innerHTML = retornarAvisoError()
    }
}

obtenerInstrumentos()