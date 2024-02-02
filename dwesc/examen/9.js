var nombre = document.getElementById('nombre');
var apellido = document.getElementById('ape');
var dni = document.getElementById('dni');
var edad = document.getElementById('age');
var nacimiento = document.getElementById('nac');
var guardar = document.getElementById('submit');
var guardar = document.getElementById('ver');

var campo = document.querySelectorAll('.campo');
var error   = document.querySelectorAll(".error");

const letra =[
                'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
                'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K'
             ];

var errores1 = [
    "El Patron en el nombre no es correcto",
    "El Patron en el Apellido no es correcto",
    "El Patron en la edad no es correcto",
    "El Patron en el dni no es correcto",
    "El Patron en lugar de nacimiento no es correcto",
]


var errores2 = [
    "El campo Nombre no debe estar vacio",
    "El campo Apellido no debe estar vacio",
    "El campo Edad no debe estar vacio",
    "El campo Dni no debe estar vacio",
    "El campo Lugar de nacimiento no debe estar vacio",
]

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
            if (campo[i].value == ""){
            error[i].innerHTML = errores2[i]
            }else{
                error[i].innerHTML = errores1[i]
            }
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

guardar.onclick = ()=>{
    var button = true
        campo.forEach((campoValor, i)=>{
            if(campo[i].value == "") {
                document.cookie = `${campo[i].name} = ${null}`
                window.alert(`El campo ${campo[i].name} esta vacio, se guardó la cookie igualmente pero puede presentar errores`)
                button = false
            }else {
                document.cookie = `${campo[i].name} = ${campo[i].value}`
            }
        })
    if (button){
        window.alert(`Datos gardados con éxito`)
    }
}

ver.onclick = ()=>{
    var ArrayCookie = document.cookie.split(";")
    ArrayCookie.forEach((linea, x)=>{
        document.write(ArrayCookie[x],"<br><br>")
    })
}