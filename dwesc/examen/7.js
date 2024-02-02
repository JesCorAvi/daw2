var nombre = document.getElementById('nombre');
var apellido = document.getElementById('ape');
var dni = document.getElementById('dni');
var edad = document.getElementById('age');
var nacimiento = document.getElementById('nac');
var guardar = document.getElementById('submit');
var campo = document.querySelectorAll('.campo');
var error   = document.querySelectorAll(".error");

const letra =[
                'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K'
             ];


function vletra(dni) {
    let d = dni.split('-');
    if (d.length >= 2) {
        let numeroDni = d[0].replaceAll('.', '');
        let resto = numeroDni % 23;
        return d[1].toUpperCase() == letra[resto];
    } else {
        return false;
    }
}

function vDni() {
    if (dni.validity.valueMissing) {
        dni.setCustomValidity('Introduce un valor de DNI.');
    } else if (dni.validity.patternMismatch) {
        dni.setCustomValidity('DNI no válido.');
    } else if (!vletra(dni.value)) {
        dni.setCustomValidity('Letra errónea.');
    } else {
        dni.setCustomValidity('');
    }
    return dni.checkValidity();  
}

campo.forEach((campoValor, i)=>{
    campo[i].addEventListener('focusout',()=>{
        if(!campo[i].checkValidity()) {
            campo[i].value = ""
            error[i].innerHTML = "campo no válido"
        }
        if( campo[i].name == "dni"){
            vDni()
        }
        if(campo[i].checkValidity()) {
            error[i].innerHTML = ""
        }
    })
})

function mostrarDni() {
    var dniInput = document.getElementById('dni');
    dniInput.type = 'text';
}
function ocultarDni() {
    var dniInput = document.getElementById('dni');
    dniInput.type = 'password';
}

ver.addEventListener("mousedown", mostrarDni)

ver.addEventListener("mouseup", ocultarDni)
