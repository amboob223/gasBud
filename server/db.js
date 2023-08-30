const Pool = require("pg").Pool; // we are requireing a pool object from the pg library

const POOL = new Pool({
    user: "k6t3PAxmb6ckEHuY",
    host: "gas-vbrfm-postgresql.external.kinsta.app",
    port: 5432,
    database: "gas",
    password: "gas-vbrfm-postgresql.gas-vbrfm.svc.cluster.local"
    //later I will make a conncetion string with env and git ignore
}) // this is a instance of the pool object that takes an obkect 




module.exports = POOL;
