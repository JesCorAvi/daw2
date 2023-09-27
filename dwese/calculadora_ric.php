<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
</head>

<body>
    <?php require 'calculadora_ric_aux.php' ?>

    <form action="calculadora_ric.php" method="get">
        <label for="op1">Operando 1:</label>
        <input type="text" name="op1" id="op1" value=
        <?php if (isset($_GET['op1'])){
            echo $_GET['op1'];}
            ?>><br>
        <label for="op2">Operando 2:</label>
        <input type="text" name="op2" id="op2"  value=
        <?php if (isset($_GET['op2'])){
            echo $_GET['op2'];}
            ?>><br>
        <label for="op">Operación:</label>
        <select  id="op" name="op">
            <option >Seleccione una opción...</option>
            <option <?=igual("-")?>>-</option>
            <option <?=igual("+")?>>+</option>
            <option <?=igual("*")?>>*</option>
            <option <?=igual("/")?>>/</option>
        </select><br>
        <button type="submit">Calcular</button>
    </form>
    <?php
    $errores = [];

    if (isset($_GET['op1'], $_GET['op2'], $_GET['op'])) {
        $op1 = $_GET['op1'];
        $op2 = $_GET['op2'];
        $op  = $_GET['op'];
        comprobar_op1($op1, $errores);
        comprobar_op2($op2, $errores);
        comprobar_op($op, $errores);
        comprobar_division_cero($op2, $op, $errores);
    }

    if (isset($op1, $op2, $op)) {
        if (empty($errores)) {
            $res = calcular($op1, $op2, $op);
            mostrar_resultado($res);
        } else {
            mostrar_errores($errores);
        }
    }
    ?>
</body>

</html>
