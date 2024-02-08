<?php
$votos = file_get_contents('votos.txt');
$array = explode("||", $votos);
$input = $_GET['input'];
$archivo = fopen("votos.txt", "w");


if($input == "1"){
    $array[0] += 1;
}else if($input == "2"){
    $array[1] += 1;
}else if($input == "3"){
    $array[2] += 1;
}else if($input == "4"){
    $array[3] += 1;
}

$cadena = implode("||", $array);
fwrite($archivo, $cadena);

echo $cadena;
?>
