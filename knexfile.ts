const connection = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_DATABASE || 'login_db',
  port: process.env.DB_PORT || '3306',
  charset: 'utf8',
};

const pool = {
  min: parseInt(process.env.DB_POOLING_MIN as string, 10) || 1,
  max: parseInt(process.env.DB_POOLING_MAX as string, 10) || 5,
};

module.exports = {
  development: {
    client: "mysql",
    connection,
    pool,
    migrations: {
      extension: 'ts',
      directory: './db/migrations',
    },
    seeds: {
      extension: 'ts',
      directory: './db/seeds',
    },
  },
};
