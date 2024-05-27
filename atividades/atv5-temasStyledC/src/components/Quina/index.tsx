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

export default function Quina() {
    return (
        <ThemeProvider theme={quina}>
            <Principal>
                <Esquerda>
                    <NomeLoteria loteria="quina" >QUINA</NomeLoteria>
                    <Estimativa loteria="quina" />
                </Esquerda>
                <Direita>
                    <Resultado loteria="quina" />
                    <Acumulou/>
                    <Data loteria="quina"/>
                </Direita>
            </Principal>
        </ThemeProvider>
    )
}