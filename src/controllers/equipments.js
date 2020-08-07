const service = require('../services/equipments')
const handleError = require('../controllers/handleError')


const getById = async (req, res) => {
    try {
        const equipment = await service.getById(req.params.id)
        res.json(equipment)
    }
    catch (error) {
        handleError(res, error)
    }
    
}

module.exports = {
    getById
}