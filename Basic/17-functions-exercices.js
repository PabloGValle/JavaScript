// 1. Crea una función que reciba dos números y devuelva la suma

function suma(a, b) {
    console.log(a + b);
    }
suma(5, 10)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

const numeros = [1, 2, 3, 4, 5]
function mayorDeArray(array) {
    let mayor = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]
        }
    }
    console.log(`Número mayor: ${mayor}`)
}
mayorDeArray(numeros)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

const texto = "Hola, ¿cómo estás?"
const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ"

function cuentaVocales(params) {
    let contadorVocales = 0

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contadorVocales++
        }
    }
console.log(`Número de vocales: ${contadorVocales}`)
}
cuentaVocales(texto)

// 4. Crea una función que reciba un array de strings y de vuelva un nuevo array con las strings en mayúsculas

function convertirAMayusculas(array) {
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(array[i].toUpperCase())
    }
    console.log(`Nuevo array: ${nuevoArray}`)
}
const arrayStrings = ["hola", "mundo", "javascript"]
convertirAMayusculas(arrayStrings)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function isPrimo(num) {
    if (num <= 1) return false
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}
console.log(isPrimo(7))


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosComunes(array1, array2) {
    let comunes = []
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            comunes.push(array1[i])
        }
    }
    console.log(`Elementos comunes: ${comunes}`)
}
const array1 = [1, 2, 3, 4]
const array2 = [3, 4, 5, 6]
elementosComunes(array1, array2)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPares(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            suma += array[i]
        }
    }
    console.log(`Suma de pares: ${suma}`)
}
sumaPares([2, 3, 8, 10, 12, 13, 15, 18, 11, 22])

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function numCuadrado(array) {
    let nuevoArray = []
    for (let i = 0; i < array.length; i++) {
        nuevoArray.push(array[i] ** 2)
    }
    console.log(`Nuevo array: ${nuevoArray}`)
    
}
numCuadrado([1, 2, 3, 4, 5])

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso


function inverText(string) {
    let cadenaInvertida = ""
    for (let i = string.length - 1; i >= 0; i--) {
        cadenaInvertida += string[i]
    }
    console.log(`Cadena invertida: ${cadenaInvertida}`)
}

inverText("JavaScript")


// 10. Crea una función que calcule el factorial de un número dado


function factoNum(num) {
    let multi = 1
    for (let i = 1; i <= num; i++) {
        multi *= i
    }
    console.log(`El factorial de ${num} es: ${multi}`)
}
factoNum(5)