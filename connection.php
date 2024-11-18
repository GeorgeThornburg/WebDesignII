<?php 

    //creating the variable holders. using wampserver, password should be empty.
    $hostname = "localhost";
    $username = "root";
    $password = "";
    $database = "test";

    $mysqlconnect = new mysqli($hostname, $username, $password, $database);


    //verifies if connection is good, if not will throw error.
    if ($mysqlconnect === false) {
        die("Connection bad.");
    } else {
        //echo("Connection good.");
        //if all is good, we fly through this
    }


?>