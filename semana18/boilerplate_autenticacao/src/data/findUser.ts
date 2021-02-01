import { connection } from "../index"

export const getUserByEmail = async(email:string):Promise<any> =>{
    const result = await connection.raw(`
    select * from user where email = "${email}"
    `)
    return result [0]
}