import NomeLoteria from "../../components/NomeLoteria"
import Estimativa from "../../components/Estimativa";
import { megasena, quina, timemania } from "../../styles/theme"
import { ThemeProvider } from 'styled-components';
import Principal from "../../components/Principal";
import Esquerda from "../../components/Esquerda";
import Direita from "../../components/Direita";
import Resultado from "../../components/Resultado";
import { Acumulou } from "../../components/Acumulou";
import Data from "../../components/Data";

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