let count;
let randomNumber;

function resetgame(){
     randomNumber = parseInt(Math.random() * 101);
    count = 0;
}

function guessTheNumber(){
let userInput = parseInt(document.querySelector("input").value); 
if (userInput > randomNumber){
    alert("too big");
    count++;
}else {
    if (userInput < randomNumber){
    alert("too small");
}else {
    alert("congratulation !! you have won Number of wrong guess: " + count);
}
}
}