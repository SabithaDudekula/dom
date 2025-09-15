function generateRandom() {
  let num = Math.ceil(Math.random() * 500);
  document.getElementById("random num").textContent = num;
  let isPrime = true;
  if (num<2){
    isPrime = false;
  }else{
    for(let i = 2; i < num; i++){
      if(num % i === 0){
        isPrime = false;
        break;
      }
    }
  }
  if(isPrime){
    document.getElementById("result").textContent = " Prime ";
    document.getElementById("result").style.color = "green";
  }else{
    document.getElementById("result").textContent = " Not Prime";
    document.getElementById("result").style.color = "red";
  }
}
