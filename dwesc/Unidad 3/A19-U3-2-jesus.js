function colorWeb(){
    var iframe1 = parent.document.getElementById("marco1");
    var color = iframe1.contentDocument.getElementById("color").value;
    var frame = iframe1.contentDocument.getElementById("marcos").value;
    if(frame == "0"){
        parent.marco1.document.body.style.backgroundColor = color;
    }
    if(frame == "1"){
        parent.marco2.document.body.style.backgroundColor = color;
    }
}