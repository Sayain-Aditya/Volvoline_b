const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  hsn: { type: String, default: '' },
  unit: { type: String, default: 'NOS' },
  rate: { type: Number, default: 0 },
  desc: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
