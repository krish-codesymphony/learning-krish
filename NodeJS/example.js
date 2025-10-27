var a = "A";

// normal function
function fun() {
  a = "B";
  console.log(a);
}

// fun();
// console.log(a);


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
// const nums = [1, 2, 3, 4, 1, 5, 6, 2, 4, 1];
// console.log(arr.find((x) => x == 1));

// ----------- CLOSURE -----------
// function outer() {
//   let o = "Inside Out";
//   return function () {
//     console.log(o);
//   };
// }

// let inner = outer();
// inner();

const person = {
  fullname: {
    firstname: "John",
    lastname: "",
  },
  age: 50,
  eyeColor: "blue",

};

person.age = 40;
// console.log(person);
let { age, eyeColor } = person;

// console.log(age);
// console.log(eyeColor);

// console.log(person.fullname());

// console.log(Object.getOwnPropertyNames(person));

// console.log(person.fullname);

function greet(name) {
  console.log("Hello", name);
}

function display(name, fun) {
  fun(name);
  return true
}

display("John", greet);

let x;
// try {
//   if (x == "") throw "is Empty";
//   if (isNaN(x)) throw "not a number";
//   if (x > 10) throw "too high";
//   if (x < 5) throw "too low";
// }
// catch (err) {
//   console.log(err);
// }

// const p = new Promise((res, rej) => {
//   if (x > 18) {
//     res("You can drive");
//   }
//   else if (x < 18) {
//     rej("go to school");
//   }
//   else throw new Error("Maybe it was not a number you entered...");
// })

// p
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))

function prom(text) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(`and... ${text}`);
    }, 3000);
  });
}

// async function display() {
//   console.log("wait...");
//   const p = await prom("Hello!");
//   console.log(p);
// }
// display()