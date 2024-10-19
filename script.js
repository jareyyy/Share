document.getElementById('spamForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather input values
    const state = document.getElementById('state').value;
    const url = document.getElementById('url').value;
    const quantity = document.getElementById('quantity').value;
    const delay = document.getElementById('delay').value;

    // Prepare data for the API
    const data = {
        state: state,
        url: url,
        quantity: quantity,
        delay: delay
    };

    // Send a POST request to the API
    fetch('https://rest-api.joshuaapostol.site/spamshare', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Display the response
        document.getElementById('response').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('response').innerText = 'An error occurred: ' + error;
    });
});
