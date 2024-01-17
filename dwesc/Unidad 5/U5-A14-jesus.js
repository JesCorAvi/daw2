var campo   = document.querySelectorAll(".campo");
var error   = document.querySelectorAll(".error");
var guarda  = document.getElementById("guardar") 
var ver     = document.getElementById("ver") 
var errores = [
    "El dni no es correcto",
    "El nombre no es correcto",
    "La fecha de nacimiento no es correcta",
    "El correo no es correcto",
    "La dirección web no es correcta",
    "La contraseña no es correcta",
    "La contraseña no coincide",
]

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

guarda.onclick = ()=>{
        campo.forEach((campoValor, i)=>{
            if(campo[i].value == "") {
                document.cookie = `${campo[i].name} = ${null}`
            }else {
                document.cookie = `${campo[i].name} = ${campo[i].value}`
            }
        })
}
    
ver.onclick = ()=>{
    var ArrayCookie = document.cookie.split(";")
    ArrayCookie.forEach((linea, x)=>{
        document.write(ArrayCookie[x],"<br><br>")
    })
}
