import express from "express";
import { users } from "../controller/user.js";
import { event } from "../controller/events.js";
import {tickets } from "../controller/ticket.js";

const routes = express.Router();

routes.post("/user", users);
routes.post("/event",event);
routes.post("/ticket",tickets);

export default routes;
