import "./index.css";
import trevo from "../../assets/trevo-timemania.png";
import { useLoteria } from "../../hooks";

export default function Timemania(){
    const { timemania } = useLoteria();
    const linha1:string[] = [], linha2:string[] = [], linha3:string[] = [], linha4:string[] = [];
    for(let i = 0; i < 5; i++){
        linha1.push(timemania.dezenas[i]);
    }
    for(let i = 5; i < 10; i++){
        linha2.push(timemania.dezenas[i]);
    }
    

    
    return (
        <div className="timemania-bloco-principal">
            <div>
                <div className="timemania-bloco-loteria">
                    <img src={trevo} alt="" />
                    <span className="timemania-nome-loteria">TIMEMANIA</span>
                </div>
                <div className="timemania-bloco-estimativa">
                    <div className="timemania-texto-estimativa"> 
                        Estimativa de prêmio do próximo concurso. 
                        Sorteio em {timemania.dataProximoConcurso}:
                    </div>
                    <div className="timemania-valor-estimativa"> 
                        {timemania.valorEstimadoProximoConcurso.toLocaleString("pt-Br",{
                            style: "currency",
                            currency: "BRL"
                        })}
                    </div>
                </div>
            </div>
            <div className="timemania-bloco-direita">
                <div className="timemania-linha-bola">
                    {
                        linha1.map( dezena =>
                                <div className="timemania-bola" key={dezena}>{dezena}</div>
                             )
                    }
                </div>
                <div className="timemania-linha-bola">
                    {
                        linha2.map( dezena =>
                                <div className="timemania-bola" key={dezena}>{dezena}</div>
                             )
                    }
                </div>
                <div className="timemania-linha-bola">
                    {
                        linha3.map( dezena =>
                                <div className="timemania-bola" key={dezena}>{dezena}</div>
                             )
                    }
                </div>
                <div className="timemania-linha-bola">
                    {
                        linha4.map( dezena =>
                                <div className="timemania-bola" key={dezena}>{dezena}</div>
                             )
                    }
                </div>
                <div className="timemania-texto-acumulou">
                    {
                        timemania.quantidadeGanhadores === 0 ? 
                        "ACUMULOU!" :
                        `${timemania.quantidadeGanhadores} GANHADORES`
                    }
                </div>
                <div className="timemania-data-concurso">
                    {
                        `Concurso ${timemania.numeroDoConcurso} - ${timemania.dataPorExtenso}`
                    }
                </div>
            </div>
        </div>
    );
}