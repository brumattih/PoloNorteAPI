const service = require('../services/maintenances')
const Maintenance = require('../models/Maintenance')
const handleError = require('../controllers/handleError')

const create = async (req, res) => {
    try {
        const maintenance = new Maintenance(req.body)
        maintenance.user_id = req.user.id
        if (!maintenance.equipment_id || !maintenance.description) {
            throw { status: 400, message: "Invalid data" }
        }
        const created = await service.create(maintenance)
        res.status(201).json(created)
    }
    catch (error) {
        handleError(res, error)
    }
}

module.exports = {
    create,
}