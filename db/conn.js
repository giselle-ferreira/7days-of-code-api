require('dotenv').config({ path:__dirname+'/.env' });

const mongoose = require('mongoose');

const connectToDB = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

const db = mongoose.connection;
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('Connected to Database'));


module.exports = connectToDB;