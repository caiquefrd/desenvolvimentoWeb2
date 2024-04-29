import { createContext, useState } from "react";
import { CMYKContextProps } from "../types";

export const CMYKContext = createContext({} as CMYKContextProps);

export function CMYKProvider({ children }: any) {
  const [cyan, setCyan] = useState(0);
  const [magenta, setMagenta] = useState(0);
  const [yellow, setYellow] = useState(0);
  const [key, setKey] = useState(0);
  const color = `cmyk(${cyan}, ${magenta}, ${yellow}, ${key})`;

  return (
    <CMYKContext.Provider
      value={{
        cyan,
        magenta,
        yellow,
        key,
        setCyan,
        setMagenta,
        setYellow,
        setKey,
        color,
      }}
    >
      {children}
    </CMYKContext.Provider>
  );
}
