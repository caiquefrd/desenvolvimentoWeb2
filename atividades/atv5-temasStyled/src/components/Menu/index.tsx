import styled from "styled-components";
import ItemMenu from "../ItemMenu";

export default function Menu() {
  return (
    <Sld>
      <RightSld>
        <ItemMenu link="/timemania">Timemania</ItemMenu>
        <ItemMenu link="/megasena">Megasena</ItemMenu>
        <ItemMenu link="/quina">Quina</ItemMenu>
      </RightSld>
    </Sld>
  );
}

const Sld = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  z-index: 1000;
  border-bottom: 1px solid #aaa;
  background-color: #ffe;
  box-sizing: border-box;
`;

const RightSld = styled.div`
  display: flex;
  flex-direction: row;
`;
