import * as jwt from 'jsonwebtoken';
import database from "./database";

export default async (userId: any) => {
    try {
        // Create token
        const token = jwt.sign(
            {
            userId,
        },
            process.env.JWT_SECRET as string,
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