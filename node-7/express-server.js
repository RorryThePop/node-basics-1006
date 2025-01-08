import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
const users = [];

app.get('/', (req, res) => {
    res.send('Hello /')
})
app.get("/users", (req, res) => {
  res.json(users);
});
app.post("/users", (req, res) => {
  const { id, name, email } = req.body;
  if (!id || !name || !email) {
    return res.status(400).json({ error: "id, name и email обязательны!" });
  }
  users.push({ id, name, email });
  res.status(201).json({ message: "Пользователь успешно добавлен" });
});
app.listen(PORT, () => {
  console.log(`сервер успешно запущен на порту ${PORT}`);
});