const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/mini");
const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    password: String,
    email: String,
    profilepic: {
        type: String,
        default: "default.jpg"
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"post"
    }],
    
    
})

module.exports = mongoose.model('user', userSchema);

