import cors from "cors"
import { signup,login } from "./controller/userController"
import express, { Express} from "express"
import { createPost,findPost } from "./controller/postConstroller"

const app: Express = express()
app.use(express.json())
app.use(cors())


app.post('/users/signup',signup)
app.post('/users/login',login)

app.post('/posts/create',createPost)
app.get('/posts/:id',findPost)


app.listen(3003, () => {
   console.log("Server running on port 3003")
})