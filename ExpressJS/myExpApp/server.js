const express = require("express");
const path = require('path');
const ejs = require("ejs");
const data = require("./data.json");

const app = express();
const PORT = 8081;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index", { data: JSON.stringify(data, null, 3), pageNo: 0 });
});

app.get("/users", (request, response) => {
    try {
        const pageCount = data.length / 10;
        console.log(request.body);

        let pageNo = request.body || 1;
        const paged = data.slice(pageNo * 10 - 10, pageNo * 10);
        response.send({
            data: paged,
            pageNo: pageNo
        });
    }
    catch (e) {
        console.log(e.message);
        response.send(e.message);
    }
});

app.get("/users/:userId", (request, response) => {
    const found = data.find((elm) => elm.id == request.params.userId);
    if (!found) {
        response.status(400).send("No User Found with This ID...!");
    } else
        response.send(found);
})

app.listen(PORT, () => {
    console.log(`App Started at: http://localhost:${PORT}`);
});