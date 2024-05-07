import { BrowserRouter, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import styled from "styled-components";

export default function Rotas() {
  return (
    <PageSld>
      <BrowserRouter>
        <Menu />
        <BodySld>
          <Routes>{/* definir as rotas aqui */}</Routes>
        </BodySld>
      </BrowserRouter>
    </PageSld>
  );
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
