const mongoose = require('mongoose');

const CarsSchema = new mongoose.Schema({
    car: {
        type: String,
        required: true
    },
    plate: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const CarsHistorySchema = new mongoose.Schema({
    car: {
        type: String,
        required: true
    },
    plate: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    dateOut: {
        type: Date,
        required: true
    }
})

const CarsList = mongoose.model('CarsList', CarsSchema);
const CarsHistory = mongoose.model('CarsHistory', CarsHistorySchema)

module.exports = {
    CarsList, CarsHistory
}