<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
</head>
<body>
    <?php
    function calcular($op1,$op2,$op)
    {
        switch ($op){
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
    ?>
    <form action="calculadora2.php" method="get">
        <label for="op1">Operando 1:</label>
        <input type="text" name="op1" id="op1"><br>
        <label for="op2">Operando 2:</label>
        <input type="text" name="op2" id="op2"><br>
        <label for="op">Operación:</label>
        <input type="text" name="op" id="op"><br>        
        <button type="submit">Calcular</button>    
    <?php 
    $errores = [];

    if (isset($_GET['op1']) && !isset($_GET['op2']) && !isset($_GET['op'])){
        $op1 = $_GET["op1"];
        $op2 = $_GET["op2"];
        $op = $_GET["op"];
        if (!is_numeric($op1)){
            $errores[] = 'el primer operando es incorrecto';
        }
        if (!is_numeric($op2)){
            $errores[] = 'el segundo operando es incorrecto';
        }
        if (!in_array($op, ["+", "-", "*", "/"])){
            $errores[] = 'La operación es incorrecta';
        }
    }

    if (isset($_GET['op1'])){
        $op1 = $_GET["op1"];
        if (!is_numeric($op1)){
            $errores[] = 'el primer operando es incorrecto';
        }
    }

    if (isset($_GET['op2'])){
        $op2 = $_GET["op2"];
        if (!is_numeric($op2)){
            $errores[] = 'el segundo operando es incorrecto';
        }

    }

    if (isset($_GET['op'])){
        $op = $_GET["op"];
        if (!in_array($op, ["+", "-", "*", "/"])){
            $errores[] = 'La operación es incorrecta';
        }
    }
    
    if (isset($op1,$op2,$op) && empty($errores)):
        $res = calcular($op1, $op2,$op);
        
    ?>
    <p>el resultado es <?= $res ?></p>
    <?php else: 
        foreach ($errores as $error): ?>
            <p> <?= $error ?></p>
        <?php endforeach ?>
    <?php endif ?> 
    </body>
</html>