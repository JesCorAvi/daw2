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
    <title>fech</title>
</head>

<body>
    <?php
    require 'faux.php';
    const MESES = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Optubre",
        "Noviembre",
        "Diciembre"
    ];
    ?>
    <form action="" method="get">
    <label for="dia">dia</label>
    <select type="text" name="dia" id="dia">
    <?php
    for($x = 0;  $x <= 31;  $x++){?>
        <option><?=$x?></option><?php
    }
    ?>
    </select><br>
    <label for="mes">mes</label>
    <select type="text" name="mes" id="mes">
    <?php
    foreach(MESES as $x){?>
        <option><?=$x?></option><?php
    }
    ?>
    </select><br>
    <label for="año">año</label>
    <select type="text" name="año" id="año">
    <?php
    foreach(MESES as $x){?>
        <option><?=$x?></option><?php
    }
    ?>
    </select><br>
    <button type="submit">analizar</button>
    </form>
</body>

</html>

dar la edad de la persona manteniendo los campos y dando un año minimo de 50 años antes de la fecha actual