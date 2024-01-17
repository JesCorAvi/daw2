var campo = document.querySelectorAll(".campo");
var error = document.querySelectorAll(".error");

campo.forEach((campoValor, i)=>{
    campo[i].addEventListener('focusout',()=>{
        if(!campo[i].checkValidity()) {
            campo[i].value = ""
            error[i].innerHTML = "Error en el campo"
        }
        if( campo[i].name == "passw2" && campo[i].value != campo[i - 1].value){
            campo[i].value = ""
        }
        if(campo[i].checkValidity()) {
            error[i].innerHTML = ""

        }
    })
})