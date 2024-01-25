var parrafo1 = document.getElementById("p1");
var parrafo2 = document.getElementById("p2");
var parrafo3 = document.getElementById("p3");
var boton1 = document.getElementById("b1");
var boton2 = document.getElementById("b2");
var boton3 = document.getElementById("b3");

boton1.addEventListener("click", ()=>{
    if (parrafo1.style.display != "none"){
        parrafo1.style.display = "none";
    }else{
        parrafo1.style.display = "block";
    }
})

boton2.addEventListener("click", ()=>{
    if (parrafo2.style.display != "none"){
        parrafo2.style.display = "none";
    }else{
        parrafo2.style.display = "block";
    }
})

boton3.addEventListener("click", ()=>{
    if (parrafo3.style.display != "none"){
        parrafo3.style.display = "none";
    }else{
        parrafo3.style.display = "block";
    }
})