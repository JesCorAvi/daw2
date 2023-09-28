function dni(){
    var dni = window.prompt("dime un numero");
    var numero = dni.substring(0, 8).toUpperCase();
    if (numero < 0 && numero > 99999999){
        document.getElementById("1").innerHTML = "dni incorrecto";
    }
    else{
        var letra = dni.substring(8,9);
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L','C', 'K', 'E',]
        resto = numero % 23;
        letraV = letras[resto];
        if (letraV == letra){
            document.getElementById("2").innerHTML = "La letra es valida.";
        }else{
            document.getElementById("2").innerHTML = "La letra es incorrecta.";
        }
    }
}