import { db } from "../database/db_config.js";

export const payments = async(req, res) => {
  try {
    const {
      ticket_id,
      user_id,
      payment_method,
      transaction_id,
      amount,
      payment_status,
    } = req.body;

    if (
      !ticket_id ||
      !user_id ||
      !payment_method ||
      !transaction_id ||
      !amount ||
      !payment_status
    )
      return res.status(400).json({ message: "input feild is missing" });

    const insertPaymentQuery =
      "INSERT INTO payments(`ticket_id`,`user_id`,`payment_method`,`transaction_id`,`amount`,`payment_status`)VALUES(?,?,?,?,?,?);";

    const [result] = await db.execute(insertPaymentQuery, [
      ticket_id,
      user_id,
      payment_method,
      transaction_id,
      amount,
      payment_status,
    ]);
    console.log("Inserted Data", result);
    res.status(200).json({ message: "Data inserted Successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Database error",
      error,
    });
  }
};
