const repository = require('../repositories/maintenances')
const Maintenance = require('../models/Maintenance')
const equipmentService = require('../services/equipments')

const create = async (data) => {
    const maintenance = new Maintenance({ ...data, id: undefined, created_at: undefined, updated_at: undefined })
    const equipment = await equipmentService.getById(maintenance.equipment_id)

    const created = await repository.create(maintenance)
    return created
}

module.exports = {
    create,
}