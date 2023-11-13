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
    <title>Resultado</title>
</head>

<body>
    <?php
    require 'isoaux.php';

    if (isset($_GET['str'])){
        $str = $_GET['str'];
    }else{
        $str ="";
    }
    ?>

    <form action="" method="get">
        <label for="str">frase a analizar:</label>
        <input type="text" name="str" id="str" value="<?= $str ?>"><br>
        <button type="submit">analizar</button>
    </form>
    <?php 
    if ($str != ""){?>
            <?=calc_isograma($_GET['str']);?>
        <?php
        }else{?>
            <p>Escriba algo en el campo vacio</p>
        <?php } ?>
</body>

</html>
