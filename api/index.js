const express = require('express');
const mysql = require('mysql');
const listRoute = require("./routes/list")
const app = express();

app.use(express.json())

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todo"
});

con.connect(function (err) {
    if (err) throw (err);
    console.log("Connected!");
});

const initializeDBAndServer = async () => {
    try {
        app.listen(3005, () => {
            console.log("Server Running at http://localhost:3005/");
        });
    } catch (e) {
        console.log(error);
        process.exit(1);
    }
};
initializeDBAndServer();

// app.use("/api/list", listRoute)

app.post("/api/list", async (req, res) => {
    const listDetails = req.body;
    const { listName } = listDetails;
    const query = `INSERT INTO lists(list) VALUES('${listName}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json("cant post")
            throw (err)
        };
        console.log(result);
        res.status(200).json("List created");
    })

})

app.get("/api/list", (req, res) => {
    const query = `SELECT * FROM lists`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json("cant post")
            throw (err)
        };
        console.log(result);
        res.status(200).json(result);
    })
})


app.post("/api/list/new/:id", (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const query = `INSERT INTO todos(id,todo,status,item_id) 
    VALUES(${1}, '${text}', ${0}, (CASE
        WHEN 1 in (select id from (SELECT * FROM todos) AS td) THEN (SELECT item_id+1 FROM (select * from todos) AS td2 WHERE id=1 ORDER BY item_id DESC LIMIT 1)
        ELSE 1
    END ))`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json("cant post")
            throw (err)
        };
        console.log(result);
        res.status(200).json(result);
    })
})

app.get("/api/list/:id", (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    const query = `SELECT * FROM todos WHERE id=${id}`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json("cant post")
            throw (err)
        };
        console.log(result);
        res.status(200).json(result);
    })
})

app.delete("/api/list/:id", (req, res) => {
    const { id } = req.params;
    const { listId } = req.body;
    const query = `DELETE FROM todos WHERE id=${listId} AND item_id=${id}`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json("cant post")
            console.log(err)
        };
        console.log(result);
        res.status(200).json(result);
    })
})

app.put("/api/list/done/:id", (req, res) => {
    const { id } = req.params;
    const { listId } = req.body;
    const query = `UPDATE todos SET status=1 WHERE id=${listId} AND item_id=${id}`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json("cant put")
            console.log(err)
        };
        console.log(result);
        res.status(200).json(result);
    })
})

app.put("/api/list/undone/:id", (req, res) => {
    const { id } = req.params;
    const { listId } = req.body;
    const query = `UPDATE todos SET status=0 WHERE id=${listId} AND item_id=${id}`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json("cant put")
            console.log(err)
        };
        console.log(result);
        res.status(200).json(result);
    })
})