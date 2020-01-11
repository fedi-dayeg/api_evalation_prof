const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserAuth = mongoose.model('User', new Schema({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },

    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'created_at'
        }
    }));

module.exports.UserAuth = UserAuth;
