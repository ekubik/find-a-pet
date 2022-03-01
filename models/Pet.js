// To use instead of separate dog and cat files

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init(
  {
    name: {
      type: DataTypes.STRING
    },
    species: {
      type: DataTypes.STRING
    },
    breed: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    },
    sex: {
      type: DataTypes.STRING
    },
       
    isvaccinated: {
      type: DataTypes.BOOLEAN
    },
    ismicrochipped: {
      type: DataTypes.BOOLEAN
    },
    isdesexed: {
      type: DataTypes.BOOLEAN
    },
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'dog'
  }
);

module.exports = Dog;