<?php
// A simple router
$requestUri = $_SERVER['REQUEST_URI'];

if (strpos($requestUri, '/api/users') !== false) {
    include_once 'users.php';
} else {
    echo json_encode(["status" => "error", "message" => "Endpoint not found"]);
}
?>