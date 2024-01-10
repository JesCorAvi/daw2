var imagen = document.getElementById("imagen");

imagen.onerror = ()=>{document.getElementById("info").innerHTML = "error al cargar la imagen"};

imagen.onabort = ()=>{document.getElementById("info").innerHTML = "Se abortó la carga de la imagen"};

