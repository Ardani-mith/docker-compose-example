const { Pool } = require('pg')
const pool = new Pool({
    host: "db",
    port: 8889,
    user: "root",
    password: "root",
    database: "db123"
})

module.exports = pool