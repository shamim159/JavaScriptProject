//function to generate computers random
function getComputerChoice() {
  const  myArray=["Rock", "Scissors", "Paper" ];
  const randNum = Math.floor(Math.random() * myArray.length);//my array.length = 3 values assigned to 0,1,2
  return(randNum, myArray[randNum]);
}  

function getPlayerChoice() {
  prompt("please input either: Rock, Paper or Scissors")
}


let playRound = () => {
  const playerSelection = "Scissors"// selected a random array. seems to work on the console
  const computerSelection = getComputerChoice();//runs this function-random generation
  let result = "";
//conditions
if (playerSelection === computerSelection) {
  result = "Its a Draw!";
}
else{
  switch(playerSelection){//changed to switch method for cleaner code
    case "Rock":
      result = (computerSelection === "Scissors") ? "You Win!" : "You Lose!";
      break;
    case "Paper":
      result = (computerSelection === "Rock") ? "You Win!" : "You Lose!";
      break;
    case "Scissors":
      result = (computerSelection === "Paper") ? "You Win!" : "You Lose!";
      break;
  }
}
console.log(result)
}

playRound(); //intiates on the console with player selection scissors



  





//score track variables

