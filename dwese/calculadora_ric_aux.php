<?php
$opes = ['+', '-', '*', '/'];
/**
 * calcula el resultado de la operacion indicada.
 *
 * @param  int/float $op1   el primero operando
 * @param  int/float $op2   el segundo operando
 * @param  string $op       el operador
 * @return int!float        el resultado de la operación
 */
function calcular($op1, $op2, $op)
{
    switch ($op) {
        case '+':
            $res = $op1 + $op2;
            break;
        case '-':
            $res = $op1 - $op2;
            break;
        case '*':
            $res = $op1 * $op2;
            break;
        case '/':
            $res = $op1 / $op2;
            break;
    }

    return $res;
}

function mostrar_errores($errores)
{
    if (!empty($errores)) { ?>
        <ul>
        <?php foreach ($errores as $error): ?>
            <li><?= $error ?></li>
        <?php endforeach ?>
        </ul>
        <?php
    }
}

function comprobar_op1($op1, &$errores)
{
    if (!is_numeric($op1)) {
        $errores[] = 'El primer operando es incorrecto.';
    }
}

function comprobar_op2($op2, &$errores)
{
    if (!is_numeric($op2)) {
        $errores[] = 'El segundo operando es incorrecto.';
    }
}

function comprobar_op($op, &$errores)
{
    if (!in_array($op, ['+', '-', '*', '/'])) {
        $errores[] = 'La operación es incorrecta.';
    }
}

function comprobar_division_cero($op2, $op, &$errores)
{
    if (isset($op2, $op) && $op2 == 0 && $op == '/') {
        $errores[] = 'No se puede dividir entre cero.';
    }
}
function mostrar_resultado($res)
{
    ?>
    El <strong>resultado</strong> es <strong><?= $res ?></strong>
    <?php
}
function igual($s){
    if (isset($_GET['op'])){
        if ($_GET['op'] == $s){
            return "selected";
        } 
    }
}
function generador($opes){
    foreach ($opes as $op){?>
        <option int/float>
    }
}
?>