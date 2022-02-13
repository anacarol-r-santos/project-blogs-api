const { getAllCategorieService } = require('../../services');

const getAllCategorie = async (_req, res) => {
    try {
        const { code, categorieList } = await getAllCategorieService();
        return res.status(code).json(categorieList);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err.message);
    }
};

module.exports = { getAllCategorie }; 