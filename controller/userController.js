const {User} = require('../Models/User');

function getAllUseres(response) {
    User.find({}).exec(function (err, users) {
        if (!err) response.send({
            success: true,
            users: users
        });
        else response.send({
            success: false,
            message: 'Error in the Add '
        })
    })
}

function getById(request, response) {
    let id = request.params.id;
    User.findById(id).exec(function (err, user) {
        if (!err) response.send({
            message: true,
            user: user,
        });
        else response.send({
            success: false,
            message: 'No user Found'
        })
    })
}

function login(request, response) {
    //console.log(request)
    // let {username, password} = request;
    const username = request.body.username;
    const password = request.body.password;
    //console.log(request)
    console.log(username, password);
    User.findOne({username: username, password: password}).exec(function (err, user) {
        if (!user) {
            console.log(err,"err")
            let reponse = {
                success: false,
                message: 'user not Found',
            };
            response.send(JSON.stringify(reponse));
        }else{
       // console.log(user)
            let reponse = {
                success: true,
                message: 'user Found',
                user: user,
            };
            response.send(JSON.stringify(reponse));
        }
    })
}

/*exports.login = (request, response,next) => {
        const username= request.body.username;
        const password = request.body.password;
        User.findOne({username,password}).then(user=>{
            if(!user){
                const error = new Error('user not found');
                error.statusCode= 404;
                throw error;
            }
            response.status(200).json({message:})
        })




        if(!err){
            let reponse = {
                success: true,

                message: 'user Found',
                user: user,
            };
            response.send(JSON.stringify(reponse));
        }
        else {let reponse = {
                success: false,
                message: 'user not Found',
            };
            response.send(JSON.stringify(reponse));}
}*/

function AddUser(request, response) {
    let newUser = new User(request.body);
    try {
        newUser.save().then(function (user) {
            response.send({
                success: true,
                user: user
            }).catch(function (err) {
                response.send({
                    success: false,
                    error: err,
                })
            })
        })
    } catch (e) {
        response.send({
            success: false
        })
    }
}

function removeUser(request, response) {
    let id = request.params.id;
    User.deleteOne({_id: id}, function (err) {
        if (!err) response.send({success: true, message: 'User removed'});
        else response.send({success: false, message: 'Error of remove the user'})
    })
}


module.exports = {getAllUseres, getById, AddUser, removeUser, login};



