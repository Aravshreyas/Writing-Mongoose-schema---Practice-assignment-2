const mongoose = require('mongoose')




const CommentSchema = new mongoose.Schema({
    username: {
        type: String,
      },
      message: {
        type: String,
        required: true,
      },
      commentedAt: {
        type: Date,
        default: Date.now,
      },
})
const blogSchema =  new mongoose.Schema({
        title : {
            type : String,
            unique : true,
            minLength: 5
        },
        content : {
            type : String,
            required : true,
            minLength : 50
        },
        author : {
            type : String,
        },
        tags : {
            type : [String],
            default : []
        },
        category : {
            type : String,
            default : 'General',
        },
        likes : {
            type : [String]
        },
        createdAt : {
            type: Date,
            default: Date.now(),
        },
        updatedAt: {
            type: Date,
        },
        comments: [CommentSchema],
})

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;