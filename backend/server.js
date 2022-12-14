// Required Package import 
const express = require("express");
const colors = require('colors')
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')


// Actual code 
// Connection to MongoDB 
connectDB()

app.use(express.json())
app.use(express.urlencoded( {
  extended : false
}))

const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoute");


app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler)

// checking if server is up and running 
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
