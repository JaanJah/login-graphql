import {MutationUpdateUserArgs} from "../graphql/types";
import getUserFromToken from "../commands/getUserFromToken";
import bcrypt from "bcrypt";
import database from "../util/database";
import validateLength from "../util/validateLength";
import {validate} from "email-validator";

export default async ({ input }: MutationUpdateUserArgs, context: any) => {
    // Validate token and get user from token
    const user = await getUserFromToken(context);

    if (!user) {
        return false;
    }

    let dataToUpdate: any = {};

    if (input.username) {
        dataToUpdate['name'] = validateLength(input.username, 'Username');
    }

    if (input.email) {
        const valid = validate(input.email);
        if (!valid) {
            throw new Error('Email is invalid');
        }

        dataToUpdate['email'] = input.email;
    }

    if (input.newPassword) {
        if (!input.password) {
            throw new Error(`To change password please enter new and old password`);
        }

        // Check if old password is correct
        const match = await bcrypt.compare(input.password, user.password);
        if (!match) {
            throw new Error('Incorrect password');
        }

        // Validate password length
        if (input.newPassword.length < 8) {
            throw new Error(`New password must be at least 8 characters long.`);
        }

        dataToUpdate['password'] = await bcrypt.hash(input.newPassword, 10);
    }

    // Insert data
    const promises = Object.keys(dataToUpdate)
        .filter((field: string) => dataToUpdate[field] !== undefined)
        .map((field: string) => database('users').update(`${field}`, dataToUpdate[field]));

    await Promise.all(promises);

    return true;
}