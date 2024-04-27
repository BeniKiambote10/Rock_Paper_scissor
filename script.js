//created a variable to track wins loss and ties//
let wins = 0, losses = 0, ties = 0;

//create a function named playGame with no parameters/placeholder//

//inside of the function grad the ID from the html with the name userChoice with[ const userChoice = document.getElementById("userChoice);//

//after getting the id create a if statement for when the user does not put in a input and use the ! operator//

//The alert will pop up if the user does not put rock, paper, scissor //

//return is saying to return the alert if the user does not input one of the choices//

function playGame() {
    const userChoice = document.getElementById("userChoice").value.toLowerCase();
    if (!["rock", "paper", "scissors"].includes(userChoice)) {
        alert("Please enter rock, paper, or scissors.");
        return;
    }

//after the if statement in the function//

//now we crate an array literal that will generate the computers choice of either rock paper or scissor math.floor and math.random was used in order to generate number 0-3 in the index//

//the computer will pick rock paper or scissor because of math.random//

//after the computerChoice now we will determine the results of the game based on the userChoice and the computerChoice//

//used an if else statement to keep track of the wins and loss and ties//

   const computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

   let result;
   if (userChoice === computerChoice) {
       result = "tie";
   } else if (
       (userChoice === "rock" && computerChoice === "scissors") ||
       (userChoice === "paper" && computerChoice === "rock") ||
       (userChoice === "scissors" && computerChoice === "paper")
   ) {
       result = "win";
   } else {
       result = "loss";
   }

   updateScore(result);


//now we grab the the id with the name result //

//created a if statement that tell the user a message if they win, lose, or tie with the computer//


   const resultElement = document.getElementById("result");
   if (result === "win") {
       resultElement.textContent = "You win!";
   } else if (result === "loss") {
       resultElement.textContent = "Computer wins!";
   } else {
       resultElement.textContent = "It's a tie!";
   }
}


//after the if else statement now we want a function to update the score everytime the game is played //

//create a function to update the score in the game against the user and the compute//



function updateScore(result) {
    document.getElementById(result + "s").textContent = ++window[result];
}

//Now we need to create a function that reset the game once the reset button is pushed//

//resets the values of the wins and losses and ties to 0//

//the querySelector selects multiple elements at one time to select all the span elements with the class score and set their value to 0//

//clear the id with the name results and the userchoice/

//.textcontent target the text contenet of the element//

//.forEach() method is a higher-order function in JavaScript that allows you to iterate over elements of an array (or array-like object) and execute a callback function for each element//


function resetGame() {
    wins = losses = ties = 0;
    document.querySelectorAll(".score span").forEach(score => score.textContent = 0);
    document.getElementById("result").textContent = "";
    document.getElementById("userChoice").value = "";
}
