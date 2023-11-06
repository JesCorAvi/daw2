function colorWeb(){
    var color = parent.marco1.document.getElementById("color").selectedIndex;
    var Frame = parent.marco1.document.getElementById("marco").selectedIndex;
        if(Frame == "0"){
            window.parent.marco1.document.body.style.backgroundColor = color;
        }
        if(Frame == "1"){
            window.parent.marco2.document.body.style.backgroundColor = color;
        }
}