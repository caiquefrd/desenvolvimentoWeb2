import { Link } from "react-router-dom";
import styled from "styled-components";

interface ItemMenuProps {
  link: string;
  children: React.ReactNode;
  cor: string;
}

export default function ItemMenu({ link, children, cor }: any) {
  return (
    <Sld cor={cor}>
      <StyledLink to={link}>{children}</StyledLink>
    </Sld>
  );
}

const Sld = styled.div<{ cor: string }>`
  display: flex;
  padding: 20px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => props.cor};
  transition: background-color 0.9s ease;
  text-decoration: none;
  &:hover {
    color: grey;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;



// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { ThemeProvider } from 'styled-components';


// interface ItemMenuProps {
//   link: string;
//   children: React.ReactNode;
//   cor: string;
// }

// export default function ItemMenu({ link, children, cor}: ItemMenuProps) {
//   return (
//     <Sld>
//       <StyledLink to={link}>{children}</StyledLink>
//     </Sld>
//   );
// }

// const Sld = styled.div`
//   display: flex;
//   margin: 0px 10px 0px 15px;
//   font-size: 20px;
//   font-weight: 600;
//   cursor: pointer;
//   color: ${(props) => props.cor};
//   transition: background-color 0.3s ease;
//   text-decoration: none;
//   &:hover {
//     color: grey;
//   }
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
// `;
