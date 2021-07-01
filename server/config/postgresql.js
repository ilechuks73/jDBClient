const pg = require("pg");

const connectionString = `postgresql://root:${encodeURIComponent("ilechukwu12#")}@localhost:5432/usermanagementsystem`

const client = new pg.Client({
  connectionString,
 ssl: { rejectUnauthorized: false },
});

client.connect()


client.query('SHOW DATABASES', (err, res) => {
  console.log(err, res)
  client.end()
})