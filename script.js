const btnNewGame = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const TotScore0 = document.getElementById("score--0");
const TotScore1 = document.getElementById("score--1");

const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");
  
let score0 = 0, score1 = 0, partialScore = 0, playerActive = 0;

btnRoll.addEventListener('click', function () 
{
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    document.querySelector(".dice").src=`Images/dice-${diceNumber}.png`;;
    
    if (diceNumber !== 1) 
    {
        partialScore += diceNumber;
        document.getElementById("current--"+playerActive).textContent = partialScore;
    } 
    else 
    {
        switchPlayer();
    }
});

btnHold.addEventListener('click', function () 
{
    if (playerActive == 0) 
    {
        score0 += partialScore;
        document.getElementById("score--"+playerActive).textContent = score0;

        if(score0 >= 100)
        {
            document.querySelector(".player--"+playerActive).classList.add('player--winner');
            document.querySelector(".player--"+playerActive).classList.remove('player--active');
        }
    }
    if (playerActive == 1)
    {
        score1 += partialScore;
        document.getElementById("score--"+playerActive).textContent = score1;

        if(score1 >= 100)
        {
            document.querySelector(".player--"+playerActive).classList.add('player--winner');
            document.querySelector(".player--"+playerActive).classList.remove('player--active');
        }
    }
    switchPlayer();
});

btnNewGame.addEventListener("click", function()
{
    location.reload();
});  

const switchPlayer = function () 
{
    document.getElementById("current--"+playerActive).textContent = 0;
    partialScore = 0;
  
    if (playerActive == 0) playerActive = 1;
    else playerActive = 0;
  
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};
