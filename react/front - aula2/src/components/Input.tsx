
import { useContext, useState } from "react";
import { ctx } from "../contexts/Contexto";
import styled from "styled-components";

export default function Input() {
  const [entrada,setEntrada] = useState("12328070");
  const {setCep} = useContext(ctx);

  function buscar(){
    setCep(entrada);
  }

  return <div>
    <LabelSld>CEP:</LabelSld>
    <InputSld value={entrada} onChange={e => setEntrada(e.target.value)} />
    <button onClick={buscar}>Obter</button>
  </div>;
}


const LabelSld = styled.label`
  color: red;
  font-weight: bold;
`;

const InputSld = styled.input`
  border-radius: 5px;
  padding: 5px;
`;