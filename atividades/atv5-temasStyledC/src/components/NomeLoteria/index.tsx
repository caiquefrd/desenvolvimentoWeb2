import styled from "styled-components";
import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";

export default function NomeLoteria(){
    return (
        <Sld>
                <img src={trevo} alt="" />
                <span className="mega-nome-loteria">MEGA-SENA</span>
        </Sld>

    )

}

const Sld = styled.div`
font-size: 28px;
    font-weight: bold;
    color: #209869;
    margin-left: 10px;
`