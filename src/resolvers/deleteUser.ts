import getUserFromToken from "../commands/getUserFromToken";
import database from "../util/database";
import knex from 'knex';

export default async (context: any) => {
    // Validate token and get user from token
    const user = await getUserFromToken(context);

    if (!user) {
        return false;
    }

    return database.transaction(
        async (transaction: knex.Transaction) => {
            // Delete user sessions
            await transaction('sessions').where({
                user_id: user.id
            }).del();

            // Delete user
            await transaction('users').where({
                id: user.id
            }).del();

            return true;
        }
    )
}