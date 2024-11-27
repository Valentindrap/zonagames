<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");

// Configuración de conexión a la base de datos
$servername = "localhost";
$username = "root"; // Cambia esto si tienes un usuario diferente en tu base de datos
$password = ""; // Cambia esto si tienes una contraseña establecida
$dbname = "base_zonagames";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Error al conectar a la base de datos"]);
    exit();
}

// Verificar si se ha pasado un ID en la URL
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    // Consulta para obtener el juego por ID
    $sql = "SELECT id, nombre, calificacion, portada, url, desarrollador, descripcion FROM juegos WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id); // Vincula el parámetro para prevenir inyecciones SQL
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $juego = $result->fetch_assoc();
        echo json_encode($juego);
    } else {
        echo json_encode(["error" => "Juego no encontrado"]);
    }
} else {
    // Si no se pasa un ID, devolver todos los juegos
    $sql = "SELECT id, nombre, calificacion, portada, url, desarrollador, descripcion FROM juegos";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $juegos = [];

        // Recorrer los resultados y almacenarlos en un array
        while ($row = $result->fetch_assoc()) {
            $juegos[] = $row;
        }

        // Devolver datos en formato JSON
        echo json_encode($juegos);
    } else {
        echo json_encode([]);
    }
}

// Cerrar conexión
$conn->close();
?>
