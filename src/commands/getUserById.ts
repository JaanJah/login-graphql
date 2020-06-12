import database from "../util/database";

export default async (id: number) => {
    return database('users').where({ id });
}