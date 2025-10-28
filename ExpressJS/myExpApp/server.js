import e from "express";
import data from "./data.json" with {"type": "json"};

const app = e();
app.set("content-type", "application/json")

app.get("/users", (request, response) => {
    response.send(data);
})

// /user/1
app.get("/users/:userId", (request, response) => {
    // response.send(request.params);
    const found = data.find((elm) => elm.id == request.params.userId)
    // console.log(found);
    response.send(found);
})

app.listen(8081, () => {
    console.log("App Started at: http://localhost:8081");
})