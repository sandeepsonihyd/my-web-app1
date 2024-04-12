const express = require('express');
const app = express();
const port = process.env.PORT || 3000
    
app.get('/', (req, res) => {
  res.send('Hello, this is my web application - version2!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
