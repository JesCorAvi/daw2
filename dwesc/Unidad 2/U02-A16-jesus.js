function sumadig(){
    var opt = confirm("¿Desea sumar los decimales tambien?");
    var num = prompt("Escriba un número: ");
    res = 0;
    if (opt){
        for(var n of num){
            if (!isNaN(n)){
                res += parseInt(n);  
            }
        }
    }else{
        for(var n of num){
            if (isNaN(n)){
                break
            }else{
                res += parseInt(n);  
            }
        }
    }
    document.write(` el resultado es ${res}`);
}