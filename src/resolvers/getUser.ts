import jwt, {VerifyErrors} from 'jsonwebtoken';
import {JWT_SECRET} from "../util/config";
import getUserById from "../commands/getUserById";

export default async (context: any) => {
    if (!context.token) {
        throw new Error('This query requires Bearer authentication');
    }

    let user = {};
    try {
        // Remove 'Bearer' part from token
        const token = context.token.split(' ')[1];

        // Validate JWT token
        await jwt.verify(token, JWT_SECRET, (async (err: VerifyErrors | null, decoded: any) => {
            if (err) {
                throw err;
            }
            [user] = await getUserById(decoded.userId);
        }));
    } catch (err) {
        throw new Error(`Invalid token in header: ${err}`);
    }
    return user;
}