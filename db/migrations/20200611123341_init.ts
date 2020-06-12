import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('users', table => {
        // Primary key
        table.increments('id').unsigned().primary();

        // User name
        table.string('name').unique().notNullable();

        // User password
        table.string('password').notNullable();

        // User email
        table.string('email').unique().notNullable();

        // Timestamps 'updated_at' and 'created_at'
        table.timestamps(true, true);
    }).then(async () => {
        await knex.schema.createTable('sessions', table => {
            // Primary key
            table.increments('id').unsigned().primary();

            // Session owner
            table.integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .notNullable()
                .onDelete('cascade');

            // Session token signature
            table.string('signature').unique().notNullable();

            // Timestamps 'updated_at' and 'created_at'
            table.timestamps(true, true);
        })
    });
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('sessions')
        .then(async () => knex.schema.dropTable('users'));
}

