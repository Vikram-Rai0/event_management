import { db } from "../database/db_config.js";

export const checkins=(req,res)=>{

const { ticket_id, event_id } = req.body;

if(!ticket_id||!event_id) return res.status(400).json({message:"input feild is messing"});
}