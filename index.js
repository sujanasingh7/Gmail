import express from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import connectDB from './data_base/connection.js';
dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT;
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello, World!" });
});

app.get("/heart-beat", (req, res) => {
    res.status(200).json({ message: "Heartbeat!" });
});

app.get("/greet/:name", (req, res) => {
    const name = req.params.name;
    res.status(200).json({ message: `Namaskara, ${name}!` });
});
//app.listen(port-Number, function)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});