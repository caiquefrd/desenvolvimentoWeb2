import NomeLoteria from "../../components/NomeLoteria"
import Estimativa from "../../components/Estimativa";
import React from "react"
import { megasena, quina, timemania } from "../../styles/theme"
import { ThemeProvider } from 'styled-components';
import Principal from "../../components/Principal";
import Esquerda from "../../components/Esquerda";
import Direita from "../../components/Direita";
import Resultado from "../../components/Resultado";
import { Acumulou } from "../../components/Acumulou";
import Data from "../../components/Data";

export default function Timemania() {
    return (
        <ThemeProvider theme={timemania}>
            <Principal>
                <Esquerda>
                    <NomeLoteria loteria="timemania" >TIMEMANIA</NomeLoteria>
                    <Estimativa loteria="timemania" />
                </Esquerda>
                <Direita>
                    <Resultado loteria="timemania" />
                    <Acumulou/>
                    <Data loteria="timemania"/>
                </Direita>
            </Principal>
        </ThemeProvider>
    )
}