//function to generate computers random
const  myArray=["rock", "scissors", "paper" ];





function getComputerChoice() {//computer score generator
  const randNum = myArray[Math.floor(Math.random() * myArray.length)];//my array.length = 3 values assigned to 0,1,2
  return (randNum);  
};  

function getPlayerChoice() {// get player input and conditioned so that a correct value is returned otherwise it will keep prompting.
  let validatedInput = false;
    while(validatedInput == false){
      const pick = prompt("please input either: Rock, Paper or Scissors")
      if(pick == null) {
        continue;// will keep prompting if unmatched values are inputed
      }
      const pickInLower = pick.toLowerCase();//function to change input to all lowercase so that the above prompt input is made easier for human
      if (myArray.includes(pickInLower)) {
        validatedInput = true;
        return pickInLower;
      }
    }
};


function playRound(playerSelection, computerSelection) {//game logic using ternary operator
  let result = ""
//conditions
if (playerSelection == computerSelection) {
  result = "Its a Draw!";
}else{
  switch(playerSelection){//changed to switch method for cleaner code
    case "rock":
      result = (computerSelection == "scissors") ? "You Win! "  : "You Lose! "  ;//updated logic as console log throw different results from the randNum.
      break;
    case "paper":
      result = (computerSelection == "rock") ? "You Win! "    : "You Lose! "  ;
      break;
    case "scissors":
      result = (computerSelection == "paper") ? "You Win! "  : "You Lose! "  ;
      break;   
  }  
}
  return result;
};

    


    


function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Hello")
    for (let i = 0; i < 5; i++){// 2.loops the below five times
      const playerSelection = getPlayerChoice();//runs player choice and computer choice below and stores in variables.
      const computerSelection = getComputerChoice();
      console.log(`player: ${playerSelection} --VS-- computer: ${computerSelection}`);// logs the scores
    
      if(playRound(playerSelection, computerSelection) == "You Win! ") {
        scorePlayer++;//adds scores by 1 and stores in the above variable to present to console
      }else if(playRound(playerSelection, computerSelection) == "You Lose! ") {
        scoreComputer++;
      }
      if(playRound(playerSelection, computerSelection) == "You Win! ") {//adds the you win or you lose. 
        console.log("You Win! ");
      }else if(playRound(playerSelection, computerSelection) == "You Lose! ") {
        console.log("You Lose! ");
      }else{
        console.log("Tie breaker!");
      }
      console.log("---------------------");
      
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer) {
      console.log("WINNER WINNER CHICKEN DINNER!");
    }else if(scorePlayer < scoreComputer) {
      console.log("computer wins!");
    }else{
      console.log("we have a tie!");
    }
    console.log(`player: ${scorePlayer}`)
    console.log(`computer: ${scoreComputer}`)
};
game();// 1. runs the game function