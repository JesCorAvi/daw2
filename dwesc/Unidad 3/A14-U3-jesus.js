function hora_check(){
    var hora = prompt("Introduzca una hora con el formato hh:mm:ss o hh:mm");
    var patt = new RegExp(/^([0-1]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/)
    if (patt.test(hora)){
        document.write('Formato correcto')
    }else{
        document.write('Formato incorrecto')
    }
}
