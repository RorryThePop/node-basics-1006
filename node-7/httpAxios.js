import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()

const API_KEY = process.env.API_KEY
const PORT = process.env.PORT || 3333
console.log(`API KEY is ${API_KEY}`);
console.log(`PORT is ${PORT}`);

// axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
//   console.log("fetched data: ", res.data);
// });

// axios
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     title: "random post",
//     body: "hello world",
//     userId: 1,
//   })
//   .then((res) => {
//     console.log("Our data is: ", res.data);
//   });

// axios.get("https://jsonplaceholder.typicode.com/posts", {
//   params: { userId: 1 },
//   headers: { Authorization: "Bearer my-token" },
// });
