var texto = document.getElementById("texto");
texto.draggable = false
var boton = false
var x, y

texto.addEventListener("mousedown", (e)=>{
    boton = true
    x = e.clientX - texto.offsetLeft;
    y = e.clientY - texto.offsetTop;
    texto.innerHTML = "TEXTO NUEVO"
})

document.addEventListener("mousemove", (e)=>{
    if (boton){
        let ejeX = e.clientX - x;
        let ejeY = e.clientY - y;
        texto.style.position = "absolute"
        texto.style.left = ejeX + "px";
        texto.style.top = ejeY + "px";
    }
})

document.addEventListener("mouseup", ()=>{
    boton = false
    texto.innerHTML = "TEXTO ORIGINAL"

})