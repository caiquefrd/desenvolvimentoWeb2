import styled from "styled-components";
import { useLoteria } from "../../hooks";


export default function Resultado({ loteria }: any) {
    const { megasena, quina, timemania } = useLoteria();
    let dadosLoteria;
    switch (loteria) {
        case "megasena":
            dadosLoteria = megasena;
            break;
        case "quina":
            dadosLoteria = quina;
            break;
        case "timemania":
            dadosLoteria = timemania;
            break;
        default:
            dadosLoteria = null;
    }

    if (!dadosLoteria) {
        return null;
    }
    return (
        <SldRow>
            {dadosLoteria.dezenas.map(dezena =>
                <SldBall key={dezena}>{dezena}</SldBall>
                 )
            }
        </SldRow>
    )
}

const SldRow = styled.div`
    display: flex;
`

const SldBall = styled.div`
font-size: 18px;
font-weight: bold;
background-color: ${(props) => props.theme.bola};
color: ${(props) => props.theme.bolafonte};
border-radius: 25px;
padding: 10px;
margin: 0px 10px;
`