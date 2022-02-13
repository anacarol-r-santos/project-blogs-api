const { Categorie } = require('../../models');

const createCategorieService = async ({ name }) => {
    if (!name) return { code: 400, data: { message: '"name" is required' } };
    const { insertId } = await Categorie.create({ name });
    const categorie = { insertId, name };

    return { code: 201, data: categorie };
};

module.exports = { createCategorieService };