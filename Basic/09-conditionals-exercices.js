// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Pablo"

if(nombre =="Pablo"){
    console.log(nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos

let user= "Pablo"
let pass= "1234"

if(user == "Pablo" && pass == "1234"){
    console.log("Usuario y contraseña correctos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje con el resultado

let number = 7

if (number == 0){
    console.log("El número es 0")
} else if (number > 0){
    console.log("El número es positivo")
} else {
    console.log("El número es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le faltan si es menor de edad

let edad = 17

if (edad >= 18){
    console.log("Puede votar")
} else {
    console.log(`No puede votar, le faltan ${18-edad} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

const message = edad >=18 ? "adulto" : "menor"
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 12
let estacion

if (mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno"
} else if (mes >= 3 && mes <= 5){
    estacion = "Primavera"
} else if (mes >= 6 && mes <= 8){
    estacion = "Verano"
} else if (mes >= 9 && mes <= 11){
    estacion = "Otoño"
} else {
    estacion = "Mes no válido"
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let dias

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
    dias = 31
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11){
    dias = 30
} else if (mes == 2){
    dias = 28
} else {
    dias = "Mes no válido"
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "español"
let saludo

switch (idioma){
    case "español":
        saludo = "Hola"
        break
    case "inglés":
        saludo = "Hello"
        break
    case "francés":
        saludo = "Bonjour"
        break
    default:
        saludo = "Idioma no válido"
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes){
    case 1:
    case 2:
    case 12:
        estacion = "Invierno"
        break
    case 3:
    case 4:
    case 5:
        estacion = "Primavera"
        break
    case 6:
    case 7:
    case 8:
        estacion = "Verano"
        break
    case 9:
    case 10:
    case 11:
        estacion = "Otoño"
        break
    default:
        estacion = "Mes no válido"
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (dias){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dias = 31
        break
    case 4:
    case 6:
    case 9:
    case 11:
        dias = 30
        break
    case 2:
        dias = 28
        break
    default:
        dias = "Mes no válido"
    }