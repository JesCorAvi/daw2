function passw(){
    var password = "Admin";
    var intentos = 3;
    while (intentos > 0){
        intento = prompt(`Escriba la contraseñade acceso, tiene ${intentos} intentos`);
        if (password == intento){
            document.write("Bienvenido a la pagina web");
            break;
        }else{
            intentos--;
            window.alert("Contraseña incorrecta");
        }
    }
    document.write("Acceso bloqueado");
}
