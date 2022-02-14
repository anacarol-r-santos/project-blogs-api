const { createPostService } = require('../../services');

const createPost = async (req, res) => {
    const result = req.user;
    const { title, content, categoryIds } = req.body;
    try {
        const { code, data } = await createPostService({ result, title, content, categoryIds });

        return res.status(code).json(data);
    } catch (err) {
        return res.status(400).json(err.message);
    }
};

module.exports = { createPost }; 