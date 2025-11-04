// routes/manager.routes.js
import express from "express";
import { protect, authorize } from "../middleware/auth.middleware.js";
import {
  getManagerDashboard,
  getManagerProfile,
  updateManagerProfileController,
  createManagerSignup,
} from "../controllers/manager.controller.js";

const router = express.Router();

// Public route for manager signup
router.post("/signup", createManagerSignup);

// Protected routes - require authentication and manager role
router.use(protect);
router.use(authorize("manager"));

// Profile & dashboard routes
router.get("/dashboard", getManagerDashboard);
router.get("/profile", getManagerProfile);
router.put("/profile", updateManagerProfileController);

export default router;

