function digitos(){
    var n1 = window.prompt("dime un numero");
    if (n1 > 999){
        document.write("EL numero no es válido");
    }else{
        var n2 = n1.split('');
        for (var x in n2){
            document.write(n2[x]+"<br>");
        }
    
    }
}
