import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateId } from "../service/idGenerator";
import {generateToken} from "../service/tokenGenerator"
import {hash} from "../service/hashManager"

export async function createUser(req:Request, res:Response) {
    try {
        if ( !req.body.password || !req.body.email) {throw new Error('Preencha os campos "senha" e "email"')}
        if (!req.body.email.match(/@/)){throw new Error('email preenchido incorretamente"')}
        if (!req.body.password.match(/^.{6,}$/)){throw new Error('senha muito curta"')}
      
        const id: string = generateId();

        const hashPassword = await hash(req.body.password)

        await insertUser(
            id,
            hashPassword,
            req.body.email
        );

        const token = generateToken(id);

        res.status(200).send(token)
    } catch (error) {
        res.send(error.message)
    }
}