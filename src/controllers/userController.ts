import { Request, Response } from "express";
import { createUserInDatabase } from "../service/userService";

export const getUser = (req: Request, res: Response) =>{
    return res.status(200).json({ username: 'John Doe', email: 'john@example.com'});

};

export const createUser = async (req: Request, res: Response) =>{
    try {
        const  {name, email} = req.body;

        const newUser = await createUserInDatabase(name, email);


        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).json({ message: "Failed to create user in database. Please try again later."});
    }
};