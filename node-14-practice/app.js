import express from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { verifyToken } from "./authMiddleware.js";
import { authoriseRole } from "./roleMiddleware.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3333;
const jwtSecret = process.env.JWT_secret || "secret_key";
const users = [
  {
    id: 1,
    name: "Author",
    password: "123456",
    email: "author@gmail.com",
    role: "admin",
  },
  {
    id: 2,
    name: "Petr",
    password: "654321",
    email: "petr@gmail.com",
    role: "user",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((currentUser) => currentUser.email === email);
  if (!user) {
    return res.status(401).json({ message: "User is not found" });
  }
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    jwtSecret,
    {
      expiresIn: "365d",
    }
  );

  res.status(200).json({ message: "Login successfully", token });
});

app.put("/update-profile", verifyToken, (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name or email are required" });
  }
  const user = users.find((currentUser) => currentUser.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User is not found" });
  }
  user.name = name;
  user.email = email;
  res.status(200).json({ message: "User updated successfully", user });
});

app.get("/users", verifyToken, authoriseRole("admin"), (req, res) => {
  res.status(200).json({ message: "User list: ", users });
});

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
