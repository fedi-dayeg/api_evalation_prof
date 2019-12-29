const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const profRooter = require('./root/profRoot');


const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use(profRooter);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});


mongoose.connect(
    'mongodb+srv://fedi:22551348@cluster0-zcb1a.mongodb.net/api?retryWrites=true&w=majority'
)
    .then(result => {
        console.log('connected');
        app.listen(3000);
    })
    .catch(err => {
        //console.log(err);
        console.log('ERROR');
    });




