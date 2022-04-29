require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
app.use(express.json());

// routes export
const registerRoute = require('./routes/register');

// middlewares export
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

// routes
app.use('/api/v1/', registerRoute);

// middlewares
app.use(notFound);
app.use(errorHandler);

//server connection
const Port = process.env.Port || 5000;
const connectDB = require('./db/connect');
const start = async () => {
  try {
    await connectDB(process.env.MONGO);
    app.listen(Port, console.log(`server is listening on port ${Port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
