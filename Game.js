const choices = ['Sword', 'Magic', 'Enchanted Bow'];
let winners = [];

function game() {
    for (let i=1; i<=5; i++) {
      playRound(i);
    }
    document.querySelector("button").textContent = "Play new game";
    trackWinner();
}

function playRound (round) {
    const playerSelection = playerChoice();
    const compSelection = compChoice();
    const winner = checkWinner(playerSelection, compSelection);
    winners.push(winner);
    trackRound(playerSelection, compSelection, winner, round)
}

function playerChoice () {
    let input = prompt("It's dangerous to go alone! Take one of these!:\nSword\nMagic\nEnchanted Bow");
    while (input == null) {
        input = prompt("It's dangerous to go alone! Take one of these!:\nSword\nMagic\nEnchanted Bow");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
      input = prompt(
        "Type Sword, Magic, or Enchanted Bow. Spelling needs to be exact, but capitilization doesnt matter"
        );
      while (input == null) {
        input = prompt("Type Sword, Magic, or Enchanted Bow.");
      }
      input = input.toLowerCase();
      check = validateInput(input);
    }
    return input;
}

function compChoice () {
    return choices[Math.floor(Math.random() * 3)];
}

function validateInput(choice) {
    return choices.includes(choice);
  }

function checkWinner (player, comp) {
    if (player === comp) {
        return "Foe blocked your attack!";
    } else if (
        (player === 'Sword' && comp == 'Magic') ||
        (player === 'Magic' && comp == 'Enchanted Bow') ||
        (player === 'Enchanted Bow' && comp == 'Sword')
     ) {
        return "Your Foe triumphed";
     }
    else {
        return "You have beasted your Foe!";
    }
}

function trackWinner(){
    let playerWin = winners.filter((item) => item == "You have beasted your Foe!").length;
    let compWin = winners.filter((item) => item == "Your Foe triumphed").length;
    let tieWin = winners.filter((item) => item == "Foe blocked your attack!").length;
    console.log("Results:");
    console.log("Hero Wins:", playerWin);
    console.log("Foe Wins:", compWin);
    console.log("Deadlocks:", tieWin)
}

function trackRound(playerChoice, compChoice, round) {
    console.log("Round:", round);
    console.log("Hero chose:", playerChoice);
    console.log("Foe chose:", compChoice);
    console.log("-------------------------------");
  }