import { useContext } from "react";
import { ctx } from "../contexts/Contexto";

export default function C() {
  // 3o ponto: uso do contexto
  const { result } = useContext(ctx);
  return (
    <div>
      {
        (result && result.bairro)?
        <>
          <div>Logradouro: {result.logradouro}</div>
          <div>Bairro: {result.bairro}</div>
        </>
        :
        <div>Carregando...</div>
      }
    </div>
  );
}