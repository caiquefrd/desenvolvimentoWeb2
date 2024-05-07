import { useContext } from "react";
import { Contexto } from "../contexts/contexto";
export default function useLoteria(){
    return useContext(Contexto);
}