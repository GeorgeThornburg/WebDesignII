document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Create a new FormData object from the form
    let formData = new FormData(this);
  
    // Use fetch to send the data to the server
    fetch('contactus.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      console.log('Success:', data); // Handle success 
      sessionStorage.setItem('formSubmitted', 'true');
      window.location.reload();

    })
    .catch((error) => {
      console.error('Error:', error); // Handle error (e.g., show an error message)
    });
  });
  

// throws windows alert if flag has been trripped
window.onload = function() {
    if (sessionStorage.getItem('formSubmitted') === 'true') {
        
        // alert
        alert('Record saved successfully!');

        // Clears flag
        sessionStorage.removeItem('formSubmitted');
    }
};