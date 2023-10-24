function mayus(){
    var cadena =prompt("Introduce una cadena:");
    var mayus = cadena.toUpperCase()
    var minus = cadena.toLowerCase()
    if (cadena == mayus){
        document.write("Esta compuesta solo de mayusculas");
    }
    else if (cadena == minus){
        document.write("Esta compuesta solo de minusculas");
    }else{
        document.write("Esta compuesta de mayusculas y minusculas");
    }
    };

