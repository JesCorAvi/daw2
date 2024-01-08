    var ejex = 0;
    var ejey = 0;
function moverPato(){
    document.addEventListener("keydown", x =>{
        if(x.code == "ArrowUp"){
            ejex -= 1
            document.getElementById("pato").style.top = `${ejex}px`;
        }
        else if(x.code == "ArrowDown"){
            ejex += 1
            document.getElementById("pato").style.top = `${ejex}px`;
        }
        else if(x.code == "ArrowLeft"){
            ejey -= 1
            document.getElementById("pato").style.left = `${ejey}px`;
        }
        else if(x.code == "ArrowRight"){
            ejey += 1
            document.getElementById("pato").style.left = `${ejey}px`;
        }
    }
    )
}
setInterval(moverPato, 1000)
     

