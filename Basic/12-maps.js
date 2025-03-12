// Maps

// Declaración de un Map

let myMap = new Map()

console.log(myMap)

// Inicialización de un Map

myMap = new Map([
    ['name', 'Pablo'],
    ['email', 'pablogv95@yahoo.es'],
    ['age', 29]
])

console.log(myMap)

// Métodos y propiedades de un Map

// set(key, value) -> Añade un elemento al Map

myMap.set('alias', "Pei")
myMap.set('name', 'Pablo González')
console.log(myMap)

// get (key) -> Obtiene un elemento del Map

console.log(myMap.get('name'))
console.log(myMap.get('email'))

// has (key) -> Comprueba si existe un elemento en el Map

console.log(myMap.has('name'))
console.log(myMap.has('email'))

// delete (key) -> Elimina un elemento del Map

myMap.delete('email')
console.log(myMap)

// keys(), entries y values() -> Devuelven un objeto iterable con las claves, valores y entradas del Map

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size -> Devuelve el número de elementos del Map

console.log(myMap.size)

// clear() -> Elimina todos los elementos del Map

myMap.clear()
console.log(myMap)