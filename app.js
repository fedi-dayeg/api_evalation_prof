const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const ip = require('ip');
const URL = 'mongodb+srv://fedi:22551348@cluster0-zcb1a.mongodb.net/student?retryWrites=true&w=majority';
const{userRoute}= require('../routes/userRoute');



mongoose.connect(URL, {userNewUrlParser: true})
    .then(() => {
        console.log('connecting to database...');
        const app = express();
        app.use(cors());
        app.use(bodyParser.json());
        app.use('/user', userRoute);


        /** static folder */
        app.use(bodyParser.urlencoded({extended: false}));
        // use routes
        // listen on port 4000
        app.listen({port: 3000}, () => {
            console.log(`server running...  at http://localhost:4000  or http://${ip.address()}:4000`);

        });

    }).catch(e => console.log(e));



