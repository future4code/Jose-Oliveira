import express,{Request,Response} from "express"
import cors from "cors"
import {countries} from "./countries"

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003,()=>{
    console.log("server is running in http://localhost:3003")
})

app.get("/countries/all",(req: Request, res: Response)=>{
    res.status(200).send(countries)
})

app.get("/countries/search",(req: Request, res: Response)=>{
    if(req.query.name){
    const result = countries.filter(
        country=>country.name.includes(req.query.name as string),
        
    )
    if(result.length){
        res.status(200).send(result)
    }else{
        res.status(404).send("country not found")
    }
    }

    if(req.query.capital){
        const result = countries.filter(
            country=>country.capital.includes(req.query.capital as string),
            
        )
        if(result.length){
        res.status(200).send(result)
    }else{
        res.status(404).send("capital not found")
    }
    }

    if(req.query.continent){
            const result = countries.filter(
                country=>country.continent.includes(req.query.continent as string),
                
        )
        if(result.length){
            res.status(200).send(result)
        }else{
            res.status(404).send("continent not found")
        }
    }
})

app.put("/countries/edit/:id",(req: Request, res: Response)=>{
   const index = countries.findIndex(
       country=>country.id === Number(req.params.id)
   )
   countries[index].name = req.body.name
   countries[index].capital = req.body.capital
   res.status(200).send("alteração feita com sucesso")
})

app.get("/countries/:id",(req: Request, res: Response)=>{
    const result = countries.find(
        country => country.id === Number(req.params.id)
    )
    res.status(200).send(result)
})