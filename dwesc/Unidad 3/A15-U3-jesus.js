function matricula_check(){
    var matricula = prompt("Introduzca una matrícula con el formato 0000 AAA.(incluido el espacio y en mayúsculas)");
    var patt = new RegExp(/^\d{4}\s[A-Z]{3}$/)
    if (patt.test(matricula)){
        document.write('Formato correcto')
    }else{
        document.write('Formato incorrecto')
    }
}
