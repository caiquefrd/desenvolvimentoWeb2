import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Menu from "../components/Menu"
import Megasena from "../pages/Megasena"
import Timemania from "../pages/Timemania"
import Quina from "../pages/Quina"

export default function Rotas() {
  return (
    <PageSld>
      <BrowserRouter>
        <Menu />
        <BodySld>
          <Routes>
            <Route path="/megasena" element={<Megasena/>} />
            <Route path="/timemania" element={<Timemania/>} />
            <Route path="/quina" element={<Quina/>} />
          </Routes>
        </BodySld>
      </BrowserRouter>
    </PageSld>
  )
}

const PageSld = styled.div`
  display: flex;
`;

const BodySld = styled.div`
  position: absolute;
  top: calc(
    50% + 5px
  );
  left: 50%;
  transform: translate(
    -50%,
    -50%
  ); 
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;