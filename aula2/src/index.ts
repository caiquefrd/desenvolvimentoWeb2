import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, function () {
  console.log(`rolling port ${PORT}...`);
});

app.get("/", function (req: Request, res: Response) {
  res.send("teste");
});

app.get("/somar/:x/:y", function (req: Request, res: Response) {
  var {x,y}:any = req.params;
   x = parseInt(x);
   y = parseInt(y);
  const r = x + y;
  res.json(r);
});

/*
app.get("/:nome", function (req: Request, res: Response) {
  const nome  = req.params;
  res.send(` antes ${nome}`);
});

*/

app.use( function(req:Request, res:Response){
  res.send("Requisição desconhecida")
} );


app.use("/imposto", function(req:Request, res:Response){
  res.send("é roubo")
} );