const express = require('express');
const axios = require('axios').default;

const app = express();
const PORT = process.env.PORT || 5000;

// Route to serve JSON data at '/blogs'
app.get('/blogs', async (req, res) => {
  try {
    // Fetch data from the specified endpoint
    const response = await axios.get('http://localhost:5000/blogs');

    // Extract the data from the response
    const blogsData = response.data;

    // Send the fetched data as JSON response
    res.json(blogsData);
  } catch (error) {
    console.error('Error fetching data from http://localhost:5000/blogs:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
