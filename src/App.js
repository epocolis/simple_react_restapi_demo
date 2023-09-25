import React from 'react';

function App() {
  // Function to send the POST request
  const sendPostRequest = () => {
    // Define the API endpoint URL for POST
    const postUrl = 'https://jsonplaceholder.typicode.com/posts';

    // Data to send in the POST request (in JSON format)
    const postData = {
      title: 'Sample Title',
      body: 'Sample Body',
    };

    // Create the fetch options for the POST request
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    };

    // Send the POST request using fetch
    fetch(postUrl, fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response JSON
      })
      .then((data) => {
        console.log('POST request successful:', data); // Print response to console
      })
      .catch((error) => {
        console.error('Error:', error); // Print error to console
      });
  };

  return (
    <div className="App">
      <h1>POST Request and Console Output</h1>
      <button onClick={sendPostRequest}>Send POST Request</button>
    </div>
  );
}

export default App;
