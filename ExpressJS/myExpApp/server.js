import e from "express";
import data from "./data.json" with {"type": "json"};

const app = e();
// app.set("content-type", "application/json")
app.use(e.json())

app.get("/users", (request, response) => {
    const pageCount = data.length / 10; // divide data to 10-10 grp
    let page = Number(request.query.page) || 1; //set the page no.
    if (page > pageCount) page = pageCount;

    // say page=1 so--
    // page*10-10 -> 1*10 -> 10 - 10 -> _0_,
    // page*10 -> 1*10 -> _10_
    // Therefore, starts with index _0_ and end at _9_(excluding the 10th)
    response.send(data.slice(page * 10 - 10, page * 10));
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