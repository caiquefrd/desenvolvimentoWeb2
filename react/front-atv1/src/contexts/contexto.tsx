import { createContext, useEffect, useState } from "react";
import { ColorProps, Props } from "../types";

export const Contexto = createContext({} as ColorProps);

export function Provider({ children }: any) {
    const [rgb, setRGB] = useState({} as Props);
    const [hsla, setHSLA] = useState({} as Props);
    const [cmyk, setCMYK] = useState({} as Props);

useEffect(() => {
    (async function () {
      setRGB(rgb);
      setHSLA(hsla);
      setCMYK(cmyk);
      console.log('Cores');
    })();
  }, []);

  return (
    <Contexto.Provider value={{ rgb, hsla, cmyk }}>
        {children}
    </Contexto.Provider>
  );
}
