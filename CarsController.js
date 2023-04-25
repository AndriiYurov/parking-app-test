const { CarsList, CarsHistory } = require('./CarsModel');

//GET
module.exports.getCars = async (req, res) => {
    const cars = await CarsList.find();
    res.send(cars)
}

//GET_HISTORY
module.exports.getCarsHistory = async (req, res) => {
    const carsHistory = await CarsHistory.find();
    res.send(carsHistory)
}

//POST
module.exports.saveCar = async (req, res) => {
    const { car, plate, date } = req.body;
    CarsList.create({ car, plate, date })
    .then((data) => { console.log('Cars added')
res.send(data)})
}

//DELETE
module.exports.deleteCar = async (req, res) => {
    const { _id, car, plate, date, dateOut} = req.body;
    CarsHistory.create({ car, plate, date, dateOut })
    CarsList.findByIdAndDelete(_id)
    .then(() => res.send('Car has been deleted'))
}

//DELETE_MANY
module.exports.deleteMany = async (req, res) => {
    CarsHistory.deleteMany({})
    .then(() => res.send('Items has been deleted'))
}