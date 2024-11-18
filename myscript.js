function moby() {
    // Create an XMLHttpRequest object
    var xmlhttp = new XMLHttpRequest();
    
    // Set up a callback function that gets called when the response is ready
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            // Update the content of the <p> element with the response from random.php
            document.getElementById("new").innerHTML = xmlhttp.responseText;
        }
    };

    // Open a GET request to random.php (you don't need a query string if not needed)
    xmlhttp.open("GET", "random.php", true);
    
    // Send the request
    xmlhttp.send();
}

// Call the function to make sure it runs
moby();