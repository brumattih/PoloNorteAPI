const knex = require('../../database')
const User = require('../models/User')
const tableName = 'users'

// SELECT * FROM users WHERE ?=?
const getOne = async params => {
    const [user] = await knex(tableName).where(params)
    return new User(user)
}

module.exports = {
    getOne
}