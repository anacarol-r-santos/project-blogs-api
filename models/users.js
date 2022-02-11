const validateDisplayName = (DataTypes) => {
  const displayName = {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, Infinity],
        msg: '"displayName" length must be at least 8 characters long',
      },
    }, 
  };
  return displayName;
};

const validateEmail = (DataTypes) => {
  const email = {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: '"email" is required',
      },
      notEmpty: {
        msg: '"email" is required',
      },
      isEmail: {
        msg: '"email" must be a valid email', 
      },
    }, 
  };
  return email;
};

const validatePassword = (DataTypes) => {
  const password = {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: '"password" is required',
      },
      notEmpty: {
        msg: '"password" is required',
      },
      len: {
        args: [6],
        msg: '"password" length must be 6 characters long',
      },
    }, 
  };
  return password;
};

const Users = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    displayName: validateDisplayName(DataTypes),
    email: validateEmail(DataTypes),
    password: validatePassword(DataTypes),
    image: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  return users;
};

module.exports = Users;