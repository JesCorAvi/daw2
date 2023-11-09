var vector = [];
function sacarMaxMin(){
    for(var x = 0; x < 10; x++){
        vector.push(Math.floor(Math.random() * 1000)) //esta funcion mete en el array los numeros aleatorios hasta el 1000
    }
    function maximo(valor) {
        return (valor != Math.max(...vector));
    }
    function minimo(valor) {
        return (valor != Math.min(...vector));
    }
    var filtrado = vector.filter(maximo);
    var filtrado = filtrado.filter(minimo);
    document.write(
    `
    Array original: ${vector}.<br>
    Array filtrado: ${filtrado}
    `
    )
}
sacarMaxMin(vector);