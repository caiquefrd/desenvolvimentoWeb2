import styled from "styled-components";

export default function PrincipalApp({children}:any){
    return(
        <Sld>{children}</Sld>
    )
}

const Sld = styled.div`
padding: 0px 0px;
font-family: roboto;
`