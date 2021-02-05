import { connection } from "./connection";
import {User} from "../business/entities/user"

export const insertUser = async(
    user:User
)=>{
    
    await connection('labook_users')
    .insert({
       id: user.id,
       name: user.name,
       email: user.email,
       password: user.password
    })
}

export const findUser = async(
    email:string
)=>{
    const queryResult: any = await connection("labook_users")
    .select("*")
    .where({ email })
    return queryResult
} 