var campo = document.querySelectorAll(".campo");
var error = document.querySelectorAll(".error");
var errores = [
    "El dni no es correcto",
    "El nombre no es correcto",
    "La fecha de nacimiento no es correcta",
    "El correo no es correcto",
    "La dirección web no es correcta",
    "La contraseña no es correcta",
    "La contraseña no coincide",
]

var cookie

campo.forEach((campoValor, i)=>{
    campo[i].addEventListener('focusout',()=>{
        if(!campo[i].checkValidity()) {
            campo[i].value = ""
            error[i].innerHTML = errores[i]
        }
        if( campo[i].name == "passw2" && campo[i].value != campo[i - 1].value){
            campo[i].value = ""
        }
        if(campo[i].checkValidity()) {
            error[i].innerHTML = ""

        }
    })
})
function comprobar(){
    campo.forEach((campoValor, i)=>{
        if(!campo[i].checkValidity()) {
            return false
        }
    })
    return true
}
function guardar(){
    campo.forEach((campoValor, i)=>{
        if(campo[i].value == "") {
            document.cookie
        }else {
            alert("bien")}
    })
}
