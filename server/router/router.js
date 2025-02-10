import express from "express";
import { users } from "../controller/user.js";
import { event } from "../controller/events.js";
import {tickets } from "../controller/ticket.js";
import { checkins } from "../controller/checkins.js";
import { payments } from "../controller/payment.js";

const routes = express.Router();

routes.post("/user", users);
routes.post("/event",event);
routes.post("/ticket",tickets);
routes.post("/checkins",checkins);
routes.post("/payment",payments);

export default routes;
