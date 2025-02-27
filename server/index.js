import express from "express";
import { db } from "./database/db_config.js";
import routes from "./router/router.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());


app.use(express.json());    

app.use("/api", routes);

app.listen(port, (err) => {
  if (err) {
    console.log("Internal server error", err);
  } else {
    console.log("server running on port : ", port);
  }
});
