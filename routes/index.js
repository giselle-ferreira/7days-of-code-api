const { Router } = require('express');
const plantRoute = require('./plantRoute');
const router = Router();

router.get('/', (req, res) => {
    res.send('API Plantas - CasaVerde');
})

router.use(plantRoute);

router.use((req, res, next) => {
    res.json({ message: "Something is wrong with the route" })
})

module.exports = router;