import mysql2 from "mysql2";

export const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "1234567890",
  database: "event_database",
});

db.connect((err) => {
  if (err) {
    console.log("database connection failed...", err);
  } else {
    console.log("Database connection successfull");
  }
});
