"use strict";

module.exports = (sequelize, DataTypes) => {
  const customData = sequelize.define(
    "customData",
    {
      dataName: DataTypes.STRING,
      dataText: DataTypes.STRING,
      user_id:{
        type: DataTypes.INTEGER,
        required: true,
        allowNull: false
      }
      // code: DataTypes.STRING
    }
  );
 customData.associate = function(models) {
    // associations can be defined here
  };
  return customData;
};