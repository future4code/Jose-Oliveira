import {generateId} from "./services/idGenerator"
import {getTokenData} from "./services/authenticator"
import {connection} from "../data/connection"
import {AuthenticationData} from "./entities/user"
import { insertPost, selectPost } from "../data/postDatabase"
import {Post,POST_TYPES} from "./entities/post"

export const createPostBusiness = async(
    photo:string,
    description:string,
    type:POST_TYPES,
    token:string
    )=>{

      const tokenData: AuthenticationData = getTokenData(token)

      const id: string = generateId()

      await insertPost(
      tokenData,
      id,
      photo,
      description,
      type
      )
      
}

export const findPostBusiness = async(
    id:string
) =>{
    const queryResult = await selectPost(id)

      if (!queryResult[0]) {
         throw new Error("Post not found")
      }

      const post: Post = {
         id: queryResult[0].id,
         photo: queryResult[0].photo,
         description: queryResult[0].description,
         type: queryResult[0].type,
         createdAt: queryResult[0].created_at,
         authorId: queryResult[0].author_id,
      }
      return post
}