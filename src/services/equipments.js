const repository = require('../repositories/equipments')

const getById = async (id) => {
    const equipment = await repository.getById(id)
    if (!equipment.id) {
        throw { status: 404, message: "Equipment not found!" }
    }
    return equipment
}

module.exports = {
    getById,
}