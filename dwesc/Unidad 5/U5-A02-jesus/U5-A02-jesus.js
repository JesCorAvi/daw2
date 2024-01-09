    var ejex = 0;
    var ejey = 0;
function moverPato(){

    document.addEventListener("keydown", x =>{
        console.log(x.code)
        if(x.code == "ArrowUp" || x.code == "Numpad8" ){
            ejex -= 1
            document.getElementById("pato").style.top = `${ejex}px`;
        }
        else if(x.code == "ArrowDown" || x.code == "Numpad2" ){
            ejex += 1
            document.getElementById("pato").style.top = `${ejex}px`;
        }
        else if(x.code == "ArrowLeft" || x.code == "Numpad4"){
            ejey -= 1
            document.getElementById("pato").style.left = `${ejey}px`;
        }
        else if(x.code == "ArrowRight" || x.code == "Numpad6"){
            ejey += 1
            document.getElementById("pato").style.left = `${ejey}px`;
        }
    }
    )
}
setInterval(moverPato, 1000)
     

