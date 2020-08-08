const { Router } = require('express')
const router = new Router()
const controller = require('../controllers/maintenances')
const authenticate = require('./middlewares/authenticate')

const routeName = "/maintenances"

router.post(routeName, authenticate, controller.create)


module.exports = router