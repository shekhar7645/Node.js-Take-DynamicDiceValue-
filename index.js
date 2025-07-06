const express = require('express');
const app = express();

const port = 3000;

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//     res.render("home.ejs");
//     // res.send("This is shekhar !!!");
// });

app.get("/rolldice", (req, res) => {
    let diceValue = (Math.floor(Math.random() * 6) + 1);
    res.render("rolldice.ejs", { num: diceValue });
})

app.listen(port, () => {
    console.log(`Server is running on http:localhost:${port}`);
})