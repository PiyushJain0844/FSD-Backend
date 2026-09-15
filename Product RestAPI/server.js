// Create RESTAPI for 100 products with id, name, price, description. Implement GET, POST, PUT and DELETE requests for products.

import express from 'express';
import products from './product.json' with { type: 'json' };

const app = express();
app.use(express.json());

// GET - Get all products
app.get('/products', (req, res) => {
    res.json(products);
});

// GET - Get product by ID
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    res.json(product);
});

// POST - Add a new product
app.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    };

    products.push(newProduct);

    res.status(201).json({
        message: 'Product added successfully',
        product: newProduct
    });
});

// PUT - Update product
app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;

    res.json({
        message: 'Product updated successfully',
        product: product
    });
});

// DELETE - Delete product
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    const deletedProduct = products.splice(index, 1);

    res.json({
        message: 'Product deleted successfully',
        product: deletedProduct[0]
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});