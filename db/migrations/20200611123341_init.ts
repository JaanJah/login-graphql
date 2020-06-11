import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('users', table => {
        // Primary key
        table.increments().unsigned().primary();

        // User name
        table.string('name').unique().notNullable();

        // User password
        table.string('password').notNullable();

        // User email
        table.string('email').unique().notNullable();

        // Timestamps 'updated_at' and 'created_at'
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('users');
}

