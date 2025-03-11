// Strings

let myName = "Pablo"
let gretting = "Hola, " + myName + "!"
console.log(gretting)
console.log (typeof gretting)

// Longitud de un string

console.log(gretting.length)

// Acceso a caracteres individuales

console.log(gretting[0]) // H
console.log(gretting[1]) // o
console.log(gretting[2]) // l
console.log(gretting[3]) // a
console.log(gretting[4]) // Espacio en blanco
console.log(gretting[5]) // ,
console.log(gretting[6]) // P
console.log(gretting[7]) // a
console.log(gretting[8]) // b
console.log(gretting[9]) // l
console.log(gretting[10]) // o
console.log(gretting[11]) // !
console.log(gretting[12]) // undefined, porque se empieza a contar desde 0, asi que serí del 0 al 11

//Métodos comunes

console.log(gretting.toUpperCase()) // HOLA, PABLO! Este método convierte todo el string en mayúsculas
console.log(gretting.toLowerCase()) // hola, pablo! Este método convierte todo el string en minúsculas
console.log(gretting.indexOf("Pablo")) // 6 Este método devuelve la posición de la primera ocurrencia de la cadena de búsqueda, si no se encuentra la cadena de búsqueda, devuelve -1
console.log(gretting.includes("Pablo")) // true Este método determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devuelve true o false
console.log(gretting.slice(0, 10)) // Hola, Pabl Este método devuelve una parte de una cadena de texto, desde la primera posición que le pongamos hasta la segunda posición que le pongamos, en este caso al poner la posición 10 no incluye la posición 10, es decir la última posición no se incluye
console.log(gretting.replace("Pablo", "Juan")) // Hola, Juan! Este método reemplaza una cadena de texto por otra cadena de texto


// Templates literals (plantillas literales)

let message = `Hola, este
es mi
mensaje` // Este método permite escribir strings en varias líneas, se hace con las comillas invertidas

console.log(message)

let email = "pablogv95@yahoo.es"

console.log (`Hola, ${myName}! Tu email es ${email}.`) // Este método permite insertar variables dentro de un string, se hace con las comillas invertidas y ${} para insertar la variable