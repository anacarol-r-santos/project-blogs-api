const validateEmailToLogin = async (req, res, next) => {
    const { email } = req.body;
    
    if (email.length === 0) {
        return res.status(400).json({ message: '"email" is not allowed to be empty' });
    }

    if (email === undefined) {
        return res.status(400).json({ message: '"email" is required' });
    }

    next();
};

const validatePasswordToLogin = async (req, res, next) => {
    const { password } = req.body;
    
    if (password.length === 0) {
        return res.status(400).json({ message: '"password" is not allowed to be empty' });
    }

    if (password === undefined) {
        return res.status(400).json({ message: '"password" is required' });
    }

    next();
};

module.exports = { validateEmailToLogin, validatePasswordToLogin };