// 1. Crea un array que almacene 5 animales

let animales = ["perro", "gato", "pez", "pájaro", "tortuga"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final

animales.push("conejo")
animales.unshift("caballo")
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1)
console.log(animales)

// 4. Crea un set que almacene 5 libros

let libros = new Set(["El señor de los anillos", "Harry Potter", "El código Da Vinci", "El principito", "El nombre del viento"])
console.log(libros)

// 5. Añade dos más. Uno de ellos repetido

libros.add("El alquimista")
libros.add("El nombre del viento")
console.log(libros)

// 6. Elimina uno concreto a tu elección

libros.delete("El principito")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

// 8. Comprueba si el mes 5 existe en el map e imprime su valor

console.log(meses.has(5))
console.log(meses.get(5))

// 9. Añade al mapa una clave con un array como que almacene los meses de verano

meses.set("Verano", ["Junio", "Julio", "Agosto"])
console.log(meses)

// 10. Crea un array, transfórmalo a un set y almacénalo en un map

let array = ["Pablo", "González", "Pei", 29, true]
console.log(array)

mySet = new Set(array)
console.log(mySet)

myMap = new Map([["array", mySet]])
console.log(myMap)