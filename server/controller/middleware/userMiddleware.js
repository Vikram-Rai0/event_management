export const authUser=(req,res,next)=>{
    const {role} =req.body;
    if(role==organizer){
        next();
    }
    else{
        return res.send({ message: "you are not allowed to access this page." });
    }
}