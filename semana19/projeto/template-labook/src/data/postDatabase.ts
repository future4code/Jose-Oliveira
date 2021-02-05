import { connection } from "./connection";
import {AuthenticationData} from "../business/entities/user"

export const insertPost = async(
    tokenData:AuthenticationData,
    id:string,
    photo:string,
    description:string,
    type:string
)=>{
    
    await connection("labook_posts")
    .insert({
       id,
       photo,
       description,
       type,
       author_id:tokenData
})
}

export const selectPost = async(
  id:string
)=>{
    const queryResult: any = await connection("labook_posts")
    .select("*")
    .where({ id })
    return queryResult
}

