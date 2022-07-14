const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "zpmqal051",
  host: "localhost",
  port: 5432,
  database: "webchat",
});

module.exports = pool;
