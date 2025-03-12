// Funciones

// Simple

function myFunc() {
    console.log("¡Hola, función!")
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// Con parámetros

function myFuncWithParams(name) {
    console.log(`Hola, ${name}`)
}

myFuncWithParams("Pablo")

// Funciones anónimas

const myFunc2 = function (name) {
    console.log(`Hola, ${name}`)
    
}

myFunc2("Pablo Gonzalez")

// Arrow function

const myFunc3 = (name) => {
    console.log(`Hola, ${name}`)
}

const myFunc4 = (name) => console.log(`Hola, ${name}`);


myFunc3("Pablo Gonzalez")
myFunc4("Pablo Gonzalez")

// Parámetros

function sum(a, b) {
    console.log(a + b);
    
}

sum(5, 10)
sum(5)
sum()

// Por defecto

function defaultSum(a = 0, b = 0) {
    console.log(a + b);
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b =5)

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)


// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna");
    }
}

extern()
