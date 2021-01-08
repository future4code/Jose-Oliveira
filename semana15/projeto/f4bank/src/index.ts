import express, {Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import moment from "moment"

const app = express();
app.use(express.json());
app.use(cors());

type user = {
    name:string,
    CPF:number,
    birthDate:string,
    balance:number,
    transactions:transaction[]
}

type transaction = {
    value:number,
    date:string,
    description:string
}

const users:user[]=[
    {
    name:"teste",
    CPF:6121736585,
    birthDate:"09/06/1993",
    balance:0,
    transactions:[]
}
]

app.get("/users/all",(req:Request,res:Response)=>{
     res.status(200).send(users)
})

app.post("/createuser",(req:Request,res:Response)=>{
    const newUser:user = {
        name:req.body.name,
        CPF:Number(req.body.CPF),
        birthDate:req.body.birthDate,
        transactions:[],
        balance:0
    }

    const birthDay:string = req.body.birthDate;
    const age:number = Math.floor(moment(new Date()).diff(moment(birthDay),'years',true));


    if(newUser.name && newUser.CPF && newUser.birthDate.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/) && age>=18){
        users.push(newUser)
        res.status(200).send("usuario cadastrado com sucesso")
    }else{
        res.status(417).send("dados incompletos")
    }
   
})

app.get("/user/balance",(req:Request,res:Response)=>{
    const data ={
        name:req.body.name,
        CPF:req.body.CPF
    }

    if(data.name && data.CPF){
       const result:user|any = users.find(
            user=> user.CPF === req.body.CPF
        )
        res.status(200).send("Seu saldo atual é: "+result.balance)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
