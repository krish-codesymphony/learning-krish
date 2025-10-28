import express from "express";
import data from "./data.json" with {"type": "json"};

const app = express();
const PORT = 8081
app.use(express.json())

app.get("/users", (request, response) => {
    const pageCount = data.length / 10;
    let page = Number(request.query.page) || 1;
    if (page > pageCount) page = pageCount;
    response.send(data.slice(page * 10 - 10, page * 10));
})

app.get("/users/:userId", (request, response) => {
    const found = data.find((elm) => elm.id == request.params.userId)
    response.send(found);
})

app.listen(PORT, () => {
    console.log(`App Started at: http://localhost:${PORT}`);
});