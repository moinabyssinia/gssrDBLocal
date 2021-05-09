const mongoose = require('mongoose');

const { tgsConnection, dMaxConnection} = require('../connection/connections');

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


const dmaxSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    surge: {
        type: Number,
        required: true,
    },
    ymd: {
        type: String,
        required: true,
    },
    lon: {
        type: Number,
        required: true,
    },
    lat: {
        type: Number,
        required: true
    }
},
    {collection : 'dmax'}
)

// compile our model
const TideGauge = tgsConnection.model('TideGauge', tgSchema);
const Dmax = dMaxConnection.model('Dmax', dmaxSchema);

// export model
module.exports = {
    TideGauge,
    Dmax,
};