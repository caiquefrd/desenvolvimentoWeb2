import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const PORTA = process.env.PORT;

app.listen(PORTA, () => {
    console.log(`Rodando na porta ${PORTA}`);
});