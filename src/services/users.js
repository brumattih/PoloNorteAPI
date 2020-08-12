const repository = require('../repositories/users')

const moment = require('moment')
const utcNow = moment().utc().format()

const { encryptPassword, generatePassword } = require('../utils/encrypt')
const { createToken } = require('../utils/jwt')
const { sendNewPassword } = require('../utils/sendEmail')

const login = async loginData => {
    const user = await repository.getOne({ cpf: loginData.cpf })
    if (!user.id) {
        throw { status: 401, message: 'Not Authorized' }
    }
    const { encryptedPassword } = encryptPassword(loginData.password, user.salt)
    if (encryptedPassword !== user.password) {
        throw { status: 401, message: 'Not Authorized' }
    }
    const token = createToken(user.id)
    return {
        user: user.view(),
        token
    }
}

const getById = async id => {
    const user = await repository.getOne({ id: id })
    if (!user.id) {
        throw { status: 404, message: "Not found" }
    }
    return user
}

const forgotPassword = async data => {
    const userFound = await repository.getOne({ cpf: data.cpf })
    if (!userFound.id) {
        throw { status: 404, message: "Not found" }
    }

    const newPassword = generatePassword()

    sendNewPassword(userFound.name, userFound.email, newPassword)

    const { salt, encryptedPassword: password } = encryptPassword(newPassword)

    const updated = await repository.update(userFound.id, { password, salt, updated_at: utcNow })

    return updated
}



module.exports = {
    login,
    getById,
    forgotPassword,
}