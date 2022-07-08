import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import {User} from "../database/entity/User";
import bcrypt from "bcrypt";
import * as yup from "yup";

export default class LoginController{



public static async index(req: Request, res: Response){

    let schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        age: yup.number().required(),
        email: yup.string().required(),
        password: yup.string().required()
    });

    schema.validate(req.body).catch((err)=>{
        res.status(400).json({message: err})
    })

    const passwordHash = bcrypt.hash(req.body.password, 5 , (err)=>{
        console.log(err);
    })

    try{
        const userRepository = AppDataSource.getRepository(User);
        await userRepository.save({...req.body, password: passwordHash});
        res.status(201).json({message: "Usuário criado"});
    }catch(err){
        res.status(500).json({message: err})
    }
}

}