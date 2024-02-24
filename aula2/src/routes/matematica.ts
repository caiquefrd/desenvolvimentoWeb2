import { Request,Response } from "express";

function soma(req:Request, res:Response){
    const {x,y} = req.body;
    const r = x + y;
    return res.json({r});
};

function dif(req:Request, res:Response){
    const {x,y} = req.body;
    const r = x - y;
    return res.json({r});
};

export {soma,dif};