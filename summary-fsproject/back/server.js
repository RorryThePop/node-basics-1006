import express from "express";
import "dotenv/config";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import cors from "cors";
const PORT = process.env.PORT || 3333;

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const userFilePath = path.join(__dirname, "./config/users_config.json");

app.use(express.json());
app.use(cors());
app.get("/users", (req, res) => {
  console.log(__dirname);

  console.log(userFilePath);

  fs.readFile(userFilePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error in reading file: ", err);
      return res.status(500).json({ error: "Error server" });
    }
    const users = JSON.parse(data);
    res.status(200).json(users);
  });
});

app.post("/users", (req, res) => {
  const { name, username, email } = req.body;
  if (!name || !username || !email) {
    return res.status(400).json({ error: "Error data" });
  }

  fs.readFile(userFilePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error in reading file: ", err);
      return res.status(500).json({ error: "Error server" });
    }
    try {
      const users = JSON.parse(data);
      const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
      const newUser = {
        id: newId,
        name,
        username,
        email,
      };
      users.push(newUser);
      fs.writeFile(
        userFilePath,
        JSON.stringify(users, null, 2),
        "utf8",
        (err) => {
          if (err) {
            console.error("Error writing file: ", err);
            return res.status(500).json({ error: "Error server" });
          }
          res.status(201).json(newUser);
        }
      );
    } catch (e) {
      console.error("Error: ", e);
      res.status(500).json({ error: "Error server, incorrect JSON" });
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
