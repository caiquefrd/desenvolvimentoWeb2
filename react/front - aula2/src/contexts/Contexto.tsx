import { createContext, useEffect, useState } from "react";
import { CepProps, Props } from "../types";
import get from "../services/GetCep";

// 1o ponto: definição do contexto
export const ctx = createContext({} as Props);

export function Provedor({ children }: any) {
  const [cep, setCep] = useState("12243750");
  const [result, setResult] = useState({} as CepProps);

  useEffect( function(){
    get(cep).then( r => setResult(r) );
  });

  return (
    <ctx.Provider value={{result, setCep}}>
      {children}
    </ctx.Provider>
  );
}
