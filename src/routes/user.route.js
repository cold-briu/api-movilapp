module.exports = (app) => {
    const user = require('../controllers/user.controller');

    // Create a new User
    app.post('/user', user.create);

    // Retrieve all Users
    app.get('/user', user.findAll);

    app.post('/user/validate', user.validate);
    // Retrieve a single User with userId
    app.get('/user/:userId', user.findOne);

    // Update a User with userId
    app.put('/user/:userId', user.update);

    // Delete a User with userId
    app.delete('/user/:userId', user.delete);

}