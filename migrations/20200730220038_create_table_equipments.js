const tableName = 'equipments'

exports.up = function (knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments()
        table.integer('store_id').references('stores.id').notNull().onUpdate('CASCADE').onDelete('CASCADE')
        table.string('model').notNull()
        table.string('brand').notNull()
        table.integer('year').notNull()
        table.timestamps()
    })

};

exports.down = function (knex) {
    return knex.schema.dropTable(tableName)

};
