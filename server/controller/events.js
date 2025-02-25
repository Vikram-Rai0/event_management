import { db } from "../database/db_config.js";
import multer, { diskStorage } from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); //folder destination for uploading files
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 28);
    cb(
      null,
      file.fieldname + "-" + uniqueName + path.extname(file.originalname)
    ); //unique file name with orginal file name
    console.log(uniqueName);
  },
});
const fileFilter = (req, file, cb) => {
  const allowFileTypes = ["image/jpeg", "image/png"];
  if (allowFileTypes.includes(file.mimetype)) {
    cb(null, true); //accept the file
  } else {
    cb(
      new Error(
        "Invalied file type . Only file such as jpeg and png is allowed.."
      ),
      false
    ); //regrect the file
  }
};
// Initialize Multer with the storage configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5mb file size
});
// Middleware to handle file upload
export const uploadFile = upload.single("event_image"); // 'event_image' is the field name for the file

export const event = async (req, res) => {
  try {
    const event_image = req.file ? req.file.filename : null;
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
   

    console.log("Request Body:",req.file, req.body);

    // Validate required fields
    if (
      !organizer_id ||
      !title ||
      !event_image ||
      !description ||
      !category ||
      !location ||
      !date_time ||
      ticket_price === undefined ||
      total_tickets === undefined ||
      available_tickets === undefined ||
      is_private === undefined
    ) {
      return res.status(400).json({ message: "Missing required fields" });}

    // SQL query to insert event
    const insertEventQuery = `
      INSERT INTO events 
      (organizer_id, title,event_image,description, category, location, date_time, ticket_price, total_tickets, available_tickets, is_private)
      VALUES (?,?,?,?,?,?,?,?,?,?,?)`;

    // Execute the query with parameters
    const result = await db.execute(insertEventQuery, [
      organizer_id,
      title,
      event_image,
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
