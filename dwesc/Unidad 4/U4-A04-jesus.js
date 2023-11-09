var lista = [];
for(x = 1; x < 23; x += 2){
    lista.push(x)
}
sumatorio = 0;
lista.forEach(x => {
    sumatorio += x;
})
var reverse = [...lista].reverse();
var sinNumero = [...lista];
function encontrar(){
    var num = parseInt(prompt("Escriba un numero a buscar"));
    var indice = lista.indexOf(num);
    if (indice == -1){
        return "no se encuentra en la lista."
    }else{
        delete sinNumero[indice];
        return `esta en el indice ${indice}. `
    }
}

document.write(
    `
    Lista completa: ${lista}<br>
    Sumatorio de valores: ${sumatorio}<br>
    Lista inversa ${reverse}<br>
    El numero indicado ${encontrar()}, <br>
    La lista sin ese numero ahora es ${sinNumero}, y descendente es ${sinNumero.reverse()}<br>

    `
)


