// import axios from "../node_modules/axios";
axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        console.log(response.data);
        // document.getElementById("p").textContent = JSON.stringify(response.data, null, 3);
    })

axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: "Axios",
    body: "Axios API",
    userId: 11,
})
    .then((response) => console.log(response.data))
    .catch((e) => console.log("Error:", e))


axios.put("https://jsonplaceholder.typicode.com/posts/1", {

    title: "the Axios",
    body: "Axios is a JavaScript library for making HTTP requests or an American news websit",
    userId: 14,
})
    .then((response) => {
        console.log(response.data);
    })

axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
    title: "the Axios Updated"
})
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

axios.delete("https://jsonplaceholder.typicode.com/posts/1").then(response => console.log(response))