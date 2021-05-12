/* build a full CRUD application with a UI
   that is connected with Mongo */

   const express = require('express');
   const app = express();
   const path = require('path');
   const mongoose = require('mongoose');
   

   // use this to override post with put
   const methodOverride = require('method-override');
   
   // require model created in tideGauge.js
   const {TideGauge, Dmax} = require('./models/allModels');
   
   
   // connect to MongoDB - when connection fails try replacing local host 
   // with 127.0.0.1
//    mongoose.connect('mongodb://localhost:27017/allTgs', {useNewUrlParser: true, useUnifiedTopology: true})
//        .then(() => {
//            console.log("mongo connection open")
//        })
//        .catch(err => {
//            console.log('oh no mongo connection error')
//            console.log(err)
//        })


    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(express.urlencoded({extended : true})) // middleware to access post request
    app.use(methodOverride('_method'));
    app.use(express.static("public")); // to locate css and other files
       

    // main page
    app.get('/home', (req, res) => {
        res.render('home')
    })

    // route to view/filter tide gauges
    app.get('/alltgs', async (req, res) => {

        console.log(req.params);
        const { country } = req.query;
        console.log(country);

        // look up country name in tide gauge string
        // const regex = new RegExp(country, 'i'); // i for case insensitive

        if(!country) {
            const tgs = await TideGauge.find({}); // find all tgs 
            res.render('allTGS', { tgs, country });
        }

        else {

            //const tgs = await TideGauge.find({ name: {$regex: regex}});
            const tgs = await TideGauge.find(
                { 
                    country : { $regex: new RegExp(country, "i") } 
                });
            
            // no tide gauges found?
            if (tgs.length === 0){
                console.log("no tide gauges");
                res.send(`Sorry, GSSR 1.0 currently doesn't have tide gauges in ${country.toUpperCase()}`)
            }

            console.log(tgs);

            res.render('allTGS', { tgs, country });
        }
    })

    // serve form to filter tide gauges per country
    app.get('/show', (req, res) => {
        res.render('show');
    })


    // get details on each tide gauge
    app.get('/alltgs/:id', async (req, res) => {
        // const { tgID, cssLink } = req.params;
        console.log(req.params);
        const tg = await TideGauge.find({ _id : req.params.id });
        console.log(tg);
        res.render('tgDetail', { tg })
    })

    // get observed surge
    app.get('/alltgs/:id/obs_surge', async (req, res) => {
        const { id } = req.params;
        const tg = await TideGauge.find({_id : id});
        const tgName = tg[0].name;
        console.log(`tide gauge name is: ${tgName}`);
        
        // connect to the dmax db
        mongoose.connect('mongodb://localhost:27017/dailyMaxSurge',    {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log("connected to dailyMaxSurge")

            mongoose.connection.db.collection(tgName, function (err, collection) {
                // sort the collection with date - date : 1 (ascending)
                collection.find({}).sort({date : 1}).toArray(function(err, data){
                console.log(data); // it will print your collection data
                const timeSeries = data;
                res.render('obsSurge', {timeSeries, tgName});
                mongoose.connection.close();
            });
       });
        })
        .catch(err => {
            console.log('unable to connect to dailyMaxSurge')
            console.log(err)
        })
    })

    const port = process.env.PORT || 4000
    app.listen(4000, () => {
        console.log(`app running on port ${port}`);
    })


    