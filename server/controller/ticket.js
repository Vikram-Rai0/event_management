import { db } from "../database/db_config.js";

export const tickets = async (req, res) => {
  try {
    const { event_id, user_id, ticket_price, qr_code } = req.body;

    // Validate required fields
    if (!event_id || !user_id || !ticket_price || !qr_code) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // SQL query to insert ticket
    const insertTicketQuery =
      "INSERT INTO tickets (`event_id`, `user_id`, `ticket_price`, `qr_code`) VALUES (?, ?, ?, ?)";

    // Execute the query with parameters
    const result = await db.execute(insertTicketQuery, [
      event_id,
      user_id,
      ticket_price,
      qr_code,
    ]);

    // Send success response
    res.status(200).json({
      message: "Ticket data inserted successfully",
      ticketId: result.insertId, // Use the insertId from the result
    });
  } catch (error) {
    console.error("Error inserting ticket data: ", error);
    res.status(500).json({
      message: "Error inserting data",
      error: error.message,
    });
  }
};
