const { Categorie } = require('../../models');

const getAllCategorieService = async () => {
    const categorieList = await Categorie.findAll();

    return { code: 200, categorieList };
};

module.exports = { getAllCategorieService };