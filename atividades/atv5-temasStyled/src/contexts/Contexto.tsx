import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from "../types";
import loteria from "../services/Loteria";

export const Contexto = createContext({} as LoteriaProps);

export function Provider({ children }: any) {
  const [megasena, setMegasena] = useState({} as Props);
  const [lotofacil, setLotofacil] = useState({} as Props);
  const [quina, setQuina] = useState({} as Props);
  const [timemania, setTimemania] = useState({} as Props);

  useEffect(() => {
    (async function () {
      const r = await loteria.get();
      setMegasena(r.megasena);
      setLotofacil(r.lotofacil);
      setQuina(r.quina);
      setTimemania(r.timemania);
      console.log('Dados');
      console.log( r )
    })();
  }, []);

  return (
    <Contexto.Provider value={{ megasena, lotofacil, quina, timemania }}>
        {children}
    </Contexto.Provider>
  );
}
