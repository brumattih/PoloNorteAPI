const moment = require('moment')
const utcNow = moment().utc().format()

function Maintenance({
    id,
    user_id,
    equipment_id,
    description,
    created_at = utcNow,
    updated_at = utcNow,
} = {}) {
    this.id = id
    this.user_id = user_id
    this.equipment_id = equipment_id
    this.description = description
    this.created_at = created_at
    this.updated_at = updated_at
}


module.exports = Maintenance
