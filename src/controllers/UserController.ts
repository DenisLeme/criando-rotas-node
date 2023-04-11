import { Request, Response } from "express"
import { UserService } from "../services/UserService"



export class UserController {
    createUser =  (request: Request, response: Response) => {
        const userService = new UserService()
        const user = request.body


        // ! Parametro para verificar se é nulo ou indefinido

        if(!user.name){
            return response.status(400).json({message: 'Bad Request : Nome obrigatorio!!'})
        }
        userService.createUser(user.name, user.email)
        return response.status(201).json({message : 'Usuario criado'})
    }

    getAllUsers = (request: Request, response: Response) => {
        const userService = new UserService()

        const users = userService.getAllUsers()
        return response.status(200).json( users )

    }
 
    
}