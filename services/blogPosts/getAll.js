const { BlogPost, User, Categorie } = require('../../models');

const getAllPostService = async () => {
    const data = await BlogPost.findAll({ 
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Categorie, as: 'categories', through: { attributes: [] } },
        ],
     });

    return { code: 200, data };
};

module.exports = { getAllPostService };