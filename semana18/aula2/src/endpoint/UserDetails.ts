import { Request, Response } from "express";
import {getUserDetailsById} from "../data/selectUser"

export async function userDetails(req:Request, res:Response) {
    try {
        if (!req.params.id) {throw new Error('informe o seu id')}

        const userDetails = await getUserDetailsById(
            req.params.id as string
        );

        res.status(200).send(`id:${userDetails[0].id}\nemail:${userDetails[0].email}`)
    } catch (error) {
        res.send(error.message)
    }
}