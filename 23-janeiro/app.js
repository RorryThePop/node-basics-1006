import express from "express";
import { connectToDatabase, getDb } from "./db/index.js";
import "dotenv/config";
import { ObjectId } from "mongodb";
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

app.post("/users", async(req, res) => {
  try {
    const db = getDb()
    const user = req.body
    if(!user.name || !user.email) {
      return res.status(400).json({error: 'Name and email are required'})
    }
    const result = await db.collection('users').insertOne(user)
    res.status(201).json({message: 'User was created', result})
  } catch(error) {
    res.status(500).json({error: 'Failed to create users'})
  }
})

app.get("/users", async(req, res) => {
  try {
    const db = getDb()
    const users = await db.collection('users').find().toArray()
    res.status(200).json(users)
  } catch(error) {
    res.status(500).json({error: 'Failed to fetch users'})
  }
})

app.get("/users/:id", async (req, res) => {
  try {
    const db = getDb()
    const userId = req.params.id
    
    if(!ObjectId.isValid(userId)) {
      return res.status(400).json({error: 'Invalid user ID'})
    }
    const user = await db.collection('users').findOne({ _id: new ObjectId(userId)})
    if(!user) {
      return res.status(404).json({error: "User not found"})
    }

    res.status(200).json(user)
  } catch(error) {
    res.status(500).json({error: 'Failed to fetch user'})
  }
})

app.put('/users/:id', async(req, res) => {
  try {
    const db = getDb()
    const userId = req.params.id
    const updateData = req.body
    if(!ObjectId.isValid(userId)) {
      return res.status(400).json({error: 'Invalid user ID'})
    }
    const result = await db.collection('users').updateOne(
      {_id: new ObjectId(userId)},
      {$set: updateData}
    )
    if(result.matchCount === 0) {
      return res.status(404).json({error: "User not found"})
    }
    res.status(200).json({message: "user updated successfully"})
  } catch(error) {
    res.status(500).json({error: 'Failed to update user'})
  }
})

app.delete('/users/:id', async(req, res) => {
  try {
    const db = getDb()
    const userId = req.params.id
    if(!ObjectId.isValid(userId)) {
      return res.status(400).json({error: 'Invalid user ID'})
    }
    const result = await db.collection('users').deleteOne({ _id: new ObjectId(userId)})
    if(result.deleteCount === 0) {
      return res.status(404).json({error: 'User not found'})
    }
    res.status(200).json("User was successfully deleted")
  } catch(error) {
    res.status(500).json({error: 'Failed to delete user'})
  }
})

