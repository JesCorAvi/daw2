function area_circulo(){
    var radio =prompt("Introduce el radio del círculo:");
    var area = (Math.PI * (radio ** 2)).toFixed(2);
    document.write(`El área de un círculo es ${area} cm2.<br>`);
    };

function area_triangulo(){
    var base = prompt("Introduce el base del triangulo:");
    var altura = prompt("Introduce la altura del triangulo:");
    var area = ((base * altura) / 2).toFixed(2);
    document.write(`El área de un triangulo es ${area} cm2.<br>`);
    };