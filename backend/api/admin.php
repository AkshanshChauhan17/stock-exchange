<?php
include_once "../api/database.php";
include_once "../utils/response.php";

$database = new Database();
$db = $database->getConnection();

$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod == "POST" && $_GET['action'] == "login") {
    // Admin login
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['username'];
    $password = $data['password'];

    $query = "SELECT * FROM admins WHERE username = :username";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":username", $username);
    $stmt->execute();

    if ($stmt->rowCount() == 1) {
        $admin = $stmt->fetch(PDO::FETCH_ASSOC);
        if (password_verify($password, $admin['password'])) {
            jsonResponse("success", "Login successful", ["admin_id" => $admin['id']]);
        }
    }
    jsonResponse("error", "Invalid credentials");
}

if ($requestMethod == "POST" && $_GET['action'] == "register-client") {
    // Register client
    $data = json_decode(file_get_contents("php://input"), true);
    $name = $data['name'];
    $contact = $data['contact'];

    $query = "INSERT INTO clients (name, contact) VALUES (:name, :contact)";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":contact", $contact);

    if ($stmt->execute()) {
        jsonResponse("success", "Client registered successfully");
    }
    jsonResponse("error", "Failed to register client");
}

if ($requestMethod == "GET" && $_GET['action'] == "clients") {
    // List clients
    $query = "SELECT * FROM clients";
    $stmt = $db->query($query);
    $clients = $stmt->fetchAll(PDO::FETCH_ASSOC);
    jsonResponse("success", "Clients retrieved", $clients);
}

if ($requestMethod == "GET" && $_GET['action'] == "client-activity") {
    // Get client activity
    $clientId = $_GET['id'];
    $query = "SELECT * FROM activities WHERE client_id = :client_id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":client_id", $clientId);
    $stmt->execute();
    $activities = $stmt->fetchAll(PDO::FETCH_ASSOC);
    jsonResponse("success", "Activities retrieved", $activities);
}
?>