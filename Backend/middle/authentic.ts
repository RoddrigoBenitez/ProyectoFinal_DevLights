import { Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function authRoutes(req: Request, res: Response, next: Function){
    const token = req.header('token');
    if(!token) return res.status(401).json("Access denied");
    try{
        const verified = verify(token, process.env.JWT_SECRET!) as{
            userId: string
        }
        const {userId} = verified;
        if(!verified)
        return res.status(401).json("You need authorization to this route")
        else{
            req.body.user_id = userId
            next()
        }

    } catch (error) {
       res.status(400).json("invalid token")
    }

}