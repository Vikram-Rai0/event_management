import { db } from "../database/db_config.js";

export const event = async(req, res) => {
  try {
    const {
      organizer_id,
      title,
      description,
      category,
      location,
      date_time,
      ticket_price,
      total_tickets,
      available_tickets,
      is_private,
    } = req.body;

    console.log("Request Body:", req.body);

    // Validate required fields
    if (
      !organizer_id ||
      !title ||
      !description ||
      !category ||
      !location ||
      !date_time ||
      ticket_price === undefined ||
      total_tickets === undefined ||
      available_tickets === undefined ||
      is_private === undefined
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // SQL query to insert event
    const insertEventQuery = `
      INSERT INTO events 
      (organizer_id, title, description, category, location, date_time, ticket_price, total_tickets, available_tickets, is_private)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    // Execute the query with parameters
    const result = await db.execute(insertEventQuery, [
      organizer_id,
      title,
      description,
      category,
      location,
      date_time,
      ticket_price,
      total_tickets,
      available_tickets,  
      is_private,
    ]);

    console.log("Database insert result:", result);

    // Send success response
    res.status(201).json({
      message: "Event created successfully",
      eventId: result.insertId, // Use the insertId from the result
    });
  } catch (error) {
    console.error("Database error:", error);
    res
      .status(500)
      .json({ message: "Error creating event", error: error.message });
  }
};
