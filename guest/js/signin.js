function signIn() {
    var form = document.getElementById('signin-form');
    var loading = document.getElementById('loading');
    var success = document.getElementById('success');
    
    // Show loading message
    loading.style.display = 'block';
    
    // Simulate server processing with a delay
    setTimeout(function() {
        // Hide loading message
        loading.style.display = 'none';
        
        // Show success message
        success.style.display = 'block';
        
        // Submit form (replace this with your actual form submission code if needed)
        form.submit();
    }, 2000); // Adjust the delay time as needed
}

// signup.js

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show loading animation
    document.getElementById('loading').classList.add('show');

    // Simulate an API call with setTimeout
    setTimeout(function() {
        // Hide loading animation
        document.getElementById('loading').classList.remove('show');

        // Show success popup
        document.getElementById('popup').classList.add('show');

        // Hide popup after 3 seconds
        setTimeout(function() {
            document.getElementById('popup').classList.remove('show');
            // Redirect to Home
            window.location.href = './index.html';
        }, 3000);
    }, 2000); // Simulate a 2-second delay for the API call
});

function signIn() {
    document.getElementById('loading').style.display = 'block';
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
        alert('Sign in successful!');
        // Redirect to Home after successful sign-in
        window.location.href = './index.html';
    }, 3000); // Simulate a loading time of 3 seconds
}