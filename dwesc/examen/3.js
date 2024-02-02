var patoImg = document.getElementById("patoImg");
patoImg.style.width = "250px"
patoImg.style.height = "200px"
patoImg.draggable = false
var boton = false
var x, y

patoImg.addEventListener("mousedown", (e)=>{
    boton = true
    x = e.clientX - patoImg.offsetLeft;
    y = e.clientY - patoImg.offsetTop;
})

document.addEventListener("mousemove", (e)=>{
    if (boton){
        let ejeX = e.clientX - x;
        let ejeY = e.clientY - y;
        patoImg.style.position = "absolute"
        patoImg.style.left = ejeX + "px";
        patoImg.style.top = ejeY + "px";
    }
})

document.addEventListener("mouseup", ()=>{
    boton = false
})