import express from "express";
import "dotenv/config";
import bcrypt from "bcrypt";

const app = express();
const PORT = process.env.PORT || 3333;
app.use(express.json());
app.use((req, res, next) => {
    req.user = {id: 1}
    next()
})
const users = [];
app.get("/", (req, res) => {
  res.json({ message: "Homepage" });
});

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(403).json({ message: "Write correct user data" });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    users.push({ username, password: hashedPassword, id: users.length + 1 });
    res.status(201).json({
      message: "user was registered",
      username,
      password: hashedPassword,
    });
  } catch (error) {
    res.status(500).send("Error was occured registering user", error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = users.find((user) => user.username === username);
    if (!user) {
      return res.status(400).send("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send("Incorrect password");
    }
    res.send("Successfully logged in");
  } catch (error) {
    res.status(500).send("Error occured loggin in");
  }
});

app.get("/users", (req, res) => {
  res.status(201).json({ message: "All users", users });
});

app.get("/profile/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if(req.user.id !== userId) {
    return res.status(403).send('Permition denied')
  }
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.json({
    username: user.username,
    email: user.email,
    name: user.name
  })
});
app.put("/profile/:id", (req, res) => {
    const userId = parseInt(req.params.id, 10);
    if(req.user.id !== userId) {
        return res.status(403).send('Permition denied')
      }
    const user = users.find((user) => user.id === userId);
    if (!user) {
      return res.status(404).send("User not found");
    }
    const {email, name} = req.body
    if(email){
        user.email = email   
    }
    if(name) {
        user.name = name
    }
    res.send ('Profile was updated')
  });

app.listen(PORT, () => {
  console.log(`server is running on ${PORT} port`);
});
