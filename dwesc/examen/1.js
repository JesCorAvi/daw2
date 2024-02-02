document.addEventListener("keydown", x =>{
    if(x.code == "KeyA" ){
        document.body.style.backgroundColor  = "yellow";
    }
    else if(x.code == "KeyR" ){
        document.body.style.backgroundColor  = "red";
    }
    else if(x.code == "KeyN"){
        document.body.style.backgroundColor  = "black";
    }
    else if(x.code == "KeyV"){
        document.body.style.backgroundColor  = "green";
    }
}
)
document.addEventListener("mousemove", x =>{
    document.body.style.backgroundColor  = "white";

})