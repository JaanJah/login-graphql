import {MutationSignupArgs} from "../graphql/types";
import validateLength from "../util/validateLength";
import bcrypt from 'bcrypt';
import { validate } from 'email-validator';
import findUserByNameAndEmail from "../commands/findUserByNameAndEmail";
import createUser from "../commands/createUser";

export default async ({ input }: MutationSignupArgs) => {
    // Validate input
    const username = validateLength(input.username, 'Username');
    const password = validateLength(input.password, 'Password');
    const email = validate(input.email);

    // Check if user with that email/name exists
    const match = await findUserByNameAndEmail(username, input.email);

    if (match.length) {
        throw new Error('User with this name or email already exists');
    }

    const hashedPass = await bcrypt.hash(input.password, 10);

    return await createUser(username, hashedPass, input.email);
}