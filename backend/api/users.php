<?php
include_once 'database.php';

$db = (new Database())->connect();
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Parse request data
$data = json_decode(file_get_contents("php://input"), true);

if ($requestMethod === 'GET') {
    // Fetch all users
    $query = "SELECT * FROM users";
    $stmt = $db->prepare($query);
    $stmt->execute();
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(["status" => "success", "data" => $users]);
}

if ($requestMethod === 'POST') {
    // Create a new user
    $name = $data['name'];
    $email = $data['email'];

    $query = "INSERT INTO users (name, email) VALUES (:name, :email)";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":email", $email);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "User created successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to create user"]);
    }
}

if ($requestMethod === 'PUT') {
    // Update an existing user
    $id = $data['id'];
    $name = $data['name'];
    $email = $data['email'];

    $query = "UPDATE users SET name = :name, email = :email WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":id", $id);
    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":email", $email);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "User updated successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to update user"]);
    }
}

if ($requestMethod === 'DELETE') {
    // Delete a user
    $id = $data['id'];

    $query = "DELETE FROM users WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(":id", $id);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "User deleted successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to delete user"]);
    }
}
?>