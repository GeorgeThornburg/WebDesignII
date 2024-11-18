<?php 

// Connects us to db
include("connection.php");

// Check to see if data has been sent
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? ''; // Get email from POST or default to an empty string
    $comment = $_POST['comment'] ?? ''; // Get comment from POST or default to an empty string

    // Check if the email and comment fields are not empty
    if (!empty($email) && !empty($comment)) {
        // ? stop sql injection threats
        $sql = "INSERT INTO contactus (email, comment) VALUES (?, ?)";
        $stmt = mysqli_stmt_init($mysqlconnect);

        if (mysqli_stmt_prepare($stmt, $sql)) {
            // Bind parameters ('ss' for two string values)
            mysqli_stmt_bind_param($stmt, "ss", $email, $comment);

            // Execute the statement
            if (mysqli_stmt_execute($stmt)) {
                echo "Record saved successfully!";
            } else {
                // Handle error
                echo "Error executing statement: " . mysqli_error($mysqlconnect);
            }

            // Close the statement
            mysqli_stmt_close($stmt);
        } else {
            // Handle errors with preparing the statement
            echo "Error preparing statement: " . mysqli_error($mysqlconnect);
        }
    } else {
        echo "Email and comment cannot be empty.";
    }
}

// Close the database connection
mysqli_close($mysqlconnect);

?>
