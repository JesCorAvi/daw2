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
        return "No se encuentra en la lista."
    }else{
        delete sinNumero[indice];
        return `Esta en el indice ${indice}. La lista sin ese numero ahora es ${sinNumero}`
    }
}
document.write(
    `
    Lista completa: ${lista}<br>
    Sumatorio de valores: ${sumatorio}<br>
    Lista inversa ${reverse}<br>
    El numero indicado ${encontrar()}, 

    `
)


