import styled from "styled-components";
import RGBColor from "./components/RGBColor";

function App() {
  return <WrapperSld>
    <RGBColor></RGBColor>
    <RGBColor></RGBColor>
    <RGBColor></RGBColor>
  </WrapperSld>;
}

const WrapperSld = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default App;
