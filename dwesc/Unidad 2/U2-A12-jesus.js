function digitos(){
    var n1 = window.prompt("dime un numero");
    if (n1.isInteger() && n1 > 999){
        document.getElementById("1").innerHTML = "EL numero no es válido";
    }else{
        n1.split();
        
    }


}