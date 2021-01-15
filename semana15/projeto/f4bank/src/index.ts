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
    balance:500,
    transactions:[]
},
{
    name:"teste2",
    CPF:6121736478,
    birthDate:"09/06/1985",
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

app.put("/user/addbalance",(req:Request,res:Response)=>{
    const data ={
        name:req.body.name,
        CPF:req.body.CPF,
        value:req.body.value
    }
    if(data.name && data.CPF && data.value){
        const index = users.findIndex(
            user => user.CPF === Number(req.body.CPF)
        )
        users[index].balance = Number(users[index].balance) + Number(req.body.value)
      res.status(200).send("Saldo adicionado com sucesso")
    }

})

app.put("/user/payment",(req:Request,res:Response)=>{
    const data = {
        CPF:req.body.CPF,
        name:req.body.name,
        value:req.body.value,
        description:req.body.description,
        date:req.body.date
    }


    let date = data.date
    if(!data.date){
        date= moment(new Date()).add(1,'days').format('DD/MM/YYYY')
    }
    const daysToPayment = moment(`${date}`,"DD/MM/YYYY").fromNow()
    const index = users.findIndex(
        user => user.CPF === Number(req.body.CPF)
     )

    if((Number(daysToPayment.substring(3,4))>=1 || date === moment(new Date()).format('DD/MM/YYYY')) && users[index].balance >= req.body.value ){
    users[index].balance = Number(users[index].balance) - Number(req.body.value)

        res.status(200).send("Pagamento efetuado com sucesso")
    }else{
        res.status(406).send("Dados preenchidos incorretamente")
    }
})

app.put("/user/transfer",(req:Request,res:Response)=>{

    const originindex:number = users.findIndex(
        user => user.CPF === Number(req.body.originCPF)
    )
    const targetindex:number = users.findIndex(
        user => user.CPF === Number(req.body.targetCPF)
    )

    const originUser ={
        name:req.body.originName,
        CPF:req.body.originCPF,
        value:req.body.value,
        balance:users[originindex].balance
    }
    const targetUser ={
      name:req.body.targetName,
      CPF: req.body.targetCPF
    }

    if(originUser.balance >= originUser.value && originUser.name && originUser.CPF && originUser.value && originUser.balance && targetUser.name && targetUser.CPF){
        users[originindex].balance = Number(users[originindex].balance) - Number(originUser.value)
        users[targetindex].balance = Number(users[targetindex].balance) + Number(originUser.value)
        res.status(200).send("transferencia concluida")
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
  
