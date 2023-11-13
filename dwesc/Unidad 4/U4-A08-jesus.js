var lista = [];
var boton = true;
while (boton){
    var palabra = prompt("Escriba una palabra, si desea salir escriba /s")
    if (palabra != "/s"){
        lista.push(palabra)
    }else{
        boton = false
    }
}
document.write(
    `
    Todas las palabras. ${lista}<br>
    Todas las palabras colocadas al revés: ${[...lista].reverse()}<br>
    La primera palabra ingresada por el usuario: ${[...lista].shift()}<br>
    La última palabra ingresada por el usuario: ${[...lista].pop()}<br>
    El número de palabras presentes en el array: ${lista.length}<br>
    Las palabras ordenadas de la 'a' a la 'z': ${[...lista].sort()}<br>
    Las palabras Ordenadas de la 'z' a la 'a': ${[...lista].sort().reverse()}<br>
    `
)

