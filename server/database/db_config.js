import mysql from "mysql2/promise"; // Use promise-based MySQL

export const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234567890",
  database: "event_database",
});

console.log("Database connection successful");

// Optional: Test the connection
try {
  await db.ping();
  console.log("Database is responsive");
} catch (error) {
  console.error("Database connection failed:", error);
}

