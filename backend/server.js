const express = require('express');
const connectToDB = require('./config/db');
// const { errorHandler } = require('./middleware/errorMiddleware');
require('dotenv').config();
require('colors');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();

// Connected to Database
connectToDB();

//middlewares......
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes.....
app.use('/users', require('./routes/UserRoute'));

// Serve frontend
if (process.env.NODE_ENV === 'production') {

    // Set build folder as static
    app.use(express.static(path.join(__dirname, '../build')));

    // Fix: below code fixes app crashing on refresh in development
    app.get('*', (_, res) => {
        res.sendFile(path.join(__dirname, '../build/index.html'));
    });
}
else {
    app.get('/', (req, res) => {
        res.status(200).json({ message: 'Welcome to the Support Desk API' });
    });
}

//Listening express app........
app.listen(PORT, () => {
    console.log(`express app listening at port ${PORT}`);
});