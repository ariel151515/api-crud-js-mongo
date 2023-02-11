const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require('./routes/user');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 9000; // Con la variable port toma el puerto local de nuestra pc o el del hosting automaticamente


// middleware
app.use(cors());
app.use(express.json())
app.use('/api', userRoutes);


// routes
app.get('/', (req, res) => {
    res.send('Welcom to my API')
})


//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));


app.listen(port, () => console.log('server listning on port', port))


// Subidos la API