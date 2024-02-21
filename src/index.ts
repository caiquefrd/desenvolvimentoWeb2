import express, {Request, Response} from "express";

const app = express();

const PORT = 3005;

app.listen(PORT, function () {
  console.log(`rolling... port ${PORT}`);
});


app.get("/", function(req:Request, res:Response){
    res.send("Tchau");
})

app.get("/:nome", function(req:Request, res:Response){
    const {nome} = req.params;
    res.send(`Tchau ${nome}`);
})