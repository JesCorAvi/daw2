let formulario = document.getElementById('formulario');
let nombre = document.getElementById('nombre');
let ape = document.getElementById('ape');
let dni = document.getElementById('dni');
let age = document.getElementById('age');
let nac = document.getElementById('nac');
let submit = document.getElementById('submit');
const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K'];

formulario.addEventListener('change', validarTodos);
dni.addEventListener('input', validarDni);
nombre.addEventListener('input', validarNombre);
ape.addEventListener('input', validarApe);
age.addEventListener('input', validarAge);
nac.addEventListener('input', validarNac);


function validarDni() {
    if (dni.validity.valueMissing) {
        dni.setCustomValidity('Introduce un valor de DNI.');
    } else if (dni.validity.patternMismatch) {
        dni.setCustomValidity('DNI no válido.');
    } else if (!letraDni(dni.value)) {
        dni.setCustomValidity('Letra errónea.');
    } else {
        dni.setCustomValidity('');
    }

    if (dni.checkValidity()) {
        return true;
    } else {
        return false;
    }
}
function letraDni(dni) {
    let d = dni.split('-');
    if (d.length >= 2) {
        let numeroDni = d[0].replaceAll('.', '');
        let resto = numeroDni % 23;
        return d[1].toUpperCase() == letra[resto];
    } else {
        return false;
    }
}
function validarNombre() {
    if (nombre.validity.valueMissing) {
        nombre.setCustomValidity('Introduce un nombre.');
    } else if (nombre.validity.patternMismatch) {
        nombre.setCustomValidity('Nombre no válido.');
    } else {
        nombre.setCustomValidity('');
    }

    if (nombre.checkValidity()) {
        return true;
    } else {
        return false;
    }
}
function validarApe() {
    if (ape.validity.valueMissing) {
        ape.setCustomValidity('Introduce un ape.');
    } else if (ape.validity.patternMismatch) {
        ape.setCustomValidity('ape no válido.');
    } else {
        ape.setCustomValidity('');
    }

    if (ape.checkValidity()) {
        return true;
    } else {
        return false;
    }
}
function validarAge() {
    if (age.validity.valueMissing) {
        age.setCustomValidity('Introduce un age.');
    } else if (age.validity.patternMismatch) {
        age.setCustomValidity('age no válido.');
    } else {
        age.setCustomValidity('');
    }

    if (age.checkValidity()) {
        return true;
    } else {
        return false;
    }
}
function validarNac() {
    if (nac.validity.valueMissing) {
        nac.setCustomValidity('Introduce un nac.');
    } else if (nac.validity.patternMismatch) {
        nac.setCustomValidity('nac no válido.');
    } else {
        nac.setCustomValidity('');
    }

    if (nac.checkValidity()) {
        return true;
    } else {
        return false;
    }
}
function validarTodos(e) {
    if (!validarDni(dni) && !validarNombre(nombre) && !validarApe(ape)
        && !validarAge(age) && !validarNac(nac)) {
        e.preventDefault();
    }
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