"use strict";

module.exports = (sequelize, DataTypes) => {
  const typeInformation = sequelize.define(
    "typeInformation",
    {
      typeSpeed: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
      typo: DataTypes.INTEGER,
      totaltime: DataTypes.INTEGER,
      user_id:{
        type: DataTypes.INTEGER,
        required: true,
        allowNull: false
      }
      // code: DataTypes.STRING
    }
  );
  typeInformation.associate = function(models) {
    // associations can be defined here
  };
  return typeInformation;
};