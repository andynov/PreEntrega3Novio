function indicarModelo(instrumento){
    switch (instrumento.toLowerCase()) {
    case "guitarra":
        console.log("Los modelos de guitarras disponibles son: Epiphone y Fender")
        break;
    case "bajo":
        console.log("Los modelos de bajos disponibles son: Fretless y Jazz Bass")
        break;
    case "teclado":
        console.log("Los modelos de teclado disponibles son: Roland y Casio")
        break;
    case "trompeta":
        console.log("Los modelos de trompeta disponibles son: Buffet y Parker")
        break;
    default:
        console.warn("🛑 No entendimos la opción ingresada")
        break;
}
}

function nombrarGuitarrasMulticuerdas(){
    for (let i=7; i<=12; i++) {
        console.log("🎵 Tenemos guitarras de " + i + " cuerdas")
    }
}

function consultarInstrumento(){
    let preguntainicial = confirm("¿Desea consultar por algún modelo de instrumento?")
    if (preguntainicial === true) {
        let instrumento = prompt("Ingrese el instrumento musical:")
            indicarModelo(instrumento)
            nombrarGuitarrasMulticuerdas()
    }
    else{
        console.log("Muchas gracias por tu visita. Te esperamos en una próxima consulta 🎶")
    }
}
