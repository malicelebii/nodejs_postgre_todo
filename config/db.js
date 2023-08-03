const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.DB_UER,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
