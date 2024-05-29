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