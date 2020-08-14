const tableName = 'maintenances'

exports.up = function (knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments()
        table.integer('user_id').references('users.id').notNull().onUpdate('CASCADE').onDelete('NO ACTION')
        table.integer('equipment_id').references('equipments.id').notNull().onUpdate('CASCADE').onDelete('CASCADE')
        table.string('description').notNull()
        table.timestamps()
    })

};

exports.down = function (knex) {
    return knex.schema.dropTable(tableName)

};
