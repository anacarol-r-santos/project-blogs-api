const { getAllUserService } = require('../../services');

const getAllUser = async (_req, res) => {
    try {
        const { code, userList } = await getAllUserService();
        return res.status(code).json(userList);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err.message);
    }
};

module.exports = { getAllUser }; 