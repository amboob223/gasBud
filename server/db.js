const Pool = require("pg").Pool; // we are requireing a pool object from the pg library

const POOL = new Pool({
    user: "playabook",
    host: "localhost",
    port: 5432,
    database: "gas",
    password: "8896"
    //later I will make a conncetion string with env and git ignore
}) // this is a instance of the pool object that takes an obkect 

module.exports = POOL;