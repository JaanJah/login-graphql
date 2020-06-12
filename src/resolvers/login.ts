import {MutationLoginArgs} from "../graphql/types";
import findUserByName from "../commands/findUserByName";
import bcrypt from 'bcrypt';

export default async ({ input }: MutationLoginArgs) => {
    // Find user
    const [user] = await findUserByName(input.username);

    // If user does not exist, return error
    if (!user) {
        throw new Error('Credentials are incorrect');
    }

    // Check if password is correct
    const match = await bcrypt.compare(input.password, user.password);

    // If match is false, password is incorrect
    if (!match) {
        throw new Error('Credentials are incorrect');
    }

    // Return user id
    return user.id;
}