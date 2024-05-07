import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../components/Menu";
import styled from "styled-components";
import CMYK from "../pages/CMYK";
import RGB from "../pages/RGB";
import HSLA from "../pages/HSLA";
import { RGBProvider } from "../contexts/RGBContext";
import { CMYKProvider } from "../contexts/CMYKContext";
import { HSLAProvider } from "../contexts/HSLAContext";

export default function Rotas() {
  return (
    <PageSld>
        <RGBProvider>
        <CMYKProvider>
        <HSLAProvider>
      <BrowserRouter>
        <Menu />
        <BodySld>
          <Routes>
          <Route path="/rgb" element={<RGB />} />
          <Route path="/hsla" element={<HSLA />} />
          <Route path="/cmyk" element={<CMYK />} />
          </Routes>
        </BodySld>
      </BrowserRouter>
      </HSLAProvider>
      </CMYKProvider>
      </RGBProvider>
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
