"use strict";
const crypto = require("crypto");

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      pw: DataTypes.STRING,
      phone: DataTypes.STRING,
      created_at: DataTypes.STRING,
      loginlately: DataTypes.STRING,
      logoutlately: DataTypes.STRING,
      image: DataTypes.STRING

      // code: DataTypes.STRING
    },
    {
      hooks: {
        afterValidate: (data, options) => {
          var shasum = crypto.createHash("sha1");
          shasum.update(data.pw);
          data.password = shasum.digest("hex").slice(0, 5);
        }
      }
    }
  );
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};