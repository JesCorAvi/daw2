var constructor = []
for(var n = 0; n < 5; n++){
    constructor.push([
        prompt("Introduzca el nombre del alumno:"),
        prompt("Introduzca la nota en Matemáticas:"),
        prompt("Introduzca la nota en Ingles:"),
        prompt("Introduzca la nota en Ciencias:"),
    ])
}

var tabla = document.createElement("table")
tabla.style.textAlign = "center";
var lineaTitulo = document.createElement("tr")
var titulo1 = document.createElement("th")
titulo1.style.border = "1px solid"
titulo1.appendChild(document.createTextNode("Nombre"))
var titulo2 = document.createElement("th")
titulo2.style.border = "1px solid"
titulo2.appendChild(document.createTextNode("Nota en Matemáticas"))
var titulo3 = document.createElement("th")
titulo3.style.border = "1px solid"
titulo3.appendChild(document.createTextNode("Nota en Ingles"))
var titulo4 = document.createElement("th")
titulo4.style.border = "1px solid"
titulo4.appendChild(document.createTextNode("Nota en Ciencias"))
lineaTitulo.append(titulo1, titulo2, titulo3, titulo4)
tabla.appendChild(lineaTitulo)
for(n = 0; n < 5; n++){
    var lineaAlumno = document.createElement("tr")
    var alumno1 = document.createElement("td")
    alumno1.style.border = "1px solid"
    alumno1.appendChild(document.createTextNode(constructor[n][0]))
    var alumno2 = document.createElement("td")
    alumno2.style.border = "1px solid"
    alumno2.appendChild(document.createTextNode(constructor[n][1]))
    var alumno3 = document.createElement("td")
    alumno3.style.border = "1px solid"
    alumno3.appendChild(document.createTextNode(constructor[n][2]))
    var alumno4 = document.createElement("td")
    alumno4.style.border = "1px solid"
    alumno4.appendChild(document.createTextNode(constructor[n][3]))
    lineaAlumno.append(alumno1, alumno2, alumno3, alumno4)
    tabla.appendChild(lineaAlumno)
}
document.body.appendChild(tabla)

