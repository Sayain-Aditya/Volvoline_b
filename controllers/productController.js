const Product = require('../models/Product');

exports.listProducts = async (req, res, next) => {
  try {
    const { q } = req.query;
    const filter = q ? { name: { $regex: q, $options: 'i' } } : {};
    const products = await Product.find(filter).sort({ name: 1 });
    res.json(products);
  } catch (e) { next(e); }
};

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (e) { next(e); }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (e) { next(e); }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Deleted' });
  } catch (e) { next(e); }
};

exports.bulkImport = async (req, res, next) => {
  try {
    const rows = req.body;
    if (!Array.isArray(rows) || rows.length === 0)
      return res.status(400).json({ message: 'No rows provided' });
    const docs = rows
      .filter((r) => r.name && String(r.name).trim())
      .map((r) => ({ name: String(r.name).trim(), hsn: String(r.hsn || '').trim(), unit: 'NOS', rate: 0, desc: '' }));
    const result = await Product.insertMany(docs, { ordered: false });
    res.status(201).json({ inserted: result.length });
  } catch (e) { next(e); }
};
