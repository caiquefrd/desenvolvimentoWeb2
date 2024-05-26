import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Menu from "../components/Menu"
import MegasenaT from "../components/MegasenaT"
import TimemaniaT from "../components/TimemaniaT"
import QuinaT from "../components/QuinaT"

export default function Rotas() {
  return (
    <PageSld>
      <BrowserRouter>
        <Menu />
        <BodySld>
          <Routes>
            <Route path="/megasenaT" element={<MegasenaT/>} />
            <Route path="/timemaniaT" element={<TimemaniaT/>} />
            <Route path="/quinaT" element={<QuinaT/>} />
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