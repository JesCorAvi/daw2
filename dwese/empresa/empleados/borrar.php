<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Borrar empleado</title>
</head>
<body>
    <?php
    require '../auxiliar.php';

    if (isset($_POST['id'])) {
        $id = trim($_POST['id']);
        if (!ctype_digit($id)) {
            return volver_empleados();
        }

        $pdo = conectar();

        $pdo->beginTransaction();
        $sent = $pdo->prepare('SELECT * FROM empleados WHERE id = :id FOR UPDATE');
        $sent->execute([':id' => $id]);
        if (buscar_empleado_por_id($id, $pdo) === false) {
            return volver_empleados();
        }

        $sent = $pdo->prepare('DELETE FROM empleados WHERE id = :id');
        $sent->execute([':id' => $id]);

        $pdo->commit();

        volver_empleados();
    }
    if (isset($_GET['id'])) {
        $id = trim($_GET['id']);
    }

    if (!isset($id)) {
        return volver_empleados();
    }
    ?>
    <p>¿Está seguro de que quiere borrar ese empelado?</p>
    <form action="" method="post">
        <input type="hidden" name="id" value="<?= $id ?>">
        <button type="submit">Sí</button>
        <a href="/empleados/index.php">Volver</a>
    </form>
</body>
</html>
