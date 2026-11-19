const express = require('express');
const router = express.Router();
const { listProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.route('/').get(listProducts).post(createProduct);
router.route('/:id').put(updateProduct).delete(deleteProduct);

module.exports = router;
