// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <=20; i++)
    console.log(`Número: ${i}`)

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for (let i = 1; i <=100; i++)
    suma += i
console.log(`Suma: ${suma}`)

// 3. Crea un bucle que imprima los números pares del 1 al 50
for (let i = 1; i <=50; i++) {
    if (i % 2 === 0)
        console.log(`Número par: ${i}`)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre
const nombres = ["Juan", "María", "Pedro", "Ana"]

for (let valor of nombres) {
    console.log(`Nombre: ${valor}`)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const texto = "Hola, ¿cómo estás?"
const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ"

let contadorVocales = 0

for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
        contadorVocales++
    }
}
console.log(`Número de vocales: ${contadorVocales}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numeros = [1, 2, 3, 4, 5]
let producto = 1
for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i]
}
console.log(`Producto: ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
const numero = 5
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}

// 8. Usa un bucle para invertir una cadena de texto
const cadena = "JavaScript"
let cadenaInvertida = ""
for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i]
}
console.log(`Cadena invertida: ${cadenaInvertida}`)

// 9. Usa un bucle para generar los primeros 10 números de la serie de Fibonacci
const fibonacci = [0, 1]
for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}
console.log(`Serie de Fibonacci: ${fibonacci.join(", ")}`)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const numerosArray = [5, 12, 8, 20, 3, 15]

const mayoresA10 = []
for (let i = 0; i < numerosArray.length; i++) {
    if (numerosArray[i] > 10) {
        mayoresA10.push(numerosArray[i])
    }
}
console.log(`Números mayores a 10: ${mayoresA10.join(", ")}`)