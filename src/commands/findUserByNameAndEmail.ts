import database from "../util/database";

export default async (name: string, email: string) => {
    return database('users').whereIn(['name', 'email'], [[name, email]]);
}