// Operadores aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División


console.log(a % b) // Módulo (resto de la división)
console.log(a ** b) // Exponenciación (a elevado a b)

console.log(a++) // Incremento en 1
console.log(a--) // Decremento en 1


// Operadores de asignación

let myVar = 5
console.log(myVar)

myVar += 5
console.log(myVar)

myVar -= 5
myVar *= 5
myVar /= 5
myVar %= 5
myVar **= 5

// Operadores de comparación

console.log (a > b) // Mayor que
console.log (a < b) // Menor que
console.log (a >= b) // Mayor o igual que
console.log (a <= b) // Menor o igual que
console.log (a == b) // Igualdad por valor
console.log (a == 6) // Igualdad por valor
console.log (a == "6") // Igualdad por valor
console.log (a == a) // Igualdad por valor
console.log (a === a) // Igualdad por identidad (valor y tipo)
console.log (a === "6") // Igualdad por identidad (valor y tipo) "6" es igual en valor a 6 pero no en tipo
console.log (a != 6) // Distinto que
console.log (a !== "6") // Distinto que en valor y tipo
console.log (0 == false) // Es true porque false se convierte a 0
console.log(1 == true) // Es true porque true se convierte a 1
console.log (2 == true) // Es false porque true se convierte a 1
console.log (0 == "") // Es true porque "" se convierte a 0
console.log (0 == " ") // Es true porque " " se convierte a 0
console.log (0 == '') // Es true porque '' se convierte a 0
console.log (0 == "Hola") // Es false porque "Hola" no se puede convertir a 0
console.log (0 === "") // Es false porque "" es un string y 0 es un number
console.log (undefined == null) // Es true porque ambos son valores falsy
console.log (undefined === null) // Es false porque son de distinto tipo

// Truthy values (valores verdaderos)
// Todos los números positivos y negativos excepto 0
// Todas las cadenas de texto menos las vacías
// El boolean true

// Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadenas de texto vacías

// Operadores lógicos

// and (&&)

// Para que el resultado sea true, ambos valores deben ser true

console.log (5 > 10 && 15 > 20) // false porque 5 no es mayor que 10 y 15 no es mayor que 20
console.log (5 < 10 && 15 < 20) // true porque 5 es menor que 10 y 15 es menor que 20
console.log (5 < 10 && 15 > 20) // false porque 5 es menor que 10 pero 15 no es mayor que 20
console.log ( 5 < 10 && 15 > 20 && 30 > 40) // false porque 5 es menor que 10 pero 15 no es mayor que 20 y 30 no es mayor que 40

// or (||)

// Para que el resultado sea true, al menos uno de los valores debe ser true

console.log (5 > 10 || 15 > 20) // false porque 5 no es mayor que 10 y 15 no es mayor que 20
console.log (5 < 10 || 15 < 20) // true porque 5 es menor que 10 y 15 es menor que 20
console.log (5 < 10 || 15 > 20) // true porque 5 es menor que 10 y 15 no es mayor que 20
console.log (5 > 10 || 15 > 20 || 30 > 40) // false porque 5 no es mayor que 10 y 15 no es mayor que 20 y 30 no es mayor que 40

console.log (5 > 10 && 15 > 20 || 30 < 40) // true porque aunque el and es false, el or es true y prevalece el or

// not (!)

// Invierte el valor, si la salida fuese true, la convierte en false y viceversa

console.log (!true) // false
console.log (!false) // true
console.log (!(5 > 10 && 15 > 20)) // true porque el not invierte el valor de la expresión, el resultado sin el not sería false
console.log (!(5 > 10 || 15 > 20)) // true porque el not invierte el valor de la expresión, el resultado sin el not sería false

// Operador ternario

// Si la condicion de la variable es true, se ejecuta la parte que está seguida del simbolo ?, si es false, se ejecuta la parte que está seguida del simbolo :

const isRaining = true

isRaining ? console.log ("Está lloviendo") : console.log ("No está lloviendo")