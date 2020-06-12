import database from "../util/database";

export default async (signature: string) => {
    return database('sessions').where({
        signature
    });
}