import express from "express";
import { adminLogin, approvedCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from "../controllers/adminController.js";
import { authenticateToken } from "../middleware/auth.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/comments", authenticateToken, getAllComments);
adminRouter.get("/blogs", authenticateToken, getAllBlogsAdmin);
adminRouter.post("/delete-comment", authenticateToken, deleteCommentById);
adminRouter.post("/approve-comment", authenticateToken, approvedCommentById);
adminRouter.get("/dashboard", authenticateToken, getDashboard);

export default adminRouter;