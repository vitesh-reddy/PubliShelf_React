// services/manager.services.js
import Manager from "../models/Manager.model.js";
import Book from "../models/Book.model.js";
import Publisher from "../models/Publisher.model.js";
import AntiqueBook from "../models/AntiqueBook.model.js";
import Order from "../models/Order.model.js";
import bcrypt from "bcrypt";

// ===== Manager Profile Services =====

export const getManagerById = async (managerId) => {
  try {
    const manager = await Manager.findById(managerId).select("-password").lean();
    return manager;
  } catch (error) {
    console.error("Error fetching manager by ID:", error);
    throw new Error("Error fetching manager");
  }
};

export const createManager = async ({ firstname, lastname, email, password }) => {
  try {
    const existing = await Manager.findOne({ email });
    if (existing) {
      throw new Error("Email already registered");
    }

    const hashed = await bcrypt.hash(password, 10);

    const manager = new Manager({
      firstname,
      lastname,
      email,
      password: hashed,
    });

    await manager.save();
    const { password: _pw, ...managerWithoutPassword } = manager.toObject();
    return managerWithoutPassword;
  } catch (error) {
    console.error("Error creating manager:", error);
    throw error;
  }
};

export const updateManagerProfile = async (managerId, updates) => {
  try {
    const { firstname, lastname, email, currentPassword, newPassword } = updates;

    const manager = await Manager.findById(managerId);
    if (!manager) {
      throw new Error("Manager not found");
    }

    const valid = await bcrypt.compare(currentPassword, manager.password);
    if (!valid) {
      throw new Error("Current password is incorrect");
    }

    if (firstname) manager.firstname = firstname;
    if (lastname) manager.lastname = lastname;
    if (email) manager.email = email;

    if (newPassword) {
      manager.password = await bcrypt.hash(newPassword, 10);
    }

    manager.updatedAt = Date.now();
    await manager.save();

    const { password: _pw, ...managerWithoutPassword } = manager.toObject();
    return managerWithoutPassword;
  } catch (error) {
    console.error("Error updating manager profile:", error);
    throw error;
  }
};

// ===== Analytics (stub) =====

export const getManagerDashboardAnalytics = async () => {
  try {
    // Basic example: just counts for now
    const [books, antiques, publishers, orders] = await Promise.all([
      Book.countDocuments(),
      AntiqueBook.countDocuments(),
      Publisher.countDocuments(),
      Order.countDocuments(),
    ]);

    return {
      bookStats: {
        total: books,
        pending: 0,
      },
      auctionStats: {
        total: antiques,
        pending: 0,
      },
      publisherStats: {
        total: publishers,
        active: publishers,
      },
      recentBooks: [],
      recentAuctions: [],
      revenueData: [],
      genreDistribution: [],
    };
  } catch (error) {
    console.error("Error fetching manager analytics:", error);
    throw new Error("Error fetching manager analytics");
  }
};
