import { CepProps } from "../types";
import api from "./api";

export default async function get(cep: string): Promise<CepProps> {
  await sleep(2000); // esperar por 1 segundo
  const { data } = await api.get(`${cep}/json`);
  return data;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


// types/index.ts
export interface Props {
  result: CepProps;
}
