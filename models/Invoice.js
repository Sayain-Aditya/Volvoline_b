const mongoose = require('mongoose');

const partySchema = new mongoose.Schema({
  name: { type: String, default: '' },
  address: { type: String, default: '' },
  gstin: { type: String, default: '' },
  state: { type: String, default: '' },
  code: { type: String, default: '' },
  contact: { type: String, default: '' },
}, { _id: false });

const metaSchema = new mongoose.Schema({
  invoiceNo: { type: String, default: '' },
  date: { type: String, default: '' },
  deliveryNote: { type: String, default: '' },
  reference: { type: String, default: '' },
  buyerOrderNo: { type: String, default: '' },
  dispatchDocNo: { type: String, default: '' },
  dispatchedThrough: { type: String, default: '' },
  paymentTerms: { type: String, default: '' },
  otherReferences: { type: String, default: '' },
  destination: { type: String, default: '' },
  termsOfDelivery: { type: String, default: '' },
}, { _id: false });

const itemSchema = new mongoose.Schema({
  desc: { type: String, default: '' },
  hsn: { type: String, default: '' },
  qty: { type: Number, default: 1 },
  unit: { type: String, default: 'NOS' },
  rate: { type: Number, default: 0 },
  disc: { type: Number, default: 0 },
}, { _id: false });

const invoiceSchema = new mongoose.Schema({
  seller: { type: partySchema, default: () => ({}) },
  buyer: { type: partySchema, default: () => ({}) },
  consignee: { type: partySchema, default: () => ({}) },
  sameAsBuyer: { type: Boolean, default: true },
  meta: { type: metaSchema, default: () => ({}) },
  items: { type: [itemSchema], default: [] },
  gstRate: { type: Number, default: 18 },
  declaration: { type: String, default: '' },
  totals: { type: mongoose.Schema.Types.Mixed, default: {} },
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);
