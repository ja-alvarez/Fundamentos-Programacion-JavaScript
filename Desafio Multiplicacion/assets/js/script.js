//Función arrow: valida que el número esté entre 1 y 20. Realiza las multiplicaciones y factorial hasta el número indicado
const validarNumero = (numeroValidado) => {
    if (num < 1 || num > 20) { alert("Número fuera de rango") } else {
        for (let i = 1; i <= num; i++) { //ciclo for. Ejecuta la multiplicacion
            console.log(`${i} x ${num} = ${i * num}`);
        }
        for (let i = 1; i <= num; i++) {
            let res = 1;
            for (let j = 1; j <= i; j++) { //Calculo factorial
                res = res * j;
            }
            console.log(`Factorial de ${i} es: ${res}`);
        }
    }
}

(validarNumero(num = prompt("Ingresa un número entre 1 a 20"))); //Llamado a la función

/*
Primer intento. Funciona, pero no cumple el último requerimiento: 
"Aplicar un ciclo for anidado para obtener el factorial del número ingresado" 

//Función arrow para calcular el factorial de un número. Está almacenada dentro de una const
const calculoFactorial = (numero) => {
    if (numero < 0) {
        return "No se puede calcular el factorial de un número negativo.";
    }
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

//Función arrow: valida que el número esté entre 1 y 20. Realiza las multiplicaciones y factorial hasta el número indicado
const validarNumero = (numeroValidado) => {
    if (num < 1 || num > 20) { alert("Número fuera de rango") } else {
        for (let i = 1; i <= num; i++) { //ciclo for. Ejecuta la multiplicacion
            console.log(`${i} x ${num} = ${i * num}`);
        }
        for (let i = 1; i <= num; i++) { //ciclo que calcula el factorial de i hasta el número seleccionado
            console.log(`Factorial de ${i} es: ${(calculoFactorial(i))}`); //${(calculoFactorial)} llamado a la función
        }
    }
}

(validarNumero(num=prompt("Ingresa un número entre 1 a 20"))); //Llamado a la función
*/