var patoDiv = document.getElementById("patoDiv");
patoDiv.style.backgroundColor = "lightblue"
patoDiv.style.display  = "flex"
patoDiv.style.width = "250px"
patoDiv.style.height = "200px"
var patoImg = document.getElementById("patoImg");
patoImg.draggable = false
var boton = false
var x, y

patoDiv.addEventListener("mousedown", (e)=>{
    boton = true
    x = e.clientX - patoDiv.offsetLeft;
    y = e.clientY - patoDiv.offsetTop;
})

document.addEventListener("mousemove", (e)=>{
    if (boton){
        let ejeX = e.clientX - x;
        let ejeY = e.clientY - y;
        patoDiv.style.position = "absolute"
        patoDiv.style.left = ejeX + "px";
        patoDiv.style.top = ejeY + "px";
        patoImg.src = "ñu.png"
    }
})

document.addEventListener("mouseup", ()=>{
    boton = false
    patoImg.src = "pato.png"

})