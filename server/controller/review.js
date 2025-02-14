import { db } from "../database/db_config.js";

export const reviews = async (req, res) => {
  try {
    const { event_id, user_id, rating, comment } = req.body; 
    if (!event_id || !user_id)
      return res
        .status(401)
        .json({ message: "Event ID and User ID are required fields." });
    if (rating < 1 || rating > 5)
      return res
        .status(400)
        .json({ message: "Rating must be vetween 1 and 5" });
    if (comment && comment.length > 500)
      return res
        .status(400)
        .json({ message: "Commnet must be less than 500 characters." });
    // Replace undefined values with null
    const sanitizedComment = comment || null; // If comment is undefined, use null
    const sanitizedRating = rating || null;
    const insertReviewQuery = `INSERT INTO reviews(event_id,user_id,rating,comment)VALUES(?,?,?,?)`;

    const [result] = await db.execute(insertReviewQuery, [
      event_id,
      user_id,
      sanitizedRating,
      sanitizedComment,
    ]);
    console.log("Data inserted successfully", result);
    res
      .status(201)
      .json({ message: "Data inserted successfully", data: result });
  } catch (error) {
    console.log("Database error", error);
    res
      .status(500)
      .json({
        message: "An error occurred while processing your request.",
        error: error.message,
      });
  }
};
