import styled from "styled-components";
import RGBColor from "./components/RGBColor";
import HSLAColor from "./components/HSLAColor";
import CMYKColor from "./components/CMYKColor";

function App() {
  return <WrapperSld>
    <RGBColor></RGBColor>
    <HSLAColor></HSLAColor>
    <CMYKColor></CMYKColor>
  </WrapperSld>;
}

const WrapperSld = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default App;
