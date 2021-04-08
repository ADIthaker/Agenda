const express = require("express");
const app = express();
const dbConnection = require('./config/db');
const scheduleRoutes = require("./routes");
const cors = require('cors');
const path = require("path");
require('dotenv').config();

dbConnection.db();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({origin:'https://secret-earth-78161.herokuapp.com'}));
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use(scheduleRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'frontend/build/index.html'));
});
app.listen(process.env.PORT, () => {
    console.log(`\nworking on port ${process.env.PORT}`);
});