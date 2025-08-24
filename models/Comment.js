import mongoose from "mongoose";

const blogComment = new mongoose.Schema({
    blog: {type: mongoose.Schema.Types.ObjectId, ref:'Blog', required: true},
    name: {type: String, required: true},
    content: {type: String, required: true},
    isApproved: {type: Boolean, default: false},
}, {timestamps: true});

const Comment = mongoose.model('Comment', blogComment);

export default Comment;