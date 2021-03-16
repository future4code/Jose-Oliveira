import { Request, Response } from "express";
import { businessCreateTask } from "../business/taskBusiness";
import {getTaskBusiness} from "../business/taskBusiness"

export const createTask = async (
   req: Request,
   res: Response
) => {
   try {

      const { title, description, deadline, authorId } = req.body

      const createTask = await businessCreateTask(title, description, deadline, authorId )

      res.status(201).end()

   } catch (error) {

      res.statusMessage = error.message
      res.status(500).end()
   }
}

export const getTaskById = async (
   req: Request,
   res: Response
) => {
   try {

      const { id } = req.params

      const getTask = await getTaskBusiness(id)

      res.status(200).send(getTask)

   } catch (error) {
      res.status(400).send(error.message)
   }
}