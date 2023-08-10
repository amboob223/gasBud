const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middlewarte
app.use(cors());
app.use(express.json());

// making a post
app.post("/users", async (req, res) => {
    try {
        const { name, location, pay } = req.body;
        const newData = await pool.query(
            "INSERT INTO users(id,name,location,pay) VALUES(nextval('users_id_seq'),$1,$2,$3) RETURNING *",
            [name, location, pay]
        )
        res.json(newData.rows)

    } catch (error) {
        console.log(error.message)
    }


})

app.post("/gassers", async (req, res) => {
    try {
        const { name, location, bank } = req.body;
        const newData = await pool.query(
            "INSERT INTO gassers(id,name,location,bank) VALUES(nextval('gassers_id_seq'),$1,$2,$3) RETURNING *",
            [name, location, bank]
        )
        res.json(newData.rows)

    } catch (error) {
        console.log(error.message)
    }

})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server works")
})