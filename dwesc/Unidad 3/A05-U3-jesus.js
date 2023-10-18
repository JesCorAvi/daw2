function formato(dato){
    if (dato.toString().length == 1)
        return ("" + "0" + dato.toString());
    else{
        return dato;
    }
}
function hora(){
    var actual = new Date();
    var hora = formato(actual.getHours());
    var minutos = formato(actual.getMinutes());
    var segundos = formato(actual.getSeconds());
    
    if (hora > 12){
        document.getElementById("1").innerHTML = `PM:${formato((hora - 12))}:${minutos}:${segundos}`
    }else {
        document.getElementById("1").innerHTML = `AM:${hora}:${minutos}:${segundos}`
    }
};
