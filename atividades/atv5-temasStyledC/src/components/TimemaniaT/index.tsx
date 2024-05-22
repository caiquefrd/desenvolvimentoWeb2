import NomeLoteria from "../NomeLoteria"
import Estimativa from "../Estimativa";
import React from "react"
import { megasena, quina, timemania } from "../../styles/theme"
import { ThemeProvider } from 'styled-components';
import Principal from "../Principal";
import Esquerda from "../Esquerda";
import Direita from "../Direita";
import Resultado from "../Resultado";
import { Acumulou } from "../Acumulou";
import Data from "../Data";

export default function TimemaniaT() {
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