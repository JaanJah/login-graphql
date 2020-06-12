import database from "../util/database";

export default async (name: string) => {
    return database('users').where({
        name
    });
}