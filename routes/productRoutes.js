const express = require('express');
const router = express.Router();
const { listProducts, createProduct, updateProduct, deleteProduct, bulkImport } = require('../controllers/productController');

router.route('/').get(listProducts).post(createProduct);
router.post('/bulk-import', bulkImport);
router.route('/:id').put(updateProduct).delete(deleteProduct);

module.exports = router;
