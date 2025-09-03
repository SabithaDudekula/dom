let image=document.getElementById("image")
let warning=document.getElementById("warning")
image.style.width="300px";
count=120;
function onIncBtn(){
    if (count<=300){
        count+=5
        image.style.width=count+"px";
        warning.textContent=""
    }else{
        warning.textContent="More zoom has done !"
    }
}
function onDncBtn(){
    if (count>=50){
        count-=5
        image.style.width=count+"px";
        warning.textContent=""
    }else{
        warning.textContent="Less zoom has done !"
    }
}