<?php
function calc_isograma($str){
    $strA = str_split($str);
    $apar = [];
    foreach($strA as $x){
        if (in_array($x, $apar)){
            return "<p>No es un isograma<p>";
        }
        $apar[] = $x;
    }
    return "<p>Es un isograma<p>";
}

