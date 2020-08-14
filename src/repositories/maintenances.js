const knex = require('../../database')
const tableName = 'maintenances'

// INSERT INTO maintenances (id, user_id, equipment_id, description) VALUES (?, ?, ?, ?)
const create = async maintenance => {
    const [created] = await knex(tableName).returning('*').insert(maintenance)
    return created
}

module.exports = {
    create,
}