import styled from "styled-components";
import ItemMenu from "../ItemMenu";
import React, { useState } from 'react';



export default function Menu() {
  const [activeLink, setActiveLink] = useState('');
  
  const handleItemClick = (link:string) => {
    setActiveLink(link)
  }
  
  return (
    <Sld>
      <RightSld>
        <ItemMenu link="/timemania" isActive={activeLink === '/timemania'} onClick={() => handleItemClick('/timemania')} >Timemania</ItemMenu>
        <ItemMenu link="/megasena" isActive={activeLink === '/megasena'} onClick={() => handleItemClick('/megasena')} >Megasena</ItemMenu>
        <ItemMenu link="/quina" isActive={activeLink === '/quina'} onClick={() => handleItemClick('/quina')} >Quina</ItemMenu>
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
  top: 4;
  left: 10;
  width: 100%;
  height: 60px;
  z-index: 1000;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const RightSld = styled.div`
  display: flex;
  flex-direction: row;
`;
