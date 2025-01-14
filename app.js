const express = require('express');

const app = express();

const EXPRESS_PORT = process.env.EXPRESS_PORT || 3010;

app.get('/', (req, res) => {
  res.send('Hello from the Express Node.js Web server');
});

app.listen(EXPRESS_PORT, err => {
  if (!err) {
    console.log(`Express web server is running at port ${EXPRESS_PORT}`)
  }
})
