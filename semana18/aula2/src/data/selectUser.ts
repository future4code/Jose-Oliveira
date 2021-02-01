import { connection } from "../index"

export const getUserDetailsById = async(id:string):Promise<any> =>{
    const result = await connection.raw(`
    select id, email from user where id = "${id}"
    `)
    return result [0]
}