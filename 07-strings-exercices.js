// 1. Concatena dos cadenas de texto

let cadena1 = "Hola, "
let cadena2 = "Pablo!"

console.log(cadena1 + cadena2)

// 2. Muestra la longitud de una cadena de texto

let cadena3 = "Hola, Pablo!"

console.log (cadena3.length)

// 3. Muestra el primer y el último carácter de un string
console.log (cadena3.slice(0, 12))

// 4. Convierte a mayúsculas y minuculas un string

console.log(cadena3.toUpperCase())
console.log(cadena3.toLowerCase())

// 5. Crea una cadena de texto de varias líneas
let cadena4 = `Esta esuna
cadena en varias líneas`

console.log(cadena4)

// 6. Interpola el valor de una variable en un string

let nombre = "Pablo"
let email = "pablogv95@yahoo.es"

console.log (`Hola, ${nombre}! Tu email es ${email}.`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.logcadena3.replace(" ", "-")

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadena3.includes("Pablo"))

// 9. Comprueba si dos strings son iguales

console.log(cadena1 == cadena2) // false

// 10. Comprueba si dos strings tienen la misma longitud

console.log(cadena1.length == cadena2.length) // false