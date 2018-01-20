const mongoose = require('mongoose');

const { Schema } = mongoose;

const applicationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  company: {
    type: String,
    trim: true,
  },
  companyPhone: {
    type: Number,
  },
  companyEmail: {
    type: String,
    trim: true,
  },
  companyLocation: {
    type: String,
    trim: true,
  },
  companyWebsite: {
    type: String,
    trim: true,
  },
  companyInfo: {
    type: String,
    trim: true,
  },
  jobID: {
    type: String,
    trim: true,
  },
  position: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  dateApplied: {
    type: Date,
  },
  requirements: {
    type: String,
    trim: true,
  },
  compensation: {
    type: String,
  },
  jobDetails: {
    type: String,
    trim: true,
  },
  source: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

// applicationSchema.index({'$**':'text'});
applicationSchema.index({
  company: 'text',
  companyEmail: 'text',
  companyInfo: 'text',
  jobDetails: 'text',
  position: 'text',
});

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;
