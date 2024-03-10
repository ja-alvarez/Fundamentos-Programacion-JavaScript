/*Counter maquina - humano -->
<div>
    Contador
    Maquina - humano
</div>
<!-- elegir jugada: rock, paper, scissors-->
<!-- resultados cada partida-->
<!-- generar una jugada automatica de la maquina-->
<!--definir un ganador
felicitar al ganador en caso de ser el usuario
Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea
la que gane.
● Declarar un empate.  */

$(document).ready(function () {
    var counterUser = 0;
    var counterMachine = 0;
    var round = prompt("How many rounds do you want to play? (1-5)");
    var userOption;
    var machineOption;

    const userChoice = {
        1: "rock",
        2: "paper",
        3: "scissors"
    };
    if (round > 0 && round < 6) {
        alert("Let's start");
        var results = [];
        for (i = 0; i < round; i++) {
            userOption = prompt("Choose an option:\n 1. Rock\n 2. Paper\n 3. Scissors");
            while (userOption < 1 || userOption > 3) {
                alert('Invalid option. Please choose between 1 -3.');
                userOption = prompt("Choose an option:\n 1. Rock\n 2. Paper\n 3. Scissors");
            }
            userOption = userChoice[userOption];
            machineOption = userChoice[Math.floor((Math.random() * 3) + 1)];
            if (userOption === machineOption) {
                results.push(`It's a tie: Your choice: ${userOption} - Machine's choice: ${machineOption}`);
            } else if (
                (userOption === "rock" && machineOption === "scissors") ||
                (userOption === "scissors" && machineOption === "paper") ||
                (userOption === "paper" && machineOption === "rock")
            ) {
                results.push(`You win: Your choice: ${userOption} - Machine's choice: ${machineOption}`);
                counterUser++;
            } else {
                results.push(`You lose: Your choice:  ${userOption} - Machine's choice: ${machineOption}`);
                counterMachine++;
            }
        }
        for (i = 0; i < results.length; i++) {
            alert(results[i]);
        }
        alert(`Final results:\nYou: ${counterUser} \nMachine: ${counterMachine}`);
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