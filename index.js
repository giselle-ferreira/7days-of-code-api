require('dotenv').config();
require('./db/conn');

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3333;
const routes = require('./routes/index')
const connectToDB = require('./db/conn');

connectToDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)


app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT} `)
})


