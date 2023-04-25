const { Router } = require('express');
const router = Router();
const path = require('path');
const { getCars, saveCar, deleteCar, getCarsHistory, deleteMany } = require('./CarsController')

router.get('/get', getCars);
// router.get('/build', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });
router.get('/get/history', getCarsHistory);
router.post('/saveCar', saveCar);
router.post('/deleteCar', deleteCar);
router.post('/deleteMany', deleteMany)

module.exports = router;