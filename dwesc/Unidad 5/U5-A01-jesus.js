    document.addEventListener("mousedown", x =>{
        if(x.button == 0){
            document.getElementById("info").innerHTML = "Has usado el click izquierdo";
        }else if (x.button  == 1){
            document.getElementById("info").innerHTML = "Has usado el click central";
        }else if (x.button  == 2){
            document.getElementById("info").innerHTML = "Has usado el click  derecho";
        }
    }
)

