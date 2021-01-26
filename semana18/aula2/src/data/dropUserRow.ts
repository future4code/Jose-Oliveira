import { connection } from "../index"

export const deleteUserById = async(id:string):Promise<void> =>{
    await connection.raw(`
    delete from user where id = "${id}"
    `)
}