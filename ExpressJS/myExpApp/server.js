import express from "express";
import data from "./data.json" with {"type": "json"};

const app = express();
const PORT = 8081;
app.use(express.json());
app.use((err, req, res, next) => {
    res.status(res.statusCode).send({
        message: err.message
    });
});

app.get("/users", (request, response) => {
    const pageCount = data.length / 10;
    let pageNo = 0;
    try {
        pageNo = request.query.page;
        if (pageNo == null || pageNo == undefined || pageNo == "")
            throw new Error("Page number is not mentioned...!");
        else if (pageNo > pageCount) {
            response.status(400);
            throw new Error("Page number Out of Bound...!");
        }
        else {
            response.send(data.slice(pageNo * 10 - 10, pageNo * 10));
        }
    }
    catch (e) {
        console.log(e.message);
        response.send(data);
    }
})

app.get("/users/:userId", (request, response) => {
    const found = data.find((elm) => elm.id == request.params.userId)
    if (!found) {
        response.status(400);
        response.send("No User found with this ID...!");
    } else
        response.send(found);
})

app.listen(PORT, () => {
    console.log(`App Started at: http://localhost:${PORT}`);
});