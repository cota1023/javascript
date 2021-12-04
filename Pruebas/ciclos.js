let nota = parseInt(prompt('Ingrese su nota final'))

console.log(nota, typeof nota)

switch (nota) {
    case 1:
        console.log('Desaprobado')
        break;
    case 6:
        console.log('Aprobado')
        break;
    case 10:
        console.log('Sobresaliente')
    default:
        console.log('Default')
        break;
}