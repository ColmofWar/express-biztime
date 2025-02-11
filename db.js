/** Database setup for BizTime. */

const { Client } = require("pg");
const dotenv = require("dotenv");
let DB_URI;

dotenv.config();

if (process.env.NODE_ENV === "test") {
    DB_URI = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/biztime_test`;
    //DB_URI = "postgres:///biztime_test";
} else {
    DB_URI = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/biztime`;
}

let client = new Client({ 
    connectionString: DB_URI,
});

client.connect();
module.exports = client;