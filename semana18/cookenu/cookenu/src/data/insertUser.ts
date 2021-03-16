import { connection } from "../index";

export default async function insertUser(id: string, name: string,email: string,password: string,) 
{
    await connection.raw(`
    insert into cookenuser values ("${id}","${name}","${email}","${password}")
    `)
}
