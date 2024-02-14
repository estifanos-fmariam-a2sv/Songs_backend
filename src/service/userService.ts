import userModel from '../model/userModel';
import { UserDTO } from '../dtos/userDTO';

export const createUserInDatabase = async (name: string, email: string): Promise<UserDTO> => {
    try {
        // Create a new user
        const newUser = new userModel({name, email});

        // Save the user to the database
        await newUser.save();

        return {name: newUser.name || "", email: newUser.email || ""};
    } catch (error) {
        throw new Error('Failed to create user in database');
    }

};