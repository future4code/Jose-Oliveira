import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {createUser} from "./endpoint/createUser"
import {login} from "./endpoint/login"
import {deleteUser} from "./endpoint/deleteUser"
import {userDetails} from "./endpoint/UserDetails"


dotenv.config();

const app = express();
app.use(express.json());

app.post('/signup',createUser)
app.post('/login',login)
app.delete('/user/:id',deleteUser)
app.get('/user/:id',userDetails)

export const connection = knex({
  client: 'mysql',
  connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306
  }
})

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});