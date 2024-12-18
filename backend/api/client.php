<?php
include_once "../api/database.php";
include_once "../utils/response.php";

$database = new Database();
$db = $database->getConnection();

$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod == "POST" && $_GET['action'] == "login") {
    // Client login
    $data = json_decode(file_get_contents("php://input"), true);
    $email = $data['email'];
    $password = $data['password'];

    $query = "SELECT * FROM clients WHERE email = :email";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":email", $email);
    $stmt->execute();

    if ($stmt->rowCount() == 1) {
        $client = $stmt->fetch(PDO::FETCH_ASSOC);
        if (password_verify($password, $client['password'])) {
            jsonResponse("success", "Login successful", ["client_id" => $client['id']]);
        }
    }
    jsonResponse("error", "Invalid credentials");
}

if ($requestMethod == "PUT" && $_GET['action'] == "update-info") {
    // Update client info
    $data = json_decode(file_get_contents("php://input"), true);
    $clientId = $data['client_id'];
    $name = $data['name'];
    $contact = $data['contact'];

    $query = "UPDATE clients SET name = :name, contact = :contact WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":contact", $contact);
    $stmt->bindParam(":id", $clientId);

    if ($stmt->execute()) {
        jsonResponse("success", "Information updated");
    }
    jsonResponse("error", "Failed to update information");
}

if ($requestMethod == "POST" && $_GET['action'] == "log-activity") {
    // Log client activity
    $data = json_decode(file_get_contents("php://input"), true);
    $clientId = $data['client_id'];
    $activity = $data['activity'];

    $query = "INSERT INTO activities (client_id, activity) VALUES (:client_id, :activity)";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":client_id", $clientId);
    $stmt->bindParam(":activity", $activity);

    if ($stmt->execute()) {
        jsonResponse("success", "Activity logged");
    }
    jsonResponse("error", "Failed to log activity");
}
?>