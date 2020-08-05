const tableName = 'stores'

exports.up = function (knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments()
        table.integer('customer_id').references('customers.id').notNull().onUpdate('CASCADE').onDelete('CASCADE')
        table.string('name').notNull()
        table.timestamps()
    })

};

exports.down = function (knex) {
    return knex.schema.dropTable(tableName)

};
