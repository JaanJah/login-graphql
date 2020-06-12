import {MutationSignupArgs} from "../graphql/types";
import validateLength from "../util/validateLength";
import bcrypt from 'bcrypt';
import { validate } from 'email-validator';
import findUserByNameAndEmail from "../commands/findUserByNameAndEmail";
import createUser from "../commands/createUser";

export default async ({ input }: MutationSignupArgs) => {
    // Validate input
    const username = validateLength(input.username, 'Username');
    // Validate password length
    if (input.password.length < 8) {
        throw new Error(`Password must be at least 8 characters long.`);
    }

    const email = validate(input.email);

    // Check if user with that email/name exists
    const match = await findUserByNameAndEmail(username, input.email);

    // If any matches, means user already exists
    if (match.length) {
        throw new Error('User with this name or email already exists');
    }

    // Hash password
    const hashedPass = await bcrypt.hash(input.password, 10);

    // Create new user to database and return user id
    return await createUser(username, hashedPass, input.email);
}