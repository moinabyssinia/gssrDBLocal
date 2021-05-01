/* build a full CRUD application with a UI
   that is connected with Mongo */

   const express = require('express');
   const app = express();
   const path = require('path');
   const mongoose = require('mongoose');
   
   // use this to override post with put
   const methodOverride = require('method-override');
   
   // require model created in tideGauge.js
   const TideGauge = require('./models/tideGauge');
   
   
   // connect to MongoDB - when connection fails try replacing local host 
   // with 127.0.0.1
   mongoose.connect('mongodb://localhost:27017/twcrVald', {useNewUrlParser: true, useUnifiedTopology: true})
       .then(() => {
           console.log("mongo connection open")
       })
       .catch(err => {
           console.log('oh no mongo connection error')
           console.log(err)
       })


    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(express.urlencoded({extended : true})) // middleware to access post request
    app.use(methodOverride('_method'));
       

    // main page
    app.get('/index', (req, res) => {
        res.render('index')
    })

    // route to view/filter tide gauges
    app.get('/twcr', async (req, res) => {

        const { country } = req.query;
        console.log(country);

        // look up country name in tide gauge string
        const regex = new RegExp(country, 'i'); // i for case insensitive

        const tgs = await TideGauge.find({ name: {$regex: regex}});
        
        console.log(tgs);

        res.render('allTGS', { tgs, country });
    })

    // serve form to filter tide gauges per country
    app.get('/show', (req, res) => {
        res.render('show');

        // what if I await the form results here?
    })

    app.listen(4000, () => {
        console.log("app is listening on port 4000");
    })


    