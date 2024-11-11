import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRole } from '../api/user/types'

export default function isRole(...roles : UserRole[]) {
  return function(req: Request, res: Response, next: Function) {
    // verify verifica el token, si es correcto devuelve el payload
    const auth = verify(req.header('Authorization')!.split(' ')[1], process.env.JWT_SECRET!)
    
    // ignora el tipo 
   //@ts-ignore
    if (roles.includes(auth.role)) {
      next();
    } else {
      res.status(401).send("Unauthorized User");
    }
  }
}


