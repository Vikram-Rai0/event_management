import { db } from "../database/db_config.js";

export const users = async (req, res) => {
  try {
    const { name, email, password_hash, type, phone } = req.body;

    // Validate input fields
    if (!name || !email || !password_hash || !type || !phone) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields!" });
    }

    // Check if user already exists
    const userCheckQuery = "SELECT * FROM users WHERE email = ? OR phone = ?";
    const [existingUsers] = await db.execute(userCheckQuery, [email, phone]);

    if (existingUsers.length > 0) {
      return res
        .status(400)
        .json({ message: "Email or Phone number is already in use" });
    }

    // Insert new user
    const userInsertQuery = `
      INSERT INTO users (name, email, password_hash, role, phone) 
      VALUES (?, ?, ?, ?, ?)
    `;

    const [result] = await db.execute(userInsertQuery, [
      name,
      email,
      password_hash,
      type,
      phone,
    ]);

    console.log("Inserted Data:", result);
    res.status(201).json({
      message: "User registered successfully",
      userId: result.insertId,
    });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ message: "Database error", error: error.message });
  }
};
