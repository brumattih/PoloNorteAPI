const moment = require('moment')
const tableName = 'users'
const now = moment().utc().toDate()

const { encryptPassword } = require('../src/utils/encrypt')

exports.seed = async function (knex) {
  const {salt, encryptedPassword} = encryptPassword('1234')
  await knex(tableName).del()

  return knex(tableName).insert(
    {
      id: 1, name: 'João João João',
      email: 'hrpreis@gmail.com',
      cpf: '12345678910',
      password: encryptedPassword,
      salt: salt,
      created_at: now,
      updated_at: now
    })
}
