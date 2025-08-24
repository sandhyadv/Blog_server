import express from "express";
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, togglePublish } from "../controllers/blogController.js";
import { authenticateToken } from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single('image'), authenticateToken, addBlog)
blogRouter.get('/all', getAllBlogs);
blogRouter.get('/:blogId', getBlogById);
blogRouter.post('/delete', authenticateToken, deleteBlogById);
blogRouter.post('/toggle-publish', authenticateToken, togglePublish);
blogRouter.post('/add-comment', addComment);
blogRouter.post('/comments', getBlogComments);

blogRouter.post('/generate', authenticateToken, generateContent);

export default blogRouter;