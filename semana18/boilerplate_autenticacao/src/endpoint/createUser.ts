import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateId } from "../service/idGenerator";
import {generateToken} from "../service/tokenGenerator"

export async function createUser(req:Request, res:Response) {
    try {
        if ( !req.body.password || !req.body.email) {throw new Error('Preencha os campos "senha" e "email"')}
        if (!req.body.email.match(/@/)){throw new Error('email preenchido incorretamente"')}
        if (!req.body.password.match(/^.{6,}$/)){throw new Error('senha muito curta"')}
      
        const id: string = generateId();

        await insertUser(
            id,
            req.body.password,
            req.body.email
        );

        const token = generateToken(id);

        res.status(200).send(token)
    } catch (error) {
        res.send(error.message)
    }
}