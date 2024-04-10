import styled from "styled-components"

export default function Tittle({children}:any){
    return <Sld>{children}</Sld>
}

const Sld = styled.h3`
    color: #FFFFFF;
    margin: 5px 10px 10px 10px;
    font-size: 50px;
    margin-bottom: 50px
`