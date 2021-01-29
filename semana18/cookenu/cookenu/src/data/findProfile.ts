import { connection } from "../index";

export async function findProfile(id:string)
{
    await connection.raw(`
    select id, name, email from cookenu where id = ${id}
    `)
}