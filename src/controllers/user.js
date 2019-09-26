const User = require('../models/user');


exports.create = (req, res) => {
    // Validate user
    if(!req.body.password) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    // Create a user
    const user = new User({
        email: req.body.email || "Untitled email", 
        password: req.body.password
    });

    // Save user in the database
    let email = user.email;
    User.findOne({email} , (err , otherUser) =>{
        if(err){
            console.log("Error");
            return;
        }
        if(!otherUser){
            // Create and Save a new user
            user.save()
                    .then(data => {
                        res.send(data);
                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Some error occurred while creating the User."
                        });
                    });
        }else{
            res.status(400).send('User already exits');
        }
    });
    
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

// Find a single user with a userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
    
  
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.password) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(req.params.userId, {
        email: req.body.email || "Untitled user",
        password: req.body.password
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        });
    });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete User with id " + req.params.userId
        });
    });
};

const userExists = (email) =>{
    User.find({email} , (err , user) =>{
        if(err){
            res.status(500).json({
                error: 'Server error',
            });
        }
        return user;
        
    });
    
};

exports.validate = (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    
    User.find({ email,password }, (err, user) => {
        if(err) { 
            res.status(500).json({
                error: 'Server error',
            });
        }
   
        if(!user) { 
            res.status(400).json({
                message: 'User not found'
            });
        }else{
            res.status(200).json(user)
                console.log("Usuario encontrado" );
        } 
    });
};