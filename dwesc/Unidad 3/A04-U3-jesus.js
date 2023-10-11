function saludos(){
    var actual = new Date();
    var hora = actual.getHours();
    if (hora >= 6 && hora < 12){
        document.write("Buenos dias")
    }else if (hora >= 12 && hora < 20){
        document.write("Buenas tardes")
    }else {
        document.write("Buenas noches")
    }
};

