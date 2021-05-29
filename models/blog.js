const mongoose = require('mongoose');
const {Schema} = mongoose;
const User = require('./user');

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    body:{
        type:String, 
        required:true
    },
    tagList:[String],
    author:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = mongoose.model('Blog',blogSchema);
