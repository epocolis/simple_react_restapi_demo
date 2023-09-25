import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState(null);

  const sendPostRequest = () => {
    // Define the API endpoint URL
    const apiUrl = 'https://example.com/api/endpoint'; // Replace with your actual API endpoint

    // Data to send in the POST request (in JSON format)
    const postData = {
      key1: 'value1',
      key2: 'value2',
    };

    // Create the fetch options for the POST request
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify(postData), // Convert the data to JSON string
    };

    // Send the POST request using fetch
    fetch(apiUrl, fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response JSON
      })
      .then((data) => {
        console.log('POST request successful:', data);
        setResponse(data); // Store the response data in state
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors here
      });
  };

  return (
    <div className="App">
      <button onClick={sendPostRequest}>Send POST Request</button>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
