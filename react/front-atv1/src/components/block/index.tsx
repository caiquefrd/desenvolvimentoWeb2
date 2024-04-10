import styled from "styled-components";

export default function Block({ children }: any){
  return <Sld>{children}</Sld>;
}

const Sld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #ffffff;
  background-color: #000000;
  margin-bottom: 10px;
  font-size: 30px;
  padding: 10px
`;
