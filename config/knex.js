module.exports = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.db_host,
        user: process.env.db_username,
        password: process.env.db_password,
        database: process.env.db_name,
        port: process.env.db_port,
        timezone: 'IST'
    },
    useNullAsDefault: true,
    acquireConnectionTimeout: 300000
})