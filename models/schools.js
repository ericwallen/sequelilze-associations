'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schools = sequelize.define('Schools', {
    name: DataTypes.STRING
  }, {});
  Schools.associate = function(models) {
	// associations can be defined here
	Schools.hasMany(models.Students)
  };
  return Schools;
};