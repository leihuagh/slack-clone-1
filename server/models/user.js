import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isAlphanumeric: { args: true, msg: 'Username can only contain letters and numbers' },
          len: { args: [3, 25], msg: 'Username needs to be between 3 and 25 characters long' },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: { args: true, msg: 'Email is invalid' },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: { len: { args: [5, 100], msg: 'Password must be atleast 5 characters' } },
      },
    },
    {
      hooks: {
        afterValidate: async (user) => {
          // eslint-disable-next-line no-param-reassign
          user.password = await bcrypt.hash(user.password, 12);
        },
      },
    },
  );

  User.associate = (models) => {
    User.belongsToMany(models.Team, {
      through: models.Member,
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
    // N:M
    User.belongsToMany(models.Channel, {
      through: 'channel_member',
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
  };

  return User;
};
