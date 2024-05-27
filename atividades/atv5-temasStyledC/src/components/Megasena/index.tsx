import NomeLoteria from "../NomeLoteria"
import Estimativa from "../Estimativa";
import { megasena, quina, timemania } from "../../styles/theme"
import { ThemeProvider } from 'styled-components';
import Principal from "../Principal";
import Esquerda from "../Esquerda";
import Direita from "../Direita";
import Resultado from "../Resultado";
import { Acumulou } from "../Acumulou";
import Data from "../Data";

export default function Megasena() {
    return (
        <ThemeProvider theme={megasena}>
            <Principal>
                <Esquerda>
                    <NomeLoteria loteria="megasena" >MEGA-SENA</NomeLoteria>
                    <Estimativa loteria="megasena" />
                </Esquerda>
                <Direita>
                    <Resultado loteria="megasena" />
                    <Acumulou/>
                    <Data loteria="megasena"/>
                </Direita>
            </Principal>
        </ThemeProvider>
    )
}