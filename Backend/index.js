import express from "express";
import cors from 'cors'
import fs from 'fs'
const app = express();

app.use(cors());

app.get('/saved', (req, res) => {
    try {
        let data = fs.readFileSync('savedMoney.json', { encoding: "utf-8" })
        data = JSON.parse(data)
        res.status(200).send(data);
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Server Error")
    }
});
app.get('/transaction', (req, res) => {
    try {
        let data = fs.readFileSync('Transaction.json', { encoding: "utf-8" })
        data = JSON.parse(data)
        res.status(200).send(data);
        
    } catch (error) {
        res.status(500).send("Server Error")
    }
});

const PORT = process.env.PORT || 6999;
app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});