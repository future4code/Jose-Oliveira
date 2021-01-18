import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { recipe } from "./types/recipe";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

/*************************************/
 async function getRecipes(req: Request,res: Response): Promise<void>{
   try {

         const result = await connection.raw(`
         SELECT * FROM recipes_aula48 where title LIKE "%${req.query.title}%"
         `)
      
      res.status(200).send(result[0])
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

async function getUserType(req: Request,res: Response): Promise<void>{
   try {

         const result = await connection.raw(`
         SELECT * FROM aula48_exercicio where type LIKE "${req.params.type}"
         `)
      
      res.status(200).send(result[0])
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

async function getUserTypeOrName(req: Request,res: Response): Promise<void>{
   try {

         const result = await connection.raw(`
         SELECT * FROM aula48_exercicio where type LIKE "${req.body.type}" or name like "${req.body.name}"
         `)
      
      res.status(200).send(result[0])
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

async function getuserlimit(req: Request,res: Response): Promise<void>{
   try {
         const page:any = req.params.page
         const result = await connection.raw(`
         SELECT id, name, email, type FROM aula48_exercicio limit 5 offset ${5*(page-1)};
         `)
      
      res.status(200).send(result[0])
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

app.get("/usersearchlimit/:page",getuserlimit)
app.get("/usersearch",getUserTypeOrName)
app.get("/usertype/:type",getUserType)
app.get("/recipes",getRecipes)
/*************************************/

app.get("/recipes/all", async function (
   req: Request,
   res: Response
): Promise<void> {
   try {
      const recipes: recipe[] = await connection.raw(`
         SELECT title, name AS "author", description
         FROM recipes_aula48
         JOIN users_aula48 
         ON user_id = users_aula48.id;
      `)

      if(!recipes.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(recipes)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
});

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});