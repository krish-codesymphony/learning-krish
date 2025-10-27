import e from "express";
import data from "./data.json" with {"type": "json"};

const app = e();
app.set("content-type", "application/json")

app.get("/", (request, response) => {
    response.send(data);
})

// app.get("/{id}", (request, response) => {
//     response.send(request.params);
// })

app.listen(8081, () => {
    console.log("App Started at: http://localhost:8081");
})