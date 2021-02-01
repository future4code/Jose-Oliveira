import { Request, Response } from "express";
import {deleteUserById} from "../data/dropUserRow"

export async function deleteUser(req:Request, res:Response) {
    try {
        if (!req.params.id) {throw new Error('informe o seu id')}

        await deleteUserById(
            req.params.id as string
        );

        res.status(200).send("usuario deletado com sucesso")
    } catch (error) {
        res.send(error.message)
    }
}