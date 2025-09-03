let random=Math.ceil(Math.random()*100);
let input=document.getElementById("input");
let result=document.getElementById("result");
let score=document.getElementById("score");
let count=0;
function guessbtn(){
    count++;
    if(input.value==random){
        result.textContent="yayyy!!!!CONGRATUALATIONS!! your guess is correct"
        result.style.color="green"
        score.textContent="No.of Chances: "+count;
    }else if(input.value<random){
        result.textContent="Oops! Your guessing too low.Try again"
        result.style.color="red"
    }else{
        result.textContent="Your guessing is too high.Try again"
        result.style.color="red"
    }
}
