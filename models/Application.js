const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    company: {
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
    companyLocation: {
        type: String,
        trim: true
    },
    companyWebsite: {
        type: String,
        trim: true
    },
    companyInfo: {
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
    },
    requirements: {
        type: String,
        trim: true
    },
    compensation: {
        type: String
    },
    jobDetails: {
        type: String,
        trim: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;