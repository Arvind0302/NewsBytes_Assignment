const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  urlHash: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  clickLimit: { type: Number, default: null },
  clickCount: { type: Number, default: 0 },
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
