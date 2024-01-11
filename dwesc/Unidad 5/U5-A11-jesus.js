var sobremi = document.getElementById("sobremi");

sobremi.onclick = ()=> {location.replace("http://www.google.es")}

var selectorMateria = document.querySelector('#materia')
selectorMateria.onchange =  () => {
    var materia = document.querySelector('#materia').value
    if(materia == "matematicas"){
        console.log("matematicas")
        document.getElementById("formulario").action  = "mailto:matematicas.iesdonana.org";
    }else if(materia == "lengua"){
        console.log("lengua")
        document.getElementById("formulario").action  = "mailto:lengua.iesdonana.org";
    }else if(materia == "historia"){
        console.log("historia")
        document.getElementById("formulario").action  = "mailto:historia.iesdonana.org";
    } 
}
var checkbox = document.getElementsByName("checkbox");
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener( "change", () => {
    for (let i = 0; i < checkbox.length; i++) {
        if ( checkbox[i].checked == true ){
            document.getElementById("preferente").value = checkbox[i].value; 
            }  
        }
    })
}

var color = document.getElementsByName("color");

for (let i = 0; i < color.length; i++) {
    color[i].addEventListener( "change", () => {
        if(color[i].value == "rojo"){
            document.body.style.backgroundColor  = "salmon";
        }else if (color[i].value == "verde"){
            document.body.style.backgroundColor  = "lightgreen";
        }else if (color[i].value == "azul"){
            document.body.style.backgroundColor  = "lightblue";
        }
    })
}
