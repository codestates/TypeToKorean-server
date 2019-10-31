"use strict";
const crypto = require("crypto");

module.exports = (sequelize, DataTypes) => {
  const typeInformation = sequelize.define(
    "typeInformation",
    {
      typeSpeed: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
      typo: DataTypes.INTEGER,
      totaltime: DataTypes.INTEGER,
      userid: DataTypes.INTEGER,
      // code: DataTypes.STRING
    }
  );
  typeInformation.associate = function(models) {
    // associations can be defined here
  };
  return typeInformation;
};