// services/manager.services.js
import Manager from "../models/Manager.model.js";
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