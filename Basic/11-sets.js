// set. La diferencia entre un set y un array es que un set no permite elementos duplicados y no tiene índices. Un set es una colección de valores únicos.

// Declaración de un set

let mySet = new Set()
console.log(mySet)

// Inicialización de un set

mySet = new Set(["Pablo", "González", "Pei", 29, true, "pablogv95@yahoo.es"])

console.log(mySet)

// Métodos comunes

// add y delete. Add añade un elemento al set y delete elimina un elemento del set

mySet.add("https://www.google.es")
console.log(mySet)

console.log(mySet.delete("https://www.google.es")) // Devuelve true si el elemento ha sido eliminado y false si no
console.log(mySet)

// has. Devuelve true si el elemento está en el set y false si no

console.log(mySet.has("Pablo")) // Devuelve true
console.log(mySet.has("Pei")) // Devuelve true
console.log(mySet.has("https://www.google.es")) // Devuelve false

// size. Devuelve el número de elementos del set

console.log(mySet.size)

// Convertir un set a un array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a un set

mySet = new Set(myArray)
console.log(mySet)

//

mySet.add("pablogv95@yahoo.es")
mySet.add("pablogv95@yahoo.es")
mySet.add("Pablogv95@yahoo.es")
console.log(mySet)