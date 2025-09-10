let timer=document.getElementById("timer");
let image=document.getElementById("image");
let count=10;
let time=setInterval(function(){
    count--;
    timer.textContent="Timer: "+ count;
    if(count<=3){
        timer.style.color="blue"
    }
    if(count==0){
        image.src="https://png.pngtree.com/png-vector/20200529/ourlarge/pngtree-boom-clean-and-bold-design-png-image_2213866.jpg";
        clearInterval(time)
    }
},1000)