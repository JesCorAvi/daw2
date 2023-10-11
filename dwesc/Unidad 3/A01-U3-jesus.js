function tiempo_res(){
    var actual = new Date();
    var año_nuevo = new Date(actual.getFullYear() + 1,0,1);
    var intervalo = (año_nuevo.getTime() - actual.getTime()); 
    var intervalo_dias = intervalo / (1000 * 60 * 60 * 24); 
    document.write( `La fecha actual es ${actual}.<br>El año nuevo es en ${año_nuevo}.
                    <br> Quedan ${Math.trunc(intervalo_dias)} dias o ${intervalo} milisegundos.`);
};

