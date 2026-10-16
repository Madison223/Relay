import express from "express";
import cors from "cors";


const app = express();
const port = 3000;


app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running!");
});


app.post("/chat", (req, res) => {
    const message = req.body.message;
    res.send(message);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

