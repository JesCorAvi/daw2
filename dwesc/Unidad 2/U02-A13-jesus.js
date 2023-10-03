function lite(){
    var boton = true;
    while (boton){
        var numero = window.prompt("Escriba un numero entre 1 y 5");
        switch (numero){
            case "1":
                document.write("uno");
                boton = false;
                break;
            case "2":
                document.write("dos");
                boton = false;
                break;
            case "3":
                document.write("tres");
                boton = false;
                break;
            case "4":
                document.write("cuatro");
                boton = false;
                break;
            case "5":
                document.write("cinco");
                boton = false;
                break;
            default: 
            window.alert("Error, pruebe otra vez");
            break
        }
    }
    
}