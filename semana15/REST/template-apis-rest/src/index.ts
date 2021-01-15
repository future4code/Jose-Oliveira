//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "admin",
        age: 60
    }
]

app.get("/users/all",(req:Request, res:Response)=>{
    res.status(200).send(users)
})

app.get("/users/search",(req:Request,res:Response)=>{
    if(req.query.type){
     const result:user[] = users.filter(
         user => user.type.includes(req.query.type as string)
     )
     if(result.length){
        res.status(200).send(result)
    }else{
        res.status(400).send("erro")
    }
    }

    if(req.query.name){
        const result:user[] = users.filter(
            user => user.name.includes(req.query.name as string)
        )
        if(result.length){
        res.status(200).send(result)
    }else{
        res.status(400).send("erro")
    }
       }

})

app.put("/users/newuser",(req:Request,res:Response)=>{
   users.push(req.body)
   res.status(200).send("ok")
})

app.put("/users/edit",(req:Request,res:Response)=>{
    users[users.length -1].name = (req.body.name +"-alterado") as string
    res.status(200).send("ok")
})

app.patch("/users/edit",(req:Request,res:Response)=>{
    users[users.length -1].name = (req.body.name +"-realterado") as string
    res.status(200).send("ok")
})

app.delete("/users/edit/delete/:id",(req:Request,res:Response)=>{
    const index = users.findIndex(
        user => user.id === Number(req.params.id)
    )
    users.splice(index)
    res.status(200).send("ok")
})      


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
