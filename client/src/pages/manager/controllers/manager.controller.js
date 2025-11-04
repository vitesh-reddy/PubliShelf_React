// controllers/manager.controller.js
import {
  getManagerById,
  createManager,
  updateManagerProfile,
  getManagerDashboardAnalytics,
} from "../services/manager.services.js";

// ===== Profile Controllers =====

export const getManagerProfile = async (req, res) => {
  try {
    const manager = await getManagerById(req.user.id);
    if (!manager) {
      return res.status(404).json({
        success: false,
        message: "Manager not found",
        data: null,
      });
    }

    const analytics = await getManagerDashboardAnalytics();

    return res.status(200).json({
      success: true,
      message: "Manager profile fetched successfully",
      data: { user: manager, analytics },
    });
  } catch (error) {
    console.error("Error in getManagerProfile:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const getManagerDashboard = async (req, res) => {
  try {
    const manager = await getManagerById(req.user.id);
    if (!manager) {
      return res.status(404).json({
        success: false,
        message: "Manager not found",
        data: null,
      });
    }

    const analytics = await getManagerDashboardAnalytics();

    return res.status(200).json({
      success: true,
      message: "Dashboard data fetched successfully",
      data: { manager, analytics },
    });
  } catch (error) {
    console.error("Error in getManagerDashboard:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const updateManagerProfileController = async (req, res) => {
  try {
    const { firstname, lastname, email, currentPassword, newPassword, confirmPassword } = req.body;

    if (!currentPassword) {
      return res.status(400).json({
        success: false,
        message: "Current password is required",
        data: null,
      });
    }

    if (newPassword && newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "New passwords do not match",
        data: null,
      });
    }

    const updated = await updateManagerProfile(req.user.id, {
      firstname,
      lastname,
      email,
      currentPassword,
      newPassword,
    });

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: updated,
    });
  } catch (error) {
    console.error("Error in updateManagerProfileController:", error);
    const statusCode = error.message === "Current password is incorrect" ? 401 : 500;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Internal server error",
      data: null,
    });
  }
};

export const createManagerSignup = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
        data: null,
      });
    }

    const manager = await createManager({ firstname, lastname, email, password });

    return res.status(201).json({
      success: true,
      message: "Manager account created successfully",
      data: manager,
    });
  } catch (error) {
    console.error("Error in createManagerSignup:", error);
    const statusCode = error.message === "Email already registered" ? 409 : 500;
    return res.status(statusCode).json({
      success: false,
      message: error.message || "Internal server error",
      data: null,
    });
  }
};
