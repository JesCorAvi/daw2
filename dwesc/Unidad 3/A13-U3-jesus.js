var booleano1f = new Boolean(false);
var booleano1t = new Boolean(true);
var booleano2f = new String();
var booleano2t = new String("hola");
var booleano3f = [];
var booleano3t = [1,2];
var booleano4f = {};
var booleano4t = {"hola":"adios"};
var booleano5f = new Number();
var booleano5t = new Number(23);
document.write(
    `
    booleano1f es ${Boolean(booleano1f)}<br>
    booleano1t es ${Boolean(booleano1t)}<br>
    booleano2f es ${Boolean(booleano2f)}<br>
    booleano2t es ${Boolean(booleano2t)}<br>
    booleano3f es ${Boolean(booleano3f)}<br>
    booleano3t es ${Boolean(booleano3t)}<br>
    booleano4f es ${Boolean(booleano4f)}<br>
    booleano4t es ${Boolean(booleano4t)}<br>
    booleano5f es ${Boolean(booleano5f)}<br>
    booleano5t es ${Boolean(booleano5t)}<br>


    `
)
