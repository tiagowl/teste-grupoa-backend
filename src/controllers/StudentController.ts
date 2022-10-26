import { Request, Response } from "express";
import * as yup from "yup";
import AppDataSource from "../database/data-source";
import { Student } from "../database/entity/Student";

export default class StudentController{

    public static async index(req: Request, res: Response){
        try{
            const studentRepository = AppDataSource.getRepository(Student);
            const student = await studentRepository.find();
            if(student){
                return res.status(200).json(student);
            }
        }catch(err){
            return res.status(500).json({message: err})
        }

    }

    public static async getById(req: Request, res: Response){
        try{
            const studentRepository = AppDataSource.getRepository(Student);
            const student = await studentRepository.find({where:{id: Number(req.params.id)}});
            if(student){
                return res.status(200).json(student);
            }
        }catch(err){
            return res.status(500).json({message: err})
        }
    }

    public static async store(req: Request, res: Response){
        let schema = yup.object().shape({
            ra: yup.string().required("Registro acadêmico é obrigatório.").length(6, "Registro acadêmico deve possuir 6 caracteres."),
            name: yup.string().max(255).required("Nome do estudante é obrigatório."),
            email: yup.string().max(255).email("Insira um email válido").required("Email do estudante é obrigatório."),
            cpf: yup.string().required("CPF do estudante é obrigatório").length(11, "CPF deve possuir 11 caracteres.")
        });
        
        const validated = await schema.validate(req.body).catch((err)=>{
            return res.status(400).json({message: err.errors});
        })
    
            try{
                const studentRepository = AppDataSource.getRepository(Student);
                if(validated.statusCode !== 400){
                    const created = await studentRepository.save(req.body);
                    if(created){
                        return res.status(201).json({message: "Estudante cadastrado"});
                    }
                }
            }catch(err){
                return res.status(500).json({message: err})
            }
    }

    public static async update(req: Request, res: Response){
        let schema = yup.object().shape({
            name: yup.string().max(255).typeError("Campo nome do aluno deve ser uma string").min(1, "Nome do aluno não pode ser vazio."),
            email: yup.string().email("Insira um email válido").max(255).typeError("Campo email do aluno deve ser uma string"),
        });
        
        const validated = await schema.validate(req.body).catch((err)=>{
            return res.status(400).json({message: err.errors});
        });
        try{
            const studentRepository = AppDataSource.getRepository(Student);
            if(validated.statusCode !== 400){
                const created = await studentRepository.update(Number(req.params.id), {name: req.body.name, email: req.body.email});
                if(created){
                    return res.status(201).json({message: "Estudante editado."});
                }
            }
        }catch(err){
            return res.status(500).json({message: err})
        }

    }

    public static async delete(req: Request, res: Response){
        try{
            const studentRepository = AppDataSource.getRepository(Student);
            const deleted = await studentRepository.delete(req.params.id)
            if(deleted){
                return res.status(200).json({message: "Estudante excluído."});
            }
            
        }catch(err){
            return res.status(500).json({message: err})
        }       
    }

}