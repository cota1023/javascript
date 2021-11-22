let nombre = prompt('Ingrese su nombre para continuar')
let edad = Number(prompt('Ahora ingrese su edad'))

if (!nombre || nombre === '') {
    alert('Ingrese un nombre válido')
} else if (!edad || edad < 0) {
    alert('Ingrese una edad válida')
} else {
    alert('Bienvenido ' + nombre + ', estás listo para ingresar')
}