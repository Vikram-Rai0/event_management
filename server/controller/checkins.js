import { db } from "../database/db_config.js";

export const checkins = async (req, res) => {
  try {
    const { ticket_id, event_id } = req.body;

    if (!ticket_id || !event_id)
      return res.status(400).json({ message: "input feild is messing" });

    const insertCheckinsQuery =
      "INSERT INTO checkins(`ticket_id`,`event_id`)VALUES(?,?);";

    const result =await db.execute(insertCheckinsQuery, [ticket_id, event_id]);
    console.log("Inserted Data", result);
    res.status(200).json({ message: "Data inserted Successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Database error",
      error,
    });
  }
};
