import { Request, Response } from "express";
import { signBusiness } from "../business/userBusiness";
import { generateId } from "../business/services/idGenerator";
import { loginBusiness } from "../business/userBusiness"

export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const { name, nickname, email, password, role } = req.body

      
      const id: string = generateId()

      const token = await signBusiness(
         id,
         name, 
         nickname, 
         email, 
         password, 
         role
      )

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error) {
      res.status(400).send(error.message)
   }
}

export const login = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { email, password } = req.body

      const token = await loginBusiness

      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}