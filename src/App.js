import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/';

    // Perform the GET request when the component mounts
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response JSON
      })
      .then((data) => {
        setData(data); // Store the response data in state
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error); // Handle errors
        setIsLoading(false);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="App">
      <h1>JSONPlaceholder Data</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default App;
