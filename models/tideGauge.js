const mongoose = require('mongoose');

// create schema
const tgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lon: {
        type: Number,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    correlation: {
        type: Number,
        required: true,
    },
    rmse: {
        type: Number,
        required: true,
    }
})

// compile our model
const TideGauge = mongoose.model('TideGauge', tgSchema);

// export model
module.exports = TideGauge;
