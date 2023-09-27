function nota() {    
    eleccion = window.prompt("¿Que nota sacaste?");
    let nota2 = "";
    (eleccion < 5) ? nota2 =  "Suspenso!!":
    (eleccion >= 5 && eleccion < 7) ?  nota2 = "Aprobado":
    (eleccion >= 7 && eleccion < 9) ?  nota2 = "Notable":
    (eleccion >= 9) ?  nota2 =  "Sobresaliente":  nota2 =  "Te equivocaste";
    document.getElementById("1").innerHTML = "Sacaste un " + eleccion + ": " + nota2;
}
