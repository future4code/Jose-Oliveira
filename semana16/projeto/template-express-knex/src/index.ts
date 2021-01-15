import express, { Express,Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import dayjs from 'dayjs'

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

app.put("/user",addUser)
app.get("/user/:id",findUser)
app.post("/user/edit/:id",editUser)
app.put("/task",addTask)

async function addUser(req:Request, res:Response):Promise<void>{
   try {
      if(!req.body.name){throw new Error("Favor indicar nome")}
      if(!req.body.nickname){throw new Error("Favor indicar apelido")}
      if(!req.body.email){throw new Error("Favor indicar email")}
     await connection.raw(`
     insert into User values(
      ${Date.now()},
      "${req.body.name}",
      "${req.body.nickname}",
      "${req.body.email}"
      )
     `)
     res.status(200).send("Usuario criado com sucesso")
   } catch (error) {
      
     res.status(400).send(error.message)
   }
 }

 async function findUser(req:Request, res:Response):Promise<void>{
   try {
      
    const result = await connection.raw(`
      select id, nickname from User where id = ${req.params.id}
     `)
     if(!result[0].length){throw new Error("Usuario inexistente")}
     res.status(200).send(result[0])

   } catch (error) {
     res.status(400).send(error.message)
   }
 }

 async function editUser(req:Request, res:Response):Promise<void>{
   try {
      if(!req.body.name){throw new Error("Favor indicar o novo nome")}
      if(!req.body.nickname){throw new Error("Favor indicar o novo apelido")}           
      await connection.raw(`
    update User
    set name = "${req.body.name}",
    nickname = "${req.body.nickname}"
    where id = "${req.params.id}"
     `)
     res.status(200).send("usuario alterado com sucesso")

   } catch (error) {
     res.status(400).send(error.message)
   }
 }

 async function addTask(req:Request, res:Response):Promise<void>{
   try {
      if(!req.body.title){throw new Error("Favor indicar o novo nome")}
      if(!req.body.description){throw new Error("Favor descrever a tarefa")}
      if(!req.body.limitDate){throw new Error("Favor indicar data limite")}
      if(!req.body.creatorUserId){throw new Error("Favor indicar o id do usuario")}               
      await connection.raw(`
      insert into to_do_list values(
         "${Date.now()}",
         "${req.body.title}",
         "${req.body.description}",
         "${dayjs(req.body.limitDate,`DD/MM/YYYY`).format(`YYYY/DD/MM`)}",
         "${req.body.creatorUserId}"
     )`)
     res.status(200).send("tarefa adicionada com sucesso")

   } catch (error) {
     res.status(400).send(error.message)
   }
 }

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
