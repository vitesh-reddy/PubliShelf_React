// routes/manager.routes.js
import express from "express";
import { protect, authorize } from "../middleware/auth.middleware.js";
import {
  getManagerProfile,
  updateManagerProfileController,
  createManagerSignup,
} from "../controllers/manager.controller.js";

const router = express.Router();

// Public signup
router.post("/manager/signup", createManagerSignup);

// Protected manager routes
router.use(protect);
router.use(authorize("manager"));

// Profile routes
router.get("/manager/profile", getManagerProfile);
router.put("/manager/profile", updateManagerProfileController);

export default router;
