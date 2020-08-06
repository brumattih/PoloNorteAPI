const { Router } = require('express')
const router = new Router()
const controller = require('../controllers/users')

const routeName = "/users"

// Cria o login
router.post(`${routeName}/login`, controller.login)

module.exports = router