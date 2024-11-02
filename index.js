const buttons=document.querySelectorAll("button");
const resultEl=document.getElementById("result");
const userEl=document.getElementById("user-score");
const computerEl=document.getElementById("cooomputer-score");
let playerScore=0;
let computerScore=0;

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
         const res=play(button.id,computerPlay())
         resultEl.innerText=res;
    });
});
function play(playerSelection,computerSelection)
{
  if(playerSelection===computerSelection) 
  {
    return "It's Tie!!!";
  }
  else if((playerSelection === "rock" && computerSelection === "scissor") ||
  (playerSelection === "paper" && computerSelection === "rock") ||
  (playerSelection === "scissor" && computerSelection === "paper"))
  {
    playerScore++;
    userEl.textContent=playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  }
  else
  {
    computerScore++;
    computerEl.textContent=computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
} 
function computerPlay()
{
    const c=["rock","paper","scissor"];
    const choice=Math.floor(Math.random()*c.length)+1;
    return c[choice];
}