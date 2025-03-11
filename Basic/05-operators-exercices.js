// 1. Crea una variable para cada operacion aritmética

let a = 5
let b = 10
let c = 15
let d = 20
let e = 25
let f = 30

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas

a += 5
b -= 5
c *= 5
d /= 5
e %= 5
f **= 5

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log (a < b) // Menor que, es true porque 10 es mayor que 5
console.log (c > d) // Mayor que, es true porque 15 es mayor que 20
console.log (e <= f) // Menor o igual que, es true porque 25 es menor que 30
console.log (a == 5) // Igualdad por valor, es true porque a es igual a 5
console.log (a === 5) // Igualdad por identidad, es true porque a es igual a 5

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log (a > b) // Mayor que, es false porque 5 no es mayor que 10
console.log (c < d) // Menor que, es false porque 15 no es menor que 20
console.log (e >= f) // Mayor o igual que, es false porque 25 no es mayor o igual que 30
console.log (a != 5) // Distinto que, es false porque a es igual a 5
console.log (a !== 5) // Distinto que en valor y tipo, es false porque a es igual a 5

// 5. Utiliza el operador lógico and

console.log (a < b && c > d) // true porque 5 es menor que 10 y 15 es mayor que 20

// 6. Utiliza el operador lógico or

console.log (a > b || c > d) // false porque 5 no es mayor que 10 y 15 no es mayor que 20

// 7. Combina ambos operadores lógicos

console.log (a < b && c > d || e <= f) // true porque 5 es menor que 10 y 15 es mayor que 20 o 25 es menor o igual que 30

// 8. Añade alguna negación

console.log (!(a < b && c > d || e <= f)) // false porque 5 es menor que 10 y 15 es mayor que 20 o 25 es menor o igual que 30

// 9. Utiliza el operador ternario

let result = a < b ? "Es true" : "Es false"
console.log(result)

// 10. Combina operadores aritméticos, de comparación y lógicos

console.log (a < b && c > d || e <= f ? "Es true" : "Es false") // true porque 5 es menor que 10 y 15 es mayor que 20 o 25 es menor o igual que 30