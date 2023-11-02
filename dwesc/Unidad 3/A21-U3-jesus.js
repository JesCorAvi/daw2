function datosNavegador(){
    document.getElementById("datos").innerHTML = 
    `
    Código del navegador: ${navigator.appCodeName}<br>
    Nombre del navegador: ${navigator.appName}<br>
    Versión del navegador: ${navigator.appVersion}<br>
    Uso de Cookies: ${navigator.cookieEnabled}<br>
    Plataforma: ${navigator.platform}<br>
    userAgent: ${navigator.userAgent}<br>
    Lenguaje: ${navigator.language}<br>
    Motor de renderizado: ${navigator.product}<br>
    Plugins: ${navigator.plugins}
    `
    if (navigator.javaEnabled()){
        document.getElementById("datos").innerHTML = "Applets de Java No soportados<br>"
    }else{
        document.getElementById("java").innerHTML = "Applets de Java Si soportados<br>"  

    }
}   
function datosPantalla(){
    document.getElementById("pantalla").innerHTML =
    `
    ALtura = ${screen.height}px<br>
    ALtura maxima = ${screen.availHeight}px<br>
    Anchura = ${screen.width}px<br>
    Anchura maxima = ${screen.availWidth}px<br>
    Color =  ${screen.colorDepth}px<br>
    `
}
function datosBarra(){
    document.getElementById("barra").innerHTML =
    `
    Las dimensiones de la barra es:<br>
    Altura = ${(window.outerHeight - window.innerHeight)}px<br>
    Anchura = ${screen.width}px<br>
    `
}
function colorFondo(){
    var color = document.getElementById("color").value;
//Esta es la propiedad que hay que usar ahora. bgColor esta en desuso
    document.body.style.backgroundColor = color;
}
