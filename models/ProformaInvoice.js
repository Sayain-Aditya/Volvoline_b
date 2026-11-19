const mongoose = require('mongoose');

const proformaInvoiceSchema = new mongoose.Schema({}, {
  strict: false,
  timestamps: true,
});

module.exports = mongoose.model('ProformaInvoice', proformaInvoiceSchema);
