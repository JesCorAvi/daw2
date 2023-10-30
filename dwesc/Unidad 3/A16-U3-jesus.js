function dia_numero_check(){
    var fecha = prompt("Introduzca una fecha con el formato dia numero(en mayusculas o minusculas).").toLowerCase();
    var patt = new RegExp(/^(lunes|martes|miercoles|jueves|viernes|sabado|domingo)\s([1-2]?\d|3[0-1])$/)
    if (patt.test(fecha)){
        document.write('Formato correcto')
    }else{
        document.write('Formato incorrecto')
    }
}
