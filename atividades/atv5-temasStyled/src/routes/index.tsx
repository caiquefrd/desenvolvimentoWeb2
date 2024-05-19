import { BrowserRouter, Routes, Route } from "react-router-dom"
import Timemania from "../components/Timemania"
import Megasena from "../components/Megasena"
import Quina from "../components/Quina"
import styled from "styled-components"
import Menu from "../components/Menu"

export default function Rotas() {
    return (
        <PageSld>
            <BrowserRouter>
                    <Menu/>
                    <BodySld>
                    <Routes>
                    <Route path="/timemania" element={<Timemania />}/>
                    <Route path="/megasena" element={<Megasena />}/>
                    <Route path="/quina" element={<Quina />}/>
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
    50% + 60px
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