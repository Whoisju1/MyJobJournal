const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    company: {
        type: String,
        trim: true
    },
    companyInfo: {
        type: String,
        trim: true
    },
    companyPhone: {
        type: Number,
    },
    companyEmail:{
        type: String,
        trim: true
    },
    jobID: {
        type: String,
        trim: true
    },
    position: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    dateApplied: {
        type: Date,
        default: Date().now
    },
    requirements: {
        type: [String],
        trim: true
    },
    compensation: {
        type: String
    },
    jobDetails: {
        type: String,
        trim: true
    }
});

module.exports = applicationSchema;