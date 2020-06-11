import database from "../util/database";

export default async (name: string, password: string, email: string) => {
    return database('users').insert({
        name,
        password,
        email,
    });
}