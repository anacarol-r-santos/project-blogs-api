const { verifyToken } = require('./auth');

const authService = (req, res, next) => {
    try {
        const { authorization } = req.headers;    

        if (!authorization || authorization === undefined) {
            return res.status(401).json({ message: 'Token not found' });
        }
        const user = verifyToken(authorization);

        // if (!user) {
        //     return res.status(401).json({ message: 'Expired or invalid token' });
        // }

        req.user = user;
        console.log(user);

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = { authService };