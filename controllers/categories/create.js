const { createCategorieService } = require('../../services');

const createCategorie = async (req, res) => {
    try {
        const { name } = req.body;
        const { code, data } = await createCategorieService({ name });
        return res.status(code).json(data);        
    } catch (err) {
        res.status(500).json(err.message);
    }
};

module.exports = { createCategorie };