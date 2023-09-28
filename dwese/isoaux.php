<?php
/**
 * Esta función devuelve una cadena y otra dependiendo
 * de si su parametro es un isograma o no
 * @param  mixed $str
 * @return string
 */
function calc_isograma($str){
    $strA = mb_str_split($str);
    $apar = [];
    foreach($strA as $x){
        if (in_array($x, $apar)){
            return "<p>No es un isograma<p>";
        }
        $apar[] = $x;
    }
    return "<p>Es un isograma<p>";
}

