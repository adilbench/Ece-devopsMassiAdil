
const createUserRoute = require('./routes/createUser');
const getUserRoute = require('./routes/getUser');

// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());

// Routes will be added here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

app.use('/', createUserRoute);
app.use('/', getUserRoute);
});
