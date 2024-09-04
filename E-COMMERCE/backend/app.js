const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const { User, Product, ProductImage } = require('./models'); // Import the models

const app = express();
const saltRounds = 10; // For bcrypt hashing

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User signup route
app.post('/users', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!first_name || !email || !password) {
    return res.status(400).json({ errors: 'First name, email, and password are required.' });
  }

  try {
    const hashedPwd = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hashedPwd,
    });

    res.status(201).json({
      user: {
        id: newUser.id,
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
      },
      message: 'User created successfully!',
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ errors: 'An error occurred during sign-up. Please try again.' });
  }
});

// Product creation route
app.post('/products', async (req, res) => {
  const { name, description, price, stock_quantity, category_id } = req.body;

  if (!name || !price || !stock_quantity || !category_id) {
    return res.status(400).json({ errors: 'Name, price, stock quantity, and category ID are required.' });
  }

  try {
    const newProduct = await Product.create({
      name: name,
      description: description,
      price: price,
      stock_quantity: stock_quantity,
      category_id: category_id,
    });

    res.status(201).json({
      product: {
        id: newProduct.id,
        name: newProduct.name,
        description: newProduct.description,
        price: newProduct.price,
        stock_quantity: newProduct.stock_quantity,
        category_id: newProduct.category_id,
      },
      message: 'Product created successfully!',
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ errors: 'An error occurred while adding the product. Please try again.' });
  }
});

// Route to get all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{
        model: ProductImage,
        as: 'image', // Use the alias defined in the association
        attributes: ['image_url'], // Select only the `image_url` field
      }]
    });

    res.status(200).json({
      products: products.map(product => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        stock_quantity: product.stock_quantity,
        category_id: product.category_id,
        image: product.image ? product.image.image_url : null, // Use the alias defined in the association
      })),
      message: 'Products retrieved successfully!',
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ errors: 'An error occurred while fetching the products. Please try again.' });
  }
});

// Route to handle image URL submission for a product
app.post('/products/:productId/images', async (req, res) => {
  const { productId } = req.params;
  const { image_url } = req.body;

  if (!image_url) {
    return res.status(400).json({ errors: 'Image URL is required.' });
  }

  try {
    const newProductImage = await ProductImage.create({
      product_id: productId,
      image_url: image_url, // Store the provided image URL
      created_at: new Date(),
    });

    res.status(201).json({
      productImage: {
        id: newProductImage.id,
        product_id: newProductImage.product_id,
        image_url: newProductImage.image_url,
        created_at: newProductImage.created_at,
      },
      message: 'Product image URL added successfully!',
    });
  } catch (error) {
    console.error('Error adding product image URL:', error);
    res.status(500).json({ errors: 'An error occurred while adding the product image URL. Please try again.' });
  }
});

module.exports = app;
