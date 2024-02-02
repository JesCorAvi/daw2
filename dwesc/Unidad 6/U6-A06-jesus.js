var desactivar = document.getElementById("desactivar");
var campo = document.querySelectorAll(".campo")

desactivar.addEventListener("click", ()=>{
    campo.forEach((linea, l)=>{
        if(campo[l].disabled){
            campo[l].disabled = false
        }else{
            campo[l].disabled = true
        }
    })

})