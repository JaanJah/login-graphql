import jwt, {VerifyErrors} from "jsonwebtoken";
import {JWT_SECRET} from "../util/config";
import getUserById from "./getUserById";
import getSessionBySignature from "./getSessionBySignature";

export default async (context: any) => {
    if (!context.token) {
        throw new Error('This query requires Bearer authentication');
    }

    let user: any = {};
    try {
        // Remove 'Bearer' part from token
        const token = context.token.split(' ')[1];

        // Validate JWT token
        await jwt.verify(token, JWT_SECRET, (async (err: VerifyErrors | null, decoded: any) => {
            if (err) {
                throw err;
            }

            [user] = await getUserById(decoded.userId);

            if (!user) {
                throw new Error('User does not exist');
            }

            const [session] = await getSessionBySignature(token.split('.')[2]);

            // If session doesn't exist, user is not logged in
            if (!session) {
                throw new Error('User is not logged in');
            }
        }));
    } catch (err) {
        throw new Error(err);
    }
    return user;
}