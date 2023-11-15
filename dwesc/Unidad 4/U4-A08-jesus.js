var lista = [1,-2,3,4,-5];

if (lista.every((x) => (x > 0))){
    var sonPosit = "Son todos positivos" 
    }
    else{
        var sonPosit = "No sontodos positivos" 
    }

var tripl = lista.map(numero => (numero * 3));

var sumatorio = tripl.reduce((n1, n2) => (n1 + n2));

document.write(
    `
    Crea un vector con 5 valores numéricos. ${lista} <br>
    Comprueba si son todos enteros positivos. ${sonPosit}  <br>
    Devuelve en un nuevo array el triple sus valores. ${tripl} <br>
    Calcula el resultado de multiplicar todos los valores del nuevo array. La suma es ${sumatorio}. <br>
    `
)
