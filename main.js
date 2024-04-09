//function to generate computers random
let computerScore = 0;
let playerScore = 0;
const  myArray=["Rock", "Scissors", "Paper" ];

function getComputerChoice() {
  const randNum = myArray[Math.floor(Math.random() * myArray.length)];//my array.length = 3 values assigned to 0,1,2
  return (randNum)  


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
      result = (computerSelection === "Scissors") ? `You Win! your ${playerSelection} beats opponents ${computerSelection}`    : `You Lose! opponents ${computerSelection} beats your ${playerSelection}` ;//updated logic as console log throw different results from the randNum.
      break;
      case "Paper":
        result = (computerSelection === "Rock") ? `You Win! your ${playerSelection} beats opponents ${computerSelection}`    : `You Lose! opponents ${computerSelection} beats your ${playerSelection}` ;
        break;
        case "Scissors":
          result = (computerSelection === "Paper") ? `You Win! your ${playerSelection} beats opponents ${computerSelection}`    : `You Lose! opponents ${computerSelection} beats your ${playerSelection}` ;
          break;
          
        }
        
      }
      console.log(result)
      switch(result){
        case "You Win! ":
          playerScore ++;
          break;
          case "You Lose! ":
            computerScore ++;
            break;
          }
          
        }

        playRound();