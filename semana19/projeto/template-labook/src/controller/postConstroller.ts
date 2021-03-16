import{ Request, Response } from "express"
import {createPostBusiness, findPostBusiness} from "../business/postBusiness"

 export const createPost = async(req:Request, res:Response)=>{
    try {

        const { photo, description, type } = req.body
  
        const token: string = req.headers.authorization as string
  
        await createPostBusiness(photo, description, type, token)
  
        res.status(201).send("post criado com sucesso")
  
     } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
  
        res.send({ message })
     }
}

export const findPost = async(req:Request, res:Response)=>{
    try {

        const { id } = req.params
  
       const post = await findPostBusiness(id)
  
        res.status(200).send(post)
  
     } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
  
        res.send({ message })
     }
}