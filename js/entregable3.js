//impuestos

const impuestoPais30 = 0.3
const impuestoPais21 = 0.21
const percepcionGanancias = 0.35
const ivaDigital = 0.08

let dolarOficial = 0
let valorCompra = 0
let monedaCompra = ""
let valorFinal = 0
let servicioDigital = ""
let validador = false


const calcularValorFinalDolar = (dolar, compra) => {
    return (dolar * (1 + impuestoPais30 + percepcionGanancias)) * compra
}

const calcularValorFinalDigitalDolar = (dolar, compra) => {
    return (dolar * (1 + ivaDigital + percepcionGanancias + impuestoPais21)) * compra
}

const calcularValorFinalPesos = (dolar, compra) => {
    let ValorDolar = compra/dolar
    return ValorDolar * (dolar * (1 + percepcionGanancias + impuestoPais30))
}

const calcularValorFinalDigitalPesos = (dolar, compra) => {
    let ValorDolar = compra/dolar
    return ValorDolar * (dolar * (1 + ivaDigital + percepcionGanancias + impuestoPais21))
}


alert("Bienvenido a la calculadora de impuestos para compras en el exterior v0.1")

monedaCompra = prompt("Ingrese la moneda en la que efectuará la compra: P (Pesos Arg) // D (Dólares)")
dolarOficial = +prompt("Ingrese el valor del dolar oficial")
valorCompra = +prompt("Ingrese el valor de la compra")
servicioDigital = prompt("Es un servicio digital? S/N")


if ((monedaCompra.toUpperCase() == "P" || monedaCompra.toUpperCase() == "D") && (valorCompra > 0 && dolarOficial > 0) && (servicioDigital.toUpperCase() == "S" || servicioDigital.toUpperCase() == "N")) {
    validador = true
} else {
    validador = false
    alert("Alguno de los datos ingresados es incorrecto.")
}

while(validador){
    if (servicioDigital.toUpperCase() == "S") {
        switch (monedaCompra.toUpperCase()) {
            case "P":
                valorFinal = Math.round(calcularValorFinalDigitalPesos(dolarOficial, valorCompra)) 
                break;
            case "D":
                valorFinal = Math.round(calcularValorFinalDigitalDolar(dolarOficial, valorCompra)) 
                break;
            default:
                alert("La moneda ingresada es incorrecta")
                break;
        }
    } else {
        switch (monedaCompra.toUpperCase()) {
            case "P":
                valorFinal = Math.round(calcularValorFinalPesos(dolarOficial, valorCompra)) 
                break;
            case "D":
                valorFinal = Math.round(calcularValorFinalDolar(dolarOficial, valorCompra)) 
                break;
            default:
                alert("La moneda ingresada es incorrecta")
                break;
        }
    }
    
    alert(`El valor de la compra es de ${valorFinal} pesos argentinos. Disfruta tu compra.`)
    validador=false
}



