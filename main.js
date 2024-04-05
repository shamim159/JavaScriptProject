//function to generate computers random
function getComputerChoice() {
  const  myArray=["Rock", "Scissors", "Paper" ];
  const randNum = Math.floor(Math.random() * myArray.length);//my array.length = 3 values assigned to 0,1,2
  return(randNum, myArray[randNum]);
}  

function getPlayerChoice() {
  prompt("please input either: Rock, Paper or Scissors")
}

//conditions
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock ";
  } else if (playerSelection === "Rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
    return "You Lose! Scissors beats paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock Beats Scissors";
  } else if (playerSelection == computerSelection) {
    return "Its a draw";
  }else{
    return "Invalid Choice, try again!"
  } 
}

const playerSelection = "Scissors"// selected a random array. seems to work on th console

const computerSelection = getComputerChoice();//runs this function


console.log(playRound(playerSelection, computerSelection)); //intiates on the console with player selection scissors



  





//score track variables

