const express = require('express');
const router = express.Router();
const PlantController = require('../controllers/PlantController');


router.get('/plants', PlantController.getAllPlants);
router.post('/create', PlantController.createPlant);
router.put('/update', PlantController.updatePlant);
router.delete('/delete/:_id', PlantController.deletePlant);


module.exports = router;