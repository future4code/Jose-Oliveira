import { connection } from "../index"


export default async function insertAddress(
    id: string,
    logradouro: string,
    numero: number,
    complemento: string,
    bairro:string,
    cidade: string,
    estado: string
) {
    await connection.raw(`insert into endereco values(
        ${id},
        ${logradouro},
        ${numero},
        ${complemento},
        ${bairro},
        ${cidade},
        ${estado})
    
    `)
}