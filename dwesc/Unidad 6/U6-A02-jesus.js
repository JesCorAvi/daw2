var crear = document.getElementById("añadir");
var eliminar = document.getElementById("eliminar");


crear.addEventListener("click", ()=>{
    var nuevo = document.createElement("div");
    nuevo.style.width = "80px"
    nuevo.style.height = "50px"
    nuevo.style.textAlign = "center"
    nuevo.style.backgroundColor = "lightblue"
    nuevo.style.margin = "10px"
    nuevo.appendChild(document.createTextNode(prompt("¿Que desea que tenga el nuevo div?: ")))
    document.body.appendChild(nuevo);
})


eliminar.addEventListener("click", ()=>{
    var nuevo = document.createElement("div");
    nuevo.appendChild(document.createTextNode("nuevo div"))
    document.body.removeChild(document.body.lastChild);
})
