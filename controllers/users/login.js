const { loginService } = require('../../services');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { data, code } = await loginService({ email, password });
        return res.status(code).json(data);
    } catch (err) {
        return res.status(500).json(err.message);
    }
};

module.exports = { loginUser };
