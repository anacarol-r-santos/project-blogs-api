const { BlogPost, Categorie } = require('../../models');
const { schemaPosts } = require('./validation');

const createPostService = async ({ result, title, content, categoryIds }) => {
    console.log('userid:', result);
    const { error } = schemaPosts.validate(
        { title, content, categoryIds },
        // https://stackoverflow.com/questions/58408362/how-to-set-custom-error-messages-in-hapi-joi
        { abortEarly: false },
    );
    if (error) {
        return { code: 400,
                 data: { message: error.message } };
    }
    const findCategoryIds = await Categorie.findAll({ attributes: ['id'] });
    const mapId = findCategoryIds.map(({ id }) => id);
    const verifyIds = categoryIds.every((id) => mapId.includes(id));
    if (!verifyIds) return { code: 400, data: { message: '"categoryIds" not found' } };
    
    const { dataValues: { id } } = await BlogPost.create({ title, content, userId: result.id });

    const post = { id, userId: result.id, title, content };
    
    return { code: 201, data: post };
};

module.exports = { createPostService };