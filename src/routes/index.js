const { Router } = require('express')
const router = new Router()

const cors = require('cors')

const users = require('./users')
const equipments = require('./equipments')

router.use(cors())
router.use(users)
router.use(equipments)


router.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

module.exports = router