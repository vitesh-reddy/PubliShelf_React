// controllers/authController.js
import { verifyToken } from "../utils/jwt.js";
import { loginUser } from "../services/authService.js";

export const loginGetController = (req, res) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const decoded = verifyToken(token);
      if (decoded.role === "buyer") return res.redirect("/buyer/dashboard");
      else if (decoded.role === "publisher")
        return res.redirect("/publisher/dashboard");
      else if (decoded.role === "admin")
        return res.redirect("/admin/dashboard");
      else return res.redirect("/manager/dashboard");
    } catch (error) {
      res.clearCookie("token");
      return res.render("auth/login");
    }
  } else {
    return res.render("auth/login");
  }
};

export const loginPostController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token, user, code } = await loginUser(email, password);
    if (code === 403)
      return res.status(403).json({ message: "User not found" });
    else if (code === 401)
      return res.status(401).json({ message: "Invalid password" });
    if (!token) return res.status(401).json({ message: "Invalid credentials" });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      ok: true,
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Error logging in", error });
  }
};

export const apiLoginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token, user, code } = await loginUser(email, password);
    if (code === 403)
      return res.status(403).json({ message: "User not found" });
    if (code === 401)
      return res.status(401).json({ message: "Invalid password" });
    if (!token) return res.status(401).json({ message: "Invalid credentials" });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({ ok: true, token, user });
  } catch (error) {
    console.error("API Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};