import express from "express";
import { StreamClient } from "@stream-io/node-sdk";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.json());

const apiKey =  "jzjtebythm5q";
const secret =  "5q4rvambbcpysyv2x5fy34ca6vvnawjmv8hqcmsebpep7n8a8ux3q2b5v5brb85c";
const client = new StreamClient(apiKey, secret);

const newUser = {
  id: "john",
  role: "user",
  custom: { color: "red" },
  name: "John",
  image: "link/to/profile/image",
};

async function start() {
  try {
    await client.upsertUsers([newUser]);
    console.log("User upserted successfully");

    app.post("/get-token", (req, res) => {
      const { userId } = req.body;

      if (!userId) {
        return res.status(400).json({ error: "Missing userId" });
      }

      try {
        const validity = 3600; // 1 hour
        const token = client.generateUserToken({ user_id: userId, validity_in_seconds: validity });
        return res.json({ token });
      } catch (error) {
        console.log("Error generating token", error);
        
        return res.status(500).json({ error: "Failed to generate token" });
      }
    });

    const port = 3000;
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });

  } catch (error) {
    console.error("Failed to upsert user or start server", error);
  }
}

start();
