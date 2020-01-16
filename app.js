const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const ip = require('ip');
const URL = 'mongodb+srv://fedi:22551348@cluster0-zcb1a.mongodb.net/student?retryWrites=true&w=majority';
const {userRoute} = require('./routes/userRoute');
const {EtudiantRoute} = require('./routes/etudiantRoute');
const {ClasseRoute} = require('./routes/classeRoute');
const {ProffiseuRoute} = require('./routes/proffiseurRoute');
const {EvaluationRoute} = require('./routes/evaluationRoute');
const app = express();


mongoose.connect(URL, {userNewUrlParser: true})
    .then(() => {
        console.log('connecting to database...');
        const app = express();
        app.use(cors());
        //app.use(bodyParser.json());
            app.use(bodyParser.urlencoded());
            app.use((request, response, next) => {
                    response.setHeader('Access-Control-Allow-Origin', '*');
                    response.setHeader(
                        'Access-Control-Allow-Methods',
                        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
                    );
                    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
                    if (request.method === 'OPTIONS') {
                            return response.sendStatus(200);
                    }
                    next();
            });
        app.use('/user', userRoute);
        app.use('/etudiant',EtudiantRoute);
        app.use('/classe',ClasseRoute);
        app.use('/prof',ProffiseuRoute);
        app.use('/evaluation',EvaluationRoute);


        /** static folder */
        app.use(bodyParser.urlencoded({extended: false}));
        // use routes
        // listen on port 4000
        app.listen({port: 3000}, () => {
            console.log(`server running...  at http://localhost:4000  or http://${ip.address()}:4000`);

        });

    }).catch(e => console.log(e));



