//vom crea logica jocului

//declararea variabilelor

let randomNumber=Math.floor(Math.random()*100)+1;  //genereaza un numar aleatoriu, Math.random genereaza un nr inre 0 si 1

const guesses=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const lowOrHigh=document.querySelector(".lowOrHigh")

//salvam referintele elementelor input cu clasele lor

const guessSubmit=document.querySelector(".guessSubmit");
const guessField=document.querySelector(".guessField");

//salvam numarul incercarilor si o variabila pentru a genera un buton de reset

let guessCount=1;
let resetButton;  //pt a crea o referinta la un buton
function checkGuess(){

    let userGuess=Number(guessField.value);
    if(userGuess===randomNumber){
        lastResult.textContent="Felicitari!Ai ghicit!";
        lastResult.style.backgroundColor="green";
        lowOrHigh.textContent="";
        setGameOver();
    }
    else if(guessCount===10){
        lastResult.textContent="Game over";
        setGameOver();
    }
    else{
        lastResult.textContent="Incorect";
        lastResult.style.backgroundColor="red";
        //verificam daca numarul introdus e mai mare sau mai mic decat cel aleatoriu
        //ajutam jucatorul sa ghiceasca numarul
        if(userGuess<randomNumber){
            lowOrHigh.textContent="Numarul este prea mic";
        }
        else if(userGuess>randomNumber){
            lowOrHigh.textContent="Numarul este prea mare";
        }
    }
    guessCount++;
    guessField.value="";
    guessField.focus();
}

guessSubmit.addEventListener("click",checkGuess);

function setGameOver(){
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton=document.createElement("button");
    resetButton.textContent="Incearca din nou";
    resetButton.style.backgroundColor="rgb(32, 15, 32)";
    resetButton.style.color="rgb(234, 0, 255)";
    resetButton.style.padding="10px";
    document.body.append(resetButton);  //pt a adauga in document
    resetButton.addEventListener("click",resetGame);
}

function resetGame(){
    guessCount=1;
    const resetParas=document.querySelectorAll(".resultParas p");
    //loop
    for(let i=0;i<resetParas.length;i++){
        resetParas[i].textContent="";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessField.value="";
    guessField.focus();

    lastResult.style.backgroundColor="purple";

    randomNumber=Math.floor(Math.random()*100)+1;

}