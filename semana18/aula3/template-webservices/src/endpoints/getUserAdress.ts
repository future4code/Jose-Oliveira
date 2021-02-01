import { Request, Response } from "express";
import {getAddressByCep} from "../services/adressManager"
import {address} from "../types/address"

export default async function getAdress(req: Request,res: Response) {
    try {
        const cep = req.body.cep

        if(isNaN(Number(req.body.cep))){
            throw new Error("Numeric values only.");
        }

        const address: address = await getAddressByCep(cep);

        res.status(200).send(address)

    } catch (error) {
        res.status(400).send({message: error.message})}
    } 