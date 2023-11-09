function sacarMaxMin(){
    var vector = [];
    for(var x = 0; x < 10; x++){
        vector.push(Math.floor(Math.random() * 1000)) //esta funcion mete en el array los numeros aleatorios hasta el 1000
    }
    Array.maxmin = function(array){
        function maximo(valor) {
            return (valor != Math.max(...vector));
        }
        function minimo(valor) {
            return (valor != Math.min(...vector));
        }
        var array = array.filter(maximo);
        var array = array.filter(minimo);
        return array;
    }
    document.write(
    `
    Array original: ${vector}.<br>
    Array filtrado: ${Array.maxmin(vector)}
    `
    );
}
sacarMaxMin();
