function hora_check(){
    var hora = prompt("Introduzca una hora con el formato hh:mm:ss o hh:mm");
    var patt = new RegExp(/^\d{2}:\d{2}(:\d{2})?$/)
    if (patt.test(hora)){
        document.write('Formato correcto')
    }else{
        document.write('Formato incorrecto')
    }
}
