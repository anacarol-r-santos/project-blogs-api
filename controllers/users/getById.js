const { getByIdService } = require('../../services');

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const { code, data } = await getByIdService(id);
        return res.status(code).json(data);        
    } catch (err) {
        res.status(500).json(err.message);
    }
};

module.exports = { getUserById };