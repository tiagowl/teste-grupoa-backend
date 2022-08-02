import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';

interface tokenPayload {
    id: number;
}

export const authenticate = (req: any , res: Response, next: NextFunction) => {
    const token = req?.headers['authorization']?.split(" ")[1];

    jwt.verify(token as string, "67f10ff0835d698ff77d46054c29ca91", (err, decoded:any)=>{
        if(err) return res.status(401).end();
        
        if(decoded){
            
            req.user = decoded.id;
            next();
        }
    })
}