function formato(dato){
    if (dato.toString().length == 1)
        return ("" + "0" + dato.toString());
    else{
        return dato;
    }
}
function hora_utc(){
    var utc = document.getElementById("utc");
    utc = utc.options[utc.selectedIndex].value;
    var fecha = new Date();
    var horaUTC = fecha.getHours();
    var hora  = parseInt(horaUTC) +  parseInt(utc)
    if (hora > 23){
        var hora = hora - 24;
    }else if (hora < 0){
        var hora = hora + 24;
    }
    var minutos = formato(fecha.getMinutes());
    var segundos = formato(fecha.getSeconds());
    document.getElementById("1").innerHTML = `La hora es ${formato(hora)}:${minutos}:${segundos}`
}