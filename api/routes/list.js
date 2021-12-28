const router = require("express").Router();
// const con = require("../index.js")


// router.post("/", async (req, res) => {
//     const listDetails = req.body;
//     const { listName } = listDetails;
//     const q = `
//     INSERT INTO
//     lists(list)
//     VALUES(
//         ${listName}
//     )`;
//     await con.query(q, (err, result) => {
//         if (err) {
//             res.status(400).json("cant post")
//             throw (err)
//         };
//         console.log(result);
//         res.status(200).json("List created");
//     })
// })

// module.exports = router