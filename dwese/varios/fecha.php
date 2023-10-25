<?php
/**
 * @author jesus cordero avila <jesus.cordero@iesdonana.org>
 * @copyright Copyright (c) 2023 jesus cordero avila
 * @license https://www.gnu.org/licenses/gpl.txt
 */
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>fecha</title>
</head>

<body>
    <?php
    const MESES = [
        "Enero" => 1,
        "Febrero"=> 2,
        "Marzo"=> 3,
        "Abril"=> 4,
        "Mayo"=> 5,
        "Junio"=> 6,
        "Julio"=> 7,
        "Agosto"=> 8,
        "Septiembre"=> 9,
        "Optubre"=> 10,
        "Noviembre"=> 11,
        "Diciembre"=> 12
    ];
    if (isset($_GET["dia"])){
        $dia = (int)($_GET["dia"]);
    } else{
        $dia = "";
    }

    if (isset($_GET["mes"])){
        $mes = (int)($_GET["mes"]);
    } else{
        $mes = "";
    }

    if (isset($_GET["año"])){
        $año = (int)($_GET["año"]);
    } else{
        $año = "";
    }

    function selected($opt1, $opt2){
        if ($opt1 == $opt2){
            ?>selected<?php
        }
    }
    ?>
    <form action="" method="get">
    <label for="dia">dia</label>
    <select type="text" name="dia" id="dia">
    <?php
    for($d = 1;  $d <= 31;  $d++){?>
        <option <?php selected($dia, $d)?>><?=$d?></option><?php
    }
    ?>
    </select><br>
    <label for="mes">mes</label>
    <select type="text" name="mes" id="mes">
    <?php
    foreach(array_keys(MESES) as $m){?>
        <option value="<?=MESES[$m]?>" <?php selected($mes, MESES[$m])?>><?=$m?></option><?php
    }
    ?>
    </select><br>
    <label for="año">año</label>
    <select type="text" name="año" id="año">
    <?php
    for($y = date("Y"); $y >= (date("Y")-50); $y--){?>
        <option <?php selected($año, $y)?>><?=$y?></option><?php
    }
    ?>
    </select><br>
    <button type="submit">analizar</button>
    </form>
    <?php
    if ($dia != '' && $mes != '' && $año != ''){
        if (checkdate($mes, $dia, $año)){
            $ahora = new DateTime('now', new DateTimeZone('Europe/Madrid'));  
            $nacimiento = new DateTime("$año-$mes-$dia");  
            $edad = $ahora->diff($nacimiento);?>
            <p>Tienes <?=$edad->format('%y');?> años </p><?php
        }else{ ?>  <p>introduzca una fecha válida</p><?php 
        }
    }
    ?>
</body>
</html>
