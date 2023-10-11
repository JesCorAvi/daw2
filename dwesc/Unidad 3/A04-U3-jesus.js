function saludos(){
    var actual = new Date();
    var hora = (actual.getHours());
    document.write(hora);
    if (hora >= 6 && hora < 12){
        document.write("Buenos dias")
    }else if (hora >= 12 && hora < 20){
        document.write("Buenas tardes")
    }else if (hora >= 20 && hora < 6 ){
        document.write("Buenas noches")
    }else{
        document.write("error")
    }
};

