import { db } from "../database/db_config.js";

export const users = (req, res) => {
  const { name, email, password_hash, role, phone } = req.body;
  if (!name || !email || !password_hash || !role || !phone) {
    return res
      .status(400)
      .json({ message: "please enter in all given feilds!" });
  }
  const userCheckQuery = "SELECT * FROM users WHERE email=? OR phone=?";
  db.query(userCheckQuery, [email, phone], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error : ", err });
    if (result.length > 0)
      return res
        .status(500)
        .json({ message: "Email or Phone no is already used" });
    const userInsertQuery =
      "INSERT INTO users(`name`,`email`,`Password_hash`,`role`,`phone`)VALUES(?,?,?,?,?)";
    db.query(
      userInsertQuery,
      [name, email, password_hash, role, phone],
      (err, result) => {
        if (err)
          return res.status(500).json({ error: "Database error : ", err });
        return res
          .status(200)
          .json({ message: "User created successfully", result });
      }
    );
  });
};
