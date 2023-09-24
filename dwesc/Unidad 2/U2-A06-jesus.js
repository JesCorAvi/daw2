window.alert("Acabas de entrar a la página :)");
console.log("Estas viendo la terminal :)")
/*Sustituye un párrafo por otro texto*/
function cambio1(){
    document.getElementById("p1").innerHTML = "Ese click dolió!!"; 
}
/*SUstituye la página por un texto*/
function borrar(){
    if (confirm("¿Seguro?") == true) {
        document.write("<p>¿Que pasó con la pagina?!!</p>"); 
      } else {
        window.alert("Te quedas igual");
      }
}
/*Juego de acertar un número*/
function juego() {
    eleccion = window.prompt("¿En que numero estoy pensando?¿En el 1, 2 o 3?")
    if (parseInt(eleccion) == 3){
        window.alert("Acertaste!!")
    } else {
        window.alert("Prueba otra vez :(")
    }
}