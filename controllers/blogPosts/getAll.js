const { getAllPostService } = require('../../services');

const getAllPost = async (_req, res) => {
    try {
        const { data, code } = await getAllPostService();
        return res.status(code).json(data);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err.message);
    }
};

module.exports = { getAllPost }; 