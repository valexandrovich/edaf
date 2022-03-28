module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'edaf_cms'),
      user: env('DATABASE_USERNAME', 'edaf_cms_admin'),
      password: env('DATABASE_PASSWORD', '3211'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
