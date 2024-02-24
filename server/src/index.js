const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors')
const morgan=require('morgan')
const connectDB = require('./config/db') 

app.use(express.json());
app.use(cors())
app.use(morgan('dev'))

const userRoutes = require('./routes/userRoutes');

connectDB(); 

app.use('/api/v1/user',userRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
  console.log(`Server running on port ${PORT}`);
});
