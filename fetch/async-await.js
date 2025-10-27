function promise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("After 2000");
        }, 2000);
    });
}


async function asynced() {
    const r = await promise();
    return r
}

let a = asynced();
a.then((data) => {
    console.log(data);
});
