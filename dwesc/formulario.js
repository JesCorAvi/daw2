let nombre = document.getElementById('nombre');
let apellido = document.getElementById('ape');
let dni = document.getElementById('dni');
let edad = document.getElementById('age');
let nacimiento = document.getElementById('nac');
let guardar = document.getElementById('submit');
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

dni.addEventListener('input', vDni);

function vNombre() {
    if (nombre.validity.valueMissing) {
        nombre.setCustomValidity('Introduce un nombre.');
    } else if (nombre.validity.patternMismatch) {
        nombre.setCustomValidity('Nombre no válido.');
    } else {
        nombre.setCustomValidity('');
    }
    return nombre.checkValidity()
}

nombre.addEventListener('input', vNombre);

function vApellido() {
    if (apellido.validity.valueMissing) {
        apellido.setCustomValidity('Introduce un apellido.');
    } else if (ape.validity.patternMismatch) {
        apellido.setCustomValidity('Apellido no válido.');
    } else {
        apellido.setCustomValidity('');
    }
    return apellido.checkValidity()
}

apellido.addEventListener('input', vApellido);

function vEdad() {
    if (edad.validity.valueMissing) {
        edad.setCustomValidity('Introduce una Edad.');
    } else if (age.validity.patternMismatch) {
        edad.setCustomValidity('Edad no válida.');
    } else {
        edad.setCustomValidity('');
    }
    return edad.checkValidity()
}

edad.addEventListener('input', vEdad);

function vNacimiento() {
    if (nacimiento.validity.valueMissing) {
        nacimiento.setCustomValidity('Introduce una Fecha de Nacimiento.');
    } else if (nac.validity.patternMismatch) {
        nacimiento.setCustomValidity('Fecha de Nacimiento no válida.');
    } else {
        nacimiento.setCustomValidity('');
    }
    return nacimiento.checkValidity()
}

var formulario = document.getElementById("formulario")
nacimiento.addEventListener('input', vNacimiento);
formulario.addEventListener('submit', vTodo);

function vTodo(e) {
    if (
            !vDni(dni) || 
            !vNombre(nombre) || 
            !vApellido(apellido) ||
            !vEdad(edad) ||
            !vNacimiento(nacimiento)
        ) 
        {e.preventDefault();}
}

function limpiarCampo(campo) {
    campo.value = '';
}
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
