var a = "A";

function fun() {
  let a = "B";
  console.log(a);
}

// fun();

{
  const a = "c";
  //   console.log(a);
}

// console.log(a);

const myFun = function () {
  return "anonymous function.";
};

// console.log(myFun());

const arrow = () => "Hello";

// console.log(arrow); // shows type
// console.log(arrow()); // runs function

const obj = {
  firstname: "Krish",
  lastname: "Pithadiya",
  age: 21,
  gender: true, // male
  getFullName: () => obj.firstname + " " + obj.lastname,
};

// console.log(obj.getFullName());

const arr = ["this", "is", "an", "array", "is", true, 5];

// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((element) => {
// //   console.log(element.toUpperCase());
// });

// arr.push(1);
// arr.pop();
// console.log(arr);

// const n = arr.flatMap((elem) => elem.charAt(0));
// console.log(n);

// console.log(arr.slice(2, 3));
// console.log(arr.splice(2, 2));
// console.log(arr.toSpliced(2, 2));

// console.log(arr);

// console.log(arr.indexOf("is"));
// console.log(arr.lastIndexOf("is"));
// console.log(arr.includes(5));

// console.log(arr.find((x) => x == "is"));
