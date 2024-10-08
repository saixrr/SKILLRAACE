'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define a one-to-one relationship with ProductImage
      Product.hasOne(models.ProductImage, {
        foreignKey: 'product_id',
        as: 'image' // Alias to use in queries
      });
    }
  }
  
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    stock_quantity: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
  });
  
  return Product;
};
