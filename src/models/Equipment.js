const moment = require('moment')
const utcNow = moment().utc().format()

function Equipment({
    id,
    store_id,
    model,
    brand,
    year,
    created_at = utcNow,
    updated_at = utcNow,
} = {}) {
    this.id = id
    this.store_id = store_id
    this.model = model
    this.brand = brand
    this.year = year
    this.created_at = created_at
    this.updated_at = updated_at
}


module.exports = Equipment
