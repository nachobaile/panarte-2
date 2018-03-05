const mongoose = require('mongoose');
const { dbUrl } = require('../config');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
var salt = bcrypt.genSaltSync(bcryptSalt);
mongoose.connect(dbUrl).then(() => console.log('db running'));
const users = [
    new User({ 
    username: 'Pepe',
    email:"nachobaile@gmail.com",
    password:bcrypt.hashSync('1234', salt) })
];
User.collection.drop();
User.create(users, (err, user) => {
    if (err) {
        throw err;
    }
    user.forEach((u) => {
        console.log(`user added ${u.username}`)
    });
    mongoose.connection.close();
});