function edad_mil(){
    var edad = prompt("Introduce tu edad")
    var milis = (edad * 365 * 24 * 60 * 60 * 1000); 
    document.write( `Tu edad en eño es ${edad}.
                    <br> Tu edad en milisegundos es ${milis}.`)
};

