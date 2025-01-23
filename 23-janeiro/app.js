import express from "express";
import { connectToDatabase } from "./db/index.js";
import "dotenv/config";
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3333;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port ", PORT);
    });
  })
  .catch((error) => {
    console.error(
      "Failed to start the server due to MongoDB connection issue",
      error
    );
  });

app.get("/", (req, res) => {
  res.send("basic route");
});
