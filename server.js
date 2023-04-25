const express = require('express');
const app = express();
const routes = require('./CarsRoutes');
const cors = require('cors');
const path = require('path');
// const history = require('connect-history-api-fallback');

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config();

const PORT = 4000 || process.env.port;

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('Connected to Mongo'))
.catch((err) => console.log(err))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);
// app.use(history({index: '/index.html'}))
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
