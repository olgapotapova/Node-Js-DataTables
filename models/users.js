const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    description: {
        type: Array, required: true
    }
});

mongoose.model('User', userSchema);