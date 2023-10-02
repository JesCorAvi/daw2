function dicc(){
    var boton = true;
    while (boton){
        var frase = window.prompt("¿que palabra desea traducir?");
        switch (frase){
            case "casa":
                document.write("house");
                boton = false;
                break;
            case "mesa":
                document.write("table");
                boton = false;
                break;
            case "perro":
                document.write("dog");
                boton = false;
                break;
            case "gato":
                document.write("cat");
                boton = false;
                break;
            default: 
            document.write("Error, pruebe otra vez");
            break
        }
    }
}
