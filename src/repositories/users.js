const knex = require('../../database')
const User = require('../models/User')
const tableName = 'users'

// SELECT * FROM users WHERE ?=?
const getOne = async params => {
    const [user] = await knex(tableName).where(params)
    return new User(user)
}

//UPDATE users SET salt = ?, password = ? WHERE id = ?;
const update = async (id, data) => {
    const [user] = await knex(tableName).where({id: id}).update(data).returning('*')
    return new User(user)
}

module.exports = {
    getOne,
    update
}