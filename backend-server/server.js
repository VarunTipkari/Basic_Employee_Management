const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST','PUT', 'OPTIONS','DELETE'],
    allowedHeaders: ['Content-Type']
}));

const EmployeeRoutes = require('./routes/EmployeeRoutes');
app.use("/api",EmployeeRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=> app.listen(process.env.BACKEND_PORT,()=>console.log("Server runnning at " + process.env.BACKEND_PORT)))
.catch((err)=>console.log(err));

mongoose.connection.on("error", (err) => {
    console.error("MongoDB Connection Error:", err);
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB Connection Error:", err);
});
