const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength:500
    },
    body: {
        type: String,
        required: true,
        maxlength:500
    }
});

module.exports = mongoose.model('Post', postSchema);
