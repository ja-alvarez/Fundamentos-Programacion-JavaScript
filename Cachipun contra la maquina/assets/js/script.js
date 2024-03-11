//Se asegura que el código se ejecute despues de que el DOM haya sido completamente cargado
$(document).ready(function () {
    //contadores
    var counterUser = 0;
    var counterMachine = 0;
    //solicita al usuario las veces que desea que se repita el juego
    var round = prompt("How many rounds do you want to play? (1-5)");
    var userOption;
    var machineOption;
    const userChoice = {
        1: "rock",
        2: "paper",
        3: "scissors"
    };

    /* condicional para que el número de jugadas esté entre el rango 1 -5.
    El número de jugadas debe ser indicado por el usuario, por temas prácticos de prueba se redujo a 5. 
    Se podría modificar y dejar solo: "if (round > 0){..." para asegurar que el valor ingresado sea mayor a 0 */
    if (round > 0 && round < 6) {
        alert("Let's start");
        var results = [];
        for (i = 0; i < round; i++) { 
            //solicita una jugada al usuario en cada ronda
            userOption = prompt("Choose an option:\n 1. Rock\n 2. Paper\n 3. Scissors");
            while (userOption < 1 || userOption > 3) { //se repite hasta obtener una respuesta en el rango correcto
                alert('Invalid option. Please choose between 1 -3.');
                userOption = prompt("Choose an option:\n 1. Rock\n 2. Paper\n 3. Scissors");
            }
            userOption = userChoice[userOption];
            machineOption = userChoice[Math.floor((Math.random() * 3) + 1)]; //genera una jugada automática para la maquina usando Math.random
            /*if, else if y else están dentro de un for, se repetirán la cantidad de veces que el usuario indicó.
            Cada uno de ellos tiene un alert que muestra el resultado de cada ronda inmediatamente */
            if (userOption === machineOption) {
                results.push(`It's a tie: Your choice: ${userOption} vs. Machine's choice: ${machineOption}`);
                alert(results[i]);   
            } else if (
                (userOption === "rock" && machineOption === "scissors") ||
                (userOption === "scissors" && machineOption === "paper") ||
                (userOption === "paper" && machineOption === "rock")
                
            ) {
                results.push(`You win: Your choice: ${userOption} vs. Machine's choice: ${machineOption}`);
                counterUser++; //suma 1 punto al contador del usuario cuando gana
                alert(results[i]);   
            } else {
                results.push(`You lose: Your choice:  ${userOption} vs. Machine's choice: ${machineOption}`);
                counterMachine++; //suma 1 punto al contador de la maquina cuando gana
                alert(results[i]);   
            }          
        }
        //alert muestra los resultados finales de cada contador
        alert(`Final results:\nYou: ${counterUser} \nMachine: ${counterMachine}`);
        //condicional, indica el resultado de la partida dependiendo del caso
        if (counterUser > counterMachine) {
            alert("Congratulations! You won the game!");
        }
        else if (counterUser < counterMachine) {
            alert("Sorry, you lost the game");
        }
        else {
            alert("It's a tie!");
        }
    } else {
        alert("Incorrect option. Enter a valid number of rounds between 1 and 5.");
    }
});