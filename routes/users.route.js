const UsersService = require('../services/users.service')

const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');


function usersApi(app) {

    const router = express.Router();
    const usersService = new UsersService();

    app.use('/api/users', router);


    router.post('/register', async () => {
        try {
            let data = req.body
            await usersService.registerUser(data)
            res.status(201).send("user was registered")
        } catch (err) {
            next(err);
        }
    })

    router.post('/login', async (req, res, next) => {
        try {
            const { email, password } = req.body

        } catch (err) {
            next(err);
        }
    })

    router.put('/changePassword', () => { })

    router.put('/updateUser', () => { })

    router.delete('/changePassword', () => { })


}

module.exports = usersApi