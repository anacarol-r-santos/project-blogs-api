const { PostCategorie } = require('../../models');

const getAllCategorieService = async () => {
    const categorieList = await PostCategorie.findAll();

    return { code: 200, categorieList };
};

module.exports = { getAllCategorieService };