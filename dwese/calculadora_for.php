<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
</head>
<body>
    <?php 
    $errores = [];

    if (isset($_GET['op1'])){
        $op1 = $_GET["op1"];
        if (!is_numeric($op1)){
            $errores[] = 'el primer operando es incorrecto';
        }
    } else  {
        $errores[] = 'falta el primer operando';
    }

    if (isset($_GET['op2'])){
        $op2 = $_GET["op2"];
        if (!is_numeric($op2)){
            $errores[] = 'el segundo operando es incorrecto';
        }
    } else  {
        $errores[] = 'falta el segundo operando';
    }

    if (isset($_GET['op'])){
        $op = $_GET["op"];
        if (!in_array($op, ["+", "-", "*", "/"])){
            $errores[] = 'La operación es incorrecta';
        }
    } else  {
        $errores[] = 'falta el operador';
    }
    
    if (empty($errores)):
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
    ?>
    <p>el resultado es <?= $res ?></p>
    <?php else: 
        for ($i = 0; $i < count($errores); $i++): ?>
            <p> <?= $errores[$i]?></p>
        <?php endfor ?>
    <?php endif ?> 
    </body>
</html>