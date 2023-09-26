function nota() {    
    eleccion = window.prompt("¿Que nota sacaste?");
    let nota2 = "";
    (parseInt(eleccion) < 5) ? nota2 =  "Suspenso!!":
    (parseInt(eleccion) >= 5 && parseInt(eleccion) < 7) ?  nota2 = "Aprobado":
    (parseInt(eleccion) >= 7 && parseInt(eleccion) < 9) ?  nota2 = "Notable":
    (parseInt(eleccion) >= 9) ?  nota2 =  "Sobresaliente":  nota2 =  "Te equivocaste";
    document.getElementById("1").innerHTML = "Sacaste un " + eleccion + ": " + nota2

}
nota()
/*
function nota() {
    eleccion = window.prompt("¿Que nota sacaste?")
    if (parseInt(eleccion) < 5){
        document.getElementById("1").innerHTML = "Sacaste un " + eleccion +": Suspenso!!";
    } else if(parseInt(eleccion) >= 5 && parseInt(eleccion) < 7){
        document.getElementById("1").innerHTML  = "Sacaste un " + eleccion + ": Aprobado!!";
    } else if(parseInt(eleccion) >= 7 && parseInt(eleccion) < 9){
        document.getElementById("1").innerHTML = "Sacaste un " + eleccion + ": Notable!";
    } else{
        document.getElementById("1").innerHTML = "Sacaste un" + eleccion + ": Sobresaliente!!";
    }
}

nota()
*/