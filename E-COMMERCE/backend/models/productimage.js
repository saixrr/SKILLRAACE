'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define the inverse relationship with Product
      ProductImage.belongsTo(models.Product, {
        foreignKey: 'product_id',
        as: 'product' // Alias to use in queries
      });
    }
  }

  ProductImage.init({
    product_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ProductImage',
  });
  
  return ProductImage;
};
