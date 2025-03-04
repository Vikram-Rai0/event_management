import express from "express";
import { users } from "../controller/user.js";
import { event } from "../controller/events.js";
import {tickets } from "../controller/ticket.js";
import { checkins } from "../controller/checkins.js";
import { payments } from "../controller/payment.js";
import { reviews } from "../controller/review.js";
import { authUser } from"../controller/middleware/userMiddleware.js"
import { uploadFile } from "../controller/events.js";

const routes = express.Router();

routes.post("/user",users,authUser,event);
routes.post("/event",uploadFile,event);
routes.post("/ticket",tickets);
routes.post("/checkins",checkins);
routes.post("/payment",payments);
routes.post("/review",reviews);

export default routes;
