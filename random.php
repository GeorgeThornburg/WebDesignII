<?php 

    //This connects our current page to the php file that connects to the database.
    include("connection.php");


    //finally we can start querying out database.
    $sql = "SELECT different_paragraphs FROM paragraph WHERE pri_number = 1";
    $result = $mysqlconnect->query($sql);


    // Check if the query was successful.... if any of the SELECT statement is wrong, this will pull the error
    if ($result === false) {
        die("Query failed: " . $mysqlconnect->error);
    }
  
    // checks to make sure $result is not null/empty
    if ($result->num_rows > 0) {
        // Fetch the data as an associative array
        $row = $result->fetch_assoc();

        //saving query into a variable easier to handle.
        $paragraphContent = $row['different_paragraphs'];

        //can run echo to make sure all is coming out correct.
        //echo htmlspecialchars($paragraphContent);
        echo '<p id="new" class="text-muted">' . htmlspecialchars($paragraphContent) . '</p>';

    } else {
        echo "No results found.";
    }



    //close the SQL connection.
    $mysqlconnect->close();
?>