'use strict';
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('Students', {
	name: DataTypes.STRING,
	schoolID: DataTypes.INTEGER
  }, {});
  Students.associate = function(models) {
	// associations can be defined here
	Students.belongsTo(models.Schools, {foreignKey: "schoolID"})
  };
  return Students;
};