import { Request, Response } from "express";
import {getUserByEmail} from "../data/findUser"
import {generateToken} from "../service/tokenGenerator"
import {compare} from "../service/hashManager"

export async function login(req: Request, res: Response){
    try {
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
      if (!req.body.email.match(/@/)){throw new Error('email preenchido incorretamente"')}
  
      const user = await getUserByEmail(userData.email);

      const compareResult = await compare(
        userData.password,
        user[0].password
      )


      if (!compareResult) {
        throw new Error("Invalid password");
      }
  
      const token = generateToken(user[0].id);
  
      res.status(200).send(token);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };