import * as jwt from 'jsonwebtoken';

export default async (id: any) => {
    const userId = id[0];
    try {
        return jwt.sign(
            {
            userId,
        },
            process.env.JWT_SECRET as string,
            {
                issuer: 'login-graphql',
            })
    } catch (err) {
        throw new Error(`Error while generating token: ${err}`);
    }
}