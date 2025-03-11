// arrays, es una estructura de datos que nos permite almacenar varios valores en una sola variable
// se declaran con corchetes []

// Declarar un array

let myArray = [] // Usar esta forma

let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicializar un array

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1,2,3,4)

console.log(myArray)
console.log(myArray2)

myArray = ["Pablo", "González", "Pei", 29, true]
myArray2 = new Array("Pablo", "González", "Pei", 29, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "Pablo"
myArray2[1] = "González"
myArray2[2] = "Pei"

console.log(myArray2)

myArray = []
myArray[0] = "Pablo"
myArray[1] = "González"
myArray[2] = "Pei"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop. Push añade un elemento al final del array y pop elimina el último elemento del array

myArray.push("Pablo")  // Añade un elemento al final del array
myArray.push("González")
myArray.push("Pei")
myArray.push(29)
myArray.push(true)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último elemento del array y lo devuelve
myArray.pop()


console.log(myArray)

//shift y unshift. Shift elimina el primer elemento del array y lo devuelve, unshift añade un elemento al principio del array

console.log(myArray.shift()) // Elimina el primer elemento del array y lo devuelve
console.log(myArray)

myArray.unshift("Pablo", "Gonzalez") // Añade un elemento al principio del array
console.log(myArray)

// length. Devuelve la longitud del array

console.log(myArray.length) // Devuelve la longitud del array

// clear. Elimina todos los elementos del array

myArray = [] // Para eliminar todos los elementos del array es mejor inicializarlo de nuevo
console.log(myArray)

// slice. Devuelve una copia de una parte del array

myArray.push("Pablo", "González", "Pei", 29, true)

let myNewArray = myArray.slice(1, 3) // Devuelve una copia de los elementos entre los índices 1 y 3 sin tener en cuenta el 3

console.log(myArray)
console.log(myNewArray)

// splice. Añade o elimina elementos de un array

myArray.splice(1, 3) // Elimina los elementos entre los índices 1 y 3 sin tener en cuenta el 3
console.log(myArray)

myArray = ["Pablo", "González", "Pei", 29, true]

myArray.splice(1, 2, "Nueva Entrada") // Elimina los elementos entre los índices 1 y 2 sin tener en cuenta el 2 y añade el elemento "Nueva Entrada" en su lugar
console.log(myArray)