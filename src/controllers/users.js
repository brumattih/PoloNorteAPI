const service = require('../services/users')
const handleError = require('./handleError')

const login = async (req, res) => {
    try {
        if (!req.body.cpf || !req.body.password) {
            throw { status: 404, message: "Invalid data" }
        }
        const data = await service.login(req.body)
        res.json(data)
    } catch (error) {
        handleError(res, error)
    }
}

const forgotPassword = (req, res) => {
    service.forgotPassword(req.body).catch(() => {})

    res.status(202).end()
}

const changePassword = async (req, res) => {
    try {
        if (!req.body.password || !req.body.newPassword || req.body.password === req.body.newPassword) {
            throw { status: 400, message: "Invalid data" }
        }
        const data = await service.changePassword(req.body, req.user.id)
        res.status(204).end()
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = {
    login,
    forgotPassword,
    changePassword,
}