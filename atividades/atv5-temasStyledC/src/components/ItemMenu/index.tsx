import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ItemMenu({ link, children }: any) {
  return (
    <Sld>
      <StyledLink to={link}>{children}</StyledLink>
    </Sld>
  );
}

const Sld = styled.div`
  display: flex;
  margin: 0px 10px 0px 15px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  color: blue;
  transition: background-color 0.3s ease;
  text-decoration: none;
  &:hover {
    color: grey;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
