import * as jwt from 'jsonwebtoken';
import database from "./database";
import {JWT_SECRET} from "./config";

export default async (userId: any) => {
    try {
        // Create token
        const token = jwt.sign(
            {
            userId,
        },
            JWT_SECRET,
            {
                issuer: 'login-graphql',
                expiresIn: '1y'
            });

        // Insert token signature to database
        await database('sessions').insert({
            user_id: userId,
            signature: token.split('.')[2]
        });

        // Return token
        return token;
    } catch (err) {
        throw new Error(`Error while generating token: ${err}`);
    }
}