// Loops o Bucles

// Bucle for

for (let i = 1; i <= 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// Bucle While

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// Bucle infinito ¡CUIDADO!
// while(true){}



// do while
i = 6

do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

// for of

myArray = [1, 2, 3, 4]

mySet = new Set(["Pablo", "González", "Pei", 29, true, "pablogv95@yahoo.es"])

myMap = new Map([
    ['name', 'Pablo'],
    ['email', 'pablogv95@yahoo.es'],
    ['age', 29]
])

myString = "¡Hola, JavaScript!"

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}

// Buenas Prácticas

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 6) {
        break
    }
    console.log(`Hola ${i}`)
}

