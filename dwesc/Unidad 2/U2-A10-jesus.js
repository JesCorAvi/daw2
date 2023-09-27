function tablas() {    
    var n1 = parseInt(window.prompt("dime un numero"));
    var tabla  = "";
    for(var n2 = 1; n2 <= 10 ;  n2++){
        tabla = tabla + n1 + " x " + n2 + " = " + (n1 * n2) +"<br>"
    }
    document.getElementById("1").innerHTML = tabla;
}
