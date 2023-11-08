function NumeroRandom(max) {
    return Math.floor(Math.random() * max);
}
function sacarMaxMin(){
    var vector = [];
    for(var x = 0; x < 10; x++){
        vector.push(NumeroRandom(1000))
    }
    console.log(vector);
    var maximo = Math.max();
    var minimo = Math.min();
    delete vector[vector.indexOf(maximo)]
    delete vector[vector.indexOf(minimo)]
    console.log(vector);

}
sacarMaxMin()