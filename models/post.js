const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
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
    },
    postedBy: {
        type: ObjectId,
        ref:"User"
    },
    created: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);
