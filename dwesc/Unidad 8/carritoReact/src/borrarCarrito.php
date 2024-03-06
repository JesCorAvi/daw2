<?php
header("Access-Control-Allow-Origin: *");

$carrito['carrito'] = array();

file_put_contents('carrito.json', json_encode($carrito));

echo json_encode(['message' => 'Objeto borrados']);
?>
