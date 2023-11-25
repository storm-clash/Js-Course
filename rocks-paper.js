 
 
 let score =JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    tie:0,
    lose:0,

};
updateScoreElement();


 function resetScore(){
    
    score.win = 0;
    score.tie = 0;
    score.lose = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    alert('Score was reset');
 }
 
 function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';
    
    
    if(randomNumber >= 0 && randomNumber < 1/3){
          computerMove = 'rock';
    } else if(randomNumber >= 1/3 && randomNumber< 2/3){
          computerMove = 'paper';
    } else if(randomNumber >= 2/3 && randomNumber <1){
          computerMove = 'scissors';
    }
    return computerMove;
 }
 
 function gameRandom(playerMove){

   const computerMove = pickComputerMove();
    let result = '';
    let score =JSON.parse(localStorage.getItem('score')) || {
        win: 0,
        tie:0,
        lose:0,

    };
    /*
    if(!score){
        score = {
            win:0,
            tie:0,
            lose:0,
        }
    };
    
    */

    if(playerMove === 'rock'){
    if(computerMove === 'rock'){
     result = 'Tie.';
     score.tie++;
    } else if(computerMove === 'paper'){
     result = 'You lose. ';
     score.lose++;
    } else if(computerMove === 'scissors'){
     result = 'You win. ';
     score.win++;
    }
} else if(playerMove === 'paper'){
    if(computerMove === 'rock'){
        result = 'You win.';
        score.win++;
       } else if(computerMove === 'paper'){
        result = 'Tie. ';
        score.tie++;
       } else if(computerMove === 'scissors'){
        result = 'You lose. ';
        score.lose++;
       }
} else if(playerMove === 'scissors'){
    if(computerMove === 'rock'){
        result = 'You lose.';
        score.lose++;
       } else if(computerMove === 'paper'){
        result = 'You win. ';
        score.win++;
       } else if(computerMove === 'scissors'){
        result = 'Tie. ';
        score.tie++;
       }
}
   localStorage.setItem('score',JSON.stringify(score));
   
   document.querySelector('.js-result').innerHTML = `${result}`;
   document.querySelector('.js-selection').innerHTML = `You <img src="rock-paper-scissor/${playerMove}-emoji.png"
   class="move-img">
   <img src="rock-paper-scissor/${computerMove}-emoji.png"
   class="move-img"> Computer`;
   document.querySelector('.js-score').innerHTML = `Score Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie}`;
   
  // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} \n Score Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie}`);

   

}
function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Score Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie}`;
}


