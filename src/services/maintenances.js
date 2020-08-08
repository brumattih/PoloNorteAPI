const repository = require('../repositories/maintenances')
const Maintenance = require('../models/Maintenance')

const create = async (data) => {
    const maintenance = new Maintenance({ ...data, id: undefined, created_at: undefined, updated_at: undefined })

    const created = await repository.create(maintenance)
    return created
}

module.exports = {
    create,
}