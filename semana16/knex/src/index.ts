import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/
// exercicio 1.a

// A resposta com .raw é um array com o dado sendo as informações requisitadas e o resto detalhes sobre o pedido

// exercicio 1.b

app.get('/searchactor',searchActor)

// exercicio 1.c  

app.get(`/sexcount`,sexCount)

// exercicio 2.a 

app.put(`/editsalary`,editSalary)

// exercicio 2.b 

app.delete(`/deleteactor`,deleteActor)

// exercicio 2.c 

app.get(`/avaragesalary`,avarageSalary)

// exercicio 3.a

app.get(`/user/:id`,getActorById)

// exercicio 3.b 

app.get(`/gendercount`,genderCount)

/***************************************************************/
async function genderCount(req:Request, res:Response):Promise<void>{
  try {
    const result = await connection("Actor")
    .count("sex")
    .where("sex", "like", `${req.query.sex}`)
       res.status(200).send(result[0])
  } catch (error) {
    res.status(400).send(error.message)
  }
}

async function getActorById(req:Request, res:Response):Promise<void>{
  try {
    const result = await connection("Actor")
    .where("id", "like", `${req.params.id}`)

       res.status(200).send(result[0])
  } catch (error) {
    res.status(400).send(error.message)
  }
}

async function avarageSalary(req:Request, res:Response):Promise<void>{
  try {
    const result = await connection("Actor")
    .avg("salary")
    .where("sex", "like", `${req.body.sex}`)

       res.status(200).send(result[0])
  } catch (error) {
    res.status(400).send(error.message)
  }
}

async function deleteActor(req:Request, res:Response):Promise<void>{
  try {
     await connection("Actor")
    .del("*")
    .where("id", "like", `${req.body.id}`)

       res.status(200).send("tabela alterada com sucesso")
  } catch (error) {
    res.status(400).send(error.message)
  }
}

async function editSalary(req:Request, res:Response):Promise<void>{
  try {
     await connection("Actor")
    .update({salary:req.body.salary})
    .where("id", "like", `${req.body.id}`)

       res.status(200).send("tabela alterada com sucesso")
  } catch (error) {
    res.status(400).send(error.message)
  }
}

async function sexCount(req:Request, res:Response):Promise<void>{
  try {
    const result = await connection.raw(`
    select count(*) from Actor where sex = "${req.body.sex}"
    `)
       res.status(200).send(result[0])
  } catch (error) {
    res.status(400).send(error.message)
  }
}

async function searchActor(req:Request, res:Response):Promise<void>{
      try {
        const result = await connection.raw(`
        select * from Actor where name = "${req.body.name}"
        `)
           res.status(200).send(result[0])
      } catch (error) {
        res.status(400).send(error.message)
      }
}

app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}