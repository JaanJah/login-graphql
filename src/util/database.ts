import knex from 'knex';
const knexfile = require('../../knexfile');

export default knex({
    ...knexfile[`${process.env.NODE_ENV}`],
});