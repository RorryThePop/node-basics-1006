import express from "express";
import "dotenv/config";
const PORT = process.env.PORT || 3000;
const app = express();
app.get("/", (req, res) => {
  res.send("hello world ! ");
});
app.get("/users", (req, res) => {
  res.send("List of users ");
});
app.get("/users/:id", (req, res) => {
  const params = req.params;
  res.send(`user id : ${params.id}`);
});
app.get("/search", (req, res) => {
  const query = req.query;
  res.send(`query param is ${query.q}`);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} port`);
});