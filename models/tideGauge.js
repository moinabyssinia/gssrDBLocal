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
    country: {
        type: String,
        required: true,
    },
})

// compile our model
const TideGauge = mongoose.model('TideGauge', tgSchema);

// export model
module.exports = TideGauge;
